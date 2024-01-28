import { fetch, FetchMethods, FetchResultTypes } from '@sapphire/fetch';
import { stripIndents } from 'common-tags';

// 1. Remplacez le champ ci dessous par votre message. Vous pouvez copier/coller le contenu depuis le fichier "resources" associé.
// Oui, dans ce fichier, ici directement !
// IMPORTANT : il faut échapper les ` avec un \, par exemple: `Horizon` devient \`Horizon\`.
// IMPORTANT : Vous n'avez pas besoin d'échapper les liens avec des < et >.
// IMPORTANT : Vous ne pouvez pas utiliser de `===MESSAGE_BREAK===` dans ce fichier. La modification se fait aux niveaux des messages Discord, non des annonces.
// Ainsi, veillez à ce que votre modification ne dépasse pas les 2000 caractères.
const content = stripIndents`
<INSÉREZ VOTRE CONTENU>
`.replace(/\[(?<text>.+?)]\((?<url>.+?)\)/gm, (_, p1, p2) => `[${p1}](<${p2}>)`);

// 2. Remplacez par l'ID du message à modifier
const messageId = "<INSÉREZ L'ID DU MESSAGE>";
// 3. Remplacez par l'URL du webhook
const webhookURL = 'https://discord.com/api/webhooks/................';

// 4. Vous pouvez maintenant lancer le script `npm run update`.
// Si la mise à jour a réussi, vous devriez voir un message "✅ 200 - OK".
// 5. Vous pouvez supprimer les modifications apportées à ce fichier avec `git checkout src/updater.js`.
// Vous n'avez rien à commit/publier sur GitHub.

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
