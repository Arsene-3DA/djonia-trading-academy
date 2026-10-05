/* Contenu pédagogique approfondi. Les trois parties de chaque leçon sont :
   explication simple | fonctionnement réel | exemple guidé. */
const deepCourse = {
  1: {
    prerequisites: "Aucun prérequis. Commence ici même si tu n’as jamais ouvert un graphique.",
    chapters: [
      ["Le trading consiste à prendre une position sur l’évolution d’un prix pendant une période déterminée. Investir consiste plus souvent à détenir un actif longtemps pour participer à sa valeur future.", "Un trader prépare une hypothèse, un niveau d’entrée, un niveau qui invalide l’idée et une sortie. Un investisseur étudie davantage l’entreprise, l’économie ou la valeur à long terme. La frontière n’est pas parfaite : c’est surtout l’horizon et la méthode qui changent.", "Tu achètes une action pour dix ans parce que tu crois à l’entreprise : investissement. Tu travailles le mouvement de cette même action pendant deux heures avec un Stop Loss : trading."],
      ["Un prix existe parce que des participants acceptent d’acheter et de vendre. Ils n’ont pas tous le même objectif ni le même horizon.", "Les banques centrales, banques commerciales, entreprises, fonds, teneurs de marché, courtiers et particuliers interviennent pour se couvrir, investir, arbitrer ou spéculer. Évite donc l’idée simpliste d’un seul groupe qui contrôle chaque bougie.", "Une entreprise canadienne qui recevra des euros peut vendre l’euro à terme pour réduire son risque de change. Son opération est une couverture, pas un pari directionnel."],
      ["Les classes d’actifs sont des familles de produits : devises, actions, indices, matières premières, obligations et cryptomonnaies.", "Une action représente une part d’entreprise. Un indice mesure un panier. Une devise est toujours cotée contre une autre. Un contrat à terme ou un CFD est un dérivé : tu ne possèdes pas forcément l’actif affiché.", "EURUSD est une paire de devises ; AAPL une action ; US30 une représentation d’indice selon le fournisseur ; XAUUSD une cotation liée à l’or ; BTCUSD une paire crypto-dollar."],
      ["Le broker est l’intermédiaire qui reçoit tes ordres et te donne accès à des instruments. Le compte démo utilise de l’argent virtuel ; le compte réel utilise ton capital.", "Le broker définit les symboles disponibles, frais, spreads, heures, taille de contrat, marge et mode d’exécution. Deux symboles portant presque le même nom peuvent avoir des spécifications différentes. Vérifie aussi l’autorisation réglementaire dans ton pays.", "Avant toute démo, ouvre la fiche du symbole et note : devise du compte, volume minimum, pas de volume, valeur du tick, horaires et frais."],
      ["Le premier risque est de perdre de l’argent. Le deuxième est de perdre plus vite parce que le levier agrandit l’exposition.", "S’ajoutent le slippage, les gaps, le spread, les commissions, le risque de contrepartie, les pannes et les fraudes. Une formation sérieuse ne promet ni revenu fixe ni setup garanti.", "Si 1 % de ton compte représente 50 $, ton plan doit prévoir une perte proche de 50 $ au SL. Un gap ou un slippage peut toutefois produire une perte différente." ]
    ],
    sources: [
      ["Wikipédia — Marché financier", "https://fr.wikipedia.org/wiki/March%C3%A9_financier", "Définition générale, offre, demande et familles de marchés."],
      ["Wikipédia — Forex", "https://fr.wikipedia.org/wiki/March%C3%A9_des_changes", "Paires de devises, cotation et organisation du marché des changes."],
      ["CFTC — Risques du Forex", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_MustKnowForex.html", "Avertissement officiel sur marge, levier et pertes."]
    ]
  },
  2: {
    prerequisites: "Savoir reconnaître un actif et comprendre qu’un graphique représente l’évolution de son prix.",
    chapters: [
      ["TradingView est un espace de lecture et d’annotation des graphiques. Commence avec un graphique propre.", "Crée une watchlist courte, choisis le bon symbole et regarde le nom du fournisseur de données. Le même actif peut avoir plusieurs cotations selon la bourse, le broker ou le type de contrat.", "Recherche EURUSD. Compare deux résultats provenant de fournisseurs différents : les prix et les horaires peuvent légèrement différer."],
      ["L’axe vertical montre le prix et l’axe horizontal montre le temps.", "Zoomer change seulement ce que tu vois, pas les données. L’échelle automatique, logarithmique ou en pourcentage peut modifier l’apparence. Reviens à l’échelle automatique si le graphique paraît écrasé.", "Place ton curseur sur une bougie et lis sa date, son heure, son ouverture, son plus haut, son plus bas et sa clôture."],
      ["Le timeframe indique la durée résumée par chaque bougie.", "En M5, une bougie contient cinq minutes ; en H1, une heure ; en D1, une journée de cotation. Une bougie H1 contient normalement douze bougies M5, mais les horaires et interruptions de marché peuvent compter.", "Observe la même zone en H1 puis en M5 : la forme générale reste liée, mais le M5 révèle les oscillations cachées dans la bougie H1."],
      ["Les dessins servent à rendre ton raisonnement visible.", "Utilise une ligne horizontale pour un prix précis, un rectangle pour une zone, une ligne de tendance pour relier des points et un texte pour noter l’hypothèse. Verrouille les objets terminés afin de ne pas les déplacer par erreur.", "Trace une zone plutôt qu’une ligne parfaite autour de plusieurs réactions proches. Note le timeframe et la raison du tracé."],
      ["Les alertes surveillent une condition ; Bar Replay rejoue des données historiques ; Paper Trading simule des ordres.", "Une alerte n’est pas un ordre. En Replay, certaines données ou fonctions peuvent rester en temps réel selon le mode. Paper Trading ne reproduit pas parfaitement le slippage, les émotions ou toutes les conditions d’un broker.", "Lance Replay avant une zone historique, masque la suite, écris ton scénario, avance bougie par bougie puis compare le résultat à ton plan." ]
    ],
    sources: [
      ["TradingView — Bar Replay", "https://www.tradingview.com/support/solutions/43000712747-bar-replay-how-and-why-to-test-a-strategy-in-the-past/", "Fonctionnement et limites du Replay."],
      ["TradingView — Activer Bar Replay", "https://www.tradingview.com/support/solutions/43000474024-how-do-i-turn-bar-replay-on/", "Procédure officielle."],
      ["TradingView — Alertes", "https://www.tradingview.com/support/solutions/43000520149-introduction-to-tradingview-alerts/", "Création et rôle des alertes."]
    ]
  },
  3: {
    prerequisites: "Avoir créé un compte démo chez un fournisseur et posséder Login, mot de passe et nom du serveur.",
    chapters: [
      ["MT4 et MT5 sont des plateformes de cotation, d’analyse et surtout d’exécution.", "MT5 est plus récent et gère davantage de types d’actifs et d’ordres, mais le choix réel dépend du broker. Un compte MT4 ne se connecte pas automatiquement à MT5 et inversement.", "Télécharge la plateforme depuis une source officielle ou depuis ton broker, puis vérifie la version et l’environnement démo avant de saisir des informations."],
      ["Pour te connecter, trois éléments doivent correspondre : Login, mot de passe et serveur.", "Une erreur de serveur peut ressembler à un mauvais mot de passe. Le mot de passe investisseur donne parfois un accès en lecture seule. Ne partage jamais ton mot de passe principal dans une capture ou un message.", "Si les prix ne bougent pas, contrôle l’état de connexion, le serveur choisi, les horaires du symbole et la connexion Internet."],
      ["Market Watch liste les instruments et leurs prix ; Navigator organise comptes, indicateurs et programmes.", "Un symbole masqué peut être ajouté avec la commande d’affichage des symboles. Ouvre ensuite ses spécifications : nombre de décimales, taille du contrat, tick, volumes, swaps et horaires.", "Compare EURUSD et US30 dans les spécifications : leur volume minimum et la valeur d’un mouvement ne doivent pas être supposés identiques."],
      ["Toolbox ou Terminal affiche les positions, les ordres, l’historique et l’état du compte.", "Balance exclut généralement le résultat flottant ; Equity l’inclut. Margin est immobilisée ; Free Margin reste disponible. Margin Level compare Equity à la marge utilisée.", "Avec Balance 1 000 $ et une perte flottante de 50 $, l’Equity est approximativement 950 $ avant autres ajustements."],
      ["Un ordre est une instruction ; une transaction est son exécution ; une position est l’exposition encore ouverte.", "Un ordre peut être exécuté en plusieurs transactions. Une clôture partielle réduit le volume sans fermer toute la position. Chaque élément possède un ticket pour suivre l’historique.", "Sur démo, ouvre 0,02 lot, ferme 0,01 puis observe les tickets, volumes et résultats dans l’historique." ]
    ],
    sources: [
      ["MetaTrader 5 — Principes de base", "https://www.metatrader5.com/fr/terminal/help/trading/general_concept", "Ordres, transactions, positions et types d’ordres."],
      ["MetaTrader 5 — Exécuter des trades", "https://www.metatrader5.com/fr/terminal/help/trading/performing_deals", "Positions, marge libre et niveau de marge."],
      ["MetaTrader 5 — Market Watch", "https://www.metatrader5.com/fr/terminal/help/trading/market_watch", "Symboles et spécifications contractuelles."]
    ]
  },
  4: {
    prerequisites: "Savoir ouvrir un graphique et sélectionner une unité de temps.",
    chapters: [
      ["Bid est le prix acheteur du marché ; Ask est le prix vendeur. L’achat se fait généralement à Ask et la vente à Bid.", "Le spread est Ask moins Bid. Il peut s’élargir lorsque la liquidité baisse, pendant une annonce ou au changement de journée. Le graphique affiche souvent seulement le Bid : ton ordre peut donc être touché alors que la ligne Ask n’est pas visible.", "Bid 100,00 et Ask 100,05 donnent un spread de 0,05. Un achat démarre donc avec ce coût avant commission."],
      ["Une bougie contient Open, High, Low et Close pour une période.", "Le corps relie ouverture et clôture ; les mèches rejoignent le plus haut et le plus bas. La bougie ne dit pas toujours dans quel ordre le High et le Low ont été visités.", "O=100, H=107, L=98, C=105 : corps haussier de 100 à 105, mèche basse de 98 à 100 et haute de 105 à 107."],
      ["Une mèche montre que le prix a visité une zone puis s’en est éloigné avant la clôture.", "Elle peut refléter un rejet, une prise de liquidité ou simplement de la volatilité. Sa signification dépend du niveau, du timeframe, du spread et des bougies suivantes.", "Une longue mèche basse au milieu d’un range n’a pas la même valeur qu’une mèche sous un creux Daily suivie d’une forte clôture."],
      ["Changer de timeframe change la quantité d’information regroupée dans chaque bougie.", "Une tendance H4 peut contenir une baisse M5. Il n’y a pas contradiction : les horizons sont imbriqués. Choisis un timeframe de contexte et un timeframe d’exécution plutôt que de sauter constamment.", "Daily haussier, H1 en retracement et M5 baissier peuvent être vrais au même moment."],
      ["La volatilité mesure l’ampleur et la vitesse des variations, pas leur direction.", "Une forte volatilité augmente souvent la distance nécessaire au Stop Loss et peut élargir le spread. Elle ne signifie pas automatiquement meilleure opportunité.", "Si l’amplitude moyenne double mais que tu conserves le même SL très serré, ta probabilité d’être sorti par le bruit peut augmenter." ]
    ],
    sources: [
      ["MetaTrader 5 — Principes de base", "https://www.metatrader5.com/fr/terminal/help/trading/general_concept", "Définition officielle de Bid, Ask, ordres et exécution."],
      ["Wikipédia — Analyse technique", "https://fr.wikipedia.org/wiki/Analyse_technique", "Rôle du graphique, tendances et limites de l’approche."]
    ]
  },
  5: {
    prerequisites: "Comprendre la cotation d’une paire et savoir lire les décimales d’un prix.",
    chapters: [
      ["Le pip est une unité conventionnelle du Forex. Pour beaucoup de paires, il correspond à la quatrième décimale.", "Sur les paires en yen, le pip est souvent la deuxième décimale. Une cotation supplémentaire affiche parfois une pipette, soit un dixième de pip. Les conventions doivent être vérifiées sur la plateforme.", "EURUSD de 1,1000 à 1,1015 = 15 pips. USDJPY de 150,20 à 150,35 = 15 pips selon la convention habituelle."],
      ["Le point plateforme est souvent le plus petit incrément affiché ; le tick est le plus petit changement ou une mise à jour de prix selon le contexte.", "Sur un symbole à cinq décimales, 10 points plateforme peuvent former 1 pip. Pour les contrats à terme, tick size et tick value sont définis par le contrat.", "Si Point=0,00001 sur EURUSD, un pip de 0,00010 correspond à 10 points plateforme."],
      ["La taille de contrat indique ce que représente un lot.", "Sur certaines paires Forex, 1 lot standard correspond souvent à 100 000 unités de devise de base. Sur l’or, les indices ou les CFD, le contrat peut être très différent selon le broker.", "Ne transfère jamais la valeur d’un lot EURUSD vers XAUUSD : ouvre les spécifications de chaque symbole."],
      ["1,00 lot, 0,10 lot et 0,01 lot représentent des volumes, pas des pourcentages de ton compte.", "La valeur monétaire du mouvement varie avec le volume. Si 1 lot vaut 10 $ par pip dans un exemple, 0,10 vaut 1 $ et 0,01 vaut 0,10 $, toutes choses égales par ailleurs.", "Un SL de 30 pips à 0,10 $/pip implique environ 3 $ de risque avant frais."],
      ["La fiche du symbole est la référence opérationnelle de ta plateforme.", "Relève au minimum : digits, point, tick size, tick value, contract size, volume minimal, maximal et step, devises de marge/profit, swaps et sessions.", "Crée une fiche séparée pour EURUSD, GBPJPY, XAUUSD, US30 et NAS100 chez ton broker démo." ]
    ],
    sources: [
      ["Wikipédia — Forex", "https://fr.wikipedia.org/wiki/March%C3%A9_des_changes", "Cotation des paires et convention du pip."],
      ["MetaTrader 5 — Market Watch", "https://www.metatrader5.com/fr/terminal/help/trading/market_watch", "Accès aux spécifications détaillées d’un instrument."],
      ["CFTC — Glossaire des futures", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CFTCGlossary/index.htm", "Terminologie officielle des marchés à terme."]
    ]
  },
  6: {
    prerequisites: "Savoir distinguer volume, taille de contrat et valeur monétaire d’un mouvement.",
    chapters: [
      ["Le levier permet de contrôler une exposition plus grande que l’argent immobilisé en marge.", "Un levier 1:20 signifie qu’une exposition de 20 000 $ peut théoriquement demander environ 1 000 $ de marge, avant règles particulières. Le levier ne fixe pas ton risque : le volume et le Stop Loss le font.", "Deux traders avec le même levier peuvent risquer 0,5 % ou 10 % selon leur taille de position."],
      ["La marge utilisée est la garantie immobilisée pour maintenir les positions.", "La marge initiale, de maintien et couverte peuvent être calculées différemment selon le symbole et le compte. La marge n’est pas la perte maximale : une position peut perdre au-delà de la marge immobilisée selon le produit et les règles.", "Marge 500 $ ne signifie pas risque limité à 500 $. Le mouvement du prix et le volume déterminent la perte."],
      ["Balance est le résultat comptabilisé ; Equity ajoute les profits et pertes flottants.", "Free Margin est généralement Equity moins Margin. Lorsque les pertes flottantes augmentent, l’Equity et la marge libre diminuent, même si la Balance reste temporairement inchangée.", "Balance 2 000 $, perte flottante 300 $, marge 400 $ : Equity ≈1 700 $ et Free Margin ≈1 300 $, sous réserve des règles du broker."],
      ["Margin Level indique combien d’Equity existe par rapport à la marge utilisée.", "Formule habituelle : Equity ÷ Margin × 100. Le seuil critique varie selon le broker et le type de compte ; il faut le vérifier dans le contrat client.", "Equity 900 $, marge 300 $ : Margin Level = 300 %. Une nouvelle perte le fera baisser."],
      ["Margin Call avertit d’un niveau insuffisant ; Stop Out peut déclencher des fermetures forcées.", "Les seuils et l’ordre de fermeture varient. Un marché rapide peut produire une exécution moins favorable. Le plan doit éviter de s’approcher de ces seuils.", "Si ton système dépend du fait que le broker fermera exactement au seuil annoncé, ton risque n’est pas correctement contrôlé." ]
    ],
    sources: [
      ["MetaTrader 5 — Exécuter des trades", "https://www.metatrader5.com/fr/terminal/help/trading/performing_deals", "Equity, marge libre et niveau de marge."],
      ["MetaTrader 5 — Market Watch", "https://www.metatrader5.com/fr/terminal/help/trading/market_watch", "Marge initiale et de maintien par symbole."],
      ["CFTC — Levier et marge Forex", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_MustKnowForex.html", "Le levier amplifie gains et pertes."]
    ]
  },
  7: {
    prerequisites: "Comprendre Bid, Ask, spread et savoir situer un prix actuel sur le graphique.",
    chapters: [
      ["Un Market Buy achète maintenant ; un Market Sell vend maintenant.", "Le prix demandé n’est pas toujours le prix final : l’exécution dépend du mode, de la liquidité et du slippage. L’achat utilise généralement Ask et la vente Bid.", "Si Ask vaut 1,1002 et Bid 1,1000, un achat immédiat est demandé autour de 1,1002, pas 1,1000."],
      ["Un Buy Limit attend un prix inférieur ; un Sell Limit attend un prix supérieur.", "Ces ordres cherchent un retour vers une zone. Ils peuvent être exécutés sans confirmation supplémentaire si le prix touche le niveau, sauf règle ou type d’ordre différent.", "Prix 100 : Buy Limit 95 pour acheter un repli ; Sell Limit 105 pour vendre un rebond."],
      ["Un Buy Stop attend une hausse jusqu’au niveau ; un Sell Stop attend une baisse.", "Ils servent souvent à intervenir après un déclenchement. Lors d’un gap, le prix réel peut être moins favorable que le niveau demandé.", "Prix 100 : Buy Stop 104 pour acheter si le marché monte ; Sell Stop 96 pour vendre s’il descend."],
      ["Stop Loss limite la perte prévue ; Take Profit prépare une sortie favorable ; Break Even déplace le SL vers l’entrée.", "Le SL n’est pas garanti au prix exact. Le Break Even n’est pas toujours sans perte à cause du spread et des frais. Toute modification doit appartenir à une règle testée.", "Entrée 100, SL 98, TP 104 donne un risque de 2 et une cible de 4, soit 2R avant coûts."],
      ["Trailing Stop suit le prix selon une distance ou une logique programmée.", "Il peut protéger un mouvement mais aussi sortir trop tôt dans un marché volatil. Sur certaines plateformes, il fonctionne côté terminal et nécessite que l’application reste connectée.", "Un trailing de 20 points n’est pas une stratégie complète : précise quand il démarre et sur quel actif." ]
    ],
    sources: [
      ["MetaTrader 5 — Principes de base", "https://www.metatrader5.com/fr/terminal/help/trading/general_concept", "Définitions officielles Market, Limit, Stop, SL et TP."],
      ["MetaTrader 5 — Exécuter des trades", "https://www.metatrader5.com/fr/terminal/help/trading/performing_deals", "Ouverture et gestion des positions."]
    ]
  },
  8: {
    prerequisites: "Maîtriser lots, points/pips et savoir placer une invalidation logique.",
    chapters: [
      ["Le risque monétaire est la somme maximale prévue à perdre si le SL est exécuté comme attendu.", "Calcule-le avant de regarder le lot : Capital × Risque %. Utilise une Equity de référence cohérente et n’arrondis pas le pourcentage de manière avantageuse.", "5 000 $ × 0,5 % = 25 $. Ce 25 $ devient le budget de risque du trade."],
      ["Le Stop Loss se place là où l’idée n’est plus valable, pas à une distance choisie pour obtenir un gros lot.", "Mesure ensuite l’écart entrée-SL dans l’unité correcte. Ajoute si nécessaire spread, commission et marge de slippage dans ton modèle.", "Entrée EURUSD 1,1050 et SL 1,1025 donnent 25 pips selon la convention habituelle."],
      ["La valeur par pip ou point convertit le mouvement de prix en argent.", "Elle dépend du symbole, du contrat, du volume et parfois du taux de conversion vers la devise du compte. La tick value affichée par la plateforme est plus fiable qu’une valeur mémorisée.", "Si 1 lot vaut 10 $/pip et que tu prends 0,20 lot, chaque pip vaut environ 2 $ dans cet exemple."],
      ["Taille = risque monétaire ÷ (distance du SL × valeur par unité pour 1 lot).", "Le résultat doit être arrondi au pas de volume autorisé, généralement vers le bas pour ne pas dépasser le risque. Recalcule ensuite la perte estimée avec la taille arrondie.", "50 $ ÷ (25 pips × 10 $/pip) = 0,20 lot. Vérification : 25 × 10 × 0,20 = 50 $."],
      ["Chaque actif exige sa propre unité et ses propres spécifications.", "EURUSD, GBPJPY, XAUUSD, US30 et NAS100 ne partagent pas automatiquement la même contract size ni la même valeur de point. Les symboles CFD peuvent varier fortement entre brokers.", "Crée une feuille par symbole avec source, date et capture des spécifications avant d’utiliser un calculateur." ]
    ],
    sources: [
      ["MetaTrader 5 — Market Watch", "https://www.metatrader5.com/fr/terminal/help/trading/market_watch", "Tick value, taille du contrat et pas de volume."],
      ["CFTC — Risque de marge", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_MustKnowForex.html", "Pourquoi le calcul précède l’usage du levier."],
      ["CIRO — Divulgation du risque de levier", "https://www.ciro.ca/media/10041/download?inline=", "Risque lié à l’argent emprunté et au levier."]
    ]
  },
  9: {
    prerequisites: "Savoir calculer la taille de position et exprimer un résultat en R.",
    chapters: [
      ["Le risque par trade est une limite ; le risque quotidien et hebdomadaire empêchent l’accumulation.", "Définis combien de trades et de pertes sont autorisés. Lorsque la limite est atteinte, la plateforme se ferme : aucune tentative de récupération.", "Risque 0,5 % par trade, maximum deux pertes : limite quotidienne théorique −1 %, si aucune position corrélée supplémentaire."],
      ["Risk/Reward compare perte prévue et gain prévu.", "R:R 2:1 signifie viser 2R pour 1R risqué. Il ne donne pas la probabilité de réussite. Une stratégie à petit taux de réussite peut être positive si ses gains moyens compensent.", "4 gains à +2R et 6 pertes à −1R donnent +2R sur dix trades avant coûts."],
      ["Drawdown est la baisse depuis un sommet du capital jusqu’au creux suivant.", "Une perte de x % exige un gain supérieur à x % pour revenir au départ, car la base est plus petite. Plus le drawdown grandit, plus la récupération devient difficile.", "100 tombe à 80 : −20 %. Pour revenir à 100, il faut +25 % sur 80."],
      ["Expectancy mesure le résultat moyen attendu par trade dans un échantillon.", "Formule : taux de gain × gain moyen − taux de perte × perte moyenne. Ajoute frais et slippage. Une expectancy passée positive ne garantit pas le futur.", "45 % à +2R et 55 % à −1R : 0,45×2 − 0,55×1 = +0,35R/trade."],
      ["Les positions corrélées peuvent cacher une exposition plus grande que prévu.", "Acheter plusieurs indices américains au même moment ou plusieurs paires liées au dollar peut concentrer le même scénario. Le Risk of Ruin dépend du risque, de l’avantage et de la variabilité.", "Trois positions à 1 % très corrélées peuvent se comporter comme environ 3 % exposés au même événement." ]
    ],
    sources: [
      ["CFTC — Huit points avant de trader le Forex", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_MustKnowForex.html", "Levier, pertes et devoir de vigilance."],
      ["CIRO — Glossaire de l’investissement", "https://www.ciro.ca/office-investor/investing-basics/glossary-common-investing-terms", "Notions de risque, marge et indices."],
      ["CIRO — Règles et risque de levier", "https://www.ciro.ca/media/10041/download?inline=", "Avertissement réglementaire sur le financement par emprunt."]
    ]
  },
  10: {
    prerequisites: "Savoir lire une bougie et changer correctement de timeframe.",
    chapters: [
      ["Un Swing High est un sommet entouré de prix plus bas ; un Swing Low est un creux entouré de prix plus hauts.", "La force d’un swing dépend de sa visibilité, du timeframe et du mouvement qui suit. Choisis une règle constante plutôt que de modifier les points après coup.", "Sur H1, marque d’abord les sommets/creux évidents visibles sans zoom extrême, puis affine si nécessaire."],
      ["HH signifie sommet plus haut, HL creux plus haut, LH sommet plus bas et LL creux plus bas.", "Une tendance haussière montre généralement HH/HL ; une baisse LH/LL. Une seule rupture ne suffit pas toujours : observe la séquence et le swing de référence.", "100→110→104→115 forme HH 110, HL 104, puis nouveau HH 115 si le creux précédent pertinent était sous 104."],
      ["Une tendance progresse ; un range oscille entre deux bornes.", "Dans un range, le milieu offre souvent moins d’information que les extrêmes. Une tendance peut ralentir puis devenir range avant de poursuivre ou se retourner.", "Si le prix alterne plusieurs fois entre 100 et 110 sans nouveaux extrêmes durables, traite la zone comme range jusqu’à preuve contraire."],
      ["Support et résistance sont des zones où le prix a déjà réagi.", "Ils ne sont pas des murs. Une zone devient pertinente par le nombre, la qualité et le contexte des réactions, mais trop de tests peuvent aussi consommer les ordres disponibles.", "Trace un rectangle couvrant plusieurs mèches proches plutôt qu’une ligne arbitrairement exacte."],
      ["Breakout est une sortie de zone ; faux breakout est une sortie qui ne tient pas ; retest est un retour sur la zone cassée.", "Définis avant l’analyse si tu exiges une clôture, un déplacement ou un volume. Tous les breakouts ne retestent pas et tous les retests ne réussissent pas.", "Une clôture H1 au-dessus de 110 puis retour vers 110 et reprise constitue un retest potentiel, pas un achat automatique." ]
    ],
    sources: [
      ["Wikipédia — Analyse technique", "https://fr.wikipedia.org/wiki/Analyse_technique", "Graphiques, tendances, supports/résistances et controverses."],
      ["TradingView — Bar Replay", "https://www.tradingview.com/support/solutions/43000712747-bar-replay-how-and-why-to-test-a-strategy-in-the-past/", "Pratique historique sans voir la suite."]
    ]
  },
  11: {
    prerequisites: "Identifier correctement HH, HL, LH, LL et les swings significatifs.",
    chapters: [
      ["La structure externe décrit les grands swings ; la structure interne décrit les oscillations à l’intérieur.", "Le choix dépend du timeframe et de la règle de swing. Mélanger les deux produit des BOS contradictoires. Commence par l’externe, puis descends seulement pour l’exécution.", "Un repli M5 peut former plusieurs LH/LL tout en restant à l’intérieur d’un HL H1."],
      ["BOS, ou Break of Structure, désigne généralement une cassure dans le sens de la structure suivie.", "Certaines écoles exigent une clôture du corps, d’autres acceptent un dépassement. Écris ta convention et nomme le swing exact cassé.", "Dans une hausse, casser le HH précédent avec clôture peut être classé BOS haussier selon ta règle."],
      ["CHoCH, Change of Character, signale un comportement opposé à la structure précédente.", "Il s’agit d’une alerte, pas d’une confirmation définitive. Le prix peut faire un CHoCH interne puis poursuivre la tendance externe.", "Une cassure du dernier HL interne après une hausse peut avertir d’un retracement plus profond sans retourner le Daily."],
      ["Une mèche au-delà d’un niveau et une clôture au-delà ne racontent pas exactement la même chose.", "La mèche montre un passage temporaire ; la clôture montre où la période s’est terminée. Ta règle doit préciser le timeframe de validation.", "Une mèche M5 sous un creux suivie d’une clôture au-dessus peut être un sweep ; une clôture H1 dessous peut être une cassure selon le plan."],
      ["Continuation et retournement restent des scénarios probabilistes.", "Pour parler de retournement, cherche une séquence : cassure significative, déplacement, échec de reprise et nouvelle structure. Une seule bougie ne suffit pas.", "Après un CHoCH baissier, attends un LH puis un LL validé si ta stratégie exige une structure baissière complète." ]
    ],
    sources: [["Wikipédia — Analyse technique", "https://fr.wikipedia.org/wiki/Analyse_technique", "Cadre général ; BOS et CHoCH sont des termes méthodologiques non normalisés."]]
  },
  12: {
    prerequisites: "Maîtriser la structure et savoir distinguer une mèche d’une clôture.",
    chapters: [
      ["BSL désigne la liquidité supposée au-dessus des sommets ; SSL celle sous les creux. *(vision ICT)*", "On suppose que des stops et ordres de déclenchement peuvent s’y concentrer. Un graphique ne révèle pas tous les ordres : présente cela comme une hypothèse de localisation.", "Au-dessus de plusieurs sommets égaux, des stops de vendeurs peuvent devenir des ordres d’achat lorsqu’ils sont déclenchés."],
      ["Equal Highs et Equal Lows sont des sommets ou creux proches.", "Ils n’ont pas besoin d’être parfaitement identiques. Définis une tolérance cohérente avec la volatilité et le timeframe.", "Deux sommets séparés de trois points sur US30 peuvent être égaux sur H1 mais distincts sur M1."],
      ["La liquidité externe se situe hors de la structure choisie ; l’interne se situe à l’intérieur.", "La classification dépend donc du range ou swing de référence. Change le cadre et la même zone peut changer de catégorie.", "Dans un range 100–120, un creux 108 est interne ; sous 100 se trouve une liquidité externe potentielle."],
      ["Sweep décrit un dépassement suivi d’un retour ; grab désigne parfois un mouvement plus rapide. Les définitions varient.", "Inducement est l’interprétation qu’un mouvement attire des participants avant une autre cible. On ne peut pas prouver l’intention depuis le graphique seul.", "Le prix dépasse 120, atteint 121 puis clôture à 119 : sweep potentiel si 120 était un niveau préparé."],
      ["Draw on Liquidity est une cible supposée vers laquelle le prix pourrait se diriger. *(vision ICT)*", "Une cible n’est pas un aimant certain. Combine contexte, structure et invalidation ; prépare aussi le scénario opposé.", "Si le Daily reste haussier sous un ancien sommet, ce sommet peut être une cible, mais une cassure du HL invalide le scénario." ]
    ],
    sources: [["Wikipédia — Analyse technique", "https://fr.wikipedia.org/wiki/Analyse_technique", "Base graphique ; terminologie ICT/SMC indiquée comme interprétation méthodologique."]]
  },
  13: {
    prerequisites: "Structure, liquidité, swings, impulsion et retracement déjà acquis.",
    chapters: [
      ["HTF signifie timeframe supérieur ; LTF timeframe inférieur ; POI une zone d’intérêt.", "Le HTF situe le contexte, le POI limite la zone à observer et le LTF peut fournir un déclencheur. Un POI sans contexte devient seulement un rectangle.", "Daily donne le biais, H1 la zone et M5 la confirmation selon un plan possible."],
      ["Displacement est une expansion rapide ; FVG est un déséquilibre à trois bougies. *(vision ICT)*", "Pour un FVG haussier, la mèche haute de la bougie 1 reste sous la mèche basse de la bougie 3. Si elles se chevauchent, ce critère n’est pas présent.", "Mesure la zone exacte entre les deux mèches ; ne l’élargis pas pour faire entrer le prix."],
      ["Un Order Block est souvent la dernière bougie opposée avant un déplacement ayant cassé une structure. *(vision ICT/SMC)*", "D’autres définitions existent. Exige un déplacement, une cassure pertinente et une invalidation. Un Breaker est une zone d’Order Block échouée puis utilisée dans l’autre sens selon la méthode.", "Toute bougie rouge avant une hausse n’est pas automatiquement un bullish Order Block."],
      ["Mitigation décrit le retour du prix dans une zone où des ordres seraient rééquilibrés selon la méthodologie.", "Le graphique montre un retour, pas les motivations exactes des acteurs. Utilise donc une formulation prudente et des règles observables.", "Prix retourne dans un OB, réagit puis repart : observation. Dire qu’une institution a nécessairement mitigé est une interprétation."],
      ["Premium est la moitié haute d’un range ; Discount la moitié basse ; Equilibrium le milieu. OTE est une zone de retracement Fibonacci popularisée par ICT.", "Le range doit être défini avant le calcul. Changer ses extrêmes après coup déplace toutes les zones et rend le test invalide.", "Dans un range 100–120, l’équilibre est 110 ; sous 110 = discount relatif, au-dessus = premium relatif." ]
    ],
    sources: [["Wikipédia — Analyse technique", "https://fr.wikipedia.org/wiki/Analyse_technique", "L’analyse technique n’est pas une science exacte ; les concepts ICT/SMC ne sont pas des normes universelles."]]
  },
  14: {
    prerequisites: "Range, support/résistance, volume, structure et fausses cassures.",
    chapters: [
      ["Wyckoff cherche à lire l’interaction offre-demande et la progression d’une campagne dans un range.", "Les phases A à E organisent la fin d’une tendance, la construction d’une cause et la sortie éventuelle. Tous les ranges ne suivent pas le schéma complet.", "Avant d’étiqueter, trace seulement les bornes et décris objectivement les réactions."],
      ["Dans une accumulation potentielle, Phase A arrête la baisse ; B construit la cause ; C teste ; D montre la force ; E sort du range.", "PS, SC, AR et ST servent à définir les premières réactions. Le volume et l’amplitude doivent être comparés relativement aux événements voisins.", "Un Selling Climax possible se juge par le contexte de baisse, l’expansion, le volume et la réaction automatique."],
      ["Spring passe sous le support puis revient ; Test vérifie l’offre ; SOS montre la force ; LPS est un dernier repli relatif.", "Un Spring n’est pas obligatoire. Un bon test montre souvent moins d’offre, mais aucune forme ne garantit une hausse.", "Après le Spring, observe si le prix revient avec moins d’amplitude et tient au-dessus du creux."],
      ["La distribution transpose la logique après une hausse : BC, AR, ST, Upthrust ou UTAD, SOW et LPSY.", "UTAD survient après une progression dans la distribution potentielle ; un simple dépassement de résistance n’est pas suffisant pour le nommer.", "Cherche ensuite une faiblesse confirmée et l’échec des reprises, pas seulement une longue mèche."],
      ["L’étiquetage Wyckoff est une hypothèse qui évolue avec les preuves.", "Garde un scénario principal et une alternative. Si le prix accepte durablement au-dessus du range, une distribution supposée peut être invalidée.", "Écris : « distribution possible si SOW sous support ; invalidée si acceptation au-dessus d’UTAD » plutôt qu’une certitude." ]
    ],
    sources: [["Wikipédia — Richard Wyckoff", "https://fr.wikipedia.org/wiki/Richard_Wyckoff", "Contexte historique de la méthode Wyckoff."], ["Wikipédia — Analyse technique", "https://fr.wikipedia.org/wiki/Analyse_technique", "Cadre, tendances et limites de l’analyse graphique."]]
  },
  15: {
    prerequisites: "Connaître séparément Wyckoff et ICT/SMC avant de les comparer.",
    chapters: [
      ["Spring et sweep de SSL peuvent partager une excursion sous des creux.", "Le Spring appartient à une accumulation potentielle avec phases et tests. Le sweep de SSL peut apparaître dans d’autres contextes. La ressemblance visuelle ne suffit pas.", "Si aucun range ni événement Wyckoff précédent n’est identifiable, garde le mot sweep plutôt que Spring."],
      ["UTAD et sweep de BSL peuvent tous deux dépasser des sommets.", "UTAD suppose une distribution avancée après des tests. Le sweep ICT se concentre davantage sur le pool de liquidité et la réaction structurelle.", "Une mèche au-dessus d’un sommet isolé peut être un sweep, mais pas nécessairement un UTAD."],
      ["SOS et displacement peuvent tous deux être des expansions haussières.", "SOS décrit la domination de la demande dans la phase D ; displacement décrit la qualité impulsive et peut laisser un FVG.", "Une grande bougie peut être displacement sans être SOS si aucun range Wyckoff n’existe."],
      ["SOW et déplacement baissier peuvent se ressembler.", "SOW est lié à une distribution et à la perte de support. L’expansion baissière ICT peut survenir n’importe où selon le scénario.", "Ajoute toujours le contexte méthodologique dans ton journal."],
      ["La meilleure fusion est une hiérarchie, pas un empilement de labels.", "Choisis une méthode principale pour la structure et utilise l’autre comme information complémentaire. Si elles se contredisent, ta règle de priorité doit être écrite avant le trade.", "Wyckoff pour le contexte du range, ICT pour le déclencheur LTF : c’est une règle possible à tester, pas une vérité universelle." ]
    ],
    sources: [["Wikipédia — Richard Wyckoff", "https://fr.wikipedia.org/wiki/Richard_Wyckoff", "Origine de la lecture Wyckoff."], ["Wikipédia — Analyse technique", "https://fr.wikipedia.org/wiki/Analyse_technique", "Cadre général et controverses."]]
  },
  16: {
    prerequisites: "Structure de marché, liquidité et zones techniques maîtrisées séparément.",
    chapters: [
      ["Weekly et Daily répondent à la question : où se situe le prix dans le paysage large ?", "Repère tendance ou range, extrêmes, zones majeures et calendrier économique. Évite d’utiliser ces unités pour un déclencheur à quelques points.", "Daily haussier vers un ancien sommet : contexte, pas ordre d’achat immédiat."],
      ["H4 et H1 construisent le scénario opérationnel.", "Ils montrent structure intermédiaire, zones de retracement et niveaux d’invalidation compatibles avec un trade intraday ou swing. Leur rôle doit correspondre à ton horizon.", "Daily haussier, H4 revient dans une zone, H1 ralentit : condition de préparation."],
      ["M15 et M5 servent à observer l’arrivée dans la zone et le déclencheur.", "Cherche seulement les éléments prévus : sweep, cassure, déplacement ou pattern. Trop de confirmations créent une règle impossible à reproduire.", "Dans la zone H1, M5 fait sweep puis clôture au-dessus d’un swing : déclencheur possible."],
      ["M1 montre beaucoup de détails mais aussi beaucoup de bruit.", "Le spread représente une part plus grande des petits mouvements. Utilise M1 uniquement si tes données montrent qu’il améliore le setup.", "Un Stop de deux points peut être régulièrement touché par spread et oscillations normales."],
      ["Une analyse top-down se résume en contexte, zone, déclencheur et invalidation.", "Prépare le scénario haussier et baissier. Si le prix reste entre les deux conditions, ne trade pas.", "Haussier si zone tient et CHoCH M5 ; baissier si H1 clôture sous le swing ; sinon attente." ]
    ],
    sources: [["TradingView — Bar Replay", "https://www.tradingview.com/support/solutions/43000712747-bar-replay-how-and-why-to-test-a-strategy-in-the-past/", "Tester une analyse multi-timeframe sur historique."], ["Wikipédia — Analyse technique", "https://fr.wikipedia.org/wiki/Analyse_technique", "Tendances et horizons d’analyse."]]
  },
  17: {
    prerequisites: "Savoir lire l’heure du graphique, connaître son fuseau et tracer des hauts/bas.",
    chapters: [
      ["La session asiatique regroupe plusieurs centres, notamment Sydney, Tokyo, Hong Kong et Singapour.", "Définis exactement la plage que tu appelles Asian Range. Les actifs n’ont pas tous la même activité et les jours fériés modifient la liquidité.", "Note dans ton plan : 20 h–0 h New York, par exemple, au lieu d’écrire seulement « Asie »."],
      ["Londres apporte souvent davantage d’activité sur les paires européennes.", "London Open ne garantit pas une cassure. Observe le calendrier, le spread et la position par rapport au range asiatique.", "Si Londres ouvre au milieu du range sans contexte, l’absence de trade peut être la bonne décision."],
      ["New York combine flux Forex et ouverture des marchés américains.", "Les publications à 8 h 30 heure de New York et l’ouverture cash peuvent augmenter la volatilité, mais les horaires exacts dépendent de l’actif.", "Vérifie toujours calendrier et fuseau avant de conserver un ordre en attente."],
      ["Les Kill Zones sont des fenêtres popularisées par ICT. *(vision ICT)*", "Elles concentrent l’observation mais ne sont pas des signaux. La définition horaire varie selon la source et le changement saisonnier.", "Écris ta plage, ton fuseau, ta date et le setup exigé dans cette plage."],
      ["L’heure d’été ne change pas le même jour dans toutes les régions.", "Pendant certaines semaines, l’écart entre Londres, New York et Montréal change temporairement. Les heures de serveur du broker peuvent utiliser un autre fuseau.", "Conserve dans le journal : heure locale, fuseau IANA et heure plateforme pour éviter les erreurs de backtest." ]
    ],
    sources: [["Wikipédia — Forex", "https://fr.wikipedia.org/wiki/March%C3%A9_des_changes", "Marché mondial, sessions et cotation continue en semaine."], ["Timeanddate — Heure d’été", "https://www.timeanddate.com/time/dst/", "Dates de changement selon les régions."]]
  },
  18: {
    prerequisites: "Structure, sessions et lecture du contexte déjà acquises.",
    chapters: [
      ["Le volume indique une quantité d’activité, mais sa signification dépend de la source.", "Sur une bourse centralisée, le volume représente les transactions de cette place. Sur le Forex OTC ou certains CFD, le tick volume peut compter les changements de prix du fournisseur.", "Ne compare pas directement le volume d’un CFD à celui d’un contrat future sans noter la source."],
      ["Bid/Ask volume classe les transactions exécutées ; Delta calcule Ask moins Bid.", "Un Delta positif signifie plus de volume agressif classé à l’Ask dans la donnée observée, pas automatiquement hausse future. Le Cumulative Delta additionne les deltas au fil du temps.", "Delta +800 près d’une résistance est une observation ; attends la réaction du prix avant toute conclusion."],
      ["Le Footprint répartit les volumes Bid et Ask par niveau de prix.", "Une imbalance compare un côté à l’autre selon un ratio configuré. Change le ratio, la taille de bougie ou la source et le motif peut changer.", "Note toujours le réglage utilisé dans ton backtest."],
      ["Absorption décrit beaucoup d’agression sans progression ; exhaustion décrit un épuisement relatif de l’activité.", "Ces lectures sont interprétatives. Elles deviennent utiles lorsqu’elles coïncident avec une zone et une réaction structurelle.", "Achats agressifs massifs sous résistance sans nouveau plus haut : absorption vendeuse possible, non certitude."],
      ["Volume Profile répartit le volume par prix ; POC est le niveau le plus traité ; VAH/VAL bornent la Value Area choisie.", "Developing POC se déplace pendant la formation du profil. La période et le pourcentage de Value Area doivent être constants.", "Compare un profil de session à un profil hebdomadaire seulement si leurs objectifs sont clairement séparés." ]
    ],
    sources: [["CFTC — Glossaire des futures", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CFTCGlossary/index.htm", "Terminologie de marché centralisé."], ["TradingView — Fonctions et tarifs", "https://www.tradingview.com/pricing/", "Disponibilité des outils Volume Profile et Footprint selon l’offre."]]
  },
  19: {
    prerequisites: "Contexte HTF, structure, liquidité, POI et calcul de position.",
    chapters: [
      ["Le contexte décrit l’environnement ; le biais décrit le scénario préféré sous conditions.", "Un biais n’est pas une obligation d’entrer. Il doit inclure une condition d’invalidation et un scénario alternatif.", "Biais haussier tant que le HL H4 tient ; neutre si le prix reste au milieu ; baissier après clôture H4 sous le HL."],
      ["Liquidité et POI indiquent où attendre, pas quand entrer.", "Le POI doit provenir d’une règle : support, FVG, OB, niveau de session ou volume. Limite le nombre de zones.", "Si trois POI se chevauchent vaguement, choisis le critère prioritaire ou ne trade pas."],
      ["Sweep et confirmation construisent le déclencheur.", "Décide si le sweep est obligatoire, quelle structure doit casser et quel timeframe valide. N’ajoute pas une confirmation après avoir vu le résultat.", "Sweep de SSL + clôture M5 au-dessus du swing + displacement : séquence définie."],
      ["Entrée, SL et TP doivent être cohérents avant l’ordre.", "Le SL se place après l’invalidation ; la taille est calculée ensuite ; le TP doit rester réaliste par rapport aux obstacles et au plan.", "Si le SL logique rend le R:R insuffisant, le bon choix est de ne pas entrer."],
      ["Le non-trade et le faux signal font partie du setup.", "Écris les conditions interdites : annonce proche, spread large, milieu de range, limite journalière atteinte ou structure ambiguë.", "Un setup visuellement parfait pris après la limite de perte reste une violation du plan." ]
    ],
    sources: [["Wikipédia — Analyse technique", "https://fr.wikipedia.org/wiki/Analyse_technique", "Scénarios, tendances et niveau d’invalidation."], ["CFTC — Risques du Forex", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_MustKnowForex.html", "Aucune méthode n’annule le risque de perte."]]
  },
  20: {
    prerequisites: "Avoir défini et observé un setup précis.",
    chapters: [
      ["Une stratégie commence par son univers : actifs, jours, horaires et timeframes autorisés.", "Limiter l’univers réduit les variables. Les règles peuvent être différentes entre EURUSD et US30 ; sépare les résultats.", "Version 1 : EURUSD seulement, Londres, H1/M5, hors annonces majeures."],
      ["Les règles d’entrée décrivent contexte, zone et déclencheur.", "Chaque condition obligatoire répond par oui/non. Une condition facultative peut être enregistrée pour mesurer si elle améliore vraiment les résultats.", "HTF aligné oui ; liquidité identifiée oui ; POI atteint oui ; confirmation M5 non : aucun trade."],
      ["La gestion précise SL, TP, sorties partielles et Break Even.", "Ne change pas plusieurs variables à la fois pendant le test. Compare ensuite des versions séparées de la stratégie.", "Version A : sortie complète à 2R. Version B : moitié à 1R, reste à 2R. Résultats séparés."],
      ["Les limites quotidiennes protègent contre la dégradation du jugement.", "Définis risque total, nombre d’ordres, pertes consécutives et conduite après une erreur. Inclue les positions corrélées.", "Maximum deux trades ou −1R ; le premier seuil atteint termine la session."],
      ["Les checklists réduisent l’improvisation avant et après.", "Avant : marché, nouvelle, setup, risque, ordre. Après : capture, résultat, respect, émotion, correction. Une checklist trop longue ne sera pas utilisée.", "Teste une checklist de huit points pendant 20 occurrences et retire uniquement les points réellement redondants." ]
    ],
    sources: [["TradingView — Bar Replay", "https://www.tradingview.com/support/solutions/43000712747-bar-replay-how-and-why-to-test-a-strategy-in-the-past/", "Tester une stratégie sur l’historique."], ["MetaTrader 5 — Tester une stratégie", "https://www.metatrader5.com/fr/terminal/help/algotrading/testing", "Test et historique des opérations sur MT5."]]
  },
  21: {
    prerequisites: "Une stratégie écrite dont les règles ne changent pas pendant l’échantillon.",
    chapters: [
      ["Le protocole de backtest fixe marché, période, horaires, frais et règles avant de commencer.", "Masque les bougies futures et avance dans l’ordre chronologique. Enregistre également les setups manqués et les jours sans trade.", "Écris la version de stratégie V1 et ne la modifie qu’après avoir terminé l’échantillon."],
      ["20 trades servent à détecter les erreurs grossières ; 50 stabilisent une première lecture ; 100 montrent mieux la variabilité.", "La qualité des données compte plus que le nombre seul. Un échantillon doit inclure plusieurs conditions de marché et éviter la sélection des plus beaux graphiques.", "Teste une période définie de début à fin, pas vingt captures choisies après coup."],
      ["Win Rate est gains ÷ total ; Average Win et Average Loss sont les moyennes séparées.", "Exprime les résultats en R pour comparer des trades de tailles différentes. Classe Break Even et sorties partielles de façon constante.", "8 gains sur 20 = 40 %. Si ces gains totalisent 16R, Average Win = 2R."],
      ["Expectancy combine fréquence et taille ; Profit Factor compare gains bruts aux pertes brutes.", "Expectancy positive et Profit Factor supérieur à 1 décrivent l’échantillon, pas une certitude future. Déduis les frais.", "Gains 30R, pertes 20R : Profit Factor 1,5. Résultat net avant frais : +10R."],
      ["Max Drawdown mesure le pire recul sommet-creux ; la série de pertes mesure les pertes successives.", "Ces données servent à choisir un risque supportable. Un backtest sans drawdown réaliste est souvent incomplet ou biaisé.", "Si le capital passe de +8R à +1R avant de remonter, drawdown de 7R sur cette séquence." ]
    ],
    sources: [["TradingView — Bar Replay", "https://www.tradingview.com/support/solutions/43000712747-bar-replay-how-and-why-to-test-a-strategy-in-the-past/", "Simulation historique et limites du Replay."], ["TradingView — Trading historique", "https://www.tradingview.com/support/solutions/43000691889-learn-to-trade-on-historical-data/", "Mode Replay Trading distinct de Paper Trading."], ["MetaTrader 5 — Strategy Tester", "https://www.metatrader5.com/fr/terminal/help/algotrading/testing", "Données de test et historique des opérations."]]
  },
  22: {
    prerequisites: "Avoir exécuté ou backtesté des trades avec un setup défini.",
    chapters: [
      ["Avant le trade, enregistre ce qui peut être vérifié : actif, heure, contexte, zone, entrée, SL, TP et risque.", "Ajoute une capture non modifiée et la version de stratégie. L’objectif est de pouvoir reconstruire la décision sans mémoire sélective.", "Écris « H1 haussier, sweep SSL M5, risque 0,5 % », pas « beau setup »."],
      ["Les captures avant et après montrent ce que tu savais puis ce qui s’est produit.", "La capture avant ne doit pas contenir les bougies futures. La capture après conserve les annotations initiales et ajoute la sortie.", "N’efface pas une mauvaise zone après la perte : c’est précisément la donnée à étudier."],
      ["Le résultat en R compare la performance au risque initial.", "Si tu risques 50 $ et gagnes 75 $, résultat +1,5R. Si le SL produit −55 $ avec frais, résultat réel −1,1R.", "Conserve résultat théorique et réel pour mesurer l’écart d’exécution."],
      ["Une émotion utile est reliée à un comportement observable.", "Note intensité, moment et action : hésitation, sortie anticipée, déplacement du SL ou entrée impulsive. Évite les jugements moraux.", "« Peur 7/10, fermeture à +0,3R avant le TP prévu » est exploitable."],
      ["La revue transforme l’erreur en action corrective mesurable.", "Une correction s’applique pendant un nombre défini de trades avant évaluation. Ne change pas cinq comportements à la fois.", "Action : pendant 20 trades, aucune sortie manuelle avant SL/TP sauf règle d’urgence écrite." ]
    ],
    sources: [["MetaTrader 5 — Rapport d’historique", "https://www.metatrader5.com/fr/terminal/help/trading_advanced/history_report", "Balance, P/L flottant, ordres et transactions."], ["TradingView — Bar Replay", "https://www.tradingview.com/support/solutions/43000712747-bar-replay-how-and-why-to-test-a-strategy-in-the-past/", "Captures et décisions sans voir la suite."]]
  },
  23: {
    prerequisites: "Tenir un journal honnête et reconnaître les violations de règles.",
    chapters: [
      ["FOMO est la peur de manquer le mouvement ; surtrading est la multiplication des trades au-delà du plan.", "Le déclencheur peut être une grande bougie ou un gain publié par quelqu’un. La réponse doit être une règle comportementale.", "Si le prix part sans ton setup, capture-le comme non-trade correct au lieu de poursuivre."],
      ["Revenge trading cherche à récupérer immédiatement une perte.", "Il se manifeste par volume augmenté, timeframe abaissé ou conditions supprimées. Une limite automatique et une pause réduisent l’accès à l’impulsion.", "Après −1R quotidien : fermeture de la plateforme et revue, aucune exception."],
      ["La peur d’entrer ou de perdre peut créer des entrées tardives et sorties prématurées.", "Réduire le risque à un niveau réellement acceptable peut aider davantage que des slogans. Le risque doit être supportable émotionnellement et financièrement.", "Si 0,5 % provoque une surveillance obsessionnelle, teste 0,1 % en démo ou reste en simulation."],
      ["L’euphorie après gains peut faire oublier que les résultats contiennent du hasard.", "Ne modifie pas le lot parce que tu te sens invincible. Les augmentations éventuelles suivent une règle fondée sur Equity et échantillon.", "Après cinq gains, le prochain trade garde le même risque prévu."],
      ["La discipline est un système de contraintes observables.", "Prépare sommeil, horaires, checklist, limites, pause et environnement. Mesure les violations comme une statistique.", "Objectif : moins de 5 % de trades hors plan sur les 40 prochains trades, puis revue." ]
    ],
    sources: [["CFTC/NASAA — Alerte Forex", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/cftcnasaaforexalert.html", "Mise en garde contre promesses irréalistes et pression commerciale."], ["CIRO — Bases de l’investissement", "https://www.ciro.ca/office-investor/investing-basics/glossary-common-investing-terms", "Vocabulaire et contexte de risque pour investisseurs canadiens."]]
  },
  24: {
    prerequisites: "Ordres, calcul de position, stratégie et journal déjà opérationnels.",
    chapters: [
      ["Configure le compte démo avec une devise et un capital proches de ta situation d’entraînement.", "Un capital virtuel énorme encourage des volumes irréalistes. Vérifie le levier, les symboles et les spécifications.", "Si tu prévois d’apprendre avec 5 000 $, évite un compte démo de 1 000 000 $."],
      ["Préparer un ordre signifie calculer avant de cliquer.", "Checklist : symbole, sens, type, volume, prix, SL, TP et perte estimée. Lis chaque champ à voix haute au début.", "Une erreur de symbole ou de décimale peut dépasser le risque malgré une bonne analyse."],
      ["SL et TP sont placés selon les règles du setup.", "Certaines plateformes imposent une distance minimale ou refusent un niveau pendant un marché fermé. Vérifie que l’ordre est accepté et visible.", "Après validation, contrôle le ticket et la perte approximative au SL."],
      ["Gérer signifie appliquer les décisions prévues.", "Entraîne modification, annulation, fermeture partielle et fermeture totale séparément. Note les erreurs techniques comme des incidents.", "Exercice : ouvrir 0,02, fermer 0,01, déplacer le SL selon la règle puis fermer le reste."],
      ["Un bloc de 30 trades démo teste surtout l’exécution et la discipline.", "Garde même setup et risque simulé. Analyse respect du plan, erreurs et statistiques, pas seulement le solde.", "30 trades sans erreur technique mais expectancy négative : exécution acquise, stratégie à retravailler." ]
    ],
    sources: [["MetaTrader 5 — Exécuter des trades", "https://www.metatrader5.com/fr/terminal/help/trading/performing_deals", "Ouverture, modification et état du compte."], ["TradingView — Trading historique", "https://www.tradingview.com/support/solutions/43000691889-learn-to-trade-on-historical-data/", "Entraînement sur données historiques."], ["CFTC — Risques du Forex", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_MustKnowForex.html", "La simulation ne supprime pas les risques du réel."]]
  },
  25: {
    prerequisites: "Backtest terminé, bloc démo documenté et règles respectées sur une période significative.",
    chapters: [
      ["Les compétences techniques doivent être stables avant le réel.", "Tu dois choisir le bon symbole, calculer la taille, placer l’ordre et gérer sans erreur répétée. Une erreur critique récente impose davantage de démo.", "Critère : 30 trades consécutifs sans erreur de volume, sens ou Stop Loss."],
      ["L’échantillon de backtest décrit l’avantage potentiel et le drawdown attendu.", "Examine plusieurs périodes, coûts et régimes. Si tu ne peux pas expliquer Win Rate, Average R et drawdown, tu n’es pas prêt à risquer du capital.", "Conserve au moins une étude de 100 occurrences pour la version exacte du setup."],
      ["Les résultats démo valident l’exécution prospective.", "Ils doivent utiliser les mêmes heures et contraintes que le futur plan réel. Une démo faite au hasard ne valide pas la stratégie.", "Compare backtest et démo : fréquence, coûts, erreurs, résultat moyen et pire série."],
      ["La préparation émotionnelle signifie accepter la perte prévue sans casser les règles.", "Le capital doit être de l’argent que tu peux perdre sans affecter loyer, dette ou besoins essentiels. Ne finance jamais le trading par emprunt.", "Si une perte de 20 $ change ta journée ou ton comportement, réduis le risque ou reste en démo."],
      ["La transition au réel doit être minimale et réversible.", "Commence avec le plus petit risque techniquement possible, définis un seuil de retour en démo et n’augmente pas avant un nouvel échantillon.", "Plan : 0,1 % par trade, arrêt après deux violations, retour en démo immédiat pendant 20 trades." ]
    ],
    sources: [["CIRO — Risque de levier", "https://www.ciro.ca/media/10041/download?inline=", "L’emprunt augmente le risque et reste remboursable même si l’investissement baisse."], ["CFTC — Huit points avant le Forex", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_MustKnowForex.html", "Pertes, marge et vérification du courtier."], ["AMF Québec — Mise en garde CFD/Forex", "https://lautorite.qc.ca/grand-public/salle-de-presse/actualites/fiche-dactualite/attention-aux-sollicitations-effectuees-par-international-youtrade-investments-ma-ltd-et-you-trade", "Exemple de vigilance envers les sollicitations et plateformes."]]
  },
  26: {
    prerequisites: "Modules 10 à 13 : swings, structure, liquidité et définition choisie d’un Order Block.",
    chapters: [
      ["Une zone d’offre ou de demande part d’une base suivie d’un départ visible. *(vision Offre/Demande classique)*", "Le tracé ne révèle pas les ordres restants. Il décrit une structure de prix : arrivée dans une base, équilibre relatif, puis déséquilibre de départ. Définis si tu prends les mèches, les corps ou toute la base avant de comparer des résultats.", "Sur un graphique H1 simulé, repère trois bases. Écarte celles dont le départ est lent ou sans rupture claire, puis trace les bornes des autres sans regarder la réaction future."],
      ["Une zone fraîche n’a pas été revisitée depuis son départ ; une zone testée l’a déjà été. *(vision Offre/Demande classique)*", "Le nombre de retests est observable, mais l’idée que chaque retest « consomme » mécaniquement des ordres reste une interprétation. Note profondeur, durée et réaction de chaque visite plutôt que d’appliquer une règle magique.", "Pour dix zones historiques, masque la suite, classe fraîche/testée, mesure la profondeur du premier retest et conserve aussi les cas où une zone fraîche échoue immédiatement."],
      ["La force du départ se compare aux mouvements voisins, pas à une taille absolue universelle.", "Évalue amplitude, vitesse relative, nombre de bougies, chevauchement, gap ou FVG éventuel et cassure d’un swing. Une grande bougie pendant une annonce peut être spectaculaire mais difficile à exécuter à cause du spread et du slippage.", "Attribue un score descriptif — départ faible, moyen ou fort — à cinq exemples en écrivant le critère exact. Compare ensuite ce score au résultat sans modifier les critères."],
      ["Une zone Daily et une zone M5 ne répondent pas à la même question.", "Le timeframe définit l’échelle de la base, la largeur de la zone et l’horizon attendu. Une zone HTF peut contenir plusieurs zones LTF contradictoires. Le contexte supérieur situe ; l’inférieur peut préciser seulement si le plan l’autorise.", "Trace une zone Daily, puis observe H1 et M5 à l’intérieur. Conserve la zone Daily comme contexte et sélectionne au maximum une zone d’exécution selon une règle écrite."],
      ["Offre/Demande classique et Order Block ICT peuvent viser une même origine de mouvement avec des bornes différentes.", "*(vision Offre/Demande classique)* La zone couvre souvent la base ou le dernier équilibre. *(vision ICT)* L’Order Block est défini selon une bougie opposée, un déplacement et parfois une cassure. Ne prétends pas qu’il existe deux forces séparées si les deux tracés décrivent la même structure.", "Superpose les deux tracés sur trois cas. Colore leur intersection, note les parties exclusives à chaque méthode et compare l’invalidation obtenue. Choisis ensuite une convention pour le backtest." ]
    ],
    sources: [
      ["Wikipédia — Offre et demande", "https://fr.wikipedia.org/wiki/Offre_et_demande", "Contexte économique général ; une zone graphique reste une construction méthodologique."],
      ["Wikipédia — Analyse technique", "https://fr.wikipedia.org/wiki/Analyse_technique", "Cadre, usages et limites de l’interprétation graphique."],
      ["CME Group — Méthodologie de l’outil de liquidité", "https://www.cmegroup.com/education/articles-and-reports/understanding-the-cme-liquidity-tool-methodology", "Distingue carnet d’ordres mesuré et zone déduite du prix."]
    ]
  },
  27: {
    prerequisites: "Avoir terminé le module 26 et choisi une seule convention de tracé.",
    chapters: [
      ["Atelier 1 : travaille sur un graphique simulé dont la partie droite est masquée.", "Consigne : nomme la structure, encadre seulement les bases qui répondent à ta règle et numérote-les avant d’avancer le Replay. Aucune nouvelle théorie n’est ajoutée ; tu appliques la définition du module 26.", "Correction : une zone sans départ net est rejetée. Une zone retenue garde ses bornes initiales même si la réaction suivante aurait été meilleure avec un tracé différent."],
      ["Atelier 2 : classe chaque zone avant de voir son résultat.", "Pour chaque cas, note fraîche, testée une fois, testée plusieurs fois ou information insuffisante. Mesure aussi la profondeur du retest et le timeframe, sans conclure automatiquement que la zone est forte ou faible.", "Correction : le classement dépend uniquement des visites visibles avant la décision. Un nouveau passage découvert après l’avancement du graphique ne doit pas réécrire le classement initial."],
      ["Atelier 3 : exécute la checklist complète dans le même ordre.", "Contexte, base, départ, swing cassé, fraîcheur, arrivée, confirmation éventuelle, invalidation, distance du Stop et risque. Une case obligatoire manquante donne non-trade, même si le prix réagit ensuite.", "Correction : la qualité vient de la cohérence des réponses. Une zone gagnante avec checklist incomplète reste une mauvaise exécution du protocole."],
      ["Atelier 4 : étudie volontairement trois zones qui échouent.", "Distingue erreur de tracé, zone conforme mais perdante, événement de volatilité et invalidation mal placée. Ne cherche pas une excuse invisible comme « manipulation institutionnelle » lorsque la donnée ne la montre pas.", "Correction : classe l’échec avec une preuve. Si la zone respectait toutes les règles, note simplement perte conforme et conserve-la dans les statistiques."],
      ["Atelier 5 : réalise une revue aveugle sur dix cas mélangés.", "Cache le nom de l’actif, la date et la suite. Une première passe produit le tracé ; une seconde compare à la correction ; une troisième calcule ton taux de cohérence, pas le taux de gain des exemples.", "Correction : compte séparément zones identifiées, bornes cohérentes, états correctement classés et invalidations logiques. Revois uniquement la compétence dont le score est insuffisant." ]
    ],
    sources: [
      ["TradingView — Tester avec Bar Replay", "https://www.tradingview.com/support/solutions/43000712747-bar-replay-how-and-why-to-test-a-strategy-in-the-past/", "Masquer le futur et répéter les exercices sans biais de recul."],
      ["TradingView — Trading sur données historiques", "https://www.tradingview.com/support/solutions/43000691889-learn-to-trade-on-historical-data/", "Cadre pratique pour avancer chronologiquement dans les cas."],
      ["Wikipédia — Biais rétrospectif", "https://fr.wikipedia.org/wiki/Biais_r%C3%A9trospectif", "Pourquoi la correction doit être cachée avant la réponse."]
    ]
  },
  28: {
    prerequisites: "Module 18 maîtrisé : Bid, Ask, Delta, Footprint, imbalances, absorption et source de volume.",
    chapters: [
      ["Le flux d’ordres montre des ordres affichés ou des transactions classées par une source, jamais une biographie des participants. *(lecture Order Flow)*", "Un carnet centralisé peut publier prix et quantités ; un Footprint reconstruit des exécutions au Bid et à l’Ask. L’anonymat, les comptes multiples, les stratégies de couverture et le fractionnement empêchent d’identifier avec certitude une « baleine ».", "Avant toute lecture, écris marché, contrat, fournisseur, type de donnée et période. Si la source est un CFD ou un flux partiel, limite explicitement la portée de ta conclusion."],
      ["Une divergence prix–Delta compare deux séries sur les mêmes bornes. *(lecture Order Flow)*", "Le prix peut faire un nouveau sommet sans nouveau sommet de Delta, ou l’inverse. La divergence dépend du point de départ, de l’agrégation et du contrat. Elle peut persister longtemps et ne constitue pas un déclencheur autonome.", "Définis deux swings et mesure prix et Delta entre ces bornes. Écris divergence, confirmation ou aucune relation, puis attends la réaction structurelle prévue."],
      ["L’absorption avancée associe agression importante et faible progression relative. *(lecture Order Flow)*", "Compare le volume agressif, la distance parcourue, le temps passé et les niveaux voisins. Une limite passive peut absorber, mais la donnée ne révèle pas toujours si elle appartient à un seul participant ni si elle restera présente.", "Sur trois niveaux, calcule volume agressif par point parcouru. Repère l’anomalie, puis exige une condition de prix distincte avant toute décision."],
      ["Un bloc d’exécutions est inhabituel seulement par rapport à une référence pertinente.", "Compare à la médiane de la même heure, du même contrat et d’un régime similaire. Une taille élevée peut être couverture, spread, liquidation, transfert de risque ou spéculation. Taille ne signifie pas direction future.", "Construis une référence sur vingt barres, signale une exécution dépassant un seuil choisi, puis écris au moins trois explications possibles sans choisir arbitrairement la plus spectaculaire."],
      ["La conclusion correcte est probabiliste et conditionnelle.", "Formule : fait mesuré → hypothèse → confirmation attendue → invalidation → non-trade. L’Order Flow complète le contexte mais ne remplace pas le risque, le Stop Loss ni la statistique du setup.", "Rédige trois conclusions sans employer « ils achètent », « les banques vendent » ou « signal ». Chaque phrase doit dire ce qui a été observé et ce qui manque encore." ]
    ],
    sources: [
      ["CME Group — Méthodologie de l’outil de liquidité", "https://www.cmegroup.com/education/articles-and-reports/understanding-the-cme-liquidity-tool-methodology", "Carnet électronique, profondeur, spread et coût d’exécution mesurés."],
      ["CME Group — Fonctionnement d’un carnet central", "https://www.cmegroup.com/education/articles-and-reports/overview-what-makes-ags-markets-work", "Ordres ajoutés, modifiés, annulés et exécutés dans un CLOB."],
      ["CME Data Services", "https://dataservices.cmegroup.com/", "Transactions, règlements et profondeur du carnet selon l’abonnement de données."]
    ]
  },
  29: {
    prerequisites: "Modules 18 et 28, plus analyse multi-timeframe et protocole de non-trade.",
    chapters: [
      ["Une exécution agressive prend la liquidité disponible ; une intention passive attend dans le carnet. *(lecture Order Flow)*", "Un ordre au marché ou un ordre négociable traverse le spread selon les règles du marché. Un ordre limite au repos propose de la liquidité, mais peut être modifié, annulé, partiellement exécuté ou dépassé par la file.", "Sur un carnet simulé, classe cinq actions : achat au marché, vente au marché, bid limite, ask limite et annulation. Indique lesquelles produisent une transaction immédiatement."],
      ["La quantité affichée n’est pas une promesse d’exécution.", "La priorité dépend de l’algorithme du marché, souvent prix-temps ou variante pro-rata. La place dans la file, les annulations et le volume arrivant avant ton ordre changent le fill. Un gros mur peut disparaître sans transaction.", "Rejoue une file de dix ordres. Calcule la quantité devant ton ordre, applique deux exécutions et une annulation, puis détermine si ton ordre aurait été rempli."],
      ["La lecture multi-échelle sépare contexte lent et événement rapide.", "Session et structure H1 définissent l’environnement ; un profil ou Delta sur cinq à quinze minutes situe l’activité ; le Footprint de quelques secondes ou ticks précise l’exécution. Mélanger les fenêtres sans rôle produit des contradictions artificielles.", "Écris une question unique pour chaque échelle : où, comment, quand. Si deux échelles répondent à la même question, supprime celle qui n’ajoute pas d’information testable."],
      ["Prix et flux peuvent se contredire sans que l’un soit immédiatement faux.", "Le prix peut continuer malgré une divergence ; le flux peut anticiper, être absorbé ou refléter un contrat différent. Vérifie synchronisation, source, rollover et niveau structurel avant d’interpréter le conflit.", "Cas H1 haussier et Delta court négatif : écris trois chemins — continuation confirmée, structure cassée, information insuffisante — avec une condition observable pour chacun."],
      ["Un protocole de conflit protège contre l’arbitrage émotionnel.", "Décide avant la session : attendre une confirmation, réduire le risque selon une règle testée ou ne pas trader. Le protocole ne doit jamais transformer une incertitude en position automatique.", "Applique le Guide Orderflow à trois scénarios contradictoires. La réussite exige la même décision pour les mêmes cases, même lorsque tu connais le résultat final." ]
    ],
    sources: [
      ["CME Group — Fonctionnement du carnet et algorithmes", "https://www.cmegroup.com/education/articles-and-reports/overview-what-makes-ags-markets-work", "Carnet central, priorité, annulations et exécutions."],
      ["CME Group — Limites et ordres sur marché centralisé/CFD", "https://www.cmegroup.com/articles/2026/the-limits-of-limit-orders-in-retail-fx-cfd-trading.html", "Différence entre ordre passif d’exchange et instruction conditionnelle chez un broker CFD."],
      ["CME Group — Guide de l’outil de liquidité", "https://www.cmegroup.com/education/demos-and-tutorials/cme-liquidity-tool-user-guide", "Profondeur, bid-ask et coût pour différentes tailles."]
    ]
  },
  30: {
    prerequisites: "Modules 5, 8, 16 et 17 : contrat, position, multi-timeframe, sessions et fuseaux.",
    chapters: [
      ["Un indice est une mesure ; le produit tradé peut être un future, un ETF ou un CFD.", "US30, NAS100 et GER40 sont des appellations fréquentes de broker et non des contrats universels. Le Dow est pondéré différemment du Nasdaq-100 ; le DAX suit ses propres règles. Le prix du CFD peut intégrer spread et ajustements du fournisseur.", "Pour chaque symbole de ta plateforme, ouvre les spécifications et note actif de référence, type de produit, taille de contrat, tick, devise, échéance éventuelle et source de prix."],
      ["Le gap dépend des deux instants que tu compares.", "Un gap cash compare généralement clôture et ouverture régulières ; un future négocié presque 24 heures possède aussi une session électronique et une pause. Le CFD suit les horaires du broker. N’appelle pas gap toute variation nocturne sans définir la référence.", "Trace clôture cash, règlement du future, ouverture électronique et ouverture cash sur une date. Calcule les écarts séparément et conserve le fuseau horaire."],
      ["Les indices réagissent à leurs composantes selon leur méthode de pondération.", "Le Nasdaq-100 est fortement exposé à de grandes sociétés non financières ; le Dow regroupe trente grandes valeurs américaines et utilise une pondération par les prix ; le DAX suit quarante grandes valeurs allemandes pondérées selon ses règles de flottant. Une corrélation élevée peut se rompre temporairement.", "Compare US30 et NAS100 pendant une annonce propre à une grande composante technologique. Décris direction, amplitude et décalage sans supposer une corrélation constante."],
      ["Taux, emploi et inflation peuvent modifier rapidement les anticipations et la volatilité.", "Pour les indices américains, vérifie calendrier FOMC, CPI et Employment Situation. Pour GER40, ajoute décisions BCE et données européennes. L’impact dépend de l’écart aux attentes, du positionnement et du contexte ; la même publication ne produit pas toujours le même sens.", "Avant la session, marque l’heure officielle, le fuseau, la règle de non-trade, le délai d’attente et le comportement du spread. Ne maintiens pas un ordre en attente sans règle spécifique."],
      ["La valeur du point relie directement cette masterclass au module 8.", "Le NQ E-mini, le YM E-mini, les futures DAX et les CFD de broker utilisent des multiplicateurs ou contrats différents. La formule reste stable, mais les données d’entrée doivent venir de l’exchange ou de la fiche du symbole exact.", "Capital 10 000 $, risque 0,5 % = 50 $. Avec un Stop de 25 points, la valeur autorisée est 2 $/point. Choisis un volume adapté ou refuse si le minimum dépasse ce risque." ]
    ],
    sources: [
      ["CME Group — E-mini Dow", "https://www.cmegroup.com/markets/equities/dow-jones/e-mini-dow.contractSpecs.html", "Produit lié au Dow, accès, liquidité et spécifications de l’exchange."],
      ["CME Group — E-mini Nasdaq-100", "https://www.cmegroup.com/markets/equities/nasdaq/e-mini-nasdaq-100.contractSpecs.html", "Multiplicateur, tick et facteurs macro du NQ."],
      ["Eurex — DAX Futures", "https://www.eurex.com/ex-en/markets/idx/dax/DAX-Futures-139902", "Famille de contrats DAX et caractéristiques publiées par l’exchange."],
      ["Deutsche Börse — DAX", "https://www.deutsche-boerse.com/dbg-en/about-us/contact/glossary/glossary-article/DAX-242866", "Composition et règles générales de l’indice DAX."],
      ["Federal Reserve — Calendrier FOMC", "https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm", "Dates officielles des décisions de politique monétaire américaine."],
      ["BLS — Calendrier des publications", "https://www.bls.gov/schedule/", "Heures officielles des statistiques d’emploi et d’inflation américaines."],
      ["BCE — Calendrier du Conseil des gouverneurs", "https://www.ecb.europa.eu/press/calendars/mgcgc/html/index.en.html", "Dates des réunions et conférences de presse de politique monétaire."]
    ]
  }
};

window.deepCourse = deepCourse;
