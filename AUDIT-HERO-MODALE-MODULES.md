# Djonia Trading Academy — Audit hero, modale et modules 26–30

Date : **18 septembre 2026**  
Moteur de mesure : **Chrome réel**  
Suite automatisée : **235/235 tests réussis**

## 1. Hero : cadrage responsive vérifié

Le SVG possède un `viewBox="0 0 1200 700"`, utilise
`preserveAspectRatio="xMidYMid meet"` et l’image HTML conserve le ratio
`1200 / 700` avec `object-fit: contain`. Le conteneur ne recadre donc plus ses
bords.

| Largeur testée | Taille rendue du hero | Débordement horizontal | Dans le viewport | Garde anti-recadrage |
|---:|---:|---:|:---:|:---:|
| 320 px | 279 × 163 px | 0 px | Oui | Conforme |
| 375 px | 334 × 195 px | 0 px | Oui | Conforme |
| 414 px | 361 × 211 px | 0 px | Oui | Conforme |
| 768 px | 715 × 417 px | 0 px | Oui | Conforme |
| 1024 px | 683 × 398 px | 0 px | Oui | Conforme |
| 1440 px | 671 × 392 px | 0 px | Oui | Conforme |
| 1920 px | 778 × 454 px | 0 px | Oui | Conforme |

Les captures individuelles se trouvent dans `audit/screenshots/`, de
`djonia-hero-320.jpg` à `djonia-hero-1920.jpg`. La planche comparative est
`djonia-hero-7-largeurs.jpg`.

## 2. Contrôle géométrique des trois SVG

| Illustration | Textes contrôlés | Textes hors cadre | Chevauchements de textes |
|---|---:|---:|---:|
| `hero-market-briefing.svg` | 29 | 0 | 0 |
| `analysis-workbench.svg` | 33 | 0 | 0 |
| `risk-journal-sheet.svg` | 34 | 0 | 0 |

Dans le hero, les dix libellés pédagogiques — HH, HL, Sweep, CHoCH, POI,
FVG, Entrée, SL et TP — disposent maintenant d’un fond ou d’un cartouche
protégé. La plus petite marge mesurée entre un texte et son cartouche est de
**7,2 px**. La légende indique désormais correctement **« bougies fictives »**.

## 3. « Agrandir » : modale en place

Les déclencheurs d’agrandissement sont des boutons. Ils ne contiennent ni
`target="_blank"` ni appel à `window.open`.

| Contrôle | Desktop | Mobile 375 px |
|---|:---:|:---:|
| Nombre d’onglets avant/après | 2 → 2 | inchangé |
| Image contenue dans la zone | Oui, 1200 × 700 | Oui, 328 × 191 au départ |
| Zoom testé | 125 % | 125 %, image 429 × 250 défilable |
| Commandes tactiles | — | 44 × 44 px |
| Piège de focus | Conforme | Conforme |
| Fermeture par Échap | Conforme | Conforme |
| Fermeture par clic extérieur | Conforme | Conforme |
| Retour du focus au bouton initial | Conforme | Conforme |

La modale verrouille le défilement de la page, conserve le focus à
l’intérieur, puis rend le focus au bouton d’origine après fermeture.

## 4. Modules 26 à 30

| Nº | Titre | Parcours | Leçons | Exercice graphique | Sources |
|---:|---|---|---:|:---:|---:|
| 26 | Masterclass Offre et Demande | Essentiel · à la carte | 5 | Oui | 3 |
| 27 | Maîtriser l’offre et la demande en trading | Essentiel · pratique | 5 | Oui | 3 |
| 28 | L’Ordre des Baleines : flux d’ordres et empreinte institutionnelle | Avancé · à la carte | 5 | Oui | 3 |
| 29 | Masterclass Flux de commandes — Modèles d’exécution avancés | Avancé · à la carte | 5 | Oui | 3 |
| 30 | Masterclass sur les indices : US30, NAS100, GER40 | Avancé · à la carte | 5 | Oui | 7 |

Chaque module contient les trois blocs pédagogiques habituels par leçon, un
quiz de trois questions, une question de séquence dédiée, un exercice
graphique corrigé et une compétence mesurable.

- Le module 26 distingue explicitement *(vision Offre/Demande classique)* et
  *(vision ICT)* sans prétendre qu’une zone et un Order Block sont deux lois
  indépendantes du marché.
- Le module 27 reste un atelier pratique : cinq cas guidés, sans nouvelle
  théorie.
- Le module 28 sépare observation, hypothèse et ce qui n’est pas démontrable :
  l’auteur réel d’un ordre ne peut pas être identifié avec certitude.
- Le module 29 traite l’agressif, le passif, les horizons de flux et le conflit
  prix–flux. Il intègre le **Guide Orderflow** téléchargeable.
- Le module 30 relie sessions, gaps, macroéconomie et corrélations au calcul de
  position du module 8. Les spécifications de point restent explicitement à
  vérifier auprès du broker ou du contrat.

Le **Guide Orderflow** est une checklist de méthode. Il n’exécute, ne suggère
et ne génère aucun signal d’achat ou de vente.

## 5. Périmètre volontairement exclu

**« Flux d’ordres intensif — Exclusif / membres 1:1 »** n’a pas été simulé.
Il s’agit d’une décision de service et de mentorat, pas d’un contenu de cours à
inventer.

## 6. Validation finale

- **235/235** tests Node et Happy DOM réussis, zéro échec.
- Les **30 modules** ont été ouverts dans Chrome : 30/30 accessibles, cinq
  leçons numérotées `01–05`, trois questions et une illustration chargée par
  module.
- Les 150 validations de leçon, la navigation, les examens, les calculateurs,
  le journal, ses exports et la modale sont couverts par la suite automatisée.
- Le scénario Playwright local reste fourni. Son exécution dans cet
  environnement nécessiterait le binaire Chromium optionnel
  (`npx playwright install chromium`) ; les contrôles Chrome ci-dessus ont été
  réalisés dans un navigateur disponible séparément.

Les données structurées de cet audit sont disponibles dans
`audit/hero-modal-browser-measures.json`.
