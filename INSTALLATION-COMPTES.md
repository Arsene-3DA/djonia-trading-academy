# Comptes élèves — activation requise

L'interface et l'intégration sont présentes, mais aucun projet Supabase n'a été fourni. Les comptes ne sont donc PAS activés dans ce ZIP. Le mode invité existant continue à fonctionner. Les données invité ne sont jamais attribuées automatiquement à un compte.

## Installation par le propriétaire
1. Créer ou choisir un projet Supabase dédié. Dans SQL Editor, exécuter `supabase/schema.sql` une seule fois. Ce script crée la table avec sécurité par utilisateur, et une fonction de sauvegarde avec contrôle de version.
2. Exécuter `supabase/test-isolation.sql` sur le projet de test : deux élèves, lectures isolées, aucune écriture directe, accès anonyme refusé, conflit refusé. Le test annule ses données. Ne pas ouvrir l'inscription publique avant sa réussite.
3. Activer l'authentification Email. Dans le modèle Email « Magic Link », afficher le code avec `{{ .Token }}` à la place du lien. L'interface utilise un code à usage unique, pas un mot de passe.
4. Configurer un expéditeur SMTP pour les vrais élèves ; vérifier les quotas d'envoi et protections anti-abus. Le service d'envoi de développement n'est pas destiné à une école publique.
5. Remplir `account-config.js` avec l'URL `https://....supabase.co` et la clé PUBLIQUE publishable. Ne jamais insérer une clé secret/service_role, un mot de passe ou une clé de base de données. Aucun secret n'est nécessaire dans le ZIP.
6. Héberger le site en HTTPS et autoriser son URL dans les paramètres Auth Supabase. Pour développer, utiliser `npm run dev` et http://localhost:4173. L'ouverture de index.html reste disponible pour lire les cours ; vérifier les comptes sur un serveur HTTP/HTTPS.
7. Faire la recette avec deux vrais courriels, puis un deuxième appareil : code, connexion, leçon cochée, quiz, journal, déconnexion, reprise. Vérifier que B ne voit jamais les données de A. Tester une coupure réseau et deux onglets modifiant simultanément.

## Comportement
- « Mon compte élève » dans le menu et le bouton de profil ouvrent la page personnelle.
- Parcours terminé : les 150 leçons (y compris les masterclass). La barre historique du menu reste celle du parcours principal de 25 modules.
- Modules réussis au quiz : meilleur score ≥ 80 %, distinct de la lecture. Les anciens quiz non enregistrés devront être refaits. Il s'agit d'autoévaluation, pas d'un examen sécurisé contre la triche.
- Sauvegarde : leçons, scores des quiz et examens, dernier module ouvert et journal. Les thèmes restent locaux à l'appareil.
- Aucun import automatique de l'ancien navigateur partagé.
- Jetons de connexion conservés en mémoire seulement. Après rechargement/fermeture, un nouveau code est demandé ; les données confirmées restent dans le compte.
- En cas de coupure, les changements restent en mémoire et un avertissement apparaît. Réessayer ou exporter les données avant de fermer. Le JSON est une sauvegarde manuelle, sans import automatique.
- Un conflit entre appareils est refusé, jamais résolu par écrasement silencieux. Exporter les changements locaux puis recharger le compte et les réappliquer si nécessaire.
- Déconnexion : purge des données du compte en mémoire et retour au mode invité. Ne pas utiliser le journal invité pour des informations personnelles sur un appareil partagé.

## Données et exploitation
Seuls le courriel d'authentification et les données du parcours/journal saisis sont nécessaires. Avant publication, adapter les informations de confidentialité avec l'identité de l'exploitant, son contact, sa durée de conservation et la procédure de suppression. L'effacement d'un utilisateur dans Auth supprime sa ligne de progression en cascade. Pas de mots de passe stockés par Djonia, pas de clé administrateur côté navigateur.

## Vérifications livrées
251 tests réussis (rapport joint). `npm test` : contenu, navigation et tests avec un service simulé pour isolation A/B, calculs, déconnexion, conflit et reprise après coupure. Résultats dans `account-test-results.txt`. Le test SQL et l'authentification réelle ne sont pas exécutés faute de projet connecté ; le rendu navigateur reste non vérifié en raison de la restriction de lancement Chromium constatée précédemment. Ne pas confondre les tests simulés avec une validation Supabase en production.

## Documentation officielle consultée le 29 septembre 2026
- https://supabase.com/docs/guides/auth/auth-email-passwordless
- https://supabase.com/docs/guides/database/postgres/row-level-security
- https://supabase.com/docs/reference/javascript/auth-verifyotp

SDK Supabase JS version 2.117.2 : chargé uniquement au début d'une connexion depuis jsDelivr. Les cours et le mode invité ne dépendent pas de sa disponibilité.
