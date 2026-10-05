# Audit — Mise à niveau premium des 30 modules

Date : **18 septembre 2026**

## Résultat

Le contenu pédagogique existant n’a pas été réécrit. La mise à niveau ajoute un sourçage uniforme, trois cas intégrés au cœur du parcours et la stratégie complète qui restait attendue.

## Sources après correction

| Modules | Nombre de sources |
|---|---:|
| 01 à 12 | 3 par module |
| 13 | 4 |
| 14 à 29 | 3 par module |
| 30 | 7 |

Contrôle détaillé :

| Module | Sources | Module | Sources | Module | Sources |
|---:|---:|---:|---:|---:|---:|
| 01 | 3 | 11 | 3 | 21 | 3 |
| 02 | 3 | 12 | 3 | 22 | 3 |
| 03 | 3 | 13 | 4 | 23 | 3 |
| 04 | 3 | 14 | 3 | 24 | 3 |
| 05 | 3 | 15 | 3 | 25 | 3 |
| 06 | 3 | 16 | 3 | 26 | 3 |
| 07 | 3 | 17 | 3 | 27 | 3 |
| 08 | 3 | 18 | 3 | 28 | 3 |
| 09 | 3 | 19 | 3 | 29 | 3 |
| 10 | 3 | 20 | 3 | 30 | 7 |

Les modules 11–13 combinent maintenant plusieurs angles : cadre général de l’analyse technique, fonctionnement mesuré de la liquidité sur marché centralisé et distinction explicite entre ces références et le vocabulaire méthodologique ICT/SMC. Les sources ajoutées incluent notamment CME Group, Fidelity, StockCharts ChartSchool et l’American Psychological Association, en plus des documents déjà présents de la CFTC, de l’OCRI/CIRO, de MetaTrader et de TradingView.

## Cas D — Structure et zones ICT/SMC

**Modules : 10, 11, 12 et 13.**

Le scénario EURUSD H1 fournit les niveaux 1,0720, 1,0780, 1,0810 et 1,0860. L’élève doit reconstruire HH/HL, classer le dépassement 1,0868 comme sweep selon la convention donnée, interpréter la clôture sous 1,0810, puis distinguer le FVG 1,0806–1,0816 de l’Order Block candidat 1,0812–1,0830.

Le piège est volontaire : le retour à 1,0814 ressemble à une vente, mais la confirmation M15 exigée n’est pas clôturée. La bonne décision reste attente ou non-trade.

## Cas E — Wyckoff et gestion du risque

**Modules : 14, 8 et 9.**

Le range EURUSD H1 se situe entre 1,0950 et 1,1050. Après SC, AR, ST, Spring potentiel et test, une entrée n’est autorisée qu’au-dessus de 1,0980, avec un Stop à 1,0930.

- Capital : 12 000 $.
- Risque : 0,50 %, soit 60 $.
- Stop : 50 pips.
- Valeur : 10 $/pip pour 1 lot.
- Taille : 60 ÷ (50 × 10) = **0,12 lot**.

Le calcul correct ne remplace pas la confirmation Wyckoff prévue.

## Cas F — Du backtest à la démo

**Modules : 20, 21, 24 et 25.**

Le cas oppose un backtest de 100 trades à une démo de 30 trades comportant six violations de plan et deux erreurs de taille. L’élève doit recalculer les statistiques et détecter que l’Expectancy démo annoncée à +0,01 R est fausse :

`11/30 × 1,6 − 19/30 × 1 ≈ −0,047 R`.

La décision correcte est de rester en démo : l’échantillon conforme est trop court, la gestion d’une série de pertes n’est pas démontrée et le capital envisagé est nécessaire aux dépenses essentielles.

## Stratégie complète — Djonia SSR

**Nom : Djonia SSR — Sweep, Shift, Retour.**

Cadre pédagogique : EURUSD, contexte H1 et déclenchement M15.

La stratégie rend explicitement :

- cinq conditions obligatoires ;
- trois conditions supplémentaires ;
- quatre invalidations ;
- quatre conditions de non-trade ;
- un exemple gagnant ;
- un exemple perdant conforme ;
- un faux signal classé non-trade.

Exemple chiffré commun : sweep du Previous Day Low 1,0830 jusqu’à 1,0824, shift au-dessus de 1,0852, FVG 1,0848–1,0856, entrée 1,0852, Stop 1,0822, TP 1,0912. Sur 10 000 $ à 0,50 %, la taille théorique est 0,166 lot, arrondie à **0,16 lot**, pour environ **48 $** de risque et un objectif de 2 R.

Le scénario perdant conserve exactement les mêmes règles et accepte −1 R. Le faux signal manque la clôture structurelle et le FVG : il reste non-trade même si le prix monte ensuite.

## Tests

Les 239 tests antérieurs restent passants. Cinq contrôles supplémentaires vérifient :

1. le minimum de trois sources et l’unicité des URL ;
2. les liens multi-modules des cas D/E/F ;
3. leurs cinq décisions et cinq corrections ;
4. les règles et calculs de la stratégie SSR ;
5. son rendu réel dans le module 20.

**Résultat final : 244 tests réussis sur 244, 0 échec.**
