# Onglet Règles FundedNext

Version du 29 septembre 2026. Ouvrir index.html après extraction complète du ZIP, puis choisir « Règles FundedNext » dans le menu.

## Ajouts
- Fiche indépendante pour les comptes CFD Stellar 1-Step, 2-Step et Lite, selon la phase et le capital initial en USD.
- Stellar Instant renvoie à sa documentation : aucun plancher statique trompeur n'est calculé pour ce modèle à drawdown suiveur.
- Maintien le week-end, annonces, coûts, restrictions, liens officiels et date de vérification.
- Conversion des heures serveur vers Montréal selon la date et l'offset choisi.
- Checklist avant position et retour à l'accueil. Le logo conserve sa navigation d'origine.
- Aucune connexion au compte MT5, aucune donnée financière transmise et aucune actualisation automatique des règles.

## Fichiers modifiés
index.html (bouton et script), app.js (état actif du menu), styles.css (styles propres à l'onglet), fundednext.js (nouveau), tests (chargement du nouveau script et contrôles supplémentaires). Les cours et les 30 modules restent inchangés.

## Validation
Résultats complets dans fundednext-test-results.txt. Tests supplémentaires : modèles et phases, limites, entrées invalides, conversion Montréal été/hiver/décalage saisonnier, navigation, retour accueil et fonctionnement sans stockage.

Le script tests/fundednext.verify.cjs permet une vérification Chromium à 320, 375, 414, 768, 1024, 1440 et 1920 px. Ce contrôle visuel n'a pas pu aboutir dans l'environnement de livraison : Chromium a été bloqué au lancement par « socket() failed: Operation not permitted ». Aucune capture ou mesure responsive nouvelle n'est donc présentée comme vérifiée. Les anciens rapports éventuels concernent la version précédente.

Reproduction : npm install, npm test. Pour le navigateur : npx playwright install chromium, lancer npm run dev dans un terminal puis node tests/fundednext.verify.cjs dans un autre. CHROMIUM_PATH permet de préciser un exécutable déjà installé.

## Limite de la fiche
Les règles et les options peuvent changer. La synthèse ne remplace ni le contrat d'achat, ni les paramètres personnels du tableau de bord. Les seuils affichés ne sont pas une recommandation de risque. Les sources officielles sont placées auprès des explications concernées.
