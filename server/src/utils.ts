//todo: Use bun fs if bun fs is available same with path. I think its already available but i need to check
import fs from 'node:fs'
import path from 'node:path';
//import redis from 'node-redis';

const phishlists = {
    "https://raw.githubusercontent.com/polkadot-js/phishing/master/all.json": "polkadot-js",
    "https://raw.githubusercontent.com/MetaMask/eth-phishing-detect/master/src/config.json": "metamask",
    "https://raw.githubusercontent.com/mitchellkrogza/Phishing.Database/refs/heads/master/phishing-links-ACTIVE.txt": "mitchellkrogzadomainstar-links",
    "https://raw.githubusercontent.com/mitchellkrogza/Phishing.Database/refs/heads/master/phishing-domains-ACTIVE.txt": "mitchellkrogzadomainstar-domains",
}

export async function cachePhishlists() {
    const cache: { [key: string]: boolean } = {};

    for (const [url, name] of Object.entries(phishlists)) {
        try {
            let response;

            switch (name) {
                case "polkadot-js":
                    response = await fetch(url);
                    break;
                case "metamask":
                    response = await fetch(url);
                    break;
                case "mitchellkrogzadomainstar-links":
                    response = await fetch(url);
                    break;
            }

            //@ts-ignore
            if (!response.ok) {
                //@ts-ignore
                throw new Error(`Failed to fetch ${name} list: ${response.statusText}`);
            }

            //@ts-ignore
            const json = await response.json();

            switch (name) {
                case "polkadot-js":
                    json.deny.forEach((entry: string | number) => cache[entry] = true);
                    break;
                case "metamask":
                    json.blacklist.forEach((entry: string | number) => cache[entry] = true);
                    break;
                case "mitchellkrogzadomainstar-links":
                    json.entries.split('\n').forEach((entry: string) => cache[entry.trim()] = true);
                    break;
            }

        } catch (error) {
            console.error(`Error processing ${name}:`, error);
        }
    }

    try {
        const cacheDir = path.join(__dirname, 'cache');
        if (!fs.existsSync(cacheDir)) {
            fs.mkdirSync(cacheDir, { recursive: true });
        }
        
        const cacheFilePath = path.join(cacheDir, 'cache.json');
        fs.writeFileSync(cacheFilePath, JSON.stringify(cache, null, 2));
        console.log('Cache file updated successfully');
    } catch (err) {
        console.error('Failed to write cache:', err);
    }
}

export function checkPhishlists(hostname: string) {
    try {            
        const cacheFilePath = path.join(__dirname, 'cache', 'cache.json');
        const cache = JSON.parse(fs.readFileSync(cacheFilePath, 'utf8'));
        return cache[hostname] || false;
    } catch (error) {
        console.error('Failed to read cache:', error);
        return false;
    }
}
