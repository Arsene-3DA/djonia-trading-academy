const modules = [
  {
    id: 1, level: 1, duration: "45 min", title: "Découverte du trading et des marchés",
    summary: "Comprendre ce qu'est le trading, les principaux marchés, les acteurs et le rôle du broker avant de toucher à une plateforme.",
    lessons: ["Trading ou investissement ?", "Les acteurs du marché", "Les classes d’actifs", "Broker, compte démo et compte réel", "Les risques réels"],
    skills: "Distinguer trading et investissement, nommer cinq classes d’actifs et expliquer le rôle d’un broker.",
    intro: "Le trading consiste à acheter ou vendre un instrument financier dans l’espoir de profiter d’une variation de prix. Cette activité n’est ni un salaire automatique ni un jeu de hasard lorsqu’elle est encadrée par une méthode, mais elle reste risquée.",
    concepts: [
      ["Trading", "Prise de position généralement plus courte, avec un plan d’entrée, d’invalidation et de sortie."],
      ["Investissement", "Détention souvent plus longue, fondée sur la valeur future d’un actif ou d’une entreprise."],
      ["Broker", "Intermédiaire qui donne accès au marché ou à un produit dérivé. Ses frais et règles varient."],
      ["Compte démo", "Environnement d’entraînement avec argent virtuel. Il sert à apprendre sans risquer de capital réel."]
    ],
    example: "EURUSD représente la valeur d’un euro exprimée en dollars américains. Si la cotation passe de 1,1000 à 1,1050, l’euro s’est apprécié face au dollar sur cette période.",
    errors: ["Confondre trading et enrichissement rapide.", "Choisir un broker uniquement pour son levier.", "Passer directement en réel sans savoir calculer son risque."],
    exercise: "Classe ces éléments : EURUSD, Apple, or, US30 et Bitcoin. Associe chacun à Forex, action, matière première, indice ou cryptomonnaie.",
    answer: "EURUSD = Forex ; Apple = action ; or = matière première ; US30 = indice ; Bitcoin = cryptomonnaie.",
    quiz: ["Quel est le rôle principal d’un compte démo ?", ["Garantir des gains", "S’entraîner sans capital réel", "Éviter toute perte en réel"], 1, "Le compte démo reproduit l’exécution avec des fonds virtuels. Il ne garantit pas la performance future."]
  },
  {
    id: 2, level: 1, duration: "1 h 30", title: "TradingView de zéro",
    summary: "Prendre en main le graphique, la watchlist, les unités de temps, les outils de dessin, les alertes et le mode Replay.",
    lessons: ["Créer son espace de travail", "Lire les axes prix et temps", "Changer de timeframe", "Dessiner lignes et zones", "Alertes, Replay et Paper Trading"],
    skills: "Ouvrir un symbole, changer d’unité de temps, tracer un niveau, créer une alerte et lancer le Replay.",
    intro: "TradingView est d’abord un outil d’observation. Avant d’ajouter des indicateurs, apprends à naviguer, zoomer et annoter proprement le prix.",
    concepts: [
      ["Watchlist", "Liste personnelle d’actifs à surveiller. Vérifie toujours le symbole et la source de cotation."],
      ["Timeframe", "Chaque bougie résume une durée : 5 minutes, 1 heure, 1 jour, etc."],
      ["Outils de dessin", "Lignes, rectangles et annotations servent à rendre ton raisonnement visible, pas à prédire."],
      ["Bar Replay", "Permet de masquer le futur et de rejouer l’historique pour s’exercer sans biais de recul."]
    ],
    example: "Ouvre EURUSD, passe en H1, trace une ligne horizontale sur le dernier sommet visible, puis crée une alerte sur ce prix. Sauvegarde ensuite le layout.",
    errors: ["Choisir un CFD sans vérifier le fournisseur de données.", "Surcharger le graphique d’indicateurs.", "Modifier l’échelle sans comprendre pourquoi le graphique paraît différent."],
    exercise: "Crée une watchlist de cinq actifs, ouvre US30 en H1, marque le dernier plus haut et le dernier plus bas, puis fais une capture.",
    answer: "La capture doit montrer le bon symbole, H1 visible et deux niveaux horizontaux clairement placés.",
    quiz: ["À quoi sert principalement Bar Replay ?", ["Exécuter des ordres réels", "Rejouer l’historique sans voir la suite", "Changer de broker"], 1, "Replay cache les bougies futures pour tester ta lecture dans des conditions plus honnêtes."]
  },
  {
    id: 3, level: 1, duration: "1 h 30", title: "MT4 et MT5 de zéro",
    summary: "Installer, connecter et utiliser MetaTrader pour observer un symbole, passer un ordre démo et consulter son historique.",
    lessons: ["MT4 ou MT5 ?", "Connexion Login / Server", "Market Watch et Navigator", "Terminal / Toolbox", "Ordres et historique"],
    skills: "Se connecter à un compte démo, ouvrir un graphique, placer SL/TP et retrouver un trade fermé.",
    intro: "MetaTrader sert surtout à exécuter et gérer les ordres. L’interface exacte dépend de la version, du système et du broker.",
    concepts: [
      ["Market Watch", "Affiche les symboles, le Bid, l’Ask et parfois le spread."],
      ["Navigator", "Regroupe les comptes, indicateurs, scripts et Expert Advisors disponibles."],
      ["Toolbox / Terminal", "Affiche positions, exposition, historique, alertes et journal technique."],
      ["Ticket", "Identifiant d’une position ou d’un ordre, utile pour le suivi et le journal."]
    ],
    example: "Sur un compte démo, ouvre une fenêtre d’ordre sur EURUSD. Observe le volume, le type d’ordre, le SL et le TP sans valider tant que la taille n’est pas calculée.",
    errors: ["Se connecter au mauvais serveur.", "Confondre mot de passe investisseur et mot de passe de trading.", "Placer un lot arbitraire avant le Stop Loss."],
    exercise: "Sur démo, ajoute EURUSD à Market Watch, ouvre son graphique H1, puis localise Balance, Equity et Free Margin.",
    answer: "Les trois valeurs se trouvent généralement dans l’onglet Trade de Terminal/Toolbox ; leur position dépend de la version.",
    quiz: ["Que représente Equity ?", ["Le dépôt initial seulement", "Balance plus résultat flottant", "La marge utilisée seulement"], 1, "Equity = Balance + profits/pertes flottants des positions ouvertes."]
  },
  {
    id: 4, level: 1, duration: "55 min", title: "Mécanique du prix",
    summary: "Lire Bid, Ask, spread et bougies OHLC, puis comprendre ce qu’un changement d’unité de temps modifie.",
    lessons: ["Bid, Ask et spread", "Open, High, Low, Close", "Corps et mèches", "Timeframes", "Volatilité"],
    skills: "Lire une bougie, identifier son ouverture et sa clôture et expliquer pourquoi Bid et Ask diffèrent.",
    intro: "Une bougie est un résumé. Elle montre quatre informations de prix pour une période donnée, mais elle ne montre pas toujours l’ordre exact des mouvements à l’intérieur de cette période.",
    concepts: [
      ["Bid", "Prix auquel une vente au marché est généralement exécutée."],
      ["Ask", "Prix auquel un achat au marché est généralement exécuté."],
      ["Spread", "Écart entre Ask et Bid ; il constitue un coût d’entrée variable."],
      ["OHLC", "Open, High, Low, Close : ouverture, plus haut, plus bas et clôture de la période."]
    ],
    example: "Une bougie H1 ouvre à 100, monte à 106, baisse à 98 et clôture à 104 : O=100, H=106, L=98, C=104. Elle est haussière car C > O.",
    errors: ["Croire qu’une mèche indique automatiquement un retournement.", "Oublier le spread lors d’un Stop Loss serré.", "Comparer une bougie M5 à une bougie Daily comme si elles contenaient la même information."],
    exercise: "Dessine une bougie avec O=50, H=58, L=47 et C=54. Indique le corps et les deux mèches.",
    answer: "Corps de 50 à 54 ; mèche basse de 47 à 50 ; mèche haute de 54 à 58 ; bougie haussière.",
    quiz: ["Une bougie haussière signifie que…", ["Le High est inférieur au Low", "La clôture est supérieure à l’ouverture", "Le spread est nul"], 1, "La couleur dépend de la relation entre clôture et ouverture."]
  },
  {
    id: 5, level: 1, duration: "1 h", title: "Pips, points, ticks et lots",
    summary: "Séparer correctement unité de mouvement, incrément de cotation, taille de contrat et volume de position.",
    lessons: ["Pip et pipette", "Point et tick", "Taille de contrat", "Lots standard, mini et micro", "Vérifier la fiche du symbole"],
    skills: "Différencier pip, point, tick et lot et retrouver les spécifications contractuelles d’un symbole.",
    intro: "Ces termes ne sont pas interchangeables. Leur valeur monétaire dépend de l’instrument, de la devise du compte et des spécifications du broker.",
    concepts: [
      ["Pip", "Unité conventionnelle du Forex, souvent la quatrième décimale pour une paire non-JPY."],
      ["Point", "Terme ambigu : sur une plateforme, il peut représenter le plus petit incrément affiché."],
      ["Tick", "Plus petite variation de cotation permise ou une mise à jour de prix, selon le contexte."],
      ["Lot", "Volume de position relié à une taille de contrat. 1,00 lot n’a pas la même valeur sur tous les actifs."]
    ],
    example: "Si EURUSD passe de 1,1000 à 1,1010, le mouvement est généralement de 10 pips. Sur une cotation à 5 décimales, cela correspond souvent à 100 points plateforme.",
    errors: ["Supposer que 1 point vaut toujours 1 $.", "Appliquer la valeur du pip d’EURUSD à GBPJPY.", "Confondre 0,10 lot avec 10 % du capital."],
    exercise: "Dans la fiche de ton symbole démo, relève : nombre de décimales, taille du contrat, volume minimum, pas de volume et valeur du tick.",
    answer: "Il n’y a pas une réponse universelle : note les valeurs exactes affichées par ton broker. *(dépend du broker/de l’actif — à vérifier)*",
    quiz: ["La valeur monétaire d’un point est-elle universelle ?", ["Oui", "Non, elle dépend du contrat et du volume", "Seulement sur Forex"], 1, "Toujours vérifier les spécifications réelles du symbole."]
  },
  {
    id: 6, level: 2, duration: "1 h", title: "Levier et marge",
    summary: "Comprendre exposition, marge requise, Free Margin, Margin Level, appel de marge et Stop Out.",
    lessons: ["Levier et exposition", "Marge utilisée et libre", "Equity et résultat flottant", "Margin Level", "Margin Call et Stop Out"],
    skills: "Expliquer le levier sans le confondre avec le risque et calculer un niveau de marge simple.",
    intro: "Le levier permet de contrôler une exposition supérieure au capital immobilisé. Il n’oblige pas à prendre plus de risque, mais il rend le surdimensionnement beaucoup plus facile.",
    concepts: [
      ["Exposition", "Valeur notionnelle totale contrôlée par la position."],
      ["Marge", "Montant réservé pour maintenir la position ouverte."],
      ["Free Margin", "Equity moins marge utilisée ; coussin restant pour absorber les variations."],
      ["Margin Level", "Equity ÷ marge utilisée × 100. Les seuils d’alerte et de Stop Out varient selon le broker."]
    ],
    formula: "Margin Level (%) = Equity ÷ Marge utilisée × 100",
    example: "Avec 2 000 $ d’Equity et 500 $ de marge utilisée : 2 000 ÷ 500 × 100 = 400 %. Ce résultat doit être comparé aux seuils du broker.",
    errors: ["Croire que le levier multiplie automatiquement les profits.", "Utiliser toute la marge disponible.", "Ignorer qu’une perte flottante diminue Equity et Free Margin."],
    exercise: "Calcule le Margin Level pour une Equity de 1 350 $ et une marge utilisée de 450 $.",
    answer: "1 350 ÷ 450 × 100 = 300 %.",
    quiz: ["Une perte flottante importante fait généralement quoi ?", ["Augmente l’Equity", "Diminue l’Equity et la Free Margin", "Supprime le spread"], 1, "La perte ouverte est intégrée à l’Equity."]
  },
  {
    id: 7, level: 2, duration: "1 h 10", title: "Les types d’ordres",
    summary: "Choisir entre ordre au marché, Limit, Stop, Stop Loss, Take Profit, Break Even et Trailing Stop.",
    lessons: ["Market Buy / Sell", "Buy et Sell Limit", "Buy et Sell Stop", "SL, TP et Break Even", "Trailing Stop"],
    skills: "Choisir le type d’ordre adapté à un scénario et placer son invalidation avant l’entrée.",
    intro: "Un ordre décrit ce que tu demandes à la plateforme. Le choix dépend de la position du prix actuel par rapport au niveau où tu veux intervenir.",
    concepts: [
      ["Buy Limit", "Achat programmé sous le prix actuel, si l’on attend un repli."],
      ["Sell Limit", "Vente programmée au-dessus du prix actuel, si l’on attend un rebond."],
      ["Buy Stop", "Achat programmé au-dessus du prix actuel, souvent pour une cassure."],
      ["Sell Stop", "Vente programmée sous le prix actuel, souvent pour une cassure baissière."]
    ],
    example: "Prix actuel 100. Acheter sur repli à 95 = Buy Limit. Acheter seulement si 105 casse = Buy Stop. L’exécution exacte peut subir du slippage.",
    errors: ["Inverser Buy Limit et Buy Stop.", "Déplacer le SL plus loin pour éviter d’accepter la perte.", "Mettre le Break Even trop tôt sans règle testée."],
    exercise: "Prix actuel 200 : tu veux vendre à 208 après un rebond. Quel ordre ? Puis tu veux vendre seulement sous 194. Quel ordre ?",
    answer: "208 = Sell Limit ; sous 194 = Sell Stop.",
    quiz: ["Un Buy Limit se place normalement…", ["Sous le prix actuel", "Au-dessus du prix actuel", "Uniquement au marché"], 0, "Le Buy Limit attend un prix d’achat inférieur au prix actuel."]
  },
  {
    id: 8, level: 2, duration: "2 h", title: "Calcul de taille de position",
    summary: "Transformer un pourcentage de risque et une distance de Stop Loss en volume de position calculé.",
    lessons: ["Risque monétaire", "Distance du Stop Loss", "Valeur par pip ou point", "Formule de position", "Cas Forex, or et indices"],
    skills: "Calculer le risque monétaire et une taille théorique, puis la vérifier avec les spécifications du broker.",
    intro: "La taille de position vient en dernier. Tu choisis d’abord le montant maximal prévu à perdre et l’endroit logique du Stop Loss.",
    concepts: [
      ["Capital", "Solde ou Equity de référence choisi dans ton plan."],
      ["Risque %", "Part maximale du capital prévue comme perte si le SL est exécuté."],
      ["Distance du SL", "Écart entre entrée et invalidation, exprimé dans l’unité appropriée."],
      ["Valeur unitaire", "Valeur monétaire d’un pip/point pour une unité de volume donnée."]
    ],
    formula: "Taille = (Capital × Risque %) ÷ (Distance du SL × Valeur par point pour 1 lot)",
    example: "Compte 5 000 $, risque 1 % = 50 $. SL de 25 pips, valeur d’exemple 10 $/pip pour 1 lot : 50 ÷ (25 × 10) = 0,20 lot. *(valeurs d’exemple — vérifie les spécifications réelles de ton broker)*",
    errors: ["Choisir le lot avant le Stop Loss.", "Utiliser une valeur du point non vérifiée.", "Arrondir vers le haut et dépasser le risque autorisé."],
    exercise: "Capital 10 000 $, risque 0,5 %, SL 40 points, valeur 1 $ par point pour 1 lot. Calcule la taille théorique.",
    answer: "Risque = 10 000 × 0,005 = 50 $. Taille = 50 ÷ (40 × 1) = 1,25 lot théorique, à adapter au pas de volume.",
    quiz: ["Quelle étape vient en premier ?", ["Choisir 1 lot", "Fixer le risque et l’invalidation", "Déplacer le TP"], 1, "Le risque et le Stop Loss déterminent la taille, pas l’inverse."],
    tool: "position"
  },
  {
    id: 9, level: 2, duration: "1 h 40", title: "Gestion du risque",
    summary: "Encadrer le risque par trade, le drawdown, les séries de pertes, les corrélations et l’espérance mathématique.",
    lessons: ["Risque par trade et par jour", "Risk/Reward", "Drawdown", "Expectancy et séries de pertes", "Corrélation et Risk of Ruin"],
    skills: "Définir des limites de perte, calculer un R:R et expliquer pourquoi récupérer un drawdown demande un gain supérieur.",
    intro: "La gestion du risque ne rend pas un setup gagnant. Elle empêche une mauvaise série normale de devenir une catastrophe irréversible.",
    concepts: [
      ["R", "Unité égale au risque initial du trade. Perdre le risque prévu = −1R."],
      ["R:R", "Gain potentiel divisé par perte potentielle. Il doit être interprété avec le taux de réussite."],
      ["Drawdown", "Recul du capital depuis un sommet jusqu’au creux suivant."],
      ["Expectancy", "Gain ou perte moyenne attendu par trade d’après les statistiques observées."]
    ],
    formula: "Expectancy (R) = Taux de gain × Gain moyen − Taux de perte × Perte moyenne",
    example: "45 % de trades à +2R et 55 % à −1R : 0,45 × 2 − 0,55 × 1 = +0,35R par trade en moyenne sur l’échantillon.",
    errors: ["Augmenter le lot après une perte.", "Ouvrir trois positions fortement corrélées comme trois risques séparés.", "Évaluer une stratégie sur cinq trades."],
    exercise: "Après une baisse de 20 %, quel gain faut-il sur le capital restant pour revenir au point de départ ?",
    answer: "25 %. Exemple : 100 tombe à 80 ; il faut gagner 20 sur 80, donc 20 ÷ 80 = 25 %.",
    quiz: ["Un R:R de 3:1 garantit-il un profit ?", ["Oui", "Non, il faut aussi considérer la fréquence des gains et les coûts", "Seulement en Forex"], 1, "Un bon ratio isolé ne dit rien sur la probabilité de réussite."]
  },
  {
    id: 10, level: 2, duration: "1 h 45", title: "Bases de l’analyse technique",
    summary: "Identifier swings, tendance, range, impulsion, retracement, support, résistance, breakout et retest.",
    lessons: ["Swing High et Swing Low", "HH, HL, LH et LL", "Tendance ou range", "Support et résistance", "Breakout, faux breakout et retest"],
    skills: "Annoter les swings significatifs et décrire objectivement un marché haussier, baissier ou latéral.",
    intro: "L’analyse technique organise ce que le prix a déjà fait. Elle construit des scénarios conditionnels ; elle ne prédit pas avec certitude.",
    concepts: [
      ["HH / HL", "Higher High et Higher Low : séquence typique d’une structure haussière."],
      ["LH / LL", "Lower High et Lower Low : séquence typique d’une structure baissière."],
      ["Impulsion", "Mouvement directionnel qui parcourt une distance avec peu de retracement."],
      ["Range", "Zone où le prix oscille entre une borne haute et une borne basse sans tendance nette."]
    ],
    example: "Si le prix imprime un sommet à 110, retrace à 104 au-dessus du creux précédent 100, puis monte à 115, on peut annoter HH 110, HL 104, puis nouveau HH 115.",
    errors: ["Marquer chaque micro-oscillation comme swing majeur.", "Tracer une résistance comme une ligne exacte au centime près.", "Acheter toute cassure sans observer la clôture et le contexte."],
    exercise: "Sur un graphique H1, marque les trois derniers swings visibles et décide : hausse, baisse ou range. Écris le critère utilisé.",
    answer: "Une réponse correcte nomme les swings précis et justifie avec HH/HL, LH/LL ou bornes de range.",
    quiz: ["Une séquence HH puis HL décrit le plus souvent…", ["Une structure haussière", "Une structure baissière", "Un spread"], 0, "HH/HL indique que sommets et creux progressent vers le haut."]
  },
  {
    id: 11, level: 3, duration: "1 h 45", title: "Structure de marché",
    summary: "Distinguer structure externe et interne, BOS, CHoCH, cassure valide, sweep et simple dépassement.",
    lessons: ["Structure externe et interne", "Break of Structure", "Change of Character", "Clôture ou mèche", "Continuation et retournement potentiel"],
    skills: "Indiquer le swing réellement cassé et distinguer continuation confirmée et retournement seulement possible.",
    intro: "BOS et CHoCH ne possèdent pas une définition parfaitement identique dans toutes les écoles. Ici, on exige toujours de nommer le swing concerné et la règle de validation.",
    concepts: [
      ["BOS", "Cassure d’un swing clé dans le sens de la structure suivie, selon la convention choisie."],
      ["CHoCH", "Première cassure opposée au comportement précédent ; alerte de changement, pas garantie de retournement."],
      ["Structure interne", "Oscillations plus petites à l’intérieur d’un mouvement ou d’une structure externe."],
      ["Cassure valide", "Règle explicite : niveau, unité de temps et type de clôture doivent être définis dans le plan."]
    ],
    example: "Dans une hausse, le prix casse le dernier HL significatif avec clôture. Cela peut être un CHoCH selon la convention utilisée. Une simple mèche puis reprise haussière peut plutôt être un sweep.",
    errors: ["Appeler BOS toute mèche au-dessus d’un sommet.", "Changer de swing de référence après coup.", "Supposer qu’un CHoCH garantit le retournement."],
    exercise: "Choisis un graphique et écris : swing protégé, niveau de cassure, timeframe et condition exacte de validation.",
    answer: "La réponse doit contenir quatre éléments vérifiables, pas seulement une flèche ou le mot BOS.",
    quiz: ["Un CHoCH est surtout…", ["Une garantie", "Une alerte de changement possible", "Un type de lot"], 1, "La confirmation suivante et le contexte restent indispensables."]
  },
  {
    id: 12, level: 3, duration: "1 h 45", title: "Liquidité",
    summary: "Repérer les zones où des ordres peuvent se concentrer : equal highs/lows, sommets précédents et sweeps.",
    lessons: ["BSL et SSL", "Equal Highs et Equal Lows", "Liquidité interne et externe", "Sweep, grab et inducement", "Draw on Liquidity"],
    skills: "Marquer des pools de liquidité plausibles et reconnaître un sweep sans le confondre avec un signal automatique.",
    intro: "La liquidité désigne ici des zones où des ordres sont susceptibles de s’accumuler. On ne connaît pas directement tous les ordres cachés à partir d’un simple graphique.",
    concepts: [
      ["BSL", "Buy-Side Liquidity : zone au-dessus de sommets où peuvent se trouver des stops d’acheteurs vendeurs ou des ordres d’achat. *(vision ICT)*"],
      ["SSL", "Sell-Side Liquidity : zone sous des creux où peuvent se concentrer des stops ou ordres vendeurs. *(vision ICT)*"],
      ["Sweep", "Dépassement d’un niveau suivi d’un retour ; sa validation dépend de règles précises."],
      ["Inducement", "Lecture méthodologique d’un mouvement censé attirer des positions avant une autre cible. Ce n’est pas observable avec certitude. *(vision ICT)*"]
    ],
    example: "Deux sommets proches forment des Equal Highs. Le prix les dépasse, puis clôture rapidement sous la zone. C’est un sweep potentiel, mais l’entrée exige encore structure, invalidation et risque.",
    errors: ["Voir de la liquidité sur chaque sommet.", "Acheter ou vendre immédiatement après toute mèche.", "Présenter l’intention institutionnelle comme un fait certain."],
    exercise: "Marque Previous Day High/Low et les Equal Highs/Lows sur une journée. Note lesquels sont internes ou externes à ton range de référence.",
    answer: "Les niveaux doivent être placés sur des extrêmes clairement définis, avec le jour et le timeframe indiqués.",
    quiz: ["Un sweep suffit-il seul pour entrer ?", ["Oui", "Non, il doit être replacé dans un plan", "Toujours sur M1"], 1, "Le sweep est une information de contexte, pas une promesse de retournement."]
  },
  {
    id: 13, level: 3, duration: "2 h 15", title: "ICT / Smart Money Concepts",
    summary: "Étudier displacement, FVG, Order Block, Breaker, mitigation, Premium/Discount, OTE et POI avec les bons tags méthodologiques.",
    lessons: ["HTF, LTF et POI", "Displacement et FVG", "Order Block et Breaker", "Mitigation", "Premium, Discount et OTE"],
    skills: "Identifier un FVG à trois bougies, expliquer une définition d’Order Block et séparer fait de prix et interprétation ICT.",
    intro: "ICT et SMC proposent une grille de lecture, pas des lois physiques du marché. Les définitions varient entre formateurs : note toujours celle utilisée dans ton plan.",
    concepts: [
      ["Displacement", "Expansion rapide et directionnelle, souvent utilisée comme signe d’engagement. *(vision ICT)*"],
      ["FVG", "Déséquilibre à trois bougies : une zone entre la mèche de la première et celle de la troisième selon la direction. *(vision ICT)*"],
      ["Order Block", "Souvent défini comme la dernière bougie opposée avant un déplacement ayant cassé une structure ; d’autres définitions existent."],
      ["Premium / Discount", "Division d’un range en moitié haute et basse autour de l’Equilibrium. *(vision ICT)*"]
    ],
    example: "Après un sweep de SSL, une expansion haussière casse un swing interne et laisse un FVG. Un retracement dans la zone peut devenir un scénario, à condition de définir invalidation et R:R.",
    errors: ["Croire que tout FVG doit être comblé.", "Appeler Order Block toute bougie opposée.", "Cumuler les termes sans logique séquentielle."],
    exercise: "Trouve un mouvement de trois bougies et vérifie si les mèches 1 et 3 laissent réellement un espace. Marque la zone et son invalidation.",
    answer: "Si les mèches se chevauchent, il n’y a pas de FVG selon cette définition. La zone doit être basée sur des prix précis.",
    quiz: ["Tout FVG doit-il être comblé ?", ["Oui", "Non", "Seulement le lundi"], 1, "Certains restent partiellement ou totalement non revisités. Il n’existe aucune obligation de comblement."]
  },
  {
    id: 14, level: 4, duration: "2 h 10", title: "Wyckoff",
    summary: "Lire accumulation, distribution et phases A à E sans forcer chaque range à ressembler à un schéma parfait.",
    lessons: ["Logique de cause et effet", "Accumulation A–E", "Spring, Test, SOS et LPS", "Distribution A–E", "Upthrust, UTAD, SOW et LPSY"],
    skills: "Nommer les événements d’un schéma Wyckoff et expliquer pourquoi un range incomplet ne doit pas être étiqueté de force.",
    intro: "Wyckoff décrit des comportements possibles d’offre et de demande au sein d’un range. Les schémas sont des modèles de lecture, rarement des copies exactes de manuels.",
    concepts: [
      ["Spring", "Passage sous le support du range puis retour, potentiellement suivi d’un test. *(vision Wyckoff classique)*"],
      ["SOS", "Sign of Strength : progression haussière montrant une demande dominante. *(vision Wyckoff classique)*"],
      ["UTAD", "Upthrust After Distribution : excursion au-dessus du range dans une distribution potentielle."],
      ["SOW", "Sign of Weakness : baisse montrant une offre dominante dans la lecture Wyckoff."]
    ],
    example: "Accumulation possible : Selling Climax → Automatic Rally → Secondary Test → Spring → Test → SOS → LPS. L’ordre réel peut varier et aucun label ne remplace la lecture du volume et de la structure.",
    errors: ["Appeler accumulation tout range bas.", "Acheter automatiquement un Spring.", "Ignorer une invalidation claire parce que le schéma paraît presque complet."],
    exercise: "Sur un range historique, marque support, résistance, climax potentiel, réaction automatique et tests. Laisse une étiquette vide si les critères ne sont pas présents.",
    answer: "Une bonne analyse accepte l’incertitude et indique ce qui manque avant de conclure accumulation ou distribution.",
    quiz: ["Tous les ranges sont-ils des schémas Wyckoff parfaits ?", ["Oui", "Non", "Seulement en Daily"], 1, "Le modèle aide à organiser la lecture ; il ne doit pas être imposé au graphique."]
  },
  {
    id: 15, level: 4, duration: "1 h", title: "Relier Wyckoff et ICT/SMC",
    summary: "Comparer les ressemblances entre Spring, UTAD, sweep, displacement et expansion sans fusionner artificiellement les méthodes.",
    lessons: ["Spring et sweep de SSL", "UTAD et sweep de BSL", "SOS et displacement", "SOW et expansion baissière", "Limites des correspondances"],
    skills: "Comparer deux concepts en indiquant ce qui se ressemble et ce qui reste propre à chaque méthodologie.",
    intro: "Deux formes visuelles peuvent se ressembler sans avoir la même définition. Wyckoff décrit une séquence dans un range ; ICT met souvent l’accent sur liquidité, structure et déséquilibre.",
    concepts: [
      ["Spring ↔ SSL sweep", "Ressemblance : excursion sous un creux et retour. Différence : le Spring appartient à une séquence Wyckoff plus large."],
      ["UTAD ↔ BSL sweep", "Ressemblance : passage au-dessus des sommets. Différence : UTAD suppose un contexte de distribution."],
      ["SOS ↔ displacement", "Les deux peuvent montrer une expansion haussière, mais leurs critères et leur rôle ne sont pas identiques."],
      ["SOW ↔ expansion", "La faiblesse Wyckoff s’inscrit dans la campagne du range, pas seulement dans la taille d’une bougie."]
    ],
    example: "Un dépassement d’Equal Lows avec retour peut être décrit comme sweep. Il ne devient Spring que si la structure du range et les événements précédents soutiennent cette lecture.",
    errors: ["Présenter Spring et sweep comme synonymes parfaits.", "Mélanger les labels après coup pour rendre le scénario convaincant.", "Utiliser deux méthodologies contradictoires sans règle de priorité."],
    exercise: "Prends un Spring historique et crée deux colonnes : critères Wyckoff présents ; critères ICT présents. Note les écarts.",
    answer: "L’exercice est réussi si les critères sont observables et si les ressemblances ne sont pas transformées en équivalences absolues.",
    quiz: ["Un sweep de SSL est-il automatiquement un Spring ?", ["Oui", "Non, il manque peut-être le contexte Wyckoff", "Toujours sur M5"], 1, "Le Spring nécessite une lecture de range et de phase plus complète."]
  },
  {
    id: 16, level: 4, duration: "1 h 30", title: "Analyse multi-timeframe",
    summary: "Descendre de Weekly à M1 avec un rôle clair pour chaque unité de temps et sans accumuler des signaux contradictoires.",
    lessons: ["Weekly et Daily : contexte", "H4 et H1 : structure", "M15 et M5 : setup", "M1 : précision ou bruit", "Scénarios haussier et baissier"],
    skills: "Construire un scénario top-down avec contexte, zone, déclencheur et invalidation sur des timeframes distincts.",
    intro: "Chaque timeframe répond à une question. Le supérieur définit le contexte ; l’inférieur affine l’exécution. Descendre trop bas peut ajouter du bruit sans améliorer le risque.",
    concepts: [
      ["Weekly / Daily", "Tendance large, extrêmes importants, zones majeures et calendrier."],
      ["H4 / H1", "Structure opérationnelle, ranges et zones de travail."],
      ["M15 / M5", "Déclencheur et placement plus précis si le plan le prévoit."],
      ["M1", "Très sensible au spread et au bruit ; pas obligatoire pour être précis."]
    ],
    example: "Daily haussier vers un sommet précédent ; H4 retrace dans une zone ; M15 forme un sweep puis un CHoCH validé. Le scénario devient conditionnel, jamais certain.",
    errors: ["Changer de timeframe jusqu’à trouver un signal favorable.", "Utiliser sept unités sans rôle défini.", "Laisser M1 annuler un contexte Weekly sans règle claire."],
    exercise: "Fais une fiche en trois lignes : HTF = contexte ; timeframe intermédiaire = zone ; LTF = déclencheur. Ajoute l’invalidation.",
    answer: "La réponse doit éviter les doublons : chaque timeframe doit fournir une information différente.",
    quiz: ["Le rôle principal du HTF est…", ["Préciser le bouton Buy", "Fournir le contexte large", "Supprimer le spread"], 1, "Le timeframe supérieur sert surtout à situer le prix dans une structure plus large."]
  },
  {
    id: 17, level: 4, duration: "1 h 20", title: "Sessions de trading",
    summary: "Situer Asie, Londres et New York, leurs chevauchements, ranges et niveaux précédents en tenant compte du fuseau horaire.",
    lessons: ["Session asiatique", "Ouverture de Londres", "Ouverture de New York", "Kill Zones", "Heure d’été et fuseaux"],
    skills: "Convertir les horaires dans son fuseau et tracer les hauts/bas des sessions et jours précédents.",
    intro: "Les horaires exacts doivent toujours être accompagnés d’un fuseau et d’une date, car les changements d’heure ne surviennent pas partout le même jour.",
    concepts: [
      ["Asian Range", "Fourchette définie pendant une plage asiatique choisie ; la définition horaire doit être écrite."],
      ["London Open", "Période autour de l’ouverture européenne, souvent plus active sur le Forex."],
      ["New York Open", "Période où les marchés américains et les données économiques peuvent augmenter la volatilité."],
      ["Kill Zones", "Fenêtres horaires popularisées par ICT ; elles ne garantissent pas un setup. *(vision ICT)*"]
    ],
    example: "Un horaire indiqué à 8 h New York peut correspondre à une autre heure à Montréal ou Londres selon la date. Utilise une horloge mondiale et conserve le fuseau dans ton journal.",
    errors: ["Écrire 9 h sans fuseau.", "Ignorer les semaines de décalage entre changements d’heure nord-américains et européens.", "Trader chaque ouverture uniquement parce qu’elle est volatile."],
    exercise: "Choisis une date précise et convertis 8 h 30 America/New_York vers ton fuseau local. Vérifie ensuite l’heure sur la plateforme.",
    answer: "La réponse dépend de la date et du fuseau local. Conserve la date, le fuseau source et le fuseau de destination.",
    quiz: ["Pourquoi faut-il noter le fuseau horaire ?", ["Pour décorer le journal", "Parce que les heures changent selon lieu et saison", "Pour calculer le lot"], 1, "Les changements saisonniers peuvent décaler temporairement les sessions."]
  },
  {
    id: 18, level: 4, duration: "1 h 45", title: "Volume et Order Flow",
    summary: "Interpréter volume, Delta, Footprint, imbalances, absorption et Volume Profile comme données contextuelles.",
    lessons: ["Volume réel ou tick volume", "Bid, Ask et Delta", "Footprint et imbalances", "Absorption et exhaustion", "POC, VAH, VAL et Developing POC"],
    skills: "Lire les éléments de base d’un footprint et expliquer leurs limites selon la source de données.",
    intro: "L’Order Flow dépend fortement de la qualité et du type de données. Sur un marché décentralisé ou un CFD, le volume peut représenter l’activité du fournisseur, pas tout le marché.",
    concepts: [
      ["Delta", "Volume exécuté à l’Ask moins volume exécuté au Bid sur la période ou le niveau étudié."],
      ["Footprint", "Affichage du volume Bid/Ask à chaque niveau de prix."],
      ["Absorption", "Forts ordres agressifs sans progression correspondante, interprétés comme absorbés par des limites."],
      ["Volume Profile", "Répartition du volume par prix ; POC = prix au plus fort volume dans le profil choisi."]
    ],
    formula: "Delta = Volume exécuté à l’Ask − Volume exécuté au Bid",
    example: "Un Delta très positif près d’une résistance sans hausse supplémentaire peut suggérer une absorption, mais peut aussi refléter la fenêtre ou la source choisie. Il faut contexte et confirmation.",
    errors: ["Utiliser le Delta comme bouton Buy/Sell.", "Comparer des données de sources différentes sans le noter.", "Confondre volume par temps et volume par prix."],
    exercise: "Sur un profil, relève POC, VAH et VAL. Écris ensuite une observation descriptive sans prédire la direction.",
    answer: "Exemple : « le prix se situe au-dessus de VAH et le POC reste dans la zone précédente ». Évite « donc il faut acheter ».",
    quiz: ["Le Delta est-il un signal automatique ?", ["Oui", "Non, c’est une donnée à contextualiser", "Seulement sur NAS100"], 1, "Aucune valeur de Delta ne remplace le scénario, l’invalidation et le risque."]
  },
  {
    id: 19, level: 4, duration: "1 h 40", title: "Construction d’un setup",
    summary: "Assembler contexte, biais, liquidité, POI, confirmation, entrée, invalidation et sortie dans une séquence testable.",
    lessons: ["Contexte et biais", "Liquidité et POI", "Sweep et confirmation", "Entrée, SL et TP", "Non-trade et faux signal"],
    skills: "Écrire un setup avec conditions obligatoires, facultatives, invalidation et cas de non-trade.",
    intro: "Un setup est une règle opérationnelle, pas une belle image après coup. Chaque condition doit pouvoir être répondue par oui ou non.",
    concepts: [
      ["Conditions obligatoires", "Sans elles, aucun trade n’est autorisé."],
      ["Confluences", "Éléments facultatifs qui renforcent éventuellement le cas mais ne remplacent pas les règles."],
      ["Invalidation", "Prix ou événement qui prouve que le scénario initial n’est plus valable."],
      ["Non-trade", "Conditions où l’avantage supposé disparaît : nouvelle majeure, spread excessif, R:R insuffisant, règle manquante."]
    ],
    example: "HTF haussier → SSL visée sous un creux → sweep dans un POI → CHoCH M5 → displacement → retracement FVG → SL sous le sweep → TP avant BSL. Une étape obligatoire absente = pas de trade.",
    errors: ["Ajouter des règles après l’entrée.", "Confondre confluence facultative et déclencheur obligatoire.", "Déplacer l’invalidation pour laisser respirer le trade."],
    exercise: "Transforme ton idée actuelle en checklist de huit réponses oui/non, puis ajoute trois conditions de non-trade.",
    answer: "La checklist doit contenir au minimum contexte, liquidité, zone, déclencheur, invalidation, risque, R:R et horaire.",
    quiz: ["Que faire si une condition obligatoire manque ?", ["Entrer avec un lot réduit", "Ne pas prendre le setup", "Déplacer le SL"], 1, "Une règle obligatoire absente invalide le setup, quelle que soit l’impression visuelle."]
  },
  {
    id: 20, level: 4, duration: "1 h 30", title: "Stratégie de trading",
    summary: "Formaliser marchés, horaires, timeframes, setup, risque, gestion et checklists dans un plan répétable.",
    lessons: ["Univers et horaires autorisés", "Règles d’entrée", "Gestion et sorties", "Limites quotidiennes", "Checklist avant et après"],
    skills: "Rédiger une stratégie complète dont chaque règle peut être testée sur historique.",
    intro: "Une stratégie est un ensemble stable de règles conçu pour être évalué statistiquement. Elle peut avoir un avantage potentiel sans gagner tous les trades.",
    concepts: [
      ["Univers", "Liste limitée des actifs, sessions et timeframes autorisés."],
      ["Déclencheur", "Événement observable qui autorise l’ordre après que le contexte est présent."],
      ["Gestion", "Règles prévues avant l’entrée : sortie complète, partielle, Break Even ou trailing."],
      ["Limites", "Nombre maximal de trades et perte maximale quotidienne ou hebdomadaire."]
    ],
    example: "Marché : EURUSD ; session : Londres ; risque : 0,5 % ; setup : sweep + CHoCH + retracement ; maximum : 2 trades ; arrêt après −1R journalier.",
    errors: ["Changer les règles après trois pertes.", "Tester plusieurs variantes dans le même échantillon sans les séparer.", "Omettre les conditions où l’on ne trade pas."],
    exercise: "Écris une page de stratégie avec neuf rubriques : marché, horaire, contexte, setup, déclencheur, SL, TP, risque et non-trade.",
    answer: "Chaque rubrique doit produire une décision reproductible par une autre personne lisant le plan.",
    quiz: ["Une stratégie testable doit contenir…", ["Des règles observables", "Une promesse de gain", "Le plus d’indicateurs possible"], 0, "Les règles doivent être assez précises pour être répétées et mesurées."]
  },
  {
    id: 21, level: 5, duration: "2 h", title: "Backtesting et statistiques",
    summary: "Tester 20, 50 puis 100 trades et calculer Win Rate, gains/pertes moyens, expectancy, profit factor et drawdown.",
    lessons: ["Protocole de test", "Échantillon 20 / 50 / 100", "Win Rate et Average R", "Expectancy et Profit Factor", "Drawdown et séries de pertes"],
    skills: "Tenir un échantillon cohérent, calculer ses statistiques et interpréter leurs limites.",
    intro: "Un backtest honnête applique les mêmes règles à chaque occurrence sans utiliser les bougies futures. Vingt trades donnent une première indication ; cinquante et cent améliorent la stabilité de l’estimation.",
    concepts: [
      ["Win Rate", "Trades gagnants ÷ nombre total × 100."],
      ["Average Win/Loss", "Moyenne des gains et des pertes, idéalement exprimée en R."],
      ["Profit Factor", "Somme des gains bruts ÷ somme absolue des pertes brutes."],
      ["Max Drawdown", "Plus grande baisse sommet-creux observée dans l’échantillon."]
    ],
    formula: "Expectancy = P(gain) × gain moyen − P(perte) × perte moyenne",
    example: "Sur 20 trades : 8 gains à +2R et 12 pertes à −1R. Win Rate = 40 %. Résultat = 16R − 12R = +4R. Expectancy = +4R ÷ 20 = +0,20R/trade.",
    errors: ["Ignorer les spreads et commissions.", "Modifier le setup au milieu du test.", "Choisir uniquement des périodes favorables."],
    exercise: "50 trades : 22 gains totalisant 33R et 28 pertes totalisant −24R. Calcule résultat, Win Rate et Profit Factor.",
    answer: "Résultat = +9R ; Win Rate = 22 ÷ 50 = 44 % ; Profit Factor = 33 ÷ 24 = 1,375.",
    quiz: ["Pourquoi passer de 20 à 100 trades ?", ["Pour garantir un profit", "Pour réduire l’influence du hasard sur l’estimation", "Pour supprimer le drawdown"], 1, "Un échantillon plus large décrit généralement mieux la variabilité, sans garantie future."],
    tool: "expectancy"
  },
  {
    id: 22, level: 5, duration: "55 min", title: "Journal de trading",
    summary: "Documenter chaque décision, le contexte, le risque, les captures, le résultat, les émotions et la leçon.",
    lessons: ["Données avant l’entrée", "Captures avant et après", "Résultat en R", "Émotions observables", "Revue et action corrective"],
    skills: "Enregistrer un trade complet et identifier une action corrective mesurable.",
    intro: "Le journal transforme des souvenirs imprécis en données. Il doit montrer non seulement le résultat, mais surtout si le plan a été respecté.",
    concepts: [
      ["Avant le trade", "Contexte, setup, entrée, invalidation, SL, TP, risque et capture."],
      ["Pendant", "Événements de gestion et comportements : déplacement du SL, sortie partielle, hésitation."],
      ["Après", "Résultat en R, capture, respect du plan, émotion, erreur et leçon."],
      ["Action corrective", "Comportement précis à appliquer au prochain échantillon, pas une phrase vague."]
    ],
    example: "Au lieu de « j’ai eu peur », écris : « j’ai fermé à +0,4R avant mon TP prévu parce que le prix a retracé ; prochaine action : ne pas intervenir avant SL/TP pendant 20 trades test ».",
    errors: ["Ne journaliser que les pertes.", "Noter les émotions sans comportement observable.", "Modifier les captures après coup pour rendre l’analyse plus propre."],
    exercise: "Crée une entrée de journal avec contexte, risque, résultat en R et une seule action corrective vérifiable.",
    answer: "L’entrée est complète si une autre personne peut comprendre le scénario et contrôler si la règle a été suivie.",
    quiz: ["La donnée la plus utile du journal est seulement…", ["Le profit en dollars", "Le résultat et le respect du plan", "La couleur de la bougie"], 1, "Un trade gagnant pris hors plan peut être une mauvaise décision récompensée par hasard."],
    tool: "journal"
  },
  {
    id: 23, level: 5, duration: "1 h", title: "Psychologie et discipline",
    summary: "Relier FOMO, revenge trading, peur et euphorie à des comportements observables et des règles de prévention.",
    lessons: ["FOMO et surtrading", "Revenge trading", "Peur et sortie prématurée", "Euphorie après gains", "Routine et pause obligatoire"],
    skills: "Nommer un déclencheur émotionnel, le comportement associé et une règle concrète pour le réduire.",
    intro: "La psychologie devient utile lorsqu’elle est reliée à une action observable. « Être discipliné » est vague ; « arrêter après deux violations » est testable.",
    concepts: [
      ["FOMO", "Entrer parce que le prix part sans soi, souvent sans déclencheur prévu."],
      ["Revenge Trading", "Augmenter fréquence ou risque pour récupérer rapidement une perte."],
      ["Biais après gains", "Surestimer son habileté et relâcher les règles après une série favorable."],
      ["Pause", "Règle de sécurité déclenchée par un seuil objectif : pertes, violation ou état émotionnel."]
    ],
    example: "Déclencheur : deux pertes. Comportement : passer immédiatement sur M1 et doubler le lot. Règle : fermer la plateforme jusqu’à la prochaine session et faire la revue.",
    errors: ["Croire que la volonté suffit.", "Supprimer le SL pour éviter l’émotion de perte.", "Confondre confiance et augmentation de risque."],
    exercise: "Écris une chaîne : déclencheur → pensée → comportement → conséquence → règle préventive.",
    answer: "La règle doit être mesurable, par exemple « aucune nouvelle entrée pendant 30 minutes après un SL ».",
    quiz: ["Quelle règle est la plus observable ?", ["Être fort mentalement", "Arrêter après −1R quotidien", "Ne jamais avoir peur"], 1, "Une limite chiffrée peut être contrôlée dans le journal."]
  },
  {
    id: 24, level: 5, duration: "1 h 20", title: "Pratique sur compte démo",
    summary: "Exécuter un cycle complet en environnement démo : calcul, ordre, gestion, fermeture, journal et revue.",
    lessons: ["Configurer le compte", "Préparer un ordre", "Placer SL et TP", "Gérer et fermer", "Journaliser 30 trades"],
    skills: "Réaliser correctement un trade démo de la préparation à la revue sans erreur de volume ou d’ordre.",
    intro: "Le compte démo sert à prouver l’exécution correcte et la répétabilité. Il ne reproduit pas parfaitement les émotions, la liquidité ou le slippage du réel.",
    concepts: [
      ["Préparation", "Symbole, scénario, niveau d’invalidation, risque monétaire et taille calculée."],
      ["Exécution", "Bon type d’ordre, bon volume, SL et TP vérifiés avant validation."],
      ["Gestion", "Aucune action improvisée en dehors des règles écrites."],
      ["Revue", "Capture, résultat en R, respect du plan et erreur technique éventuelle."]
    ],
    example: "Avant de cliquer : EURUSD sélectionné, volume 0,05, Buy Limit au niveau prévu, SL affichant le risque autorisé, TP conforme au plan. Relire puis valider.",
    errors: ["Traiter la démo comme un jeu.", "Prendre un volume énorme parce que l’argent est virtuel.", "Changer de stratégie après chaque trade."],
    exercise: "Effectue 30 trades démo avec le même setup et un risque simulé fixe. Journalise chaque occurrence, y compris les non-trades.",
    answer: "La réussite se mesure au respect du protocole et à la qualité des données, pas seulement au solde final.",
    quiz: ["La démo prouve-t-elle la rentabilité future ?", ["Oui", "Non", "Seulement après dix trades"], 1, "Elle valide surtout les compétences techniques et le respect des règles."]
  },
  {
    id: 25, level: 5, duration: "1 h", title: "Préparation au passage au réel",
    summary: "Évaluer sa préparation avec des critères techniques, statistiques et comportementaux, sans rendre le passage automatique.",
    lessons: ["Compétences techniques", "Échantillon de backtest", "Résultats démo", "Tolérance émotionnelle", "Plan de transition"],
    skills: "Évaluer honnêtement ses données et décider de rester en démo ou de passer à un risque réel minimal.",
    intro: "Passer au réel est une décision de risque, pas une récompense pour avoir terminé le cours. Rester en démo est approprié tant que les règles ne sont pas stables.",
    concepts: [
      ["Critères techniques", "Calcul correct, ordre correct, SL/TP et journal complet sans erreur répétée."],
      ["Critères statistiques", "Échantillon suffisant, expectancy observée, drawdown compris et coûts inclus."],
      ["Critères comportementaux", "Respect du risque après gains et pertes, absence de poursuite impulsive."],
      ["Transition", "Risque minimal, capital que l’on peut perdre, limites strictes et retour en démo en cas de violations."]
    ],
    example: "Checklist : 100 backtests cohérents, 30 démos sans erreur technique, risque fixe respecté, drawdown connu, aucune dette engagée, plan de retour en démo écrit.",
    errors: ["Emprunter pour trader.", "Passer en réel pour récupérer des pertes personnelles.", "Augmenter le risque parce que la démo a été rentable un mois."],
    exercise: "Note chaque critère de 0 à 2 : non acquis, partiel, stable. Tout critère critique noté 0 impose de rester en démo.",
    answer: "Une évaluation prudente peut conclure « pas encore ». L’objectif est la maîtrise du processus, pas la vitesse de passage.",
    quiz: ["Finir la formation oblige-t-il à passer au réel ?", ["Oui", "Non", "Seulement avec 2 % de risque"], 1, "Le passage dépend de critères de préparation et de ta situation financière personnelle."]
  },
  {
    id: 26, level: 4, duration: "2 h 15", track: "Essentiel", elective: true, title: "Masterclass Offre et Demande",
    summary: "Cartographier des zones d’offre et de demande, mesurer leur qualité et les relier sans confusion aux Order Blocks ICT.",
    lessons: ["Lire le marché par déséquilibres", "Zone fraîche ou déjà testée", "Qualifier la force du départ", "Adapter la zone au timeframe", "Offre/Demande classique face à l’Order Block"],
    skills: "Tracer une zone avec une règle écrite, classer son état et expliquer précisément sa relation — ou sa différence — avec un Order Block.",
    intro: "Cette masterclass étudie les zones où le prix a quitté rapidement une base. *(vision Offre/Demande classique)* Une zone reste une hypothèse de réaction, pas une preuve d’ordres encore présents. Quand la même structure est appelée Order Block, la définition ICT utilisée doit être nommée explicitement. *(vision ICT)*",
    concepts: [
      ["Zone fraîche", "*(vision Offre/Demande classique)* Zone non revisitée depuis le départ observé. Fraîche ne signifie ni invisible aux autres participants ni garantie."],
      ["Zone testée", "*(vision Offre/Demande classique)* Zone revisitée une ou plusieurs fois. Chaque test doit être décrit, sans supposer automatiquement qu’il consomme tous les ordres."],
      ["Force du départ", "Distance, vitesse relative, bougies de déplacement et rupture éventuelle d’une structure après la base."],
      ["Order Block", "*(vision ICT)* Bougie ou groupe de prix défini selon une règle ICT/SMC. Il peut recouvrir une zone Offre/Demande, mais les deux étiquettes ne sont pas automatiquement équivalentes."]
    ],
    example: "Une base H1 précède une expansion haussière qui casse un sommet. La zone de demande classique englobe la base complète. *(vision Offre/Demande classique)* Selon une définition ICT choisie, l’Order Block peut viser seulement la dernière bougie baissière avant le déplacement. *(vision ICT)* On compare donc les bornes et l’invalidation au lieu d’empiler les deux noms.",
    errors: ["Appeler toute consolidation une zone de demande.", "Considérer une zone fraîche comme un ordre institutionnel certain.", "Présenter Offre/Demande et Order Block comme deux causes indépendantes lorsqu’ils décrivent la même structure de prix."],
    exercise: "Sur le schéma, trace la base, la zone classique, l’Order Block selon la définition indiquée, le premier retest et l’invalidation. Écris ensuite ce qui est identique et ce qui change.",
    answer: "La zone classique couvre la base retenue ; l’Order Block est plus étroit si la règle choisit la dernière bougie opposée. Leur intersection peut être grande, mais la méthode de sélection et l’invalidation doivent rester visibles.",
    quiz: ["Une zone de demande fraîche est-elle une garantie de hausse ?", ["Oui, si elle n’a jamais été testée", "Non, c’est une hypothèse à contextualiser et invalider", "Oui, si elle contient un Order Block"], 1, "La fraîcheur décrit l’historique du retest ; elle ne prouve ni la présence d’ordres ni la réaction future."]
  },
  {
    id: 27, level: 4, duration: "2 h 30", track: "Essentiel", elective: true, title: "Maîtriser l’offre et la demande en trading",
    summary: "Une masterclass entièrement pratique : cinq ateliers guidés pour tracer, valider, invalider et revoir des zones sans ajouter de nouvelle théorie.",
    lessons: ["Atelier 1 — tracer sans anticiper", "Atelier 2 — classer fraîche ou testée", "Atelier 3 — exécuter la checklist", "Atelier 4 — diagnostiquer une zone en échec", "Atelier 5 — revue aveugle et correction"],
    skills: "Appliquer la même checklist à cinq graphiques, justifier chaque zone et reconnaître un échec sans déplacer les règles après coup.",
    intro: "Ce module ne présente aucune nouvelle notion. Il transforme le module 26 en gestes reproductibles : observer, tracer, qualifier, décider et corriger. Tous les cas restent simulés ou travaillés en Replay.",
    concepts: [
      ["Observation vierge", "Graphique sans annotation future : l’élève décrit d’abord structure, base et départ."],
      ["Checklist de zone", "Suite fixe : contexte, base, départ, fraîcheur, retest, invalidation et risque."],
      ["Cas d’échec", "Exemple conservé dans l’échantillon où la zone est traversée ou invalidée malgré une sélection correcte."],
      ["Correction détaillée", "Comparaison entre la règle annoncée et le tracé produit, sans juger uniquement le résultat final."]
    ],
    example: "Cas simulé : une zone de demande H1 paraît forte mais a déjà reçu deux retests profonds. L’élève doit la classer « testée », attendre la condition prévue et accepter qu’elle échoue. La correction vérifie le processus, pas seulement la direction suivante.",
    errors: ["Regarder la correction avant de figer son tracé.", "Élargir la zone après avoir vu qu’elle échoue.", "Supprimer les cas perdants de la série d’exercices."],
    exercise: "Complète les cinq ateliers dans l’ordre. Pour chacun, conserve une capture avant, une décision zone valide/non valide, une invalidation et une phrase de correction.",
    answer: "Une série réussie applique la même définition aux cinq cas. Un cas perdant peut être correctement traité si le tracé, l’invalidation et le non-trade respectent la checklist.",
    quiz: ["Dans ce module pratique, que faut-il faire avant de regarder la correction ?", ["Modifier la zone jusqu’à obtenir une réaction", "Figer le tracé, la checklist et l’invalidation", "Ajouter un nouvel indicateur"], 1, "La réponse doit être enregistrée avant la correction pour éviter le biais rétrospectif."]
  },
  {
    id: 28, level: 4, duration: "2 h 20", track: "Avancé", elective: true, title: "L’Ordre des Baleines : flux d’ordres et empreinte institutionnelle",
    summary: "Lire divergences de Delta, absorption avancée et exécutions inhabituelles sans prétendre identifier l’auteur d’un ordre.",
    lessons: ["Ce que le flux montre réellement", "Divergences prix–Delta", "Absorption et échec de progression", "Bloc d’exécutions inhabituel", "Probabilité, contexte et non-signal"],
    skills: "Décrire une anomalie de flux, vérifier la qualité de la donnée et formuler une hypothèse probabiliste sans attribuer l’ordre à une institution précise.",
    intro: "Le titre est volontairement mémorable, mais la règle de rigueur est stricte : un Footprint ne révèle pas l’identité d’une « baleine ». *(lecture Order Flow)* Il montre des exécutions et classifications fournies par une source donnée. Taille inhabituelle et contexte permettent une hypothèse, jamais une certitude ni un signal automatique.",
    concepts: [
      ["Divergence de Delta", "*(lecture Order Flow)* Désaccord observé entre progression du prix et évolution du Delta sur une période définie."],
      ["Absorption avancée", "*(lecture Order Flow)* Volume agressif important sans progression proportionnelle, évalué relativement aux niveaux voisins."],
      ["Bloc inhabituel", "Exécution ou groupe d’exécutions grand par rapport à une référence locale ; grand n’indique pas l’identité ni l’intention."],
      ["Qualité de la source", "Marché centralisé, flux consolidé ou données propres au broker : la portée de la conclusion change avec la donnée."]
    ],
    example: "Sur un future liquide, le prix teste un sommet pendant que le Delta cumulé progresse, mais aucune acceptation au-dessus n’apparaît. *(lecture Order Flow)* On note une absorption possible. On ne peut pas écrire « une banque vend » : l’auteur et son objectif ne sont pas confirmables avec cette seule donnée.",
    errors: ["Nommer l’auteur d’un ordre à partir de sa taille.", "Traiter une divergence de Delta comme une entrée automatique.", "Comparer le Footprint d’un future centralisé au tick volume d’un CFD comme s’il s’agissait du même flux."],
    exercise: "Décris le schéma avec quatre colonnes : fait mesuré, comparaison locale, hypothèse, condition qui invalide l’hypothèse. Aucun mot Buy ou Sell dans les trois premières colonnes.",
    answer: "Une bonne réponse sépare l’exécution observée, son caractère relatif, l’hypothèse d’absorption et la réaction de prix nécessaire. Elle ne prétend jamais connaître l’identité du participant.",
    quiz: ["Un bloc d’ordres inhabituel permet-il d’identifier une « baleine » ?", ["Oui, si la taille est très grande", "Non, il permet seulement une hypothèse contextualisée", "Oui, si le Delta est positif"], 1, "Les données de flux ne donnent généralement ni l’identité économique ni l’intention complète derrière l’exécution."]
  },
  {
    id: 29, level: 4, duration: "2 h 30", track: "Avancé", elective: true, title: "Masterclass Flux de commandes — Modèles d’exécution avancés",
    summary: "Comprendre exécution agressive et passive, lire plusieurs horizons de flux et gérer les conflits entre prix et Order Flow.",
    lessons: ["Agressif contre passif", "File d’attente et liquidité affichée", "Flux rapide et contexte lent", "Quand le flux contredit la structure", "Protocole de conflit et non-trade"],
    skills: "Classer une exécution, construire une lecture multi-échelle et appliquer un protocole écrit lorsqu’un signal de flux contredit la structure du prix.",
    intro: "Cette masterclass prolonge le module 28. *(lecture Order Flow)* Elle étudie comment les ordres interagissent avec la liquidité affichée et comment combiner session, structure et exécutions sans donner automatiquement raison au prix ou au flux.",
    concepts: [
      ["Ordre agressif", "Ordre qui traverse le spread ou prend la liquidité disponible, sous réserve des règles du marché et de la donnée."],
      ["Ordre passif", "Ordre limite au repos qui propose de la liquidité et attend une exécution ; l’affichage peut être modifié ou annulé avant exécution."],
      ["Lecture multi-échelle", "Contexte de session et structure sur horizon large, puis exécutions détaillées sur une fenêtre courte."],
      ["Conflit prix–flux", "Situation où la structure et la donnée de flux ne soutiennent pas la même hypothèse ; elle appelle une règle d’attente, pas un arbitrage improvisé."]
    ],
    example: "La structure H1 reste haussière, mais le Footprint M1 montre plusieurs échecs d’achats agressifs au sommet. Le protocole ne force ni achat ni vente : attendre une cassure structurale prévue, réduire l’exposition selon le plan ou classer la situation non-trade.",
    errors: ["Donner toujours priorité au timeframe le plus court.", "Confondre liquidité affichée et liquidité garantie disponible à l’exécution.", "Changer la règle de conflit selon le résultat de la bougie suivante."],
    exercise: "Sur trois scénarios, classe la relation prix–flux : alignée, contradictoire ou insuffisante. Applique ensuite le même protocole d’attente et d’invalidation.",
    answer: "Aligné n’autorise pas automatiquement une entrée ; contradictoire impose la règle de conflit ; insuffisant reste non-trade. La décision doit être identique lorsque les mêmes conditions se répètent.",
    quiz: ["Que faire si le flux court terme contredit la structure H1 ?", ["Toujours suivre le flux", "Toujours suivre H1", "Appliquer le protocole écrit : attendre, invalider ou ne pas trader"], 2, "Le conflit est une information sur l’incertitude ; il ne donne pas une priorité universelle."]
  },
  {
    id: 30, level: 4, duration: "2 h 25", track: "Avancé", elective: true, title: "Masterclass sur les indices : US30, NAS100, GER40",
    summary: "Travailler ouvertures, gaps, composantes, corrélations, annonces macro et valeur du point propres aux principaux indices.",
    lessons: ["Indice cash, future ou CFD ?", "Gap et ouverture de session", "Composantes et corrélations", "Taux, emploi et inflation", "Valeur du point et taille de position"],
    skills: "Identifier le produit réellement tradé, préparer une session d’indice et recalculer le risque avec la valeur du point de son contrat.",
    intro: "US30, NAS100 et GER40 sont souvent des noms de broker pour des CFD liés au Dow Jones, au Nasdaq-100 et au DAX. *(dépend du broker/de l’actif — à vérifier)* Le future, l’indice cash et le CFD peuvent avoir des horaires, prix, frais et valeurs du point différents.",
    concepts: [
      ["Gap d’ouverture", "Écart entre une référence de clôture et l’ouverture suivante. Sa mesure dépend du produit et de la session retenue."],
      ["Poids des composantes", "Les indices n’emploient pas tous la même pondération : les mouvements de certaines actions peuvent influencer davantage l’indice."],
      ["Fenêtre macro", "Période autour d’une décision de taux ou d’une publication emploi/inflation où volatilité, spread et slippage peuvent augmenter."],
      ["Valeur du point", "Montant gagné ou perdu pour un point et une unité de volume. Il varie fortement entre YM, NQ, DAX futures et CFD de broker."]
    ],
    formula: "Risque monétaire = Distance du Stop en points × Valeur du point × Nombre de contrats ou lots",
    example: "Deux symboles appelés NAS100 peuvent avoir des tailles de contrat différentes. Le future E-mini Nasdaq-100 (NQ) est défini par son exchange ; un CFD NAS100 suit la fiche du broker. Avant tout calcul du module 8, relève tick size, tick value, contract size, volume minimal et horaires du symbole exact.",
    errors: ["Appliquer la valeur du point d’US30 à NAS100 ou GER40.", "Confondre l’ouverture cash avec le début de cotation du future ou du CFD.", "Trader une annonce macro sans vérifier l’heure, le fuseau et la règle de non-trade."],
    exercise: "Construis une fiche séparée pour US30, NAS100 et GER40 : produit, source, session cash, horaires du symbole, valeur du point, volume minimal, trois annonces sensibles et règle de non-trade.",
    answer: "La fiche doit provenir des spécifications du symbole réellement utilisé. Toute valeur copiée d’un exemple est marquée comme provisoire jusqu’à vérification sur la plateforme.",
    quiz: ["Pourquoi recalculer la position pour chaque indice ?", ["Parce que la couleur des bougies change", "Parce que la valeur du point et le contrat diffèrent", "Seulement à cause du timeframe"], 1, "Le même Stop en points peut représenter des risques monétaires très différents selon le contrat et le volume."]
  }
];

const levelMeta = [
  ["Débutant", "Marchés, plateformes et vocabulaire essentiel."],
  ["Fondations", "Ordres, position, risque et analyse technique."],
  ["Intermédiaire", "Structure, liquidité et concepts SMC."],
  ["Avancé", "Wyckoff, multi-timeframe, sessions et stratégie."],
  ["Autonomie", "Backtest, journal, psychologie et préparation."]
];

const examData = [
  {level:1, title:"Débutant", questions:[
    ["Le spread correspond à…", ["l’écart Bid/Ask", "la taille du lot", "la marge libre"], 0],
    ["Une bougie H1 résume…", ["une journée", "une heure", "une minute"], 1],
    ["Le compte démo sert surtout à…", ["garantir la rentabilité", "s’entraîner sans capital réel", "éviter le SL"], 1]
  ]},
  {level:2, title:"Fondations", questions:[
    ["1 % de 5 000 $ représente…", ["5 $", "50 $", "500 $"], 1],
    ["Un Buy Limit se place normalement…", ["sous le prix", "au-dessus du prix", "sans prix"], 0],
    ["Un R:R 2:1 signifie…", ["risquer 2 pour viser 1", "viser 2 pour risquer 1", "gagner deux fois sur trois"], 1]
  ]},
  {level:3, title:"Intermédiaire", questions:[
    ["HH suivi de HL décrit généralement…", ["une structure haussière", "une structure baissière", "un spread"], 0],
    ["Un sweep est…", ["une garantie", "un dépassement puis retour potentiel", "un type de lot"], 1],
    ["Un CHoCH indique…", ["un changement possible", "un profit certain", "le volume du contrat"], 0]
  ]},
  {level:4, title:"Avancé", questions:[
    ["Un FVG haussier exige, selon ICT…", ["trois bougies et un espace entre mèches 1 et 3", "une seule grande bougie", "un POC"], 0],
    ["Tout sweep de SSL est-il un Spring ?", ["oui", "non", "seulement en Daily"], 1],
    ["Le Delta doit être utilisé comme…", ["signal automatique", "donnée contextuelle", "garantie institutionnelle"], 1]
  ]},
  {level:5, title:"Autonomie", questions:[
    ["Une expectancy positive garantit-elle la suite ?", ["oui", "non", "après 20 trades"], 1],
    ["Un trade gagnant hors plan est…", ["forcément une bonne décision", "une violation potentiellement récompensée par hasard", "sans importance"], 1],
    ["Terminer le cours oblige à passer au réel ?", ["oui", "non", "avec 2 % de risque"], 1]
  ]}
];

const memoryStore = new Map();
let storageAvailable = true;
const safeStorage = {
  read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      try { return JSON.parse(raw); }
      catch (parseError) { return typeof fallback === "string" ? raw : fallback; }
    } catch (error) {
      storageAvailable = false;
      return memoryStore.has(key) ? memoryStore.get(key) : fallback;
    }
  },
  write(key, value) {
    memoryStore.set(key, value);
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      storageAvailable = false;
      return false;
    }
  }
};

const state = {
  completed: new Set(safeStorage.read("djoniaCompleted", [])),
  completedLessons: new Set(safeStorage.read("djoniaCompletedLessons", [])),
  activeModule: null,
  theme: safeStorage.read("djoniaTheme", "dark"),
  journal: safeStorage.read("djoniaJournal", []),
  quizScores: safeStorage.read("djoniaQuizScores", {}),
  examScores: safeStorage.read("djoniaExamScores", {}),
  filters: {level: "all", tool: "all"}
};
if (!state.completedLessons.size && state.completed.size) {
  modules.filter(m => state.completed.has(m.id)).forEach(m => m.lessons.forEach((_, i) => state.completedLessons.add(`${m.id}:${i}`)));
  safeStorage.write("djoniaCompletedLessons", [...state.completedLessons]);
}

const content = document.getElementById("content");
const moduleList = document.getElementById("moduleList");
const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");
const sidebarCloseButton = document.getElementById("sidebarCloseButton");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const searchInput = document.getElementById("courseSearch");
const levelFilter = document.getElementById("levelFilter");
const toolFilter = document.getElementById("toolFilter");
const imageModal = document.getElementById("imageModal");
const imageModalPanel = imageModal.querySelector(".image-modal-panel");
const imageModalStage = document.getElementById("imageModalStage");
const imageModalContent = document.getElementById("imageModalContent");
const imageModalTitle = document.getElementById("imageModalTitle");
const imageModalClose = document.getElementById("imageModalClose");
const imageZoomOut = document.getElementById("imageZoomOut");
const imageZoomIn = document.getElementById("imageZoomIn");
const imageZoomValue = document.getElementById("imageZoomValue");

const imageDimensions = Object.freeze({
  "assets/analysis-workbench.svg": [1200, 700],
  "assets/bos-choch.svg": [960, 520],
  "assets/execution-models.svg": [1100, 620],
  "assets/fvg.svg": [960, 520],
  "assets/hero-market-briefing.svg": [1200, 700],
  "assets/indices-session-map.svg": [1100, 620],
  "assets/liquidity-sweep.svg": [960, 520],
  "assets/metatrader4-interface.png": [1363, 936],
  "assets/metatrader5-market-watch.png": [1363, 936],
  "assets/multi-timeframe.svg": [1000, 620],
  "assets/order-block.svg": [960, 520],
  "assets/order-flow-divergence.svg": [1100, 620],
  "assets/order-flow-profile.svg": [1060, 640],
  "assets/risk-journal-sheet.svg": [1200, 700],
  "assets/sessions-timeline.svg": [1100, 580],
  "assets/strategy-process.svg": [1060, 660],
  "assets/structure-hh-hl.svg": [960, 520],
  "assets/supply-demand-zones.svg": [1100, 620],
  "assets/tradingview-bar-replay.png": [1363, 936],
  "assets/wyckoff-accumulation.svg": [960, 540],
  "assets/wyckoff-distribution.svg": [960, 540],
  "assets/wyckoff-ict-comparison.svg": [1040, 560]
});

function imageSizeAttributes(src) {
  const [width, height] = imageDimensions[src] || [1200, 700];
  return `width="${width}" height="${height}"`;
}

let imageModalReturnFocus = null;
let imageModalScale = 1;

function applyImageModalZoom(nextScale = imageModalScale) {
  if (imageModal.hidden) return;
  imageModalScale = Math.min(3, Math.max(.75, nextScale));
  const src = imageModalContent.getAttribute("src");
  const [naturalWidth, naturalHeight] = imageDimensions[src] || [1200, 700];
  const stageWidth = Math.max(1, imageModalStage.clientWidth - 32);
  const stageHeight = Math.max(1, imageModalStage.clientHeight - 32);
  const fitScale = Math.min(1, stageWidth / naturalWidth, stageHeight / naturalHeight);
  imageModalContent.style.width = `${Math.max(1, Math.round(naturalWidth * fitScale * imageModalScale))}px`;
  imageZoomValue.value = `${Math.round(imageModalScale * 100)} %`;
  imageZoomValue.textContent = imageZoomValue.value;
  imageZoomOut.disabled = imageModalScale <= .75;
  imageZoomIn.disabled = imageModalScale >= 3;
}

function openImageModal(trigger) {
  const src = trigger.dataset.modalSrc;
  if (!src) return;
  const [width, height] = imageDimensions[src] || [1200, 700];
  imageModalReturnFocus = trigger;
  imageModalTitle.textContent = trigger.dataset.modalTitle || "Illustration agrandie";
  imageModalContent.src = src;
  imageModalContent.alt = trigger.dataset.modalAlt || "Illustration pédagogique agrandie";
  imageModalContent.width = width;
  imageModalContent.height = height;
  imageModal.hidden = false;
  document.body.classList.add("modal-open");
  imageModalScale = 1;
  // Le premier ajustement est synchrone : les iframes mobiles et certains
  // navigateurs économes peuvent retarder requestAnimationFrame.
  applyImageModalZoom(1);
  imageModalStage.scrollTo({top: 0, left: 0});
  imageModalClose.focus();
  requestAnimationFrame(() => {
    applyImageModalZoom(1);
    imageModalStage.scrollTo({top: 0, left: 0});
    imageModalClose.focus();
  });
}

function closeImageModal() {
  if (imageModal.hidden) return;
  imageModal.hidden = true;
  document.body.classList.remove("modal-open");
  imageModalContent.removeAttribute("src");
  imageModalContent.removeAttribute("style");
  if (imageModalReturnFocus instanceof HTMLElement) imageModalReturnFocus.focus();
  imageModalReturnFocus = null;
}

let menuReturnFocus = null;
function setSidebarOpen(open, { restoreFocus = false } = {}) {
  const shouldOpen = Boolean(open) && window.innerWidth <= 900;
  if (shouldOpen) menuReturnFocus = document.activeElement;
  sidebar.classList.toggle("open", shouldOpen);
  menuButton.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  sidebarBackdrop.hidden = !shouldOpen;
  document.body.classList.toggle("menu-open", shouldOpen);
  if (shouldOpen) sidebarCloseButton.focus();
  else if (restoreFocus && menuReturnFocus instanceof HTMLElement) menuReturnFocus.focus();
}

document.body.classList.toggle("light", state.theme === "light");

function esc(value = "") {
  return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
}

function lessonKey(moduleId, lessonIndex) { return `${moduleId}:${lessonIndex}`; }
function lessonProgress(moduleId) {
  const module = modules.find(m => m.id === moduleId);
  if (!module) return {done:0, total:0, pct:0};
  const done = module.lessons.filter((_, i) => state.completedLessons.has(lessonKey(moduleId, i))).length;
  return {done, total:module.lessons.length, pct:Math.round(done / module.lessons.length * 100)};
}
function totalLessonCount(list = modules) { return list.reduce((sum, m) => sum + m.lessons.length, 0); }
function completedLessonCount(list = modules) {
  return list.reduce((sum, module) => sum + module.lessons.filter((_, i) => state.completedLessons.has(lessonKey(module.id, i))).length, 0);
}
function progress() {
  const required = modules.filter(module => !module.elective);
  return Math.round((completedLessonCount(required) / totalLessonCount(required)) * 100);
}

const competencyGroups = [
  {name:"Niveau 1 · Marchés & plateformes", modules:[1,2,3,4,5], color:"#8b9ca2"},
  {name:"Niveau 2 · Risque & analyse", modules:[6,7,8,9,10], color:"#33c795"},
  {name:"Niveau 3 · Structure & ICT", modules:[11,12,13], color:"#d9a441"},
  {name:"Niveau 4 · Wyckoff & stratégie", modules:[14,15,16,17,18,19,20], color:"#e16468"},
  {name:"Niveau 5 · Autonomie", modules:[21,22,23,24,25], color:"#eef1ee"},
  {name:"À la carte · Masterclasses", modules:[26,27,28,29,30], color:"#6be0b5"}
];

function competencyProgress(group) {
  const selected = modules.filter(m => group.modules.includes(m.id));
  const total = selected.reduce((sum, m) => sum + m.lessons.length, 0);
  const done = selected.reduce((sum, m) => sum + m.lessons.filter((_, i) => state.completedLessons.has(lessonKey(m.id, i))).length, 0);
  return {done, total, pct: total ? Math.round(done / total * 100) : 0};
}

function competencyDashboard() {
  return `<section class="competency-section"><div class="section-heading"><div><span class="eyebrow">Carte de compétences</span><h2>Repère tes zones fortes et faibles</h2><p>Ces barres mesurent les leçons terminées. Les masterclass restent facultatives et ne bloquent pas le parcours principal.</p></div></div><div class="competency-grid">${competencyGroups.map((group, index) => { const cp = competencyProgress(group); const exam = index < 5 ? state.examScores[index + 1] : null; const status = index < 5 ? (exam == null ? "Examen de niveau non passé" : `Meilleur examen : ${exam}%`) : "Approfondissements à la carte"; return `<article class="competency-card"><div class="competency-head"><div><strong>${esc(group.name)}</strong><small>${cp.done}/${cp.total} leçons</small></div><b>${cp.pct}%</b></div><div class="competency-track"><span style="width:${cp.pct}%;background:${group.color}"></span></div><p>${status}</p></article>`; }).join("")}</div></section>`;
}

function saveProgress() {
  safeStorage.write("djoniaCompleted", [...state.completed]);
  safeStorage.write("djoniaCompletedLessons", [...state.completedLessons]);
  renderSidebar();
}

const sequenceQuestions = {
  7: ["Quel ordre est logique avant d'envoyer un ordre ?", ["Scénario → type d'ordre → volume calculé → SL/TP", "Volume maximal → type d'ordre → scénario", "Entrée → déplacement du SL → calcul du risque"], 0, "Le scénario et l'invalidation précèdent toujours le choix final du volume."],
  8: ["Remets le calcul de position dans le bon ordre.", ["Capital → risque % → distance du SL → valeur unitaire → taille", "Taille → capital → levier → SL", "TP → taille → risque → capital"], 0, "La taille est le résultat final du calcul, jamais le point de départ."],
  10: ["Quelle séquence décrit une hausse structurée ?", ["HH → HL → nouveau HH", "LL → LH → nouveau LL", "HH → LL → spread"], 0, "Une structure haussière progresse par sommets et creux ascendants."],
  13: ["Quel enchaînement construit un scénario ICT sans sauter d'étape ?", ["Contexte → sweep potentiel → déplacement → FVG → retracement", "FVG → achat automatique → contexte", "Order Block → garantie → taille maximale"], 0, "Les concepts ne valent que dans une séquence contextualisée et invalidable."],
  16: ["Quel ordre respecte une analyse top-down ?", ["Weekly/Daily → H4/H1 → M15/M5", "M1 → Weekly → H4", "M5 → M1 → Daily"], 0, "Le supérieur donne le contexte, l'intermédiaire la zone et l'inférieur le déclencheur."],
  19: ["Quel enchaînement respecte le setup enseigné ?", ["Contexte → liquidité → POI → confirmation → risque → entrée", "Entrée → contexte → SL", "POI → lot maximal → confirmation facultative"], 0, "L'entrée vient après le contexte, la confirmation et le calcul du risque."],
  20: ["Quel ordre permet de tester une stratégie honnêtement ?", ["Règles fixes → backtest → statistiques → décision", "Résultat souhaité → changement des règles → sélection des gains", "Trois gains → passage immédiat en réel"], 0, "Les règles sont fixées avant l'échantillon puis jugées par les données."],
  21: ["Quel ordre réduit le biais de recul pendant un backtest ?", ["Règles fixes → Replay → saisie du trade → statistiques", "Voir le futur → choisir l'entrée → noter le gain", "Modifier le setup → supprimer les pertes → conclure"], 0, "Le protocole est défini avant de révéler les bougies suivantes."],
  22: ["Quel ordre produit une revue exploitable ?", ["Capture avant → exécution → capture après → leçon", "Résultat → souvenir → justification", "Profit → suppression des erreurs → nouvelle règle"], 0, "Les informations prises avant et après le trade évitent de reconstruire l'histoire."],
  24: ["Quelle progression démo est la plus rigoureuse ?", ["Calcul → ordre → gestion → fermeture → journal → revue", "Ordre → lot arbitraire → journal si perte", "Gain démo → réel immédiat"], 0, "La démo doit entraîner tout le processus, pas seulement le clic d'entrée."],
  26: ["Dans quel ordre qualifier une zone Offre/Demande ?", ["Structure → base → départ → fraîcheur → invalidation", "Order Block → achat automatique → contexte", "Résultat futur → redessin de la zone → justification"], 0, "La zone est décrite avec des critères observables avant toute décision ; le vocabulaire ICT est ensuite comparé sans fusionner les définitions."],
  27: ["Quel ordre protège un exercice du biais de recul ?", ["Capture vierge → tracé figé → checklist → révélation → correction", "Révélation → déplacement de la zone → capture", "Résultat → choix d’une définition avantageuse → validation"], 0, "Le tracé, la classification et l’invalidation sont enregistrés avant de révéler la suite."],
  28: ["Comment analyser une exécution inhabituellement grande ?", ["Fait mesuré → référence locale → hypothèse → invalidation", "Taille → identité certaine → ordre automatique", "Delta → certitude institutionnelle → levier maximal"], 0, "La donnée permet une hypothèse contextualisée, jamais l’identification certaine de son auteur."],
  29: ["Que faire lorsque structure et flux se contredisent ?", ["Nommer le conflit → appliquer le protocole écrit → attendre, invalider ou ne pas trader", "Toujours suivre le flux le plus rapide", "Toujours suivre le timeframe supérieur sans nouvelle preuve"], 0, "Le conflit mesure l’incertitude ; une règle définie à l’avance évite l’arbitrage improvisé."],
  30: ["Quel ordre prépare correctement un trade sur indice ?", ["Produit exact → session → événement macro → valeur du point → risque → scénario", "Nom commercial → lot habituel → entrée", "Corrélation supposée → position identique sur trois indices"], 0, "Le calcul dépend du contrat ou du CFD réellement utilisé, puis du Stop et de la valeur du point vérifiée."]
};

function rotateQuestion(question, shift = 0) {
  const [label, options, correct, explanation] = question;
  const amount = shift % options.length;
  if (!amount) return question;
  return [label, [...options.slice(-amount), ...options.slice(0, -amount)], (correct + amount) % options.length, explanation];
}

function moduleQuizQuestions(module) {
  const [question, options, correct, explanation] = module.quiz;
  const concept = module.concepts[module.id % module.concepts.length];
  const exerciseQuestion = [
    "Mise en situation : quel corrigé répond le mieux à l’exercice de ce module ?",
    [module.answer, module.errors[0], module.errors[1]],
    0,
    `Le corrigé attendu est : ${module.answer}`
  ];
  let reasoningQuestion;
  if (sequenceQuestions[module.id]) reasoningQuestion = sequenceQuestions[module.id];
  else if (module.id % 3 === 0) reasoningQuestion = [
    `Vrai ou faux : « ${module.errors[0]} » est conforme à la méthode du cours.`,
    ["Faux : c'est précisément une erreur classique.", "Vrai : aucune autre vérification n'est nécessaire.", "Vrai : cela garantit seulement un meilleur taux de réussite."],
    0,
    `Faux. ${module.errors[0]} est présenté comme une erreur à éviter.`
  ];
  else if (module.id % 3 === 1) reasoningQuestion = [
    `Quelle association décrit correctement « ${concept[0]} » ?`,
    [concept[1], module.concepts[(module.id + 1) % module.concepts.length][1], module.concepts[(module.id + 2) % module.concepts.length][1]],
    0,
    `${concept[0]} : ${concept[1]}`
  ];
  else reasoningQuestion = [
    `Tu observes « ${concept[0]} ». Quelle réaction est la plus rigoureuse ?`,
    ["Vérifier sa définition, le contexte et l'invalidation avant toute décision.", module.errors[0], module.errors[2]],
    0,
    "Une notion isolée n'autorise pas un trade : elle doit être définie, contextualisée et reliée à une invalidation."
  ];
  return [
    [question, options, correct, explanation],
    rotateQuestion(exerciseQuestion, module.id % 3),
    rotateQuestion(reasoningQuestion, (module.id + 1) % 3)
  ];
}

function getExamQuestions(level) {
  const base = examData.find(e => e.level === level)?.questions || [];
  const extended = modules.filter(m => m.level === level && !m.elective).flatMap(moduleQuizQuestions);
  return [...base, ...extended].slice(0, 10);
}

function moduleMatchesTool(module, tool) {
  if (tool === "all" || tool === "quiz") return true;
  if (tool === "calculator") return [8, 9, 21].includes(module.id) || ["position", "expectancy"].includes(module.tool);
  if (tool === "journal") return module.tool === "journal" || [22, 23, 24].includes(module.id);
  if (tool === "graphic") return [2, 3, 4, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 26, 27, 28, 29, 30].includes(module.id);
  return true;
}

function filteredModules(query = "") {
  const q = query.trim().toLowerCase();
  return modules.filter(m => {
    const matchesText = !q || `${m.title} ${m.summary} ${m.lessons.join(" ")} ${m.concepts.flat().join(" ")} ${JSON.stringify(window.deepCourse?.[m.id]?.chapters || [])}`.toLowerCase().includes(q);
    const matchesLevel = state.filters.level === "all" || String(m.level) === state.filters.level;
    return matchesText && matchesLevel && moduleMatchesTool(m, state.filters.tool);
  });
}

function toast(message) {
  const node = document.getElementById("toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => node.classList.remove("show"), 2600);
}

function renderSidebar(filter = "") {
  const list = filteredModules(filter);
  moduleList.innerHTML = list.map((m, index) => `${m.elective && (index === 0 || !list[index - 1].elective) ? `<div class="module-group-label">Approfondissements à la carte</div>` : ""}
    <button class="module-button ${state.activeModule === m.id ? "active" : ""} ${state.completed.has(m.id) ? "done" : ""}" data-module="${m.id}">
      <span class="module-number">${m.id}</span>
      <span>${esc(m.title)}${m.track ? `<em class="module-track">${esc(m.track)}</em>` : ""}<small>${lessonProgress(m.id).done}/${m.lessons.length} leçons</small></span>
    </button>`).join("") || `<p class="muted" style="font-size:.78rem;padding:8px">Aucun module trouvé.</p>`;
  const p = progress();
  const required = modules.filter(module => !module.elective);
  document.getElementById("sidebarProgressText").textContent = `${p}%`;
  document.getElementById("sidebarProgressBar").style.width = `${p}%`;
  document.getElementById("sidebarProgressCount").textContent = `${completedLessonCount(required)}/${totalLessonCount(required)} leçons du parcours`;
  moduleList.querySelectorAll("[data-module]").forEach(btn => btn.addEventListener("click", () => openModule(Number(btn.dataset.module))));
}

function setActiveNav(type) {
  const fnNav = document.getElementById("fundedNextButton");
  if (fnNav) { fnNav.classList.toggle("active", type === "fundednext"); if (type === "fundednext") fnNav.setAttribute("aria-current", "page"); else fnNav.removeAttribute("aria-current"); }
  document.querySelector(".dashboard-link").classList.toggle("active", type === "dashboard");
}

function positionTool(compact = false) {
  return `<div class="tool-form active" data-tool-form="position">
    <div class="field-grid">
      <label>Capital ($)<input id="capital" type="number" min="0" step="100" value="5000"></label>
      <label>Risque (%)<input id="riskPct" type="number" min="0.01" step="0.05" value="1"></label>
      <label>Distance du SL<input id="stopDistance" type="number" min="0.01" step="0.1" value="25"></label>
      <label>Valeur / point pour 1 lot ($)<input id="pointValue" type="number" min="0.0001" step="0.1" value="10"></label>
    </div>
    <div class="calculator-result"><small>Risque monétaire</small><strong id="riskResult">50,00 $</strong><small>Taille théorique : <b id="sizeResult">0,20 lot</b></small></div>
    ${compact ? "" : `<p class="muted" style="font-size:.72rem;margin-top:10px">Valeurs pédagogiques : vérifie la taille du contrat, la valeur du tick et le pas de volume de ton broker.</p>`}
  </div>`;
}

function expectancyTool() {
  return `<div class="tool-form" data-tool-form="expectancy">
    <div class="field-grid">
      <label>Taux de réussite (%)<input id="winRate" type="number" min="0" max="100" value="45"></label>
      <label>Gain moyen (R)<input id="avgWin" type="number" min="0" step="0.1" value="2"></label>
      <label>Perte moyenne (R)<input id="avgLoss" type="number" min="0" step="0.1" value="1"></label>
      <label>Nombre de trades<input id="tradeCount" type="number" min="1" value="100"></label>
    </div>
    <div class="calculator-result"><small>Espérance estimée</small><strong id="expectancyResult">+0,35 R / trade</strong><small>Projection mathématique : <b id="projectionResult">+35,00 R</b></small></div>
  </div>`;
}

function bindPositionTool(scope = document) {
  const ids = ["capital", "riskPct", "stopDistance", "pointValue"];
  if (!scope.querySelector("#capital")) return;
  const calculate = () => {
    const capital = Number(scope.querySelector("#capital").value) || 0;
    const risk = Number(scope.querySelector("#riskPct").value) || 0;
    const stop = Number(scope.querySelector("#stopDistance").value) || 0;
    const point = Number(scope.querySelector("#pointValue").value) || 0;
    const money = capital * risk / 100;
    const size = stop && point ? money / (stop * point) : 0;
    scope.querySelector("#riskResult").textContent = `${money.toLocaleString("fr-CA", {minimumFractionDigits: 2, maximumFractionDigits: 2})} $`;
    scope.querySelector("#sizeResult").textContent = `${size.toLocaleString("fr-CA", {minimumFractionDigits: 2, maximumFractionDigits: 4})} lot`;
  };
  ids.forEach(id => scope.querySelector(`#${id}`)?.addEventListener("input", calculate));
  calculate();
}

function bindExpectancyTool(scope = document) {
  if (!scope.querySelector("#winRate")) return;
  const calculate = () => {
    const wr = (Number(scope.querySelector("#winRate").value) || 0) / 100;
    const aw = Number(scope.querySelector("#avgWin").value) || 0;
    const al = Number(scope.querySelector("#avgLoss").value) || 0;
    const n = Number(scope.querySelector("#tradeCount").value) || 0;
    const exp = wr * aw - (1 - wr) * al;
    const signed = value => `${value >= 0 ? "+" : ""}${value.toLocaleString("fr-CA", {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    scope.querySelector("#expectancyResult").textContent = `${signed(exp)} R / trade`;
    scope.querySelector("#projectionResult").textContent = `${signed(exp * n)} R`;
  };
  ["winRate","avgWin","avgLoss","tradeCount"].forEach(id => scope.querySelector(`#${id}`)?.addEventListener("input", calculate));
  calculate();
}

function renderDashboard() {
  stopExamTimer();
  if (window.innerWidth <= 900) setSidebarOpen(false);
  state.activeModule = null;
  searchInput.value = "";
  setActiveNav("dashboard");
  renderSidebar(searchInput.value);
  const requiredModules = modules.filter(module => !module.elective);
  const electiveModules = modules.filter(module => module.elective);
  const next = requiredModules.find(module => lessonProgress(module.id).pct < 100)
    || electiveModules.find(module => lessonProgress(module.id).pct < 100)
    || requiredModules[0];
  const completedAll = completedLessonCount();
  content.innerHTML = `
    ${storageAvailable ? "" : `<div class="storage-alert"><strong>Sauvegarde locale indisponible.</strong> Le cours reste utilisable pendant cette session, mais exporte ton journal avant de fermer la page.</div>`}
    <section class="hero">
      <img class="hero-image" src="assets/hero-market-briefing.svg" ${imageSizeAttributes("assets/hero-market-briefing.svg")} alt="Scénario pédagogique annoté avec structure, liquidité, entrée, stop et objectif">
      <div class="hero-copy">
        <span class="hero-strap">25 modules progressifs + 5 masterclass · 5 niveaux</span>
        <h1>Apprends à lire le marché avant de risquer ton capital.</h1>
        <p>Un parcours principal de 125 leçons, complété par 5 masterclass à la carte sur l’offre et la demande, le flux d’ordres et les indices — sans raccourci ni promesse de gain.</p>
        <div class="hero-actions">
          <button class="primary-btn" id="continueButton">${state.completed.size ? "Continuer mon parcours" : "Commencer le module 1"}</button>
          <button class="secondary-btn" id="toolsButton">Ouvrir les calculateurs</button>
          <button class="secondary-btn hero-visual-link" type="button" data-modal-src="assets/hero-market-briefing.svg" data-modal-title="Scénario pédagogique annoté" data-modal-alt="Scénario pédagogique annoté avec structure, liquidité, entrée, stop et objectif">Agrandir le scénario</button>
        </div>
      </div>
      <div class="hero-meta"><span>150 leçons</span><span>Exercices guidés</span><span>Risque d’abord</span></div>
    </section>

    <section class="stats-grid" aria-label="Résumé de la formation">
      <article class="stat-card"><strong>30</strong><span>modules structurés</span></article>
      <article class="stat-card"><strong>150</strong><span>leçons et ateliers</span></article>
      <article class="stat-card"><strong>${progress()} %</strong><span>du parcours principal</span></article>
      <article class="stat-card"><strong>${completedAll}/150</strong><span>leçons validées au total</span></article>
    </section>

    ${competencyDashboard()}

    <section>
      <div class="section-heading"><div><h2>Cinq niveaux, une logique claire</h2><p>Chaque niveau réutilise les compétences du précédent.</p></div><button class="text-button" id="allModulesButton">Voir les 30 modules</button></div>
      <div class="levels-grid">
        ${levelMeta.map((l, i) => `<article class="level-card"><span class="level-progress-marker" aria-label="Étape ${i+1} sur 5"><b>${String(i+1).padStart(2,"0")}</b><small>/ 05</small></span><h3>Niveau ${i+1} — ${l[0]}</h3><p>${l[1]}</p></article>`).join("")}
      </div>
    </section>

    <section class="elective-section" aria-labelledby="electiveTitle">
      <div class="section-heading"><div><span class="pill track-pill">Approfondissements à la carte</span><h2 id="electiveTitle">Cinq masterclass, sans bloquer ta progression</h2><p>Choisis-les après les prérequis indiqués. Elles complètent les cinq niveaux, mais ne remplacent ni les examens ni la pratique démo.</p></div></div>
      <div class="elective-grid">
        ${electiveModules.map(module => { const lp = lessonProgress(module.id); return `<button class="elective-card" type="button" data-elective="${module.id}"><span class="track-badge" data-track="${esc(module.track)}">${esc(module.track)}</span><span class="module-ref">Module ${module.id}</span><h3>${esc(module.title)}</h3><p>${esc(module.summary)}</p><small>${lp.done}/${lp.total} leçons terminées</small></button>`; }).join("")}
      </div>
    </section>

    <section class="feature-grid" id="toolsSection">
      <article class="visual-card">
        <button class="visual-preview-link" type="button" data-modal-src="assets/analysis-workbench.svg" data-modal-title="Atelier d’analyse multi-timeframe" data-modal-alt="Atelier multi-timeframe reliant contexte, zone, confirmation et risque" aria-label="Agrandir l’atelier d’analyse">
          <img src="assets/analysis-workbench.svg" ${imageSizeAttributes("assets/analysis-workbench.svg")} alt="Atelier multi-timeframe reliant contexte, zone, confirmation et risque">
          <span>Agrandir le schéma</span>
        </button>
        <div class="visual-card-copy"><h2>Du prix brut au scénario complet</h2><p>Structure, liquidité, Wyckoff, ICT/SMC et Order Flow sont introduits dans le bon ordre, avec leurs limites.</p></div>
      </article>
      <article class="tools-panel">
        <span class="section-label">Calculateur intégré</span>
        <h2>Calcule avant d’agir</h2>
        <div class="tool-tabs"><button class="tool-tab active" data-tool="position">Taille de position</button><button class="tool-tab" data-tool="expectancy">Expectancy</button></div>
        ${positionTool()}
        ${expectancyTool()}
      </article>
    </section>

    <section class="feature-grid">
      <article class="tools-panel">
        <span class="section-label">Prochaine leçon recommandée</span><h2>Module ${next.id} — ${esc(next.title)}</h2>
        <p class="muted">${esc(next.summary)}</p>
        <div class="skill-list"><strong>Compétence visée</strong><p>${esc(next.skills)}</p></div>
        <button class="complete-button" id="nextModuleButton">Ouvrir le module</button>
      </article>
      <article class="visual-card">
        <button class="visual-preview-link" type="button" data-modal-src="assets/risk-journal-sheet.svg" data-modal-title="Fiche de journal et de risque" data-modal-alt="Fiche de journal avec calcul du risque, checklist et revue du trade" aria-label="Agrandir la fiche du journal">
          <img src="assets/risk-journal-sheet.svg" ${imageSizeAttributes("assets/risk-journal-sheet.svg")} alt="Fiche de journal avec calcul du risque, checklist et revue du trade">
          <span>Agrandir la fiche</span>
        </button>
        <div class="visual-card-copy"><span class="section-label">Outil du module 22</span><h2>Ton journal devient ta mémoire</h2><p>Enregistre le scénario, le risque, le résultat en R, les émotions et l’action corrective.</p></div>
      </article>
    </section>

    <section class="exam-overview">
      <div class="section-heading"><div><h2>Examens par niveau</h2><p>Teste tes acquis avant de passer au niveau suivant.</p></div></div>
      <div class="levels-grid exam-grid">${examData.map(e => `<button class="level-card exam-card" data-exam="${e.level}"><span class="level-progress-marker" aria-label="Niveau ${e.level} sur 5"><b>${String(e.level).padStart(2,"0")}</b><small>/ 05</small></span><h3>Examen ${e.level}</h3><p>${e.title} · ${getExamQuestions(e.level).length} questions</p></button>`).join("")}</div>
    </section>

    <div class="disclaimer"><strong>Avertissement :</strong> ce site est éducatif et ne constitue pas un conseil financier. Aucun setup ne garantit un gain. Les performances passées ne garantissent pas les résultats futurs et le trading comporte un risque réel de perte.</div>`;

  document.getElementById("continueButton").addEventListener("click", () => openModule(next.id));
  document.getElementById("nextModuleButton").addEventListener("click", () => openModule(next.id));
  document.getElementById("toolsButton").addEventListener("click", () => document.getElementById("toolsSection").scrollIntoView({behavior:"smooth"}));
  document.getElementById("allModulesButton").addEventListener("click", () => { searchInput.focus(); searchInput.value = ""; showSearchResults(""); });
  document.querySelectorAll("[data-elective]").forEach(button => button.addEventListener("click", () => openModule(Number(button.dataset.elective))));
  document.querySelectorAll("[data-exam]").forEach(btn => btn.addEventListener("click", () => renderExam(Number(btn.dataset.exam))));
  document.querySelectorAll(".tool-tab").forEach(tab => tab.addEventListener("click", () => {
    document.querySelectorAll(".tool-tab").forEach(t => t.classList.toggle("active", t === tab));
    document.querySelectorAll(".tool-form").forEach(f => f.classList.toggle("active", f.dataset.toolForm === tab.dataset.tool));
  }));
  bindPositionTool(content);
  bindExpectancyTool(content);
}

let activeExamTimer = null;
function stopExamTimer() {
  if (activeExamTimer) clearInterval(activeExamTimer);
  activeExamTimer = null;
}

function examLevelLabel(pct) {
  return pct < 60 ? "Non acquis" : pct < 80 ? "En cours d’acquisition" : pct < 90 ? "Acquis" : "Maîtrisé";
}

function recordExamScore(level, pct) {
  state.examScores[level] = Math.max(Number(state.examScores[level]) || 0, pct);
  safeStorage.write("djoniaExamScores", state.examScores);
}

function showExamResult(level, exam, questions, answers, timed, expired = false) {
  stopExamTimer();
  const score = questions.reduce((sum, q, i) => sum + (Number(answers[i]) === q[2] ? 1 : 0), 0);
  const pct = Math.round(score / questions.length * 100);
  recordExamScore(level, pct);
  content.innerHTML = `<section class="search-results exam-result-page"><span class="eyebrow">Examen ${timed ? "chronométré" : "entraînement"} · Niveau ${level}</span><div class="calculator-result exam-final"><small>${expired ? "Temps écoulé" : "Résultat final"}</small><strong>${pct}% — ${examLevelLabel(pct)}</strong><small>${score}/${questions.length} réponses correctes. Meilleur score enregistré : ${state.examScores[level]}%.</small></div><div class="exam-review">${questions.map((q, i) => `<article class="review-row ${Number(answers[i]) === q[2] ? "right" : "wrong"}"><strong>${i+1}. ${esc(q[0])}</strong><p>${Number(answers[i]) === q[2] ? "Correct." : `Réponse attendue : ${esc(q[1][q[2]])}`}</p></article>`).join("")}</div><div class="hero-actions"><button class="primary-btn" id="retryExam">Recommencer</button><button class="secondary-btn" id="resultDashboard">Tableau de bord</button></div></section>`;
  document.getElementById("retryExam").addEventListener("click", () => renderExam(level));
  document.getElementById("resultDashboard").addEventListener("click", renderDashboard);
  window.scrollTo({top:0, behavior:"smooth"});
}

function startTrainingExam(level, exam, questions) {
  content.innerHTML = `<section class="search-results"><span class="eyebrow">Mode entraînement · Niveau ${level}</span><div class="section-heading"><div><h1 style="font-size:clamp(2rem,4vw,3.4rem)">Examen ${exam.title}</h1><p>Tu peux relire et modifier tes réponses avant la correction.</p></div></div><form id="examForm" class="exam-form">${questions.map((q, qi) => `<fieldset class="quiz-card exam-question"><legend>${qi+1}. ${esc(q[0])}</legend><div class="quiz-options">${q[1].map((o, oi) => `<label class="quiz-option"><input type="radio" name="q${qi}" value="${oi}" required> ${esc(o)}</label>`).join("")}</div></fieldset>`).join("")}<button class="primary-btn" type="submit">Corriger mon examen</button></form></section>`;
  document.getElementById("examForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    showExamResult(level, exam, questions, questions.map((_, i) => data.get(`q${i}`)), false);
  });
}

function startTimedExam(level, exam, questions) {
  const answers = [];
  let index = 0;
  let secondsLeft = 12 * 60;
  const renderTimedQuestion = () => {
    const q = questions[index];
    content.innerHTML = `<section class="search-results timed-exam"><div class="exam-status"><div><span class="eyebrow">Mode chronométré · Niveau ${level}</span><strong>Question ${index+1}/${questions.length}</strong></div><div class="exam-timer" id="examTimer">12:00</div></div><div class="progress-track"><span style="width:${Math.round(index/questions.length*100)}%"></span></div><fieldset class="quiz-card exam-question timed-card"><legend>${esc(q[0])}</legend><div class="quiz-options">${q[1].map((o, oi) => `<label class="quiz-option"><input type="radio" name="timedAnswer" value="${oi}"> ${esc(o)}</label>`).join("")}</div></fieldset><div class="timed-actions"><p>Après validation, impossible de revenir à cette question.</p><button class="primary-btn" id="validateTimed">${index === questions.length - 1 ? "Terminer l’examen" : "Valider et continuer"}</button></div></section>`;
    const timerNode = document.getElementById("examTimer");
    timerNode.textContent = `${String(Math.floor(secondsLeft/60)).padStart(2,"0")}:${String(secondsLeft%60).padStart(2,"0")}`;
    document.getElementById("validateTimed").addEventListener("click", () => {
      const selected = document.querySelector('input[name="timedAnswer"]:checked');
      if (!selected) return toast("Choisis une réponse avant de continuer.");
      answers[index] = Number(selected.value);
      if (index === questions.length - 1) return showExamResult(level, exam, questions, answers, true);
      index += 1;
      renderTimedQuestion();
    });
  };
  renderTimedQuestion();
  activeExamTimer = setInterval(() => {
    secondsLeft -= 1;
    const timerNode = document.getElementById("examTimer");
    if (timerNode) timerNode.textContent = `${String(Math.floor(Math.max(secondsLeft,0)/60)).padStart(2,"0")}:${String(Math.max(secondsLeft,0)%60).padStart(2,"0")}`;
    if (secondsLeft <= 0) showExamResult(level, exam, questions, answers, true, true);
  }, 1000);
}

function renderExam(level) {
  stopExamTimer();
  const exam = examData.find(e => e.level === level);
  if (!exam) return;
  const questions = getExamQuestions(level);
  state.activeModule = null;
  setActiveNav("exam");
  renderSidebar();
  content.innerHTML = `<section class="search-results"><span class="eyebrow">Évaluation · Niveau ${level}</span><div class="section-heading"><div><h1 style="font-size:clamp(2rem,4vw,3.4rem)">Examen ${exam.title}</h1><p>${questions.length} questions. Choisis le mode adapté à ton objectif.</p></div><button class="text-button" id="backDashboard">Tableau de bord</button></div><div class="exam-mode-grid"><article class="exam-mode-card"><span class="pill">Sans limite</span><h2>Mode entraînement</h2><p>Toutes les questions sont visibles. Tu peux revenir sur tes réponses avant la correction.</p><button class="secondary-btn" id="startTraining">Commencer l’entraînement</button></article><article class="exam-mode-card featured"><span class="pill zone">12 minutes</span><h2>Mode examen</h2><p>Une question à la fois, compte à rebours actif et aucun retour en arrière.</p><button class="primary-btn" id="startTimed">Démarrer l’examen</button></article></div></section>`;
  document.getElementById("backDashboard").addEventListener("click", renderDashboard);
  document.getElementById("startTraining").addEventListener("click", () => startTrainingExam(level, exam, questions));
  document.getElementById("startTimed").addEventListener("click", () => startTimedExam(level, exam, questions));
  window.scrollTo({top:0, behavior:"smooth"});
}

function toolForModule(module) {
  if (module.tool === "position") return `<div class="course-section"><h2>Calculateur d’entraînement</h2>${positionTool(true)}</div>`;
  if (module.tool === "expectancy") return `<div class="course-section"><h2>Calculateur d’espérance</h2>${expectancyTool().replace('class="tool-form"', 'class="tool-form active"')}</div>`;
  if (module.tool === "journal") return journalForm();
  return "";
}

function journalForm() {
  return `<div class="course-section"><div class="section-heading compact"><div><h2>Mon journal de trading</h2><p class="muted">Les entrées sont sauvegardées localement si le navigateur l’autorise. Exporte-les régulièrement.</p></div><div class="journal-actions"><button class="secondary-btn" id="exportCsv" type="button">Exporter CSV</button><button class="secondary-btn" id="exportJson" type="button">Sauvegarde JSON</button></div></div>
    <form id="journalForm" class="journal-grid">
      <label>Date<input name="date" type="date" required></label>
      <label>Actif<input name="asset" placeholder="EURUSD" required></label>
      <label>Session<select name="session"><option>Asie</option><option>Londres</option><option>New York</option><option>Autre</option></select></label>
      <label>Direction<select name="direction"><option>Buy</option><option>Sell</option><option>Non-trade</option></select></label>
      <label>Risque (%)<input name="risk" type="number" step="0.1" value="0.5"></label>
      <label>Résultat (R)<input name="result" type="number" step="0.1" value="0"></label>
      <label class="wide">Setup et analyse<textarea name="setup" rows="3" placeholder="Contexte HTF, liquidité, POI, confirmation…"></textarea></label>
      <label class="wide">Leçon / action corrective<textarea name="lesson" rows="2" placeholder="Comportement précis à répéter ou corriger"></textarea></label>
      <button class="primary-btn wide" type="submit">Enregistrer l’entrée</button>
    </form><div class="saved-journal" id="savedJournal">${renderJournalEntries()}</div></div>`;
}

function renderJournalEntries() {
  if (!state.journal.length) return `<p class="muted">Aucune entrée enregistrée pour le moment.</p>`;
  return state.journal.slice().reverse().slice(0, 6).map(e => `<div class="journal-entry"><strong>${esc(e.date)} · ${esc(e.asset)} · ${esc(e.direction)}</strong><span>${esc(e.result)}R · ${esc(e.session)}</span></div>`).join("");
}

function downloadData(filename, mime, text) {
  const blob = new Blob([text], {type:mime});
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url; link.download = filename; document.body.appendChild(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportJournal(format) {
  if (!state.journal.length) return toast("Ajoute au moins une entrée avant l’export.");
  const date = new Date().toISOString().slice(0, 10);
  if (format === "json") {
    downloadData(`journal-trading-${date}.json`, "application/json;charset=utf-8", JSON.stringify(state.journal, null, 2));
  } else {
    const keys = ["date","asset","session","direction","risk","result","setup","lesson"];
    const cell = value => `"${String(value ?? "").replace(/"/g, '""')}"`;
    const csv = "\uFEFF" + [keys.map(cell).join(";"), ...state.journal.map(row => keys.map(key => cell(row[key])).join(";"))].join("\n");
    downloadData(`journal-trading-${date}.csv`, "text/csv;charset=utf-8", csv);
  }
  toast(`Journal exporté en ${format.toUpperCase()}.`);
}

function customModuleExtra(id) {
  if (id === 8) {
    const rows = [
      ["EURUSD", "500 $", "0,50 %", "25 pips", "10 $/pip", "0,01"],
      ["EURUSD", "10 000 $", "1 %", "50 pips", "10 $/pip", "0,20"],
      ["GBPJPY", "2 000 $", "0,50 %", "40 pips", "8,50 $/pip", "0,029"],
      ["GBPJPY", "20 000 $", "1 %", "80 pips", "8,50 $/pip", "0,294"],
      ["XAUUSD", "5 000 $", "0,50 %", "5,00 $", "100 $/mouvement de 1 $", "0,05"],
      ["XAUUSD", "50 000 $", "0,25 %", "2,50 $", "100 $/mouvement de 1 $", "0,50"],
      ["US30", "1 000 $", "1 %", "100 points", "1 $/point", "0,10"],
      ["US30", "15 000 $", "0,50 %", "150 points", "1 $/point", "0,50"],
      ["NAS100", "3 000 $", "1 %", "60 points", "1 $/point", "0,50"],
      ["NAS100", "25 000 $", "2 %", "250 points", "1 $/point", "2,00"]
    ];
    return `<section class="course-section"><h2>10 exemples de calcul</h2><p class="muted">Chaque ligne applique : risque monétaire ÷ (distance × valeur unitaire).</p><div class="table-scroll"><table class="data-table"><thead><tr><th>Actif</th><th>Capital</th><th>Risque</th><th>SL</th><th>Valeur exemple / 1 lot</th><th>Taille</th></tr></thead><tbody>${rows.map(r => `<tr>${r.map(v => `<td>${v}</td>`).join("")}</tr>`).join("")}</tbody></table></div><div class="warning-box"><strong>Important :</strong> valeurs d’exemple — vérifie les spécifications réelles de ton broker : valeur du pip/point, taille du contrat, pas de volume et marge requise.</div></section>`;
  }
  if (id === 21) {
    return `<section class="course-section"><h2>Progression des échantillons</h2><div class="table-scroll"><table class="data-table"><thead><tr><th>Échantillon</th><th>Utilité</th><th>Limite principale</th><th>Décision</th></tr></thead><tbody><tr><td>20 trades</td><td>Vérifier que les règles sont applicables</td><td>Très sensible au hasard</td><td>Corriger les erreurs de protocole</td></tr><tr><td>50 trades</td><td>Première estimation des statistiques</td><td>Encore dépendant du régime de marché</td><td>Comparer les sous-périodes</td></tr><tr><td>100 trades</td><td>Mieux observer variance et séries de pertes</td><td>Ne garantit pas le futur</td><td>Décider si le setup mérite un test prospectif</td></tr></tbody></table></div><div class="note-box"><strong>Exemple 100 trades :</strong> 42 gains à +1,8R en moyenne et 58 pertes à −1R. Expectancy = 0,42 × 1,8 − 0,58 × 1 = +0,176R par trade. Profit brut théorique = +17,6R avant frais et écarts d’exécution.</div></section>`;
  }
  if (id === 26) {
    return `<section class="course-section"><span class="pill track-pill">Comparaison obligatoire</span><h2>Même zone visible, définitions différentes</h2><div class="table-scroll"><table class="data-table"><thead><tr><th>Observation</th><th>Offre/Demande classique</th><th>ICT</th><th>Règle de rigueur</th></tr></thead><tbody><tr><td>Base avant départ haussier</td><td>Zone de demande candidate</td><td>Order Block haussier candidat si les conditions ICT choisies sont réunies</td><td>Écrire la définition avant le tracé</td></tr><tr><td>Premier retour</td><td>Zone dite « fraîche » si elle n’a pas été retestée</td><td>Mitigation possible selon la lecture employée</td><td>Aucune réaction n’est garantie</td></tr><tr><td>Traversée de l’invalidation</td><td>Zone invalidée selon la règle fixée</td><td>Order Block invalidé selon la règle fixée</td><td>Ne pas élargir après coup</td></tr></tbody></table></div><div class="warning-box"><strong>Vocabulaire :</strong> *(vision Offre/Demande classique)* et *(vision ICT)* peuvent décrire des structures proches, mais leurs critères ne sont pas automatiquement interchangeables.</div></section>`;
  }
  if (id === 27) {
    const workshops = [
      ["01", "Tracer sans anticiper", "Structure, base, départ", "Capture avant toute révélation"],
      ["02", "Classer la fraîcheur", "Nombre et profondeur des retests", "Fraîche / testée + justification"],
      ["03", "Exécuter la checklist", "Sept critères du module 26", "Valide / non valide / donnée manquante"],
      ["04", "Diagnostiquer l’échec", "Invalidation annoncée", "Erreur de lecture ou perte normale"],
      ["05", "Revue aveugle", "Même règle sur cinq cas", "Correction et action mesurable"]
    ];
    return `<section class="course-section"><span class="pill track-pill">Essentiel · pratique</span><h2>Feuille de route des cinq ateliers</h2><p>Aucune nouvelle théorie n’est ajoutée ici. Termine chaque livrable avant d’ouvrir le cas suivant.</p><div class="table-scroll"><table class="data-table"><thead><tr><th>Atelier</th><th>Action</th><th>Ce que tu observes</th><th>Livrable</th></tr></thead><tbody>${workshops.map(row => `<tr>${row.map(value => `<td>${esc(value)}</td>`).join("")}</tr>`).join("")}</tbody></table></div><div class="note-box"><strong>Critère de réussite :</strong> la méthode reste identique sur un cas gagnant, un cas perdant et un faux signal. Le résultat ne permet jamais de réécrire le tracé initial.</div></section>`;
  }
  if (id === 28) {
    return `<section class="course-section"><span class="pill track-pill">Rigueur de lecture</span><h2>Ce que la donnée permet — et ne permet pas</h2><div class="protocol-grid"><article><strong>Observable</strong><p>Prix, volume exécuté, classification Bid/Ask, Delta et comparaison à une référence locale.</p></article><article><strong>Hypothèse</strong><p>Absorption, épuisement ou déséquilibre possibles, toujours conditionnés par la qualité du flux et le contexte.</p></article><article><strong>Non démontrable</strong><p>L’identité, l’intention complète ou la prochaine action du participant derrière une exécution.</p></article></div><div class="warning-box"><strong>Interdit dans le journal :</strong> « la baleine achète ». Écris plutôt le fait mesuré, l’hypothèse et ce qui l’invaliderait.</div></section>`;
  }
  if (id === 29) {
    return `<section class="course-section guide-resource"><div class="chapter-intro"><div><span class="pill track-pill">Supplémentaire</span><h2>Le Guide Orderflow</h2></div><a class="secondary-btn resource-download" href="guide-orderflow.md" download>Télécharger le gabarit</a></div><p>Ce guide structure une observation ; il ne génère, ne suggère et n’exécute aucun trade. Utilise-le avant, pendant et après une lecture de flux.</p><div class="guide-checklist"><label><input type="checkbox"> Qualité et portée de la donnée vérifiées</label><label><input type="checkbox"> Contexte, session et niveaux définis</label><label><input type="checkbox"> Faits séparés des hypothèses</label><label><input type="checkbox"> Conflit prix–flux classé</label><label><input type="checkbox"> Invalidation et risque écrits avant décision</label><label><input type="checkbox"> Capture et revue ajoutées au journal</label></div><div class="warning-box"><strong>Pas de signal automatique :</strong> cocher toutes les cases signifie seulement que la routine est complète, pas qu’il faut acheter ou vendre.</div></section>`;
  }
  if (id === 30) {
    return `<section class="course-section"><span class="pill track-pill">Lien direct avec le module 8</span><h2>Une fiche de contrat par produit</h2><div class="table-scroll"><table class="data-table"><thead><tr><th>Repère courant</th><th>Sous-jacent de référence</th><th>À vérifier avant le calcul</th></tr></thead><tbody><tr><td>US30 / YM</td><td>Dow Jones Industrial Average</td><td>Produit exact, valeur du tick/point, session et volume minimal</td></tr><tr><td>NAS100 / NQ</td><td>Nasdaq-100</td><td>Future, micro-future ou CFD ; taille et valeur du tick</td></tr><tr><td>GER40 / DAX</td><td>DAX</td><td>Contrat Eurex ou CFD ; devise, échéance, tick et horaires</td></tr></tbody></table></div><div class="warning-box"><strong>*(dépend du broker/de l’actif — à vérifier)*</strong> Aucun chiffre de lot ou de valeur du point n’est transférable d’un symbole à l’autre sans consulter sa fiche contractuelle.</div></section>`;
  }
  return "";
}

function deepCourseSection(module) {
  const deep = window.deepCourse?.[module.id];
  if (!deep) return "";
  return `<section class="course-section deep-course">
    <div class="chapter-intro"><div><h2>Les ${module.lessons.length} leçons, pas à pas</h2></div><span class="pill ${module.elective ? "track-pill" : ""}">${module.elective ? `${esc(module.track)} · à la carte` : "Débutant absolu"}</span></div>
    <div class="prerequisite-box"><strong>Avant de commencer</strong><p>${esc(deep.prerequisites)}</p></div>
    <div class="deep-lessons">
      ${module.lessons.map((title, i) => {
        const chapter = deep.chapters[i] || ["Cette notion sera expliquée progressivement.", "Observe les règles de ton marché et de ta plateforme.", "Travaille d’abord en environnement démo."];
        const isDone = state.completedLessons.has(lessonKey(module.id, i));
        return `<details class="lesson-detail ${isDone ? "lesson-done" : ""}" ${i === 0 ? "open" : ""}>
          <summary><span>${String(i+1).padStart(2,"0")}</span><strong>${esc(title)}</strong><i aria-hidden="true">+</i></summary>
          <div class="lesson-detail-body">
            <div class="explanation-step simple-step"><b>1</b><div><span class="step-label">Débutant</span><h3>En mots simples</h3><p>${esc(chapter[0])}</p></div></div>
            <div class="explanation-step real-step"><b>2</b><div><span class="step-label">Comprendre</span><h3>Ce qui se passe réellement</h3><p>${esc(chapter[1])}</p></div></div>
            <div class="explanation-step example-step"><b>3</b><div><span class="step-label">Pratiquer</span><h3>Exemple guidé</h3><p>${esc(chapter[2])}</p></div></div>
            <div class="chapter-check"><strong>Vérifie ta compréhension :</strong> explique cette leçon avec tes propres mots, puis retrouve un exemple sur un graphique démo.</div>
            <button class="lesson-complete ${isDone ? "done" : ""}" data-lesson-index="${i}" type="button">${isDone ? "✓ Leçon terminée" : "Marquer cette leçon comme terminée"}</button>
          </div>
        </details>`;
      }).join("")}
    </div>
  </section>`;
}

const conceptVisuals = {
  10: ["assets/structure-hh-hl.svg", "Structure haussière : HH et HL", "Lis les points de gauche à droite. Les sommets et les creux progressent tous deux vers le haut."],
  11: ["assets/bos-choch.svg", "BOS et CHoCH", "Le BOS prolonge ici la structure ; le CHoCH casse ensuite le dernier creux protégé. Les swings de référence sont explicitement indiqués."],
  12: ["assets/liquidity-sweep.svg", "Liquidity Sweep", "Le prix dépasse les Equal Highs puis revient sous la zone. Ce comportement ne suffit pas, à lui seul, pour vendre."],
  13: ["assets/fvg.svg", "Fair Value Gap haussier", "Observe l’espace vertical entre le High de la bougie 1 et le Low de la bougie 3. Sans cet espace, pas de FVG selon cette définition."],
  14: ["assets/wyckoff-accumulation.svg", "Accumulation de Wyckoff simplifiée", "Les phases et événements sont un modèle de lecture. Un vrai range peut être incomplet, irrégulier ou invalide."],
  15: ["assets/wyckoff-ict-comparison.svg", "Comparer Wyckoff et ICT sans les confondre", "Les formes peuvent se ressembler, mais Spring, UTAD, sweep et displacement ne partagent ni toutes leurs conditions ni la même méthodologie."],
  16: ["assets/multi-timeframe.svg", "Analyse top-down multi-timeframe", "Chaque étage répond à une question différente : contexte, zone, déclencheur puis éventuelle précision."],
  17: ["assets/sessions-timeline.svg", "Sessions et chevauchements", "Lis d’abord le fuseau indiqué. Les plages sont des repères UTC indicatifs et doivent être adaptées à la date et à la plateforme."],
  18: ["assets/order-flow-profile.svg", "Footprint et Volume Profile", "Le Footprint détaille Bid/Ask par prix ; le profil repère POC, VAH et VAL. Aucun élément n’est un signal automatique."],
  19: ["assets/order-block.svg", "Order Block haussier candidat", "La dernière bougie baissière est reliée à un déplacement et à une cassure. Une bougie opposée isolée n’est pas suffisante."],
  20: ["assets/strategy-process.svg", "Processus d’une stratégie testable", "Une condition obligatoire absente conduit au non-trade. L’entrée ne vient qu’après contexte, confirmation, invalidation et risque."],
  26: ["assets/supply-demand-zones.svg", "Zones d’offre et de demande : tracer puis qualifier", "Compare la base, la force du départ, la fraîcheur et l’échelle de temps. Le tableau distingue explicitement la vision Offre/Demande classique de la vision ICT."],
  27: ["assets/supply-demand-zones.svg", "Atelier de validation d’une zone", "Cache la correction, trace la zone, annonce son invalidation puis révèle la suite. Le résultat n’autorise pas à déplacer les bornes."],
  28: ["assets/order-flow-divergence.svg", "Delta, absorption et anomalie de flux", "Décris d’abord le prix et le Delta. Une exécution inhabituelle ne révèle ni l’identité ni l’intention certaine de son auteur."],
  29: ["assets/execution-models.svg", "Exécution agressive, passive et conflit de lecture", "Suis séparément la liquidité offerte, les ordres qui la consomment et la réponse du prix avant d’appliquer le protocole de conflit."],
  30: ["assets/indices-session-map.svg", "Indices : sessions, fenêtres macro et contrat", "Sépare ouverture cash, cotation du produit et fenêtre macro. La valeur du point doit provenir du contrat ou du symbole réellement utilisé."]
};

const extraConceptVisuals = {
  13: ["assets/order-block.svg", "Order Block haussier candidat", "La bougie opposée n’est retenue ici qu’avec un déplacement et une cassure identifiables. Ce n’est jamais une garantie de réaction."],
  14: ["assets/wyckoff-distribution.svg", "Distribution de Wyckoff simplifiée", "Repère le BC, l’UTAD, le SOW et le LPSY. La logique est baissière, mais le marché réel ne reproduit pas toujours le schéma complet."]
};

function interfaceVisualSection(id) {
  if (id === 2) return `<section class="course-section visual-learning"><span class="eyebrow">Capture officielle · interface réelle</span><h2>Repère TradingView : Bar Replay</h2><figure class="interface-figure"><button class="figure-zoom-link" type="button" data-modal-src="assets/tradingview-bar-replay.png" data-modal-title="TradingView · Bar Replay" data-modal-alt="Capture officielle TradingView montrant le bouton Bar Replay dans la barre supérieure" aria-label="Agrandir la capture TradingView"><img src="assets/tradingview-bar-replay.png" ${imageSizeAttributes("assets/tradingview-bar-replay.png")} alt="Capture officielle TradingView montrant le bouton Bar Replay dans la barre supérieure"><span>Agrandir la capture</span></button><span class="screen-pin pin-one">1</span></figure><ol class="screen-legend"><li><strong>Bar Replay :</strong> ouvre le panneau de lecture historique. Choisis ensuite un point de départ avant de lancer la lecture.</li><li>Vérifie toujours le symbole et le timeframe affichés avant l’exercice.</li><li>En Replay, certaines fonctions restent reliées aux données en temps réel : lis les limites indiquées par TradingView.</li></ol><a class="source-inline" href="https://www.tradingview.com/support/solutions/43000474024-how-do-i-turn-bar-replay-on/" target="_blank" rel="noopener noreferrer">Documentation officielle TradingView</a></section>`;
  if (id === 3) return `<section class="course-section visual-learning"><span class="eyebrow">Captures officielles · interfaces réelles</span><h2>Repères MetaTrader 4 et MetaTrader 5</h2><div class="platform-shot-grid"><figure class="interface-figure"><button class="figure-zoom-link" type="button" data-modal-src="assets/metatrader4-interface.png" data-modal-title="Interface MetaTrader 4" data-modal-alt="Capture officielle de l’interface MetaTrader 4" aria-label="Agrandir la capture MetaTrader 4"><img src="assets/metatrader4-interface.png" ${imageSizeAttributes("assets/metatrader4-interface.png")} alt="Capture officielle de l'interface MetaTrader 4"><span>Agrandir MT4</span></button><figcaption><strong>MT4 :</strong> Market Watch à gauche, graphiques au centre, Terminal en bas.</figcaption></figure><figure class="interface-figure narrow"><button class="figure-zoom-link" type="button" data-modal-src="assets/metatrader5-market-watch.png" data-modal-title="MetaTrader 5 · Market Watch" data-modal-alt="Capture officielle MetaTrader 5 montrant Market Watch et l’ajout d’un symbole" aria-label="Agrandir la capture MetaTrader 5"><img src="assets/metatrader5-market-watch.png" ${imageSizeAttributes("assets/metatrader5-market-watch.png")} alt="Capture officielle MetaTrader 5 montrant Market Watch et l'ajout d'un symbole"><span>Agrandir MT5</span></button><span class="screen-pin pin-two">1</span><span class="screen-pin pin-three">2</span><figcaption><strong>MT5 :</strong> ajout rapide d’un symbole dans Market Watch.</figcaption></figure></div><ol class="screen-legend"><li><strong>Liste des symboles :</strong> sélectionne un instrument pour voir ses cotations Bid et Ask.</li><li><strong>Ajouter un symbole :</strong> utilise la ligne + puis vérifie le nom exact, le suffixe du broker et les spécifications du contrat.</li></ol><div class="source-links"><a class="source-inline" href="https://www.metatrader4.com/fr/trading-platform/help/beginning/overview" target="_blank" rel="noopener noreferrer">Documentation officielle MT4</a><a class="source-inline" href="https://www.metatrader5.com/fr/terminal/help/trading/market_watch" target="_blank" rel="noopener noreferrer">Documentation officielle MT5</a></div></section>`;
  return "";
}

function visualLearningSection(id) {
  const interfaceVisual = interfaceVisualSection(id);
  const visual = conceptVisuals[id];
  if (!visual) return interfaceVisual;
  const primary = `${interfaceVisual}<section class="course-section visual-learning"><span class="eyebrow">Schéma pédagogique vérifié</span><h2>${esc(visual[1])}</h2><figure class="concept-figure"><button class="figure-zoom-link" type="button" data-modal-src="${visual[0]}" data-modal-title="${esc(visual[1])}" data-modal-alt="${esc(visual[1])}" aria-label="Agrandir le schéma ${esc(visual[1])}"><img src="${visual[0]}" ${imageSizeAttributes(visual[0])} alt="${esc(visual[1])}"><span>Agrandir le schéma</span></button><figcaption><strong>Ce que tu dois regarder :</strong> ${esc(visual[2])}</figcaption></figure></section>`;
  const extra = extraConceptVisuals[id];
  if (!extra) return primary;
  return `${primary}<section class="course-section visual-learning"><span class="eyebrow">Deuxième lecture visuelle</span><h2>${esc(extra[1])}</h2><figure class="concept-figure"><button class="figure-zoom-link" type="button" data-modal-src="${extra[0]}" data-modal-title="${esc(extra[1])}" data-modal-alt="${esc(extra[1])}" aria-label="Agrandir le schéma ${esc(extra[1])}"><img src="${extra[0]}" ${imageSizeAttributes(extra[0])} alt="${esc(extra[1])}"><span>Agrandir le schéma</span></button><figcaption><strong>Ce que tu dois regarder :</strong> ${esc(extra[2])}</figcaption></figure></section>`;
}

function graphicExerciseSection(id) {
  const exercises = {
    10: ["assets/structure-hh-hl.svg", "Cache mentalement les étiquettes. Quels points sont des Higher High et quels points sont des Higher Low ?", "Les sommets successifs sont des HH et les creux successifs des HL. La conclusion haussière vient de la séquence complète, pas d’un seul point."],
    11: ["assets/bos-choch.svg", "Quel swing est cassé lors du BOS, puis quel swing est cassé lors du CHoCH ?", "Le BOS franchit le sommet de référence dans le sens de la hausse. Le CHoCH franchit ensuite le dernier HL protégé dans le sens opposé."],
    12: ["assets/liquidity-sweep.svg", "La grande mèche au-dessus des Equal Highs est-elle une cassure confirmée ou un sweep potentiel ? Justifie.", "C’est un sweep potentiel dans ce dessin car le prix repasse sous la zone. Une règle de clôture et le contexte restent nécessaires."],
    13: ["assets/fvg.svg", "Délimite exactement la borne basse et la borne haute du FVG.", "La zone va du plus haut de la bougie 1 au plus bas de la bougie 3. Les mèches 1 et 3 ne se chevauchent pas."],
    14: ["assets/wyckoff-distribution.svg", "Repère l’UTAD, le Test, le SOW et le LPSY. L’UTAD suffit-il pour vendre ?", "Non. L’UTAD doit être replacé dans le range et sa phase ; le Test et le SOW renforcent la lecture sans garantir le résultat."],
    15: ["assets/wyckoff-ict-comparison.svg", "Pourquoi un Spring et un sweep de SSL peuvent-ils se ressembler sans être exactement le même concept ?", "Le dépassement de creux peut être similaire, mais Wyckoff exige un contexte de range et de phase tandis qu’ICT/SMC emploie sa propre lecture de liquidité."],
    16: ["assets/multi-timeframe.svg", "Attribue une seule fonction à Weekly/Daily, H4/H1 et M15/M5. Où places-tu l’invalidation ?", "Weekly/Daily donnent le contexte, H4/H1 la structure et la zone, M15/M5 le déclencheur. L’invalidation appartient au scénario avant l’entrée."],
    17: ["assets/sessions-timeline.svg", "Quelle plage présente le chevauchement Londres/New York et pourquoi faut-il conserver la date ?", "Le chevauchement indicatif apparaît entre 13 h et 17 h UTC sur cette frise. La date est indispensable car les changements d’heure peuvent déplacer les repères."],
    18: ["assets/order-flow-profile.svg", "Repère POC, VAH et VAL puis décris le Delta à 100,50 sans donner de signal Buy/Sell.", "Le POC est le niveau au volume maximal ; VAH et VAL encadrent la Value Area. À 100,50, le Delta est négatif : davantage de volume a été exécuté au Bid qu’à l’Ask dans cet exemple."],
    19: ["assets/order-block.svg", "Pourquoi la bougie rouge peut-elle être une zone candidate plutôt qu’un Order Block garanti ?", "Elle précède un déplacement et une cassure, mais la réaction future reste incertaine. La définition et l’invalidation doivent être écrites."],
    20: ["assets/strategy-process.svg", "À quel moment le processus doit-il basculer vers NON-TRADE ?", "Dès qu’une condition obligatoire manque ou que l’invalidation, le risque ou le R:R ne respectent pas le plan. Il ne faut pas attendre l’entrée pour décider."],
    26: ["assets/supply-demand-zones.svg", "La zone de demande dessinée est-elle automatiquement un Order Block ICT ? Compare les critères.", "Non. Les deux lectures peuvent entourer une base proche, mais la vision ICT demande les conditions de sa définition d’Order Block. Écris le tag et les critères retenus avant de les comparer."],
    27: ["assets/supply-demand-zones.svg", "Fige un tracé, classe la zone fraîche ou testée et écris l’invalidation avant de lire la correction.", "La correction accepte plusieurs tracés seulement s’ils suivent une définition annoncée. La fraîcheur dépend des retests visibles ; les bornes ne sont jamais déplacées après révélation."],
    28: ["assets/order-flow-divergence.svg", "Quels faits peux-tu décrire sans employer les mots baleine, banque, Buy ou Sell ?", "Décris la direction du prix, la direction du Delta, le volume relatif et l’absence ou la présence de progression. L’identité du participant reste inconnue."],
    29: ["assets/execution-models.svg", "Le contexte H1 et le flux court terme se contredisent. Quelle branche du protocole choisis-tu ?", "Classe d’abord le conflit. Attends la confirmation prévue, réduis selon une règle écrite ou reste non-trade ; ne donne pas arbitrairement priorité à une seule lecture."],
    30: ["assets/indices-session-map.svg", "Quelle information manque encore avant de calculer une position sur chacun des trois indices ?", "Il faut le produit exact et ses spécifications : taille du contrat, tick size, tick value, devise, volume minimal et horaires. Un nom commercial seul ne suffit pas."],
    2: ["assets/tradingview-bar-replay.png", "Repère le bouton qui ouvre Bar Replay et décris les deux vérifications à faire avant de cliquer.", "Vérifie le symbole et le timeframe, puis ouvre Bar Replay. Choisis ensuite un point de départ historique."],
    3: ["assets/metatrader5-market-watch.png", "Où ajouterais-tu un symbole et quelles données vérifierais-tu avant un ordre ?", "Utilise la ligne + en bas de Market Watch, puis vérifie le symbole exact, Bid/Ask et les spécifications du contrat."]
  };
  const item = exercises[id];
  if (!item) return "";
  return `<section class="course-section graphic-exercise"><span class="eyebrow">Exercice graphique</span><h2>Observe avant de répondre</h2><div class="exercise-visual"><button class="figure-zoom-link" type="button" data-modal-src="${item[0]}" data-modal-title="Exercice graphique · Module ${id}" data-modal-alt="Graphique à analyser pour l’exercice du module ${id}" aria-label="Agrandir le graphique de l’exercice"><img src="${item[0]}" ${imageSizeAttributes(item[0])} alt="Graphique à analyser pour l'exercice du module ${id}"><span>Agrandir le graphique</span></button><div><h3>Question</h3><p>${esc(item[1])}</p><button class="secondary-btn graphic-answer-button" type="button">Afficher la correction</button><div class="note-box graphic-answer" hidden><strong>Correction détaillée :</strong> ${esc(item[2])}</div></div></div></section>`;
}

function quizSection(module) {
  const questions = moduleQuizQuestions(module);
  return `<section class="course-section"><span class="eyebrow">3 questions</span><h2>Mini-test de maîtrise</h2><form class="module-quiz">${questions.map((q, qi) => `<fieldset class="quiz-card"><legend>${qi+1}. ${esc(q[0])}</legend><div class="quiz-options">${q[1].map((o, oi) => `<label class="quiz-option"><input type="radio" name="mq${qi}" value="${oi}" required> ${esc(o)}</label>`).join("")}</div></fieldset>`).join("")}<button class="primary-btn" type="submit">Corriger les 3 réponses</button><div class="quiz-feedback">Réponds aux trois questions.</div></form></section>`;
}

function sourceSection(module) {
  const sources = window.deepCourse?.[module.id]?.sources || [];
  if (!sources.length) return "";
  return `<section class="course-section source-section"><span class="eyebrow">Sources vérifiées</span><h2>Sources de ce module</h2><p class="muted">Les sources officielles sont privilégiées pour les plateformes et le risque. Wikipédia apporte le contexte général ; les concepts ICT/SMC restent des interprétations non normalisées.</p><div class="source-list">${sources.map((s, i) => `<a class="source-card" href="${esc(s[1])}" target="_blank" rel="noopener noreferrer"><span>${String(i+1).padStart(2,"0")}</span><div><strong>${esc(s[0])}</strong><p>${esc(s[2])}</p></div><span class="source-action">Consulter</span></a>`).join("")}</div></section>`;
}

function synthesisSection(module) {
  const synthesis = window.moduleSyntheses?.[module.id];
  if (!synthesis) return "";
  return `<section class="course-section module-synthesis" data-synthesis-module="${module.id}"><span class="eyebrow">Consolidation du module</span><h2>Synthèse</h2><div class="synthesis-summary"><h3>Résumé</h3><p>${esc(synthesis.summary)}</p></div><div class="takeaway-panel"><h3>À retenir</h3><ul>${synthesis.takeaways.map(item => `<li>${esc(item)}</li>`).join("")}</ul></div></section>`;
}

function integratedCaseSection(moduleId) {
  const study = window.integratedCases?.[moduleId];
  if (!study) return "";
  return `<section class="course-section integrated-case" data-integrated-case="${esc(study.id)}" data-mastery-gate="required"><div class="integrated-case-head"><div><span class="pill zone">Cas intégré ${esc(study.id)}</span><h2>${esc(study.title)}</h2></div><span class="module-linkage">Modules ${study.modules.map(id => String(id).padStart(2, "0")).join(" · ")}</span></div><div class="case-scenario"><h3>Scénario</h3><p>${esc(study.scenario)}</p></div><div class="case-columns"><div><h3>Contraintes</h3><ul>${study.constraints.map(item => `<li>${esc(item)}</li>`).join("")}</ul></div><div><h3>Décisions dans l’ordre</h3><ol class="decision-chain">${study.decisions.map((item, index) => `<li><span>${String(index + 1).padStart(2, "0")}</span><p>${esc(item)}</p></li>`).join("")}</ol></div></div><div class="mastery-gate"><strong>Validation globale obligatoire</strong><p>${esc(study.mastery)}</p></div><button class="secondary-btn integrated-answer-button" type="button" aria-expanded="false">Afficher la correction intégrée</button><div class="case-correction" hidden><h3>Correction étape par étape</h3><ol>${study.correction.map((item, index) => `<li><strong>Étape ${index + 1}</strong><p>${esc(item)}</p></li>`).join("")}</ol></div></section>`;
}

function namedStrategySection(moduleId) {
  const strategy = moduleId === 20 ? window.namedStrategy : null;
  if (!strategy) return "";
  const list = (title, items) => `<div><h3>${esc(title)}</h3><ul>${items.map(item => `<li>${esc(item)}</li>`).join("")}</ul></div>`;
  return `<section class="course-section named-strategy" data-named-strategy="SSR"><div class="strategy-heading"><div><span class="pill zone">Stratégie complète</span><h2>${esc(strategy.name)}</h2></div><span class="module-linkage">Module 20 · application des modules 8–19</span></div><p class="strategy-scope">${esc(strategy.scope)}</p><div class="strategy-rules">${list("Conditions obligatoires", strategy.mandatory)}${list("Conditions supplémentaires", strategy.optional)}${list("Invalidations", strategy.invalidations)}${list("Conditions de non-trade", strategy.noTrade)}</div><div class="strategy-paths">${strategy.paths.map(path => `<article class="strategy-path ${esc(path.tone)}"><span>${esc(path.label)}</span><p>${esc(path.text)}</p></article>`).join("")}</div><div class="warning-box"><strong>Limite de l’exemple :</strong> ${esc(strategy.warning)}</div></section>`;
}

const moduleHeroVisuals = {
  1:"assets/hero-market-briefing.svg", 2:"assets/tradingview-bar-replay.png", 3:"assets/metatrader5-market-watch.png",
  4:"assets/hero-market-briefing.svg", 5:"assets/hero-market-briefing.svg", 6:"assets/risk-journal-sheet.svg",
  7:"assets/strategy-process.svg", 8:"assets/risk-journal-sheet.svg", 9:"assets/risk-journal-sheet.svg",
  10:"assets/structure-hh-hl.svg", 11:"assets/bos-choch.svg", 12:"assets/liquidity-sweep.svg",
  13:"assets/fvg.svg", 14:"assets/wyckoff-accumulation.svg", 15:"assets/wyckoff-ict-comparison.svg",
  16:"assets/multi-timeframe.svg", 17:"assets/sessions-timeline.svg", 18:"assets/order-flow-profile.svg",
  19:"assets/order-block.svg", 20:"assets/strategy-process.svg", 21:"assets/risk-journal-sheet.svg",
  22:"assets/risk-journal-sheet.svg", 23:"assets/risk-journal-sheet.svg", 24:"assets/metatrader5-market-watch.png",
  25:"assets/risk-journal-sheet.svg", 26:"assets/supply-demand-zones.svg", 27:"assets/supply-demand-zones.svg",
  28:"assets/order-flow-divergence.svg", 29:"assets/execution-models.svg", 30:"assets/indices-session-map.svg"
};

function openModule(id) {
  safeStorage.write("djoniaLastModule", id);
  stopExamTimer();
  const module = modules.find(m => m.id === id);
  if (!module) return;
  searchInput.value = "";
  state.activeModule = id;
  setActiveNav("module");
  renderSidebar(searchInput.value);
  const moduleProgress = lessonProgress(id);
  const done = moduleProgress.pct === 100 || state.completed.has(id);
  const image = moduleHeroVisuals[id] || "assets/hero-market-briefing.svg";
  content.innerHTML = `
    <header class="module-header">
      <div>
        <div class="module-kicker">${module.elective ? `<span class="pill track-pill">${esc(module.track)} · à la carte</span><span class="pill zone">Repère niveau ${module.level}</span>` : `<span class="pill zone">Niveau ${module.level} — ${levelMeta[module.level-1][0]}</span>`}<span class="pill">Module ${module.id}/30</span><span class="pill">${module.duration}</span></div>
        <h1>${esc(module.title)}</h1>
        <p>${esc(module.summary)}</p>
      </div>
      <div class="module-progress-ring" style="--progress:${moduleProgress.pct}%"><div class="ring-copy"><strong>${moduleProgress.pct}%</strong><span>${moduleProgress.done}/${moduleProgress.total} leçons</span></div></div>
    </header>

    <div class="course-layout">
      <article class="lesson-card">
        <div class="lesson-visual"><button class="lesson-visual-link" type="button" data-modal-src="${image}" data-modal-title="Module ${module.id} · ${esc(module.title)}" data-modal-alt="Illustration pédagogique du module ${esc(module.title)}" aria-label="Agrandir l’illustration du module ${module.id}"><img src="${image}" ${imageSizeAttributes(image)} alt="Illustration pédagogique du module ${esc(module.title)}"><span>Agrandir l’illustration</span></button></div>
        <div class="lesson-body">
          <p class="lead">${esc(module.intro)}</p>

          <section class="course-section"><h2>Objectifs du module</h2><ul>${module.lessons.map(l => `<li><strong>${esc(l)}</strong></li>`).join("")}</ul></section>

          ${deepCourseSection(module)}

          ${visualLearningSection(id)}

          <section class="course-section"><h2>Notions à maîtriser</h2><div class="concept-grid">${module.concepts.map(c => `<article class="concept-card"><h3>${esc(c[0])}</h3><p>${esc(c[1])}</p></article>`).join("")}</div></section>

          ${module.formula ? `<section class="course-section"><h2>Formule de référence</h2><div class="formula-box"><span class="formula">${esc(module.formula)}</span></div><p class="muted">Écris toujours les unités et vérifie la source des données avant de calculer.</p></section>` : ""}

          <section class="course-section"><h2>Exemple guidé</h2><p>${esc(module.example)}</p><div class="note-box"><strong>Ce que tu dois regarder :</strong> la logique de la séquence, les données connues et ce qui reste une hypothèse.</div></section>

          <section class="course-section"><h2>Erreurs fréquentes</h2><ul>${module.errors.map(e => `<li>${esc(e)}</li>`).join("")}</ul></section>

          ${customModuleExtra(id)}
          ${toolForModule(module)}

          ${namedStrategySection(id)}

          ${graphicExerciseSection(id)}

          <section class="course-section"><h2>Exercice pratique</h2><div class="exercise-card"><h3>À toi de jouer</h3><p>${esc(module.exercise)}</p><button class="secondary-btn" id="answerButton">Voir la correction</button><div id="answerBox" class="note-box" hidden><strong>Correction :</strong> ${esc(module.answer)}</div></div></section>

          ${sourceSection(module)}

          ${synthesisSection(module)}

          ${quizSection(module)}

          ${integratedCaseSection(id)}

          <div class="warning-box"><strong>Rappel risque :</strong> un bon processus peut produire un trade perdant. Aucune notion de ce cours ne garantit un résultat.</div>
          <button class="complete-button ${done ? "done" : ""}" id="completeButton">${done ? "✓ Module terminé" : "Marquer ce module comme terminé"}</button>
        </div>
      </article>

      <aside class="lesson-index">
        <span class="section-label">Sommaire du module</span><h3>${module.lessons.length} leçons</h3>
        <div class="lesson-index-list">${module.lessons.map((l, i) => { const checked = state.completedLessons.has(lessonKey(id, i)); return `<div class="lesson-index-item ${checked ? "done" : ""}"><span>${String(i+1).padStart(2,"0")}</span><strong>${esc(l)}</strong></div>`; }).join("")}</div>
        <div class="skill-list"><strong>Compétence mesurable</strong><p>${esc(module.skills)}</p></div>
        ${id < modules.length ? `<button class="text-button" id="nextLesson" style="margin-top:18px">${id === 25 ? "Voir la première masterclass" : "Module suivant"}</button>` : ""}
      </aside>
    </div>`;

  content.focus({preventScroll:true});
  window.scrollTo({top:0, behavior:"smooth"});
  if (window.innerWidth <= 900) setSidebarOpen(false);
  document.getElementById("answerButton").addEventListener("click", e => { document.getElementById("answerBox").hidden = false; e.currentTarget.hidden = true; });
  document.querySelectorAll(".graphic-answer-button").forEach(btn => btn.addEventListener("click", () => { btn.nextElementSibling.hidden = false; btn.hidden = true; }));
  document.querySelectorAll(".integrated-answer-button").forEach(btn => btn.addEventListener("click", () => {
    const correction = btn.nextElementSibling;
    correction.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    btn.hidden = true;
  }));
  document.querySelectorAll(".lesson-complete").forEach(btn => btn.addEventListener("click", () => {
    const key = lessonKey(id, Number(btn.dataset.lessonIndex));
    if (state.completedLessons.has(key)) state.completedLessons.delete(key); else state.completedLessons.add(key);
    if (lessonProgress(id).pct === 100) state.completed.add(id); else state.completed.delete(id);
    saveProgress(); openModule(id);
  }));
  document.querySelector(".module-quiz")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const questions = moduleQuizQuestions(module);
    let score = 0;
    questions.forEach((q, i) => { if (Number(data.get(`mq${i}`)) === q[2]) score += 1; });
    state.quizScores[id] = Math.max(state.quizScores[id] || 0, Math.round(score/questions.length*100));
    safeStorage.write("djoniaQuizScores", state.quizScores);
    const feedback = event.currentTarget.querySelector(".quiz-feedback");
    feedback.innerHTML = `<strong>${score}/3</strong> — ${score === 3 ? "Maîtrisé. Tu peux poursuivre." : "Relis les explications puis recommence."}<br>${questions.map((q,i)=>`${i+1}. ${esc(q[3])}`).join("<br>")}`;
  });
  document.getElementById("completeButton").addEventListener("click", () => {
    const markDone = lessonProgress(id).pct < 100;
    module.lessons.forEach((_, i) => markDone ? state.completedLessons.add(lessonKey(id, i)) : state.completedLessons.delete(lessonKey(id, i)));
    if (markDone) state.completed.add(id); else state.completed.delete(id);
    saveProgress();
    toast(state.completed.has(id) ? "Leçons terminées — évaluation distincte dans Mon compte." : "Validation retirée.");
    openModule(id);
  });
  document.getElementById("nextLesson")?.addEventListener("click", () => openModule(id + 1));
  bindPositionTool(content);
  bindExpectancyTool(content);
  bindJournal();
}

function bindJournal() {
  const form = document.getElementById("journalForm");
  if (!form) return;
  const setToday = () => {
    const dateInput = form.querySelector('[name="date"]');
    if (!dateInput) return;
    try { dateInput.valueAsDate = new Date(); } catch (error) { /* repli ci-dessous */ }
    if (!dateInput.value) dateInput.value = new Date().toISOString().slice(0, 10);
  };
  document.getElementById("exportCsv")?.addEventListener("click", () => exportJournal("csv"));
  document.getElementById("exportJson")?.addEventListener("click", () => exportJournal("json"));
  setToday();
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    state.journal.push(data);
    safeStorage.write("djoniaJournal", state.journal);
    document.getElementById("savedJournal").innerHTML = renderJournalEntries();
    form.reset();
    setToday();
    toast(storageAvailable ? "Entrée ajoutée au journal local." : "Entrée gardée pour cette session : exporte-la avant de fermer.");
  });
}

function showSearchResults(query) {
  stopExamTimer();
  const q = query.trim().toLowerCase();
  const results = filteredModules(query);
  state.activeModule = null;
  setActiveNav("search");
  renderSidebar(query);
  content.innerHTML = `<section class="search-results"><span class="eyebrow">Catalogue · 30 modules</span><div class="section-heading"><div><h1 style="font-size:clamp(2rem,4vw,3.4rem)">${results.length} module${results.length > 1 ? "s" : ""}</h1><p>${q ? `Pour « ${esc(query)} »` : "Résultats selon tes filtres. Modifie Niveau ou Contenu dans la barre supérieure."}</p></div></div><div class="result-grid">${results.map(m => { const lp = lessonProgress(m.id); return `<button class="result-card" data-result="${m.id}"><span class="eyebrow">Module ${m.id} · ${m.elective ? esc(m.track) : `Niveau ${m.level}`}</span><h3>${esc(m.title)}</h3><p>${esc(m.summary)}</p><small>${lp.done}/${lp.total} leçons terminées</small></button>`; }).join("") || `<p class="muted">Aucun contenu ne correspond à cette recherche et à ces filtres.</p>`}</div></section>`;
  content.querySelectorAll("[data-result]").forEach(btn => btn.addEventListener("click", () => openModule(Number(btn.dataset.result))));
}

document.querySelector(".dashboard-link").addEventListener("click", renderDashboard);
document.getElementById("brandHomeButton").addEventListener("click", renderDashboard);
document.getElementById("profileButton").addEventListener("click", renderDashboard);
document.addEventListener("click", event => {
  const trigger = event.target.closest("[data-modal-src]");
  if (!trigger) return;
  event.preventDefault();
  openImageModal(trigger);
});
imageModalClose.addEventListener("click", closeImageModal);
imageZoomOut.addEventListener("click", () => applyImageModalZoom(imageModalScale - .25));
imageZoomIn.addEventListener("click", () => applyImageModalZoom(imageModalScale + .25));
imageModal.addEventListener("click", event => { if (event.target === imageModal) closeImageModal(); });
menuButton.addEventListener("click", () => setSidebarOpen(!sidebar.classList.contains("open")));
sidebarCloseButton.addEventListener("click", () => setSidebarOpen(false, { restoreFocus: true }));
sidebarBackdrop.addEventListener("click", () => setSidebarOpen(false, { restoreFocus: true }));
document.getElementById("themeButton").addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.body.classList.toggle("light", state.theme === "light");
  safeStorage.write("djoniaTheme", state.theme);
});
searchInput.addEventListener("input", event => showSearchResults(event.target.value));
levelFilter.addEventListener("change", event => { state.filters.level = event.target.value; showSearchResults(searchInput.value); });
toolFilter.addEventListener("change", event => { state.filters.tool = event.target.value; showSearchResults(searchInput.value); });
document.addEventListener("keydown", event => {
  if (!imageModal.hidden) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeImageModal();
      return;
    }
    if (event.key === "Tab") {
      const focusable = [...imageModalPanel.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')]
        .filter(node => !node.hidden && node.getClientRects().length !== 0);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    return;
  }
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); searchInput.focus(); }
  if (event.key === "Escape" && sidebar.classList.contains("open")) {
    event.preventDefault();
    setSidebarOpen(false, { restoreFocus: true });
  }
  if (event.key === "Tab" && sidebar.classList.contains("open") && window.innerWidth <= 900) {
    const focusable = [...sidebar.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      .filter(node => !node.hidden && node.getClientRects().length !== 0);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 900 && sidebar.classList.contains("open")) setSidebarOpen(false);
  if (!imageModal.hidden) applyImageModalZoom(imageModalScale);
});

renderSidebar();
renderDashboard();
