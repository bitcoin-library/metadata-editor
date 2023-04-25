import { readFileSync, existsSync } from 'fs';

const path = "./data/bots.json"

export  function loadBots() {
  if (existsSync(path) === false) {
    throw new Error(`No bots.json file found at ${path}`)
  }
  const bots = JSON.parse(readFileSync(path, "utf8"))
  return bots
}
