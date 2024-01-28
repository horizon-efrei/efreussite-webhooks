<h1 align="center">Ef'Réussite Webhooks</h1>
<p align="center">
  📜 Les annonces du discord Ef'Réussite !
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
  - [🆕 Ajouter un message](#-ajouter-un-message)
  - [💡 Astuces pour un message bien formatté](#-astuces-pour-un-message-bien-formatté)
  - [👁️ Prévisualiser un message](#️-prévisualiser-un-message)
  - [🚀 Déployer un message](#-déployer-un-message)
  - [✏️ Mise à jour d'un message](#️-mise-à-jour-dun-message)
  - [Crédits](#crédits)


### 🆕 Ajouter un message

1. Créez une nouvelle branche avec le titre du message.
1. Ajouter un fichier markdown dans [`./resources`](./resources). Choisissez un des sous-dossiers qui correspond à votre message.
      - `rules` pour les messages des règles (#📜-règles)
      - `P2022` pour les annonces pour la Promo 2022 (#⚪-promo-2022)
      - `P2023` pour les annonces pour la Promo 2023 (#⚪-promo-2023)
      - `P2024` pour les annonces pour la Promo 2024 (#⚪-promo-2024)
      - ...
      - `global` pour les annonces générales (#📢-annonces)
      - `poll` pour les messages de sondage (#🤔-sondages)
      - `guideEfReussite` pour les messages du guide Ef'Réussite (#📖-efréussite)
      - `guideHorizon` pour les messages du guide Horizon (#⭐️-horizon)
      - `guideEprof` pour les messages du guide eProf (#🎓-devenir-eprof)
      - `guideHorizonBot` pour les messages du guide HorizonBot (#🤖-horizon-bot)
      - `tips` pour les annonces "bon à savoir" (#📢-bon-à-savoir-❗)

    À part pour `guide` et `rules`, il vous faudra choisir un deuxième sous-dossier correspondant à l'année scolaire en cours. Par exemple, `P2024/2023-2024/`. S'il n'existe pas, n'hésitez-pas à le créer.
    Le nom du fichier en lui même doit être une courte description de l'annonce (avec ou sans espaces, accents, majuscules, caractères spéciaux...), seuls les points (`.`), et les slashs/anti-slashs (`/` et `\`) ne sont pas autorisés. Le fichier doit être un fichier markdown (extension `.md`).
    Si le dossier dans lequel vous devez mettre votre annonce contient un fichier `.gitkeep`, vous pouvez le supprimer. Les fichiers gitkeep permettent à git de garder un dossier vide (autrement git ne le prend pas en compte), mais si vous ajoutez une annonce, le dossier ne sera plus vide et le fichier `.gitkeep` ne sera plus nécessaire.
1. Faites une Pull Request de votre branche vers master, pour que tout le monde puisse la review.

Tout ceci peut se faire via l'interface GitHub. Pour ceci, les instructions sont similaires à celles données ci dessus. Voici le procédé à suivre :
1. Cliquez sur `Add file` puis `Create new file` dans le dossier de votre choix.

   Pensez bien à choisir les dossiers comme indiqué ci-dessus. Pour créer un dossier, mettez le nom du dossier suivi d'un `/`, puis le nom de votre fichier, comme un chemin de fichier. Par exemple, si GitHub vous montre `efreussite-webhooks/resources/`, vous pouvez créer un dossier `P2025/` en mettant `P2025/` dans le champs de texte, puis créer un dossier `2024-2025` en rajoutant `2024-2025/` dans le champs de texte, puis créer un fichier `Ateliers mobilité S5.md` en rajoutant `Ateliers mobilité S5.md` dans le champs de texte.
1. Nommez-le comme indiqué ci-dessus
1. Écrivez votre message en markdown. Attention, le markdown GitHub est différent du markdown Discord, il faut donc bien utiliser le markdown Discord.
1. Cliquez sur `Commit changes…`.
   1. Mettez un message de commit descriptif, vous pouvez le mettre en français. Inspirez-vous de l'historique des commits.
   1. Sélectionnez `Create a new branch for this commit and start a pull request.`. Nommez la branche avec un nom un peu plus évocateur que celui par défaut.
   1. Cliquez sur `Propose changes`.
   1. Créez la Pull Request en cliquant sur `Create pull request`. Vous pouvez modifier le titre ou ajouter une description si vous le souhaitez.

Maintenant la Pull Request créée, tout le monde peut y faire [des commentaires](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request). Ceci est pratique pour trouver des fautes d'orthographe ou suggérer des améliorations.


### 💡 Astuces pour un message bien formatté

- Chaque paragraphe séparé par `===MESSAGE_BREAK===` sera posté dans un nouveau message. Essayez d'utiliser le moins de messages possible pour éviter les rate limits. Cette fonctionnalité est cependant souvent utile pour passer la limite des 2000 caractères par message, pour pouvoir ajouter des réactions sur des paragraphes spécifiques (pour les sondages par exemple), ou pour pouvoir mettre des images en milieu de paragraphe.
- Utilisez "nous", "l'équipe" etc, pas "je" car les lecteurs ne sauront pas de qui vous parlez comme le message sera posté sous le nom "Horizon".
- Pensez à utilisez des émojis ! Regardez l'historique des messages pour vous inspirer.
- Intégrez les liens au texte, par exemple `[Rendez-vous sur Google](https://www.google.com)` qui donne "[Rendez-vous sur Google](https://www.google.com)". Évitez de mettre un lien uniquement sur des textes courts et non descriptifs ("Cliquez [ici]", "Vous pouvez le voir [là]"...).
- Utilisez des titres (`# Titre`, `## Sous-titre`, `### Sous-sous-titre`) pour structurer votre texte.
- [Mettez en forme votre texte avec du Markdown](https://support.discord.com/hc/fr/articles/210298617).
- Utilisez des images ! Pour cela, il faut :
    1. Créez un ou des **dossier(s)** dans `./resources/_images/` correspondants aux dossiers dans lesquels vous avez mis votre annonce. Exemples :
         - Pour une annonce dans `./resources/guide/Premier message.md`, il faut créer le **dossier** `./resources/_images/guide/Premier message/`
         - Pour une annonce dans `./resources/P2025/2021-2022/Ateliers mobilité S5.md`, il faut créer le **dossier** `./resources/_images/P2025/2021-2022/Ateliers mobilité S5/`
      Notez bien qu'il faut créer un **dossier** correspondant au nom de votre annonce, mais sans le `.md` à la fin.
    2. Dans `./resources/_images/<FOLDER_NAME>`, ajoutez l'image au format `.png` avec un nom tout en MAJUSCULES avec uniquement des lettres, des chiffres et des underscores (`_`). Par exemple "ORGANIGRAME.png", "LOGO_EFREUSSITE.png".
    3. Les référencer dans le fichier markdown avec `%PNG_<IMAGE_FILE_NAME>%`. (ex: `%PNG_ORGANIGRAMME%` ou `%PNG_LOGO_EFREUSSITE%`)

    Les images apparaitront toujours à la fin du message, pensez à utiliser `===MESSAGE_BREAK===` pour les mettre au milieu du message.
- Si vous insérez des liens privés, qui ne sont pas voués à être partagés en dehors des élèves de l'EFREI (ex: groupes WhatsApp), alors utilisez le format `%SECRET_<nombre de 0 à 9>%` (ex: `%SECRET_0%`), et demandez à un administrateur du repository de définir le "Repository Secret" correspondant (ici `SECRET_0`) dans les [secrets GitHub](https://github.com/horizon-efrei/efreussite-webhooks/settings/secrets/actions) avec la bonne valeur. Vous pouvez le réinitialiser après l'annonce postée.
- Pensez à signer avec la signature de l'association "*Car ensemble, on va plus loin !*" (saut de ligne) "[Horizon](https://linktr.ee/horizon.efrei)".


### 👁️ Prévisualiser un message

Avant d'envoyer un message, il est judicieux de le prévisualiser pour vérifier que le formattage est correct, les salons et les émojis utilisés fonctionnent bien, et que le message est bien compréhensible. Il n'est pas nécessaire de merger la Pull Request pour cela, au contraire il est préférable de ne pas la merger pour pouvoir régler les soucis de formattage avant de la merger.

1. Allez sur le workflow GitHub [de pré-déploiement ("Draft")](https://github.com/horizon-efrei/efreussite-webhooks/actions/workflows/draft.yml).
1. Cliquez sur le petit menu "Run workflow" à droite.
1. Choisissez la branche correspondante à votre Pull Request.
2. Dans le champ de texte, mettez le nom du fichier à déployer avec ses dossiers parents. Exemple : `guide/Premier message.md` ou `P2025/2021-2022/Ateliers mobilité S5` (le `.md` et le `resources/` sont facultatifs).
3. Confirmez en cliquant sur "Run workflow".

Observez le résultat dans #🗣️-pré-annonces. Si quelque chose est à modifier, vous pouvez modifier le fichier correspondant et recréer un commit (pas besoin de recréer de branche et de pull request, si vous faites un commit directement sur la branche de votre pull request, alors il sera ajouté à la pull request immédiatement). En revanche, si tout est bon, vous pouvez suivre [🚀 Déployer un message](#-déployer-un-message)


### 🚀 Déployer un message

Une fois qu'un document est prêt à être publié, il peut être déployé avec le workflow GitHub "Deployment".

1. Mergez la Pull Request. Vous pouvez supprimer la branche.
1. Allez sur le workflow GitHub [de déploiement](https://github.com/horizon-efrei/efreussite-webhooks/actions/workflows/deployment.yml).
1. Cliquez sur le petit menu "Run workflow" à droite.
1. La branche par défaut est `master`, vous pouvez la laisser telle quelle.
1. Dans le champs d'input, mettez le nom du fichier à déployer avec ses dossiers parents. Exemple : `guide/Premier message.md` ou `P2025/2021-2022/Ateliers mobilité S5` (le `.md` et le `resources/` sont facultatifs).
1. Confirmez en cliquant sur "Run workflow".


### ✏️ Mise à jour d'un message

Si vous vous apercevez d'une erreur dans un message, vous pouvez suivre ce procédé pour le modifier. Attention, ce procédé n'est pas simple, faites donc bien attention de ne pas faire d'erreur en prévisualisant votre message avant de le déployer.
1. Modifier le texte de l'annonce, vous pouvez le faire dans GitHub. Si la modification est mineure, vous pouvez directement modifier le fichier dans GitHub. Si la modification est plus importante, vous pouvez créer une nouvelle branche, modifier le fichier, et créer une Pull Request. :warning: La modification va se faire aux niveaux des messages Discord déjà envoyés, faites donc attention à ne pas dépasser la limite des 2000 caractères, car vous êtes limité au message que vous souhaitez modifier.
1. Assurez-vous que votre message modifié soit bien sur la branche `master`.

Une fois le fichier publié il faut mettre à jour le message sur Discord. Malheureusement, cette étape ne peut pas se faire par GitHub, il faut que vous téléchargiez le projet Git en local.

1. Installez le projet en local avec `git clone https://github.com/horizon-efrei/efreussite-webhooks && cd efreussite-webhooks && npm install`.
   1. Si la commande `npm` n'est pas reconnue, vous devez [installer Node.js](https://nodejs.org/en/download/).
   1. Assurez-vous d'avoir Node.js 20.1.0 minimum, via `node -v`. Autrement, mettez-le à jour.
1. Dans le fichier [src/updater](./src/updater.js), suivez les instructions en commentaire. Remplacez le contenu du message, l'ID du message et l'url du webhook comme indiqué.
   - Pour trouver l'ID du message, il faut activer le mode développeur sur Discord, puis faire un clic droit sur le message, puis "Copier l'identifiant".
   - Pour trouver l'url du webhook, il faut aller dans les paramètres du salon, puis "Intégrations", puis "Webhooks", puis "Copier l'url du webhook".
1. Dans votre terminal entrez `npm run update` pour lancer la mise à jour.

**Pensez à ne pas commit vos modifications.**
Une fois les instructions suivies, le message aura été modifié. Vous pouvez remettre le fichier updater tel qu'il était avant (`git checkout src/updater.js`).


### Crédits

Dérivé du système de webhooks de Sapphire : https://github.com/sapphiredev/resource-webhooks
