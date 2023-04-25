import 'websocket-polyfill';
import { relayInit, SimplePool } from 'nostr-tools';
import { published } from '../store.js';

// const relays = ['wss://nostr.btc-library.com', 'wss://relay.snort.social'];
const relays = ["wss://nostr.oxtr.dev", "wss://nostr.btc-library.com"];

export async function submitToRelay(event, relayAdress) {
	return new Promise((resolve) => {
		const relay = relayInit(relayAdress);

		relay.on('connect', () => {
		console.log(`connected to ${relay.url}`);
	});
	relay.on('error', () => {
		console.log(`failed to connect to ${relay.url}`);
	});

		relay.connect();
		let pub = relay.publish(event);
		let sub = relay.sub([
			{
				ids: ['8af30833be407219d6a2d2a6a84d2cea7d3c212693090fcc2b110ca944c3a617']
			}
		])
		sub.on('event', event => {
			console.log('we got the event we wanted:', event)
		})
		sub.on('eose', () => {
			sub.unsub()
		})
		pub.on('ok', () => {
			console.log(`${relay.url} has accepted our event`);
			resolve(true);
		});
		pub.on('failed', (reason) => {
			console.log(`failed to publish to ${relay.url}: ${reason}`);
			resolve(false);
		});
	});
}

async function submitToPool(event) {
	const pool = new SimplePool();
	// subscription is necessary, otherwise snort won't accept events
	let sub = pool.sub(
		[...relays],
		[
			{
				authors: ['8af30833be407219d6a2d2a6a84d2cea7d3c212693090fcc2b110ca944c3a617']
			}
		]
	);

	let pubs = pool.publish(relays, event);
	pubs.on('ok', (relay) => {
		console.log(`${relay} has accepted our event`);
	});
	pubs.on('failed', (reason) => {
		console.log(`failed to publish: ${reason}`);
	});
}

export async function setMetadata(events) {
	for (let relayAddress of relays) {
		const relay = relayInit(relayAddress);

		relay.on('connect', () => {
			console.log(`connected to ${relay.url}`);
		});
		relay.on('error', () => {
			console.log(`failed to connect to ${relay.url}`);
		});

		await relay.connect();

		const promises = []
		events.forEach((event) => {
			promises.push(submitToRelay(event, relay))
		});
		await Promise.all(promises)
		relay.close();
		console.log('Connection to Relay closed');
	}
}

export async function submitMultipleEvents(events) {
	// const relay = relayInit(relayAdress);

	// relay.on('connect', () => {
	// 	console.log(`connected to ${relay.url}`);
	// });
	// relay.on('error', () => {
	// 	console.log(`failed to connect to ${relay.url}`);
	// });

	// await relay.connect();
	console.log("submitting multiple events")
	events.forEach((event) => {
		submitToPool(event);
		// submitToRelay(event, relays[0]);
	});
	// relay.close();
	// console.log('Connection to Relay closed');
}
