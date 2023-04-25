import { signEvent, getEventHash, getPublicKey } from 'nostr-tools';

export default (sk, title) => {
	const privateKey = sk;

	const metadata = {
		name: title
	}

	const event = {
		kind: 0,
		created_at: Math.floor(Date.now() / 1000),
		tags: [],
		content: `${JSON.stringify(metadata)}`,
		pubkey: getPublicKey(privateKey)
	};

	event.id = getEventHash(event);
	event.sig = signEvent(event, privateKey);

	return event;
};
