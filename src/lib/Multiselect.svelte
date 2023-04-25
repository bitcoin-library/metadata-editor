<script>
	import { checkSquare, chevronDown } from 'svelte-awesome/icons'; // alternative, more efficient import
	import Icon from 'svelte-awesome';
	import { resource } from '$lib/store';

	export let property;

	let toggledValues = [];

	function toggle(attribute) {
		if (toggledValues.length > 0 && toggledValues.map((v) => v.id).includes(attribute.id)) {
			toggledValues = [...toggledValues.filter((v) => v.id !== attribute.id)];
		} else {
			toggledValues = [...toggledValues, { ...attribute, checked: true }];
		}
		resource.updateResource(property, toggledValues);
	}

	function sorted(items) {
		return items.sort((a, b) => {
			const nameA = a.title.toUpperCase(); // ignore upper and lowercase
			const nameB = b.title.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			// names must be equal
			return 0;
		});
	}
</script>

<div class="form-control">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="dropdown">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label class="btn m-1" tabindex="0">
			<span class="px-4">{property.title}</span>
			<div class="px-2" class:invisible={!toggledValues.length}>
				<Icon style="color: orange" data={checkSquare} />
			</div>
			<Icon data={chevronDown} />
		</label>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->

		<ul
			tabindex="0"
			class="dropdown-content p-2 rounded-box shadow bg-white max-h-96 w-64 overflow-auto"
		>
			{#each sorted(property.items.enum) as attribute}
				<li>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label
						class="
						label 
						cursor-pointer 
						hover:bg-orange-600"
						on:click={toggle(attribute)}
					>
						<span class="label-text px-2 text-black">{attribute.title}</span>
						{#if toggledValues.map((v) => v.id).includes(attribute.id)}
							<Icon style="color:orange" data={checkSquare} />
						{:else}
							<Icon style="color:grey" data={checkSquare} />
						{/if}
					</label>
				</li>
			{/each}
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label
				class="btn btn-warning"
				on:click={() => resource.updateResource(property, [])}
				on:click={() => (toggledValues = [])}>Reset</label
			>
		</ul>
	</div>
</div>
