# Audit — Synthèses et cas intégrés

Date : **18 septembre 2026**

## Emplacement retenu

L’ordre de fin de module est désormais : **Sources → Synthèse → Mini-quiz → Cas intégré**.

Les sources ferment la démonstration et permettent sa vérification. La synthèse relie ensuite les notions avant que le mini-quiz teste leur maîtrise isolée. Aux modules 27, 29 et 30, le cas intégré arrive en dernier : il sert de mise en situation finale et ne peut donc pas souffler les réponses du quiz.

## Contrôle des 30 synthèses

Chaque module possède :

- un résumé de 3 à 5 phrases qui relie ses notions ;
- 3 à 7 règles d’action courtes ;
- un contenu distinct des 29 autres synthèses ;
- aucune formule générique du type « Ce module t’a appris… ».

Trois exemples montrent pourquoi elles ne sont pas interchangeables :

| Module | Relation construite dans le résumé | Règle d’action caractéristique |
|---:|---|---|
| 08 — Taille de position | capital → risque monétaire → distance du stop → valeur du point → volume | Arrondir le volume vers le bas lorsque le pas du broker empêche la taille théorique. |
| 14 — Wyckoff | range → phases → Spring/UTAD → confirmation prix-volume | Ne jamais étiqueter un range comme accumulation ou distribution sans scénario d’invalidation. |
| 28 — Ordre des Baleines | qualité de donnée → Delta/absorption → contexte → limite d’identification | Ne jamais attribuer avec certitude un ordre inhabituel à une « baleine ». |

## Cas intégré A — De la zone au plan exécutable

**Modules combinés : 26, 27 et 13.**

Le scénario présente une zone de demande EURUSD H1 créée par un départ impulsif, revisitée une première fois puis approchée une seconde fois. L’élève doit :

1. tracer les limites de la zone à partir de la base ;
2. décider si elle est fraîche ou testée ;
3. appliquer la checklist du module 27 ;
4. traduire la lecture Offre/Demande en vocabulaire ICT sans prétendre que les deux définitions sont identiques ;
5. choisir validation, attente ou rejet du scénario.

La correction explique à chaque étape la dégradation causée par le premier test, la force du départ, la cohérence de l’échelle de temps et la différence entre zone classique et Order Block selon la définition ICT adoptée.

## Cas intégré B — Prix et flux en conflit

**Modules combinés : 18, 28, 29 et 16.**

Le scénario oppose une structure H1 encore haussière à un flux M1 montrant Delta vendeur et absorption. L’élève doit contrôler la source des données, séparer contexte et déclencheur, exécuter le Guide Orderflow, appliquer le protocole de conflit puis justifier une entrée ou un non-trade.

La correction retient l’attente tant qu’aucune résolution observable ne réconcilie les échelles. Elle rappelle qu’un bloc d’ordres inhabituel ne permet jamais d’identifier son auteur et que le flux n’est pas un signal automatique.

## Cas intégré C — GER40, risque et fenêtre BCE

**Modules combinés : 30, 8, 17 et 9.**

Données : compte de 10 000 €, risque maximal de 0,50 %, stop de 40 points, valeur de 1 € par point et par lot, pas de volume de 0,1, annonce BCE dans 12 minutes et règle de non-trade de −30 à +15 minutes.

La correction calcule :

1. risque monétaire : 10 000 × 0,005 = 50 € ;
2. taille théorique : 50 ÷ (40 × 1) = 1,25 lot ;
3. taille compatible avec le pas : 1,2 lot, soit 48 € de risque ;
4. décision d’exécution : **non-trade**, car l’annonce se situe dans la fenêtre interdite ;
5. reprise éventuelle : uniquement après la fenêtre et un nouveau calcul avec les spécifications encore valides.

## Règle de validation globale

Réussir les quiz des modules 26 à 30 ne suffit pas. L’élève qui échoue aux cas intégrés n’a pas encore démontré qu’il sait combiner les compétences dans un scénario réel ; la compréhension globale reste donc **non acquise**.

## Tests

La suite vérifie les données, le contrat de rendu et l’interaction utilisateur :

- 30 synthèses présentes, uniques et conformes aux longueurs prévues ;
- cas A, B et C présents uniquement après les modules 27, 29 et 30 ;
- liens vers les modules prérequis ;
- cinq décisions et cinq étapes de correction par cas ;
- correction masquée puis révélée par clic ;
- ordre Sources → Synthèse → Quiz → Cas intégré.

**Résultat : 239 tests réussis sur 239, 0 échec.**
