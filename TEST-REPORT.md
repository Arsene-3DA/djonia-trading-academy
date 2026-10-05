# Djonia Trading Academy — Rapport de tests

Date du dernier passage : **18 septembre 2026**  
Résultat de la suite locale : **244 tests réussis sur 244 — 0 échec**

## Résumé

La suite charge le code réel de `course-content.js`, `app.js` et
`course-enrichment.js`. Elle contrôle chaque module séparément puis reproduit
les interactions essentielles de l’élève dans un DOM de navigateur.

| Groupe | Résultat | Contrôles principaux |
|---|:---:|---|
| Architecture | Conforme | 30 modules, 150 leçons, 5 niveaux et 5 masterclass à la carte |
| Modules 1–30 | Conforme | identité, ordre, densité, notions, exercice, quiz, sources et visuel |
| Synthèses | Conforme | 30 résumés uniques de 3–5 phrases et 30 listes de 3–7 règles d’action |
| Cas intégrés | Conforme | cas A à F, liens multi-modules, décisions ordonnées et corrections progressives |
| Cas cœur de cours | Conforme | cas D, E et F : structure/ICT, Wyckoff/risque et backtest/démo |
| Sourçage | Conforme | minimum 3 URL distinctes et documentées pour chacun des 30 modules |
| Stratégie SSR | Conforme | règles, calcul de taille et scénarios gagnant/perdant/faux signal |
| Navigation | Conforme | accès aux 30 modules, accueil par logo, module suivant et catalogue |
| Progression | Conforme | 150 validations de leçon, persistance et repli mémoire |
| Numérotation | Conforme | modules 1–30 et leçons 01–05 restent visibles après validation |
| Quiz et examens | Conforme | 3 questions par module, séquences dédiées, 5 examens de 10 questions |
| Outils | Conforme | calculateurs, journal, exports CSV/JSON et Guide Orderflow |
| Modale | Conforme | agrandissement en place, zoom, focus, Échap et clic extérieur |
| Responsive | Conforme | hero mesuré à 320, 375, 414, 768, 1024, 1440 et 1920 px |
| SVG | Conforme | aucun texte hors cadre ou chevauché sur les 3 illustrations principales |
| Stockage indisponible | Conforme | application navigable, progression en mémoire et alerte visible |

## Résultat par module

Chaque ligne regroupe les contrôles d’identité, des cinq leçons, des trois
niveaux de contenu, des notions, de l’exercice, du quiz, des sources et du
visuel principal.

| Nº | Module | Résultat |
|---:|---|:---:|
| 01 | Découverte du trading et des marchés | Réussi |
| 02 | TradingView de zéro | Réussi |
| 03 | MT4 et MT5 de zéro | Réussi |
| 04 | Mécanique du prix | Réussi |
| 05 | Pips, points, ticks et lots | Réussi |
| 06 | Levier et marge | Réussi |
| 07 | Les types d’ordres | Réussi |
| 08 | Calcul de taille de position | Réussi |
| 09 | Gestion du risque | Réussi |
| 10 | Bases de l’analyse technique | Réussi |
| 11 | Structure de marché | Réussi |
| 12 | Liquidité | Réussi |
| 13 | ICT / Smart Money Concepts | Réussi |
| 14 | Wyckoff | Réussi |
| 15 | Relier Wyckoff et ICT/SMC | Réussi |
| 16 | Analyse multi-timeframe | Réussi |
| 17 | Sessions de trading | Réussi |
| 18 | Volume et Order Flow | Réussi |
| 19 | Construction d’un setup | Réussi |
| 20 | Stratégie de trading | Réussi |
| 21 | Backtesting et statistiques | Réussi |
| 22 | Journal de trading | Réussi |
| 23 | Psychologie et discipline | Réussi |
| 24 | Pratique sur compte démo | Réussi |
| 25 | Préparation au passage au réel | Réussi |
| 26 | Masterclass Offre et Demande | Réussi |
| 27 | Maîtriser l’offre et la demande en trading | Réussi |
| 28 | L’Ordre des Baleines : flux d’ordres et empreinte institutionnelle | Réussi |
| 29 | Masterclass Flux de commandes — Modèles d’exécution avancés | Réussi |
| 30 | Masterclass sur les indices : US30, NAS100, GER40 | Réussi |

## Parcours d’intégration couverts

1. Ouverture successive des 30 modules et vérification de cinq leçons, trois
   questions et une illustration par module.
2. Clic sur les 150 boutons de validation et contrôle du compteur après chaque
   action.
3. Vérification de la numérotation persistante `01–05` et `1–30`.
4. Recherche, filtres, changement de thème, logo vers l’accueil et navigation
   vers le module suivant.
5. Calcul de position et calcul d’espérance après modification des champs.
6. Cinq examens : dix questions, mode entraînement et mode chronométré.
7. Journal : ajout, persistance locale, export CSV et sauvegarde JSON.
8. Démarrage sans `localStorage`, navigation et validation d’une leçon.
9. Modale : aucun nouvel onglet, zoom, Échap, clic extérieur, piège et retour
   du focus.
10. Modules 26–30 : badges transversaux, exercices graphiques, questions de
    séquence, sources et Guide Orderflow non automatisé.
11. Synthèses : présence sur les 30 modules, unicité, longueur et exemples
    sémantiques contrôlés sur le risque, Wyckoff et l’Order Flow.
12. Cas intégrés A, B et C : cinq décisions, cinq étapes de correction,
    combinaison explicite de plusieurs modules et révélation au clic.
13. Cas D, E et F : niveaux de prix, pièges, calculs et critères de validation
    globale au cœur du parcours principal.
14. Stratégie SSR : présence dans le module 20, quatre familles de règles et
    trois déroulés complets distincts.
15. Sourçage : au moins trois sources réelles et URL uniques par module.

## Mesures dans Chrome

Un contrôle complémentaire a ouvert les **30 modules sur 30** dans Chrome. Les
sept largeurs demandées ont également été mesurées pour le hero : aucun
débordement horizontal, ratio 1200/700 conservé et `object-fit: contain` à
chaque largeur. Le détail se trouve dans
`AUDIT-HERO-MODALE-MODULES.md` et
`audit/hero-modal-browser-measures.json`.

## Reproduire les tests

```bash
npm install
npm test
```

Résultat attendu :

```text
tests 244
pass 244
fail 0
```

Le scénario Playwright complémentaire est fourni dans
`tests/browser.e2e.spec.cjs` :

```bash
npx playwright install chromium
npm run test:e2e
```

Le binaire Chromium de Playwright n’était pas installé dans l’environnement de
livraison. Cette limitation d’outillage n’est donc pas comptée comme un test
réussi ; les contrôles réels Chrome décrits ci-dessus ont été exécutés
séparément.

## Portée

Les tests confirment la structure, les interactions et les garde-fous présents
au moment de la livraison. Ils ne transforment pas la formation en conseil
financier et ne garantissent pas la validité future des spécifications d’un
broker, d’un contrat ou d’une plateforme.
