export const schema = {
	properties: {
		name: {
			id: 'name',
			title: 'Name',
			type: 'string'
		},
		description: {
			id: 'description',
			title: 'Beschreibung',
			type: 'string'
		},
		resourceType: {
			id: 'resourceType',
			title: 'Art der Ressource',
			type: 'array',
			items: {
				type: 'object',
				enum: [
					{
						id: 0,
						checked: false,
						title: 'Artikel',
						uri: 'https://w3id.org/bitcoin-library/bots/f631971e-ee83-4c95-9fcf-b1c1639bb4f6'
					},
					{
						id: 1,
						checked: false,
						title: 'Buch',
						uri: 'https://w3id.org/bitcoin-library/bots/818a0f8b-ef88-4630-a0e3-4150667b2ebc'
					},
					{
						id: 2,
						checked: false,
						title: 'Podcast',
						uri: 'https://w3id.org/bitcoin-library/bots/16975a1d-f6e2-48fe-af90-d89635494a6e'
					},
					{
						id: 3,
						checked: false,
						title: 'Tutorial',
						uri: 'https://w3id.org/bitcoin-library/bots/153ac02f-9423-4b2a-94e2-19ba25e5ab4e'
					},
					{
						id: 4,
						checked: false,
						title: 'Video',
						uri: 'https://w3id.org/bitcoin-library/bots/b6d8ffc6-b857-442f-bf4c-036b53ac6182'
					}
				]
			}
		},
		keywords: {
			id: 'keywords',
			title: 'Keywords',
			type: 'array',
			items: {
				type: 'object',
				enum: [
					{
						id: 0,
						title: 'News',
						uri: 'https://w3id.org/bitcoin-library/bots/dfe92574-0500-44f0-84d7-7212badcdc07'
					},
					{
						id: 1,
						title: 'Allgemein Bitcoin',
						uri: 'https://w3id.org/bitcoin-library/bots/4e42c22d-0b45-4d8a-bb49-6d95d56e2558'
					},
					{
						id: 2,
						title: 'Geld',
						uri: 'https://w3id.org/bitcoin-library/bots/48f6aa45-6a14-476f-8dc4-ad8f012557ea'
					},
					{
						id: 3,
						title: 'Interview',
						uri: 'https://w3id.org/bitcoin-library/bots/c6ecda65-17d5-4c90-8e50-bcdd2df418c7'
					},
					{
						id: 4,
						title: 'Ökonomie',
						uri: 'https://w3id.org/bitcoin-library/bots/4331f177-790b-432a-b44d-1e8c985caf6c'
					},
					{
						id: 6,
						title: 'Philosophie',
						uri: 'https://w3id.org/bitcoin-library/bots/d41061ee-8e61-4c75-8a69-f2a2616920c5'
					},
					{
						id: 8,
						title: 'Technik',
						uri: 'https://w3id.org/bitcoin-library/bots/16461ce4-3435-4e25-a96b-193662914f18'
					},
					{
						id: 9,
						title: 'Eigentum',
						uri: 'https://w3id.org/bitcoin-library/bots/1fbb4299-2358-4278-8b40-5daa11f99fd1'
					},
					{
						id: 10,
						title: 'Einsteiger',
						uri: 'https://w3id.org/bitcoin-library/bots/1fab6d8b-5356-4ff6-bb4e-a820232666c5'
					},
					{
						id: 11,
						title: 'Fortgeschrittene',
						uri: 'https://w3id.org/bitcoin-library/bots/e4e0cdbe-0c46-4abb-a923-789b0e01fe80'
					},
					{
						id: 12,
						title: 'Inflation',
						uri: 'https://w3id.org/bitcoin-library/bots/79749abf-3759-4087-aeb3-9e1de6fce10d'
					},
					{
						id: 13,
						title: 'Steuern',
						uri: 'https://w3id.org/bitcoin-library/bots/da19b8a0-5254-4f4e-9ded-577e701f09f6'
					},
					{
						id: 14,
						title: 'Hyperbitcoinization',
						uri: 'https://w3id.org/bitcoin-library/bots/4b1758ed-44f2-466b-9618-c091fef15bc5'
					},
					{
						id: 15,
						title: 'Gold',
						uri: 'https://w3id.org/bitcoin-library/bots/6a9e4625-9e46-459a-b792-a9325c4e1b8b'
					},
					{
						id: 16,
						title: 'OrangePill',
						uri: 'https://w3id.org/bitcoin-library/bots/4c698e5b-1beb-4557-8fdb-d659b9492e07'
					},
					{
						id: 17,
						title: 'Zusammenstellung',
						uri: 'https://w3id.org/bitcoin-library/bots/01068810-0e22-4244-a411-71f418e9757a'
					},
					{
						id: 18,
						title: 'Mining',
						uri: 'https://w3id.org/bitcoin-library/bots/3b8d08d5-f72b-4a3f-9e02-5b4c5dbdc5f1'
					},
					{
						id: 19,
						title: 'Eid der Maschinen',
						uri: 'https://w3id.org/bitcoin-library/bots/ba4a4b0e-328e-480b-b636-1e48be1706d5'
					},
					{
						id: 21,
						title: 'Etatismus',
						uri: 'https://w3id.org/bitcoin-library/bots/a28ae4a5-f3af-4a16-a162-4e86cfb74951'
					},
					{
						id: 22,
						title: 'Kryptografie',
						uri: 'https://w3id.org/bitcoin-library/bots/c2490ef0-6ed2-4b4d-a1b3-16f305a4d5b3'
					},
					{
						id: 23,
						title: 'kostenlos',
						uri: 'https://w3id.org/bitcoin-library/bots/520593e2-fa3b-497a-98a7-ad764acc53fe'
					},
					{
						id: 24,
						title: 'V4V',
						uri: 'https://w3id.org/bitcoin-library/bots/ca9b64e9-5add-4464-a866-86655103327c'
					},
					{
						id: 25,
						title: 'Anlage',
						uri: 'https://w3id.org/bitcoin-library/bots/28f25009-5941-4aab-9d61-17193c075d9f'
					},
					{
						id: 26,
						title: 'Umwelt',
						uri: 'https://w3id.org/bitcoin-library/bots/cc5915d6-c848-420d-9029-c4fe4973fe74'
					},
					{
						id: 27,
						title: 'Attacken',
						uri: 'https://w3id.org/bitcoin-library/bots/71809a67-eef7-4246-bf72-50b776ca3192'
					},
					{
						id: 28,
						title: 'Idee',
						uri: 'https://w3id.org/bitcoin-library/bots/a5f03419-2d62-4cdb-9ae2-1d15cbf99bbb'
					},
					{
						id: 29,
						title: 'Meme',
						uri: 'https://w3id.org/bitcoin-library/bots/822421ac-8b18-42c6-8be2-6cce577ca8d9'
					},
					{
						id: 30,
						title: 'Schulung',
						uri: 'https://w3id.org/bitcoin-library/bots/4b898491-cfb0-41c2-a438-0778228600a0'
					},
					{
						id: 31,
						title: 'Africa',
						uri: 'https://w3id.org/bitcoin-library/bots/cc71720d-dfeb-4d72-a028-910fd1ce95a9'
					},
					{
						id: 32,
						title: 'Kinder',
						uri: 'https://w3id.org/bitcoin-library/bots/81536f7d-3193-4840-925f-bbc8b26d43c0'
					},
					{
						id: 33,
						title: 'Whitepaper',
						uri: 'https://w3id.org/bitcoin-library/bots/96f55dc5-31ed-4bcc-8c1c-ed05757acf30'
					}
				]
			}
		},
		author: {
			id: 'author',
			title: 'Autor',
			type: 'object',
			properties: [
				{
					name: {
						id: 'name',
						title: 'Name',
						type: 'string'
					},
					npub: {
						id: 'npub',
						title: 'NPUB',
						type: 'string'
					}
				}
			]
		},
		contributor: {
			id: 'contributor',
			title: 'Contributor',
			type: 'object',
			properties: [
				{
					name: {
						id: 'name',
						title: 'Name',
						type: 'string'
					},
					npub: {
						id: 'npub',
						title: 'NPUB',
						type: 'string'
					}
				}
			]
		}
	}
};
