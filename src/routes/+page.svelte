<script>
	import { schema } from '$lib/schema';
	import { resource, chosenBots, published } from '$lib/store';
	import Multiselect from '$lib/Multiselect.svelte';
	import { submitMultipleEvents } from '$lib/nostr/submitToRelay';
	import bots from '$lib/nostr/bots.json';
	import createTextNote from '$lib/nostr/createEventTextNote';
	import { PUBLIC_RELAY } from '$env/static/public';
	import { getSelecetedBotsFromMetadata } from '$lib/utils';
	import { genNpub } from '$lib/nostr/genNip19.js';
	import Author from '$lib/Form/Author.svelte';
	import { generateShortId } from '$lib/utils.js';
	import MdContributor from '../lib/Form/MDContributor.svelte';

	export let data;
	const { properties } = schema;
	const relay = PUBLIC_RELAY;
	let events = [];

	function onSubmit() {
		// for now we just send it to the btc-lib bot
		const publishBots = getSelecetedBotsFromMetadata($resource, bots);
		chosenBots.set(publishBots);
		events = publishBots.map((bot) => createTextNote(bot, $resource));
		submitMultipleEvents(events);
		published.set(true);
	}

	function isValidHttpUrl(string) {
		let url;
		try {
			url = new URL(string);
		} catch (_) {
			return false;
		}
		return url.protocol === 'http:' || url.protocol === 'https:';
	}

	function checkResource(res) {
		if (!res['id'] && !isValidHttpUrl(res['id'])) {
			return false;
		}
		if (!res['name']) {
			return false;
		}

		return true;
	}

	$: if (Object.keys(data).length !== 0) {
		for (const [key, value] of Object.entries(data)) {
			value && resource.updateResource({ id: key }, value);
		}
	}

	async function copyToClipboard(event) {
		const text = event.target.innerText;
		await navigator.clipboard.writeText(text);
	}

	$: enablePublish = checkResource($resource);
	$: console.log($resource);
</script>

<div class="flex flex-col m-2 p-2">
	{#if !$published}
		<div>
			<form on:submit|preventDefault={onSubmit}>
				<div class="form-control">
					{#if $resource.image}
						<img class="h-48 object-contain" src={$resource.image} alt="" />
					{/if}
					<div>
						<label for="" class="label">URL zur Ressource</label>
						<input bind:value={$resource.id} type="text" class="input input-bordered" />
					</div>
					<div>
						<label class="label">
							{properties.name.title}
						</label>
						<input bind:value={$resource.name} class="input input-bordered" type="text" />
					</div>
					<div>
						<label class="label">
							{properties.description.title}
						</label>
						<textarea
							bind:value={$resource.description}
							class="textarea textarea-bordered"
							placeholder="Beschreibung"
						/>
					</div>
					<div>
						<label class="label"> Image URL </label>
						<input bind:value={$resource.image} class="input input-bordered" type="text" />
					</div>
					<div>
						<label for="">
							{properties.resourceType.title}
							<Multiselect property={properties.resourceType} />
						</label>
					</div>
					<div>
						<label for="">
							{properties.keywords.title}
							<Multiselect property={properties.keywords} />
						</label>
					</div>
					<div class="flex flex-row gap-2 items-center mt-4">
						<label>Author(s)</label>
						<label
							on:click={() =>
								($resource.authors = [
									...$resource.authors,
									{ name: '', npub: '', id: generateShortId() }
								])}
							class="btn-sm btn btn-circle">+</label
						>
					</div>
					{#each $resource.authors as author}
						<Author {author} />
					{/each}
				</div>
				<div class="mt-4">
					<label>Info about you</label>
					<MdContributor mdContributor={$resource.metadataContributor} />
				</div>
				<div class="mt-4">
					{#if !enablePublish}
						<div class="tooltip" data-tip="You must provide at least a valid URL and name">
							<button class="btn btn-primary m-2 btn-disabled block" type="submit">Publish</button>
						</div>
					{:else}
						<div>
							<button class="btn" type="submit">PUBLISH</button>
						</div>
					{/if}
				</div>
			</form>
		</div>
	{:else}
		<div class="flex flex-col">
			<h1 class="m-auto">Published!</h1>
			<p class="m-auto">Your resource was published to the following bots:</p>
			<ul>
				{#if events.length > 0}
					{#each events as event}
						<li class="ml-4 list-disc">
							<a href="https://snort.social/p/{genNpub(event.pubkey)}" target="_blank">
								{bots.find((b) => b.pk === event.pubkey)?.title || 'Bitcoin Library'}</a
							>
						</li>
					{/each}
				{/if}
			</ul>
			<p>
				Don't see any content or meaningful name when following the links? Add <code
					>nostr.btc-library.com</code
				> to your relays!
			</p>
			<label on:click={() => ($published = !$published)} for="" class="btn">Add another one!</label>
		</div>
	{/if}
</div>
