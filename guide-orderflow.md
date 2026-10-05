# Djonia Trading Academy — Guide Orderflow

## Rôle de ce guide

Ce document structure une routine d’observation. Il ne produit aucun signal
d’achat ou de vente et n’exécute aucun ordre. Une case cochée n’autorise pas un
trade : seules les règles testées de ton plan peuvent le faire.

## 1. Qualité de la donnée

- [ ] Instrument et contrat exacts notés
- [ ] Marché centralisé, CFD ou flux broker identifié
- [ ] Fournisseur de données noté
- [ ] Session, date et fuseau horaire notés
- [ ] Rollover ou changement de contrat vérifié
- [ ] Réglages Footprint, Delta et profil conservés

## 2. Contexte avant le flux

- [ ] Structure HTF décrite sans le flux
- [ ] Zone de prix ou niveau de liquidité défini
- [ ] Scénario haussier, baissier et non-trade écrits
- [ ] Annonce macro et règle de non-trade vérifiées
- [ ] Invalidation connue avant toute entrée

## 3. Observation Order Flow

- [ ] Fait mesuré séparé de l’interprétation
- [ ] Delta comparé sur des bornes fixes
- [ ] Volume inhabituel comparé à une référence locale
- [ ] Absorption ou exhaustion formulée comme hypothèse
- [ ] Aucun auteur supposé à partir de la taille
- [ ] Aucune donnée isolée traitée comme signal automatique

## 4. Conflit prix–flux

- [ ] Les deux sources utilisent le même instrument et la même période
- [ ] La contradiction est réelle, pas créée par deux timeframes sans rôle
- [ ] Condition de confirmation écrite
- [ ] Condition d’invalidation écrite
- [ ] Règle appliquée : attendre, réduire selon le plan, ou non-trade

## 5. Risque et exécution

- [ ] Stop placé après l’invalidation logique
- [ ] Valeur du tick ou du point vérifiée
- [ ] Taille de position recalculée
- [ ] Spread, commissions et slippage considérés
- [ ] Limite quotidienne et exposition corrélée respectées

## 6. Revue

- [ ] Capture avant conservée
- [ ] Capture après conservée
- [ ] Résultat en R enregistré
- [ ] Respect du protocole noté indépendamment du résultat
- [ ] Une seule action corrective mesurable choisie

## Conclusion possible

Choisir exactement une formulation :

- **Aligné mais non déclenché** — le contexte et le flux sont compatibles,
  mais le déclencheur du plan manque.
- **Contradictoire** — appliquer la règle d’attente ou de non-trade écrite.
- **Donnée insuffisante** — aucune décision fondée sur le flux.
- **Setup autorisé par le plan** — calculer ensuite le risque ; ce statut ne
  garantit jamais un gain.

> Rappel : le flux d’ordres décrit l’activité enregistrée par une source. Il ne
> permet pas de confirmer avec certitude l’identité ou l’intention d’un acteur.
