import { readFile } from 'node:fs/promises';
import { setTimeout as wait } from 'node:timers/promises';
import { URL } from 'node:url';
import { WebhookClient } from 'discord.js';

const imagesBaseUrl = 'https://raw.githubusercontent.com/horizon-efrei/efreussite-webhooks/master/resources/_images';

const isDraft = process.env.IS_DRAFT === 'true';
const draftWebhook = process.env.WEBHOOKURL_DRAFT;
const folderToWebhook = {
  global: process.env.WEBHOOKURL_GLOBAL,
  guide: process.env.WEBHOOKURL_GUIDE,
  P2022: process.env.WEBHOOKURL_P2022,
  P2023: process.env.WEBHOOKURL_P2023,
  P2024: process.env.WEBHOOKURL_P2024,
  P2025: process.env.WEBHOOKURL_P2025,
  P2026: process.env.WEBHOOKURL_P2026,
  P2027: process.env.WEBHOOKURL_P2027,
  poll: process.env.WEBHOOKURL_POLL,
  rules: process.env.WEBHOOKURL_RULES,
  tips: process.env.WEBHOOKURL_TIPS,
};

console.log('ℹ️ Starting deployment.');

console.log('ℹ️ Checking variables...');

// Check if the provided DEPLOY_SERVER_ID is provided
const deployServerId = process.env.DEPLOY_SERVER_ID;
if (!deployServerId)
  throw new Error('❌ [MISSING] No deploy server id provided');

// Check if the draft webhook is provided, if it's a draft
if (isDraft && !draftWebhook)
  throw new Error('❌ [MISSING] No webhook environment variable for "draft"');

// Check that an announcement has been provided
const announcement = process.env.ANNOUNCEMENT_NAME?.trim();
if (!announcement)
  throw new Error('❌ [MISSING] No deploy announcements provided');

const announcementPath = announcement
  .replace(/\.md$/, '')
  .replace(/^(?:\.\/)*resources(?:\/)?/, '');

// Check that the given announcement is a valid file path
const category = announcementPath.split('/').shift();
if (!category || !(category in folderToWebhook))
  throw new Error('❌ [INVALID] Invalid path');

// Check that the given announcement has a webhook associated to it
const deploymentWebhook = folderToWebhook[category];
if (!isDraft && !deploymentWebhook)
  throw new Error(`❌ [MISSING] No webhook environment variable for provided category "${category}"`);

// Read the file & replace the placeholders
console.log('ℹ️ Reading file...');
const filePath = new URL(`../resources/${announcementPath}.md`, import.meta.url);
let file = '';
try {
  file = await readFile(filePath, { encoding: 'utf8' });
} catch {
  throw new Error('❌ [INVALID] Invalid file path');
}

file = file
  .replace(/\[(?<text>.+?)]\((?<url>.+?)\)/gm, (_, text, url) => `[${text}](<${url}>)`)
  .replace(/%PNG_(?<name>[\dA-Z_]+)%/gm, encodeURI(`${imagesBaseUrl}/${announcementPath}/$1.png`))
  .replace(/%GIF_(?<name>[\dA-Z_]+)%/gm, encodeURI(`${imagesBaseUrl}/${announcementPath}/$1.gif`));

const parts = file.split('===MESSAGE_BREAK===');

if (isDraft) {
  console.log('####################################');
  console.log('#                                  #');
  console.log('#            DRAFT MODE            #');
  console.log('#                                  #');
  console.log('####################################');
} else {
  console.log('####################################');
  console.log('#                                  #');
  console.log('#         RUNNING FOR REAL         #');
  console.log('#                                  #');
  console.log('####################################');

  console.log('⚠️');
  console.log('⚠️ YOU HAVE 3 SECONDS TO ABORT THE PROCESS...');
  console.log('⚠️ CLICK "CANCEL WORKFLOW TO ABORT" ON THE TOP RIGHT');
  console.log('⚠️');

  await wait(3000);
}

// Create the webhook client & send the messages
console.log(`⚙️ Deploying ${announcement}...`);

const webhookToUse = isDraft ? draftWebhook : deploymentWebhook;
const [hookId, hookToken] = webhookToUse.split('/').slice(-2);
const hook = new WebhookClient({ id: hookId, token: hookToken });

for (const [i, part] of parts.entries()) {
  /* eslint-disable no-await-in-loop */
  await hook.send({
    content: part,
    avatarURL: process.env.WEBHOOK_AVATAR,
    username: process.env.WEBHOOK_NAME,
  });

  console.log(`⚙️ ${i + 1}/${parts.length} done.`);

  if (i < parts.length - 1) {
    console.log('Pausing for 1 second...');
    await wait(1000);
  }
  /* eslint-enable no-await-in-loop */
}

console.log('✅ Deployment complete!');
hook.destroy();
console.log('ℹ️ Webhook destroyed');
