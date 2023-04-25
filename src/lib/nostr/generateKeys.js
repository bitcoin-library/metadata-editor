import { generatePrivateKey, getPublicKey } from "nostr-tools";

let privateKey = generatePrivateKey();
let publicKey = getPublicKey(privateKey);

console.log("private key = " + privateKey);
console.log("public key = " + publicKey);

