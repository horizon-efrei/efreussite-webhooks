<h1 align="center">Ef'Réussite Webhooks</h1>
<p align="center">
  📜 Les annonces du discord Ef'Réussite !
</p>

### 🆕 Ajouter un message

1. Créez une nouvelle branche avec le titre du message.
1. Ajouter un fichier markdown dans [`./resources`](./resources). Choisissez un des sous-dossiers qui correspond à votre message.
      - `guide` pour les messages du guide (#📍-guide-et-liens)
      - `rules` pour les messages des règles (#📜-règles)
      - `P2022` pour les annonces pour la Promo 2022 (#⚪-promo-2022)
      - `P2023` pour les annonces pour la Promo 2023 (#🟣-promo-2023)
      - `P2024` pour les annonces pour la Promo 2024 (#🟤-promo-2024)
      - `P2025` pour les annonces pour la Promo 2025 (#🟠-promo-2025)
      - `P2026` pour les annonces pour la Promo 2026 (#🔵-promo-2026)
      - `P2027` pour les annonces pour la Promo 2027 (#🟢-promo-2027)
      - `P2028` pour les annonces pour la Promo 2028 (#🟢-promo-2028)
      - `global` pour les annonces générales (#📢-annonces)
      - `poll` pour les messages de sondage (#🤔-sondages)
      - `tips` pour les annonces "bon à savoir" (#📢-bon-à-savoir-❗)

    À part pour `guide` et `rules`, il vous faudra choisir un deuxième sous-dossier correspondant à l'année scolaire en cours. Par exemple, `P2024/2023-2024/`.
    Le nom du fichier en lui même doit être une courte description de l'annonce (avec ou sans espaces, accents, majuscules, caractères spéciaux...), seuls les points (`.`), et les slashs/anti-slashs (`/` et `\`) ne sont pas autorisés.

    Si le dossier dans lequel vous devez mettre votre annonce contient un fichier `.gitkeep`, vous pouvez le supprimer.
2. Faites une Pull Request de votre branche vers master, pour que tout le monde puisse la review.


### 💡 Astuces pour un message bien formatté

- Chaque paragraphe séparé par `===MESSAGE_BREAK===` sera posté dans un nouveau message. Essayez d'utiliser le moins de messages possible (la limite est de 2000 caractères par message) pour éviter les rate limits.
- Utilisez "nous", "l'équipe" etc, pas "je" car les lecteurs ne sauront pas de qui vous parlez comme le message sera posté sous le nom "Horizon".
- Pensez à utilisez des émojis !
- Intégrez les liens au texte, par exemple `[Rendez-vous sur Google](https://www.google.com)` qui donne "[Rendez-vous sur Google](https://www.google.com)". Évitez de mettre un lien uniquement sur des textes cours et non descriptifs ("Cliquez [ici]", "Vous pouvez le voir [là]"...).
- Utilisez des titres (`# Titre`, `## Sous-titre`, `### Sous-sous-titre`) pour structurer votre texte.
- Utilisez du **gras** (`**gras**`), de l'italique (`*italique*`) et du souligné (`__souligné__`) pour mettre en forme votre texte.
- Utilisez des images ! Pour cela, il faut :
    1. Créez un ou des **dossier(s)** dans `./resources/_images/` correspondants aux dossiers dans lesquels vous avez mis votre annonce. Exemples :
         - Pour une annonce dans `./resources/guide/Premier message.md`, il faut créer le dossier `./resources/_images/guide/Premier message/`
         - Pour une annonce dans `./resources/P2025/2021-2022/Ateliers mobilité S5.md`, il faut créer le dossier `./resources/_images/P2025/2021-2022/Ateliers mobilité S5/`
      Notez bien qu'il faut créer un **dossier** correspondant au nom de votre annonce, mais sans le `.md` à la fin.
    2. Dans `./resources/_images/<FOLDER_NAME>`, ajoutez l'image au format `.png` avec un nom tout en MAJUSCULES avec uniquement des lettres, des chiffres et des underscores (`_`).
    3. Les référencer dans le fichier markdown avec `%PNG_<IMAGE_FILE_NAME>%`.

    Les images apparaitront toujours à la fin du message, sauf si vous utilisez `===MESSAGE_BREAK===`.
- Si vous insérez des liens privés, qui ne sont pas voués à être partagés en dehors des élèves de l'EFREI (ex: groupes whatsapp), alors utilisez le format `%SECRET_<nombre de 0 à 9>%` (ex: `%SECRET_0%`), et demandez à un administrateur du repository de définir le "Repository Secret" correspondant (ici `SECRET_0`) dans les [secrets GitHub](https://github.com/horizon-efrei/efreussite-webhooks/settings/secrets/actions) avec la bonne valeur. Vous pouvez le réinitialiser après l'annonce postée.


### 🚀 Déployer un message

Une fois qu'un document est prêt à être publié, il peut être déployé avec le workflow GitHub.

1. Allez sur le workflow GitHub [de déploiement](https://github.com/horizon-efrei/efreussite-webhooks/actions/workflows/deployment.yml) ou [de pré-déploiement](https://github.com/horizon-efrei/efreussite-webhooks/actions/workflows/draft-deployment.yml) pour tester d'abord.
1. Cliquez sur "Run workflow".
1. Dans le champs d'input, mettez le nom du fichier à déployer avec ses dossiers parents, sauf le dossier `resource`. Exemple : `guide/Premier message.md` ou `P2025/2021-2022/Ateliers mobilité S5` (le `.md` est facultatif).
1. Confirmez en cliquant sur "Run workflow".

#### ✏️ Mise à jour d'un message

La mise à jour d'un message se fait manuellement.
Installez le projet en local avec `git clone https://github.com/horizon-efrei/efreussite-webhooks && cd efreussite-webhooks && npm install`. Si la commande `npm` n'est pas reconnue, vous devez [installer Node.js](https://nodejs.org/en/download/).
Assurez-vous d'avoir Node.js ≥16.9.0 minimum, via `node -v`. Autrement, mettez-le à jour.
Ensuite, dans le fichier [updater](./src/updater.js), suivez les instructions en commentaire. Remplacez le contenu du message, l'ID du message et l'url du webhook comme indiqué.

Enfin, dans votre terminal entrez `npm run update` pour lancer la mise à jour.
**Pensez à ne pas commit vos modifications.**


### Crédits

Dérivé du système de webhooks de Sapphire : https://github.com/sapphiredev/resource-webhooks
