<h1 align="center">Ef'réussite Webhooks</h1>
<p align="center">
  📜 Les annonces du discord Ef'Réussite !
</p>

### Ajouter une annonce

1. Créer une nouvelle branche avec le nom de l'annonce
1. Ajouter un fichier markdown dans [`./resources`](/resources). Le nom du fichier doit commencer par :
    - `ANNOUNCEMENT_ALL_` : pour les annonces générales
    - `ANNOUNCEMENT_<year>_` : pour les annonces de promo (ex: `ANNOUNCEMENT_2025_`, `ANNOUNCEMENT_2026_`...)
    - `ANNOUNCEMENT_STAFF_` : pour les annonces pour le staff
    - `ANNOUNCEMENT_GOODTOKNOW_` : pour les annonces "Bon à savoir"
    - `ANNOUNCEMENT_POLL_` : pour les sondages

    La suite du nom du fichier doit être une courte description de l'annonce, en majuscules.
1. Chaque paragraphe (séparés par deux nouvelles lignes) sera posté dans un nouveau message. Essayez d'utiliser le moins de messages possible (la limite est de 2000 caractères par message) pour éviter les rate limits.
1. Pour ajouter des images, il faut
    1. Créez un **dossier** dans `./resources/images` au nom du fichier markdown contenant l'annonce, en respectant la casse.
    1. Ajouter l'image au format `.png` avec un nom tout en MAJUSCULES, dans `./resources/images/<FOLDER_NAME>`.
    1. Les référencer dans le fichier markdown avec `%PNG_<IMAGE_FILE_NAME>%`.
1. Faites une Pull Request de votre branche vers master, pour que tout le monde puisse la review

### Déployer des annonces

Une fois qu'un document est prêt à être publié, il peut être déployé avec le workflow GitHub.

1. Allez sur [le workflow GitHub](https://github.com/horizon-efrei/efreussite-webhooks/actions/workflows/deployment.yml)
1. Cliquez sur "Run workflow"
1. Dans le champs d'input, mettez le nom des fichiers à déployer, séparés par des virgules
1. Confirmez en cliquant sur "Run workflow"

#### Tester le déploiement d'une annonce

Il est possible de déployer une annonce dans le salon [`#pré-annonces`](https://discord.com/channels/694220883815956580/823144431368536074) afin de la vérifier avec de l'envoyer pour de bon.
Pour cela, il suffit de remplacer la partie `ANNOUNCEMENT` du nom du fichier par `DRAFT`.
Par exemple, plutôt que `ANNOUNCEMENT_2025_DESCRIPTION`, vous pouvez utiliser `DRAFT_2025_DESCRIPTION` au niveau de l'étape 3.

#### Mise à jour d'un message

La mise à jour d'un message se fait manuellement.
Pour cela, dans le fichier [updater](./scripts/updater.js), remplacez la ligne 6 par le contenu de votre annonce.
Remplacez également les variables messageId et webhookURL par l'ID du message souhaité et l'URL du webhook du salon associé.

Enfin, dans votre terminal entrez `node ./scripts/updater.js` pour lancer la mise à jour.
Pensez à ne pas commit vos modifications

### Crédits

Dérivé du système de webhooks de Sapphire : https://github.com/sapphiredev/resource-webhooks
