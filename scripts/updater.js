/* eslint-disable @typescript-eslint/naming-convention */
import { fetch, FetchMethods, FetchResultTypes } from '@sapphire/fetch';
import { stripIndents } from 'common-tags';

const content = stripIndents`
À remplacer par le contenu de votre nouveau message...
`.replace(/\[(?<text>.+?)]\((?<url>.+?)\)/gm, (_, p1, p2) => `[${p1}](<${p2}>)`);

const messageId = '';
const webhookURL = 'https://discord.com/api/webhooks/................';

try {
  const result = await fetch(
    `${webhookURL}/messages/${messageId}`,
    {
      method: FetchMethods.Patch,
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
    FetchResultTypes.Result,
  );

  console.log(`${result.status} - ${result.statusText}`);
} catch (error) {
  const errorBody = await error.json();
  console.error(errorBody);
  console.error(`${error.status} - ${error.statusText}`);
}
