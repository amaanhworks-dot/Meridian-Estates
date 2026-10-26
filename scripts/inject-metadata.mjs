/**
 * Build-time metadata injection script.
 *
 * Reads broker.config.ts values and injects them into index.html so that
 * social crawlers (WhatsApp, Facebook, Twitter, etc.) see the correct
 * metadata in the initial HTML response.
 *
 * Usage:
 *   node scripts/inject-metadata.mjs
 *
 * Run this after changing broker.config.ts and before deploying.
 * In package.json, you can add it to the build script:
 *   "build": "node scripts/inject-metadata.mjs && vite build"
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// Read the broker config file and extract values via regex
// (We can't import TS directly in Node, so we parse the source)
const configPath = resolve(root, 'src/broker.config.ts');
const configSource = readFileSync(configPath, 'utf-8');

function extractValue(key, source) {
  const regex = new RegExp(`${key}\\s*:\\s*['"\`]([^'"\`]+)['"\`]`);
  const match = source.match(regex);
  return match ? match[1] : '';
}

function extractAccentColor(source) {
  const match = source.match(/accentColor\s*:\s*['"]([^'"]+)['"]/);
  return match ? match[1] : '#C9A227';
}

const title = extractValue('title', configSource);
const description = extractValue('description', configSource);
const ogImage = extractValue('ogImage', configSource);
const accentColor = extractAccentColor(configSource);
const brandName = extractValue('name', configSource);
const phone = extractValue('phone', configSource);

// Read index.html
const htmlPath = resolve(root, 'index.html');
let html = readFileSync(htmlPath, 'utf-8');

// Update title
html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

// Update meta description
html = html.replace(
  /<meta name="description" content="[^"]*"/,
  `<meta name="description" content="${description}"`
);

// Update theme-color
html = html.replace(
  /<meta name="theme-color" content="[^"]*"/,
  `<meta name="theme-color" content="${accentColor}"`
);

// Update Open Graph
html = html.replace(
  /<meta property="og:title" content="[^"]*"/,
  `<meta property="og:title" content="${title}"`
);
html = html.replace(
  /<meta property="og:description" content="[^"]*"/,
  `<meta property="og:description" content="${description}"`
);
html = html.replace(
  /<meta property="og:image" content="[^"]*"/,
  `<meta property="og:image" content="${ogImage}"`
);

// Update Twitter
html = html.replace(
  /<meta name="twitter:title" content="[^"]*"/,
  `<meta name="twitter:title" content="${title}"`
);
html = html.replace(
  /<meta name="twitter:description" content="[^"]*"/,
  `<meta name="twitter:description" content="${description}"`
);
html = html.replace(
  /<meta name="twitter:image" content="[^"]*"/,
  `<meta name="twitter:image" content="${ogImage}"`
);

// Update JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: brandName,
  description: description,
  areaServed: 'Rohini, Delhi',
  telephone: phone,
  url: 'https://example.com',
};

html = html.replace(
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
  `<script type="application/ld+json">\n    ${JSON.stringify(jsonLd, null, 2).replace(/\n/g, '\n    ')}\n    </script>`
);

writeFileSync(htmlPath, html, 'utf-8');
console.log('Metadata injected successfully:');
console.log(`  Title: ${title}`);
console.log(`  Description: ${description}`);
console.log(`  OG Image: ${ogImage}`);
console.log(`  Theme Color: ${accentColor}`);
