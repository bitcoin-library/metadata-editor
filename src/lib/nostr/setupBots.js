import { generatePrivateKey, getPublicKey, getEventHash, signEvent } from 'nostr-tools';
import { schema } from '../schema.js';
import createEventMetadata from './createEventMetadata.js';
import fs from 'fs';
import { submitMultipleEvents, setMetadata } from './submitToRelay.js';
import { loadBots } from './loadBots.js';
import * as dotenv from 'dotenv'
import crypto from "crypto"
import { genNpub } from './genNip19.js';

dotenv.config()

const relay = process.env.PUBLIC_RELAY

const conceptsForBots = [
	...schema.properties.resourceType.items.enum,
	...schema.properties.keywords.items.enum
];

const buildBotData = () => {
	const bots = [];
	conceptsForBots.forEach((bot) => {
		const id = bot.uri
		const sk = generatePrivateKey();
		const pk = getPublicKey(sk);
		const npub = genNpub(pk);
		bot = {title: bot.title, sk, pk, id, npub };
		bots.push(bot);
	});

	const sk = generatePrivateKey();
	const pk = getPublicKey(sk);

	const libraryBot = {
		title: 'Bitcoin Library',
		// sk: sk,
		// pk: pk
		sk: "5695a5ab2e720cdff2dd84c87ab909e5ade4da76472d959f62eacaea439f9144",
    pK: "8af30833be407219d6a2d2a6a84d2cea7d3c212693090fcc2b110ca944c3a617",
		id: "https://w3id.org/bitcoin-library/bots/b87cdc01-4cd8-4eb4-8ce5-ff7279144242",
		nbpup: genNpub(pk),
	};
	bots.push(libraryBot);
	saveBots(bots);
	return bots;
};

const saveBots = (bots) => {
	fs.writeFile('./data/bots.json', JSON.stringify(bots), 'utf8', function (err) {
		if (err) {
			console.log('An error occured while writing JSON Object to File.');
			return console.log(err);
		}

		console.log('JSON file has been saved.');
	});
};

const setBotMetadata = (bots) => {
	const botMetadata = bots.map((bot) => {
		const event = createEventMetadata(bot["sk"], bot["title"]);
		event.id = getEventHash(event);
		event.sig = signEvent(event, bot["sk"]);
		return event
	});
	return botMetadata
};

function getBots() {
	try {
		const bots = loadBots()
		return bots
	} catch (error) {
		console.log("No bots.json file found, generating new bots...")
		const bots = buildBotData();
		return bots
	}
}

function main() {
	const bots = getBots()
	const botMetadataEvents = setBotMetadata(bots)
	setMetadata(botMetadataEvents)
}

main()