import { writable } from 'svelte/store';

function createResource() {
	const { subscribe, set, update } = writable({
		authors: [],
		metadataContributor: {
			name: "",
			npub: ""
		},
		keywords: [],
		resourceType: [],
	});

	return {
		subscribe,
		set,
		update,
		updateResource: (property, value) =>
			update((a) => {
				console.log(value)
				const {id, checked, ...valueToWrite} = value
				return { ...a, [property.id]: value };
			})
	};
}

export const resource = createResource();

export const published = writable(false)

export const chosenBots = writable([])
