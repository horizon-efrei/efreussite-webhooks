import { fetch, FetchMethods, FetchResultTypes } from '@sapphire/fetch';
import { stripIndents } from 'common-tags';

// Remplacez le champ ci dessous par votre message. Oui, dans ce fichier, oui ce texte là directement !
const content = stripIndents`
<INSÉREZ VOTRE CONTENU>
`.replace(/\[(?<text>.+?)]\((?<url>.+?)\)/gm, (_, p1, p2) => `[${p1}](<${p2}>)`);

// Remplacez par l'ID du message à modifier
const messageId = "<INSÉREZ L'ID DU MESSAGE>";
// Remplacez par l'URL du webhook
const webhookURL = 'https://discord.com/api/webhooks/................';

// Vous pouvez maintenant lancer le script `npm run update`

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

  console.log(`✅ ${result.status} - ${result.statusText}`);
} catch (error) {
  const errorBody = await error.json();
  console.error(errorBody);
  console.error(`❌ ${error.status} - ${error.statusText}`);
}
