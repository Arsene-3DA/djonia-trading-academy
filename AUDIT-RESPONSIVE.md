# Djonia Trading Academy — conformité visuelle et audit responsive

Date du contrôle : 17 septembre 2026

## 1. Méthode et périmètre

Le site a été chargé dans Chrome à sept largeurs réelles : 320, 375, 414,
768, 1024, 1440 et 1920 px. Six vues ont été contrôlées à chaque largeur :
accueil, catalogue, leçon, calculateurs, journal et examen, soit **42 scénarios**.

Le fichier `audit/responsive-measures.json` contient les mesures brutes. Le
harnais reproductible se trouve dans `audit/responsive-harness.html` et les
captures dans `audit/screenshots/`.

## 2. Papier / Encre : plan comparé au rendu

| Zone | Affectation prévue | Rendu mesuré après correction | Statut |
|---|---|---|---|
| Accueil et hero | Encre, comme table de travail | Fond global `#11191D`, hero et panneaux visuels `#182126` | Conforme |
| Catalogue | Papier | `.search-results` = `rgb(215, 224, 222)` / `#D7E0DE` | Conforme |
| Leçon longue | Papier, avec navigation Encre | `.lesson-card` = Papier ; rail `.lesson-index` = Encre | Conforme |
| Calculateur du tableau de bord | Encre, interface de saisie | `.tools-panel` = `rgb(24, 33, 38)` / `#182126` | Conforme |
| Calculateurs dans les modules 8 et 21 | Dans la feuille de leçon | Surface parente `.lesson-card` = Papier | Conforme |
| Journal, module 22 | Papier | Formulaire et entrées dans `.lesson-card` = Papier | Conforme |
| Aperçu « Examens par niveau » | Papier | `.exam-overview` = `rgb(215, 224, 222)` / `#D7E0DE` | Corrigé |
| Choix du mode, entraînement et résultat d’examen | Papier | `.search-results` = Papier | Conforme |
| Sidebar et topbar | Encre, chrome permanent | Sidebar `#182126`, topbar sur fond sombre | Conforme |

L’écart confirmé se trouvait uniquement sur l’aperçu des examens du tableau de
bord. Il héritait du canevas sombre. Il possède maintenant sa propre surface
`.exam-overview` en Papier. Aucun autre écart Papier/Encre n’a été relevé.

### Vérification module par module

Tous les modules utilisent le même moteur de rendu. « En-tête » désigne la
zone de contexte avant la feuille ; « Leçon » la longue surface de lecture ;
« Rail » le sommaire latéral ou empilé.

| Module | En-tête | Leçon | Rail | Outil particulier |
|---:|---|---|---|---|
| 01 | Encre | Papier | Encre | — |
| 02 | Encre | Papier | Encre | Captures agrandissables |
| 03 | Encre | Papier | Encre | Captures MT4/MT5 agrandissables |
| 04 | Encre | Papier | Encre | — |
| 05 | Encre | Papier | Encre | — |
| 06 | Encre | Papier | Encre | — |
| 07 | Encre | Papier | Encre | — |
| 08 | Encre | Papier | Encre | Calculateur sur Papier |
| 09 | Encre | Papier | Encre | — |
| 10 | Encre | Papier | Encre | Schéma agrandissable |
| 11 | Encre | Papier | Encre | Schéma agrandissable |
| 12 | Encre | Papier | Encre | Schéma agrandissable |
| 13 | Encre | Papier | Encre | Schémas agrandissables |
| 14 | Encre | Papier | Encre | Schémas agrandissables |
| 15 | Encre | Papier | Encre | Schéma agrandissable |
| 16 | Encre | Papier | Encre | Schéma agrandissable |
| 17 | Encre | Papier | Encre | Schéma agrandissable |
| 18 | Encre | Papier | Encre | Schéma agrandissable |
| 19 | Encre | Papier | Encre | Schéma agrandissable |
| 20 | Encre | Papier | Encre | Schéma agrandissable |
| 21 | Encre | Papier | Encre | Calculateur sur Papier |
| 22 | Encre | Papier | Encre | Journal sur Papier |
| 23 | Encre | Papier | Encre | — |
| 24 | Encre | Papier | Encre | Capture agrandissable |
| 25 | Encre | Papier | Encre | — |

## 3. Tirets décoratifs et chiffres d’examen

Éléments retirés :

- pseudo-éléments devant `.eyebrow`, `.section-label` et `.hero-strap` ;
- les dix éléments vides `.level-dot` des cinq niveaux et cinq examens ;
- le chiffre fantôme géant produit par `.level-card::after`.

Les textes « Prochaine leçon recommandée », « Outil du module 22 », « Sources
vérifiées » ou « 3 questions » restent présents parce qu’ils transmettent une
information, mais sans tiret décoratif.

Le numéro des examens est maintenant porté par une pastille fonctionnelle
`01 / 05` à `05 / 05`, accompagnée d’un libellé accessible « Niveau N sur 5 ».
La même convention est utilisée pour les cinq étapes du parcours. Les lignes
pointillées présentes dans les graphiques sont conservées : elles représentent
des niveaux de prix ou des relations de données, pas une décoration d’interface.

## 4. Images, lisibilité et déplacement de mise en page

- Les 18 ressources possèdent une entrée de dimensions intrinsèques.
- Chaque `<img>` rendu reçoit `width` et `height` depuis
  `imageSizeAttributes()` ; aucun des 42 scénarios n’a trouvé une image sans
  dimensions.
- Le hero, l’atelier d’analyse, la fiche de journal, toutes les captures de
  plateforme, les schémas et les exercices graphiques disposent d’un lien
  d’agrandissement.
- À 320 px, les captures MT4/MT5 s’affichent entre 202 et 217 px de large :
  leur contenu fin serait trop petit pour une lecture confortable, mais le
  bouton de 44 px ouvre désormais l’original à sa définition intrinsèque.
- La fiche de journal affiche explicitement « Agrandir la fiche » dans son
  aperçu, y compris à 375 px.

## 5. Résultats responsive mesurés

| Largeur | Vues testées | Débordement horizontal maximal | Cibles contrôlées | Cibles mobiles sous 44×44 | Menu mobile |
|---:|---:|---:|---:|---:|---|
| 320 px | 6 | 0 px | 152 | 0 | Ouvre, focus, ferme |
| 375 px | 6 | 0 px | 152 | 0 | Ouvre, focus, ferme |
| 414 px | 6 | 0 px | 152 | 0 | Ouvre, focus, ferme |
| 768 px | 6 | 0 px | 170 | — | Ouvre, focus, ferme |
| 1024 px | 6 | 0 px | 326 | — | Sidebar fixe |
| 1440 px | 6 | 0 px | 326 | — | Sidebar fixe |
| 1920 px | 6 | 0 px | 326 | — | Sidebar fixe |

À 320 px, `body { min-width: 320px; }` créait initialement 15 px de
débordement lorsque la barre verticale réduisait la largeur utile. La règle est
passée à `min-width: 0`; le second passage donne 0 px sur les six vues.

### Zone intermédiaire 660–900 px

À 768 px :

- examens du tableau de bord : 3 colonnes d’environ 221 px ;
- modes d’examen : 2 colonnes d’environ 318 px ;
- champs du calculateur : 2 colonnes d’environ 328 px ;
- journal : 2 colonnes d’environ 317 px ;
- rail de leçon : empilé, position `static`, largeur 717 px.

Aucune de ces grilles ne provoque de débordement. Sous 660 px, elles passent en
une colonne. Le hero, la grille outil et le couple leçon/rail passent en une
colonne dès 1180 px afin d’éviter une colonne de lecture trop étroite à 1024 px.

## 6. Navigation mobile

Le tiroir possède maintenant :

- un bouton interne « Fermer le menu » de 44×44 px ;
- un fond cliquable de fermeture ;
- `aria-expanded` synchronisé ;
- le focus placé sur la fermeture à l’ouverture puis rendu au déclencheur ;
- fermeture par Échap ;
- boucle de tabulation dans le tiroir ;
- fermeture après sélection d’un module jusqu’à 900 px inclus.

Le rail `.lesson-index` n’est plus collant sous 1180 px : il est placé avant la
leçon dans le flux, donc accessible au clavier et au tactile sans recouvrir le
contenu.

## 7. Résultats automatisés

- Tests Node unitaires et d’intégration : **195/195 réussis**.
- Audit Chrome : **42/42 scénarios sans débordement horizontal**.
- Cibles mobiles insuffisantes : **0**.
- Échecs du menu mobile : **0**.
- Images sans dimensions intrinsèques : **0**.
- Images détaillées sans agrandissement : **0**.

Les captures fournies sont des aperçus mis à l’échelle par le harnais ; les
mesures JSON conservent la largeur interne exacte auditée.
