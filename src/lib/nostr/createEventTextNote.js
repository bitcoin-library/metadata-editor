import { signEvent, getEventHash, getPublicKey } from 'nostr-tools';
import { genNpub } from './genNip19';

export default (bot, resource) => {
	try {
		let privateKey = bot.sk;
		const content = `Hello! A new resource with title "${resource.name}" got added to the library!
    ${resource.image}\n${resource.description}.\nSent from nostr:${bot.npub} (${bot.title}).
    `;
    // TODO delete checked and id from resource
		const tags = [
			['p', bot.pk],
			[
				'metadata',
				JSON.stringify({
					id: resource.id,
					name: resource.name,
					description: resource.description,
					image: resource.image,
					resourceType: resource.resourceType,
					keywords: resource.keywords,
					authors: resource.authors,
					metadataContributor: resource.metadataContributor,
        })
        ]
      ];
    console.log(tags)
		let event = {
			kind: 1,
			created_at: Math.floor(Date.now() / 1000),
			tags: [...tags],
			content: content,
			pubkey: getPublicKey(privateKey)
		};

		event.id = getEventHash(event);
		event.sig = signEvent(event, privateKey);

		return event;
	} catch (error) {
		console.error(error);
	}
};
