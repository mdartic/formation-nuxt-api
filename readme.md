# formation-nuxt-api

> API pour la formation Nuxt de Makina Sapiens

## À propos

Ce projet utilise [Feathers](http://feathersjs.com), framework open source pour construire des APIs et des apps temps réel.

Une base de données SQLite est utilisée pour stocker les données.

Une version est persistée dans le code source pour vous permettre de démarrer l'API sans jouer les migrations.

## Pour démarrer

1. Avoir  [NodeJS](https://nodejs.org/) d'installé (version 18 ou plus) et [npm](https://www.npmjs.com/).
2. Installation des dépendances

    ```
    cd path/to/formation-nuxt-api
    npm ci # to avoid update of package-lock.json
    ```

3. Démarrage de l'application

    ```
    npm run migrate # Run migrations to set up the database
    npm run dev
    ```

## Comptes utilisateurs

Deux comptes utilisateurs ont été créés :
* user@sapiens / supersecret
* addmin@sapiens / supersecret

Ces deux comptes seront utilisables pour disposer de droits au niveau de l'ajout / suppression de films.

* user@sapiens et admin@sapiens peuvent créer des films
* seul admin@sapiens peut les supprimer

## Contributions

Si vous avez des idées d'amélioration, de nouveaux use cases (il faut dire qu'il n'y en a pas beaucoup d'implémentés !),
des anomalies, n'hésitez pas à créer des issues.