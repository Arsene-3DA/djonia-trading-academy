DJONIA TRADING ACADEMY — OUVRIR LE SITE

1. Décompresse le fichier ZIP.
2. Ouvre le dossier Djonia-Trading-Academy.
3. Double-clique sur index.html.

Le site fonctionne directement dans un navigateur moderne, sans installation.
Il contient 25 modules progressifs et 5 masterclass à la carte, soit 30 modules
et 150 leçons. Les captures TradingView, MetaTrader 4 et MetaTrader 5 ainsi que
les schémas pédagogiques restent disponibles hors ligne dans le dossier assets.

NOUVEAUTÉS DE CETTE VERSION

- Hero corrigé : cadrage complet et labels HH, HL, Sweep, CHoCH, POI, FVG,
  Entrée, SL et TP protégés contre les chevauchements.
- « Agrandir » ouvre une modale sur la page, avec zoom, fermeture par Échap,
  clic extérieur, focus clavier piégé et commandes tactiles de 44 × 44 px.
- Modules 26 à 30 : Offre/Demande, atelier pratique, Ordre des Baleines,
  modèles d’exécution avancés et indices US30/NAS100/GER40.
- Guide Orderflow téléchargeable : checklist de lecture, sans signal ni
  exécution automatique.
- Chaque module se termine désormais par un résumé relié et des règles
  d’action « À retenir » propres à son contenu.
- Six cas intégrés obligent à combiner structure, ICT/SMC, Wyckoff, risque,
  backtesting, démo, Offre/Demande, Order Flow et contexte macro.
- Stratégie complète « Djonia SSR — Sweep, Shift, Retour » avec règles,
  invalidations et scénarios gagnant, perdant et faux signal.
- Chaque module possède désormais au moins trois sources distinctes.

Le tableau de bord distingue le parcours principal de 125 leçons des cinq
masterclass facultatives. Les examens évaluent le parcours principal. La
progression et le journal sont conservés localement lorsque le navigateur le
permet ; utilise « Exporter CSV » ou « Sauvegarde JSON » pour garder une copie.

AUDITS FOURNIS

- AUDIT-REFONTE.md : design, contrastes, contenus et sources.
- AUDIT-RESPONSIVE.md : audit multi-pages sur sept largeurs.
- AUDIT-HERO-MODALE-MODULES.md : hero corrigé, géométrie des trois SVG,
  comportement de la modale et contrôle des modules 26 à 30.
- AUDIT-SYNTHESES-CAS-INTEGRES.md : emplacement pédagogique, exemples de
  synthèses non interchangeables et détail des cas A, B et C.
- AUDIT-PREMIUM-30-MODULES.md : tableau de sourçage, cas D/E/F et stratégie SSR.
- audit/hero-modal-browser-measures.json : mesures structurées Chrome.
- audit/screenshots/djonia-hero-7-largeurs.jpg : planche comparative.

Important : cette formation est éducative et ne constitue pas un conseil
financier. Le trading comporte un risque réel de perte.

TESTS AUTOMATISÉS (FACULTATIF)

Le dossier tests contient les contrôles unitaires et d’intégration utilisés
avant la livraison. Ils ne sont pas nécessaires pour ouvrir le site.

Si Node.js est installé :

1. Ouvre un terminal dans le dossier du site.
2. Lance : npm install
3. Lance : npm test

Résultat attendu : 244 tests réussis, 0 échec.

Le parcours Chromium Playwright est également fourni :

1. npx playwright install chromium
2. npm run test:e2e

Lis TEST-REPORT.md pour la matrice complète de validation.
