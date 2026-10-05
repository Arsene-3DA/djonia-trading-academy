# Djonia Trading Academy — Audit de refonte

Date de contrôle : 16 septembre 2026

## 1. Palette accessible

La surface de lecture est passée d’un crème chaud à un gris papier froid. Son
contraste avec le crème de référence `#F4F1EA` passe de 1,01:1 à 1,19:1, avec
un déplacement visible vers le gris-vert :

| Rôle | Couleur | Contraste sur Papier `#D7E0DE` | Usage |
|---|---:|---:|---|
| Papier | `#D7E0DE` | — | Leçons, examens, journal |
| Encre | `#182126` | 12,15:1 | Titres et texte principal |
| Texte secondaire | `#526166` | 4,79:1 | Explications secondaires |
| Hausse | `#0B6B50` | 4,83:1 | Texte haussier et validation |
| Baisse | `#A8373E` | 4,76:1 | Texte de risque et invalidation |
| Zone / POI | `#765610` | 5,02:1 | Texte de zone et attention |

`#AAB4B7` reste une couleur de grille et de bordure. Son contraste de 1,57:1
sur Papier signifie qu’elle n’est jamais utilisée comme couleur autonome d’un
texte essentiel.

## 2. Images remplacées

| Ancien fichier supprimé | Nouveau fichier | Justification |
|---|---|---|
| `assets/hero-trading.webp` | `assets/hero-market-briefing.svg` | Remplace la scène générique de trader par un scénario annoté : HH/HL, sweep, POI, FVG, entrée, SL et TP. |
| `assets/analyse-technique.webp` | `assets/analysis-workbench.svg` | Montre le raisonnement Daily → H1 → M5 et la chaîne contexte → zone → confirmation → risque. |
| `assets/journal-risque.webp` | `assets/risk-journal-sheet.svg` | Transforme la photo de bureau en fiche exploitable : risque, taille, checklist, résultat en R et courbe de capital. |

Les trois SVG possèdent un `viewBox`, un titre et une description accessibles.
Le texte reste vectoriel. Les niveaux représentés sont déclarés comme exemples
pédagogiques et non comme données de marché réelles. Les 12 schémas existants
ont aussi été harmonisés avec les nouvelles teintes Encre, Hausse, Baisse, Zone
et Grille.

Les en-têtes de modules n’emploient plus une image générique par plage d’ID.
Chaque module visuel utilise désormais son schéma pertinent : TradingView,
MetaTrader, structure, BOS/CHoCH, liquidité, FVG, Wyckoff, multi-timeframe,
sessions, Order Flow, Order Block, stratégie ou journal du risque.

## 3. Cohérence des 125 leçons

L’audit initial a trouvé les moyennes suivantes :

| Bloc | Avant | Cible | Après | Plage finale |
|---|---:|---:|---:|---:|
| En mots simples | 13,8 mots | 45–75 | 54,8 mots | 45–71 |
| Comprendre | 25,0 mots | 90–140 | 109,1 mots | 95–130 |
| Pratiquer | 17,4 mots | 60–100 | 74,0 mots | 61–90 |

Résultat : les 125 leçons se trouvent dans les trois plages validées. La couche
`course-enrichment.js` complète les textes existants sans en supprimer une
phrase. Elle ajoute un contexte propre au module, des dépendances à vérifier et
une pratique active. Le rapport calculé reste disponible dans
`window.courseDensityAudit` pour faciliter une nouvelle vérification.

## 4. Références

57 associations source-module, représentant 21 URL uniques, ont été ouvertes
et contrôlées. Les documentations officielles sont réservées aux fonctions de
plateforme, aux ordres, à la marge, au Replay et aux rapports. Wikipédia reste
limité au contexte général ou historique.

| Modules | Sujet documenté | Source prioritaire | Statut |
|---|---|---|---|
| 1 | Marchés, Forex et risque | CFTC + contexte Wikipédia | Conforme |
| 2 | Replay et alertes | TradingView officiel | Conforme |
| 3 | Ordres, compte et Market Watch | MetaTrader 5 officiel | Conforme |
| 4 | Bid, Ask et cadre graphique | MetaTrader 5 + Wikipédia | Conforme |
| 5 | Unités et spécifications de contrat | MetaTrader 5 + CFTC | Conforme |
| 6 | Marge, Equity et levier | MetaTrader 5 + CFTC | Conforme |
| 7 | Market, Limit, Stop, SL et TP | MetaTrader 5 officiel | Conforme |
| 8–9 | Taille, risque et levier | MetaTrader 5, CFTC et CIRO | Conforme |
| 10 | Analyse graphique et Replay | TradingView + contexte Wikipédia | Conforme |
| 11–13 | Structure, liquidité et ICT/SMC | Contexte général uniquement ; concepts signalés comme méthodologiques | Conforme |
| 14–15 | Wyckoff et comparaison | Contexte historique Wikipédia | Conforme |
| 16 | Analyse historique multi-timeframe | TradingView + contexte Wikipédia | Conforme |
| 17 | Sessions et heure d’été | Timeanddate + contexte Forex | Conforme |
| 18 | Volume Profile et Footprint | TradingView + glossaire CFTC | Conforme |
| 19 | Setup et risque de perte | CFTC + contexte graphique | Conforme |
| 20–21 | Test de stratégie et historique | TradingView + MetaTrader 5 | Conforme |
| 22 | Historique et journal | MetaTrader 5 + TradingView | Conforme |
| 23 | Comportements à risque et fraude | CFTC/NASAA + CIRO | Conforme |
| 24 | Exécution en démo | MetaTrader 5 + TradingView | Conforme |
| 25 | Levier et vigilance | CIRO, CFTC et AMF Québec | Conforme |

Le PDF CIRO utilisé dans les modules 8, 9 et 25 contient bien la déclaration de
risque de levier à la règle 3217. La page AMF du module 25 reste présentée comme
un exemple de vigilance envers une plateforme précise, et non comme une règle
générale sur tous les brokers.

## 5. Distracteurs des quiz

Le défaut positionnel `otherConcepts` était déjà absent de la version reçue.
Aucune régression n’a été introduite.

| Type de troisième question | Modules vérifiés |
|---|---|
| Séquence rédigée spécifiquement | 7, 8, 10, 13, 16, 19, 20, 21, 22, 24 |
| Vrai/faux fondé sur une erreur locale | 3, 6, 9, 12, 15, 18 |
| Association entre concepts du même module | 1, 4, 25 |
| Réaction contextualisée avec erreurs locales | 2, 5, 11, 14, 17, 23 |

Les 25 modules utilisent donc uniquement leur propre quiz, leurs propres
concepts, leurs propres erreurs ou une séquence explicitement rédigée.

## 6. Modifications de `app.js`

Les changements restent dans le périmètre approuvé :

- remplacement et attribution contextuelle des visuels ;
- retrait des flèches décoratives dans les libellés et liens ;
- suppression des labels décoratifs inutiles ;
- renommage de la classe visuelle `gold` en `zone` ;
- aucune modification de la formule des calculateurs, du calcul des scores,
  du chronomètre ou de la logique de correction des quiz ;
- numéros des modules et des leçons conservés après validation ;
- bouton « Mon parcours » relié au tableau de bord ;
- date du journal sécurisée par un repli `AAAA-MM-JJ` lorsque `valueAsDate`
  n’est pas correctement pris en charge.

## 7. Tests fonctionnels et responsive

La livraison contient une suite reproductible dans `tests/`. Le dernier passage
complet compte **195 tests réussis sur 195** : vérification unitaire des 25
modules, test des 125 validations de leçons, navigation, numérotation, quiz,
examens, filtres, calculateurs, journal, exports, thème et fonctionnement sans
`localStorage`. L’audit Chrome complémentaire couvre 42 combinaisons de largeur
et de vue, sans débordement horizontal. Le détail est consigné dans
`TEST-REPORT.md` et `AUDIT-RESPONSIVE.md`.
