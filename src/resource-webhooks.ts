/* eslint-disable no-await-in-loop */
import { readdir, readFile } from 'node:fs/promises';
import { setTimeout as wait } from 'node:timers/promises';
import { URL } from 'node:url';
import { WebhookClient } from 'discord.js';

/* Regexes, constants, and utility functions */
const fileNameRegex = /^(?<prefix>ANNOUNCEMENT_(?:ALL|POLL|STAFF|GOODTOKNOW|2026|2025|2024|2023|2922)+)_(?<name>.+)$/;

const imagesBaseUrl = 'https://raw.githubusercontent.com/horizon-efrei/efreussite-webhooks/master/resources/images';
const replacePatterns: Record<string, string> = {} as const;
const resourcesDir = new URL('../resources/', import.meta.url);

const isDraft = (announcementName: string): boolean => announcementName.toLowerCase().startsWith('draft');
const draftToAnnouncement = (announcementName: string): string => announcementName.replace(/^DRAFT_/, 'ANNOUNCEMENT_');
const fileNameToVariable = (announcementName: string): string => fileNameRegex.exec(announcementName)!.groups!.prefix;

/* Start processing */
const deployServerId = process.env.DEPLOY_SERVER_ID;
if (!deployServerId)
  throw new Error('[MISSING] No deploy server id provided');

const deployAnnouncementString = process.env.DEPLOY_ANNOUNCEMENTS;
const announcements = deployAnnouncementString
  ?.trim()
  .split(/\s*,\s*/gm)
  .map(announcementName => announcementName.toUpperCase().replace(/-/gm, '_'));
if (!announcements)
  throw new Error('[MISSING] No deploy announcements provided');

const files = await readdir(resourcesDir);

const missingHooks = announcements.filter(announcementName =>
  (isDraft(announcementName) ? !process.env.DRAFT : !process.env[fileNameToVariable(announcementName)]));

if (missingHooks.length > 0)
  throw new Error(`[MISSING] No webhook environment variable(s) for ${missingHooks.join(', ')}`);

const missingFiles = announcements.filter((announcementName) => {
  if (isDraft(announcementName))
    return !files.includes(`${draftToAnnouncement(announcementName)}.md`);
  return !files.includes(`${announcementName}.md`);
});

if (missingFiles.length > 0)
  throw new Error(`[MISSING] No file for ${missingFiles.map(c => `${c}.md`).join(', ')}`);


for (const announcement of announcements) {
  const originalName = draftToAnnouncement(announcement);
  if (!fileNameRegex.test(originalName)) {
    console.error('[SKIPPING] Invalid announcement name:', originalName);
    continue;
  }

  console.log(`[STARTING] Deploying ${announcement}`);

  const webhookToUse = isDraft(announcement) ? 'DRAFT' : fileNameToVariable(announcement);

  const [hookId, hookToken] = process.env[webhookToUse]!.split('/').slice(-2);
  const hook = new WebhookClient({ id: hookId, token: hookToken });

  const fileName = `${originalName}.md`;

  // Read the file and replace some content in it to make it Discord message ready
  let raw = await readFile(new URL(fileName, resourcesDir), { encoding: 'utf8' });

  raw = raw.replace(/\[(?<text>.+?)]\((?<url>.+?)\)/gm, (_: unknown, p1: string, p2: string): string => `[${p1}](<${p2}>)`);
  raw = Object.entries(replacePatterns)
    .reduce((acc, [regexp, replaced]) => acc.replace(new RegExp(regexp, 'gm'), replaced), raw);
  raw = raw.replace(/%PNG_(?<name>[A-Z_]+)%/gm, `${imagesBaseUrl}/${announcement}/$1.png`);

  const parts = raw.split('\n\n\n');

  for (const part of parts) {
    await hook.send({
      content: part,
      avatarURL: process.env.WEBHOOK_AVATAR,
      username: process.env.WEBHOOK_NAME,
    });

    await wait(1000);
  }

  hook.destroy();
}
