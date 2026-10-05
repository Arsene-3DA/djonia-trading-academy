/*
 * Enrichissement pédagogique non destructif.
 * Les textes de course-content.js restent la base factuelle. Cette couche ajoute
 * du contexte, une méthode de lecture et une consigne de pratique à chaque leçon.
 */
(() => {
  const course = window.deepCourse;
  if (!course || typeof modules === "undefined") return;

  const frames = {
    1: {
      understand: "Sur un marché, des participants différents n’agissent pas pour les mêmes raisons : investir, couvrir un risque, fournir de la liquidité ou spéculer. Le produit affiché par un broker peut aussi être une action, un contrat, un CFD ou une paire de devises, avec des droits et des risques différents.",
      practice: "Travaille d’abord sur démo et note pour chaque actif sa famille, son mode de cotation, ses horaires et le risque principal."
    },
    2: {
      understand: "Le graphique dépend du symbole choisi, de la source de données, de l’unité de temps et de l’échelle. Deux symboles portant presque le même nom peuvent provenir de fournisseurs différents. Replay aide à masquer le futur, mais ne reproduit pas parfaitement les spreads, la liquidité ni l’exécution réelle.",
      practice: "Répète la manipulation sur deux symboles et deux timeframes, puis sauvegarde un espace simple que tu peux reconstruire sans aide."
    },
    3: {
      understand: "MetaTrader reçoit les symboles et les conditions de trading du broker connecté. Les noms, suffixes, heures, volumes minimaux et marges peuvent donc changer d’un compte à l’autre. Une action correcte commence par vérifier le serveur, le compte, le symbole et la fiche du contrat avant de préparer l’ordre.",
      practice: "Sur un compte démo, réalise la manipulation lentement et conserve une capture où le compte, le symbole, le volume, le SL et le TP sont lisibles."
    },
    4: {
      understand: "Bid et Ask représentent deux côtés de la cotation ; le spread les sépare. Une bougie OHLC agrège les mouvements d’une période, mais ne révèle pas forcément l’ordre exact des passages entre le plus haut et le plus bas. Cette limite devient importante lors d’un backtest ou d’un Stop Loss serré.",
      practice: "Choisis trois bougies terminées, relève leurs quatre prix et décris seulement ce qui est visible, sans inventer l’ordre interne des mouvements."
    },
    5: {
      understand: "Pip, point et tick décrivent des unités différentes selon le marché ou la plateforme, tandis que le lot décrit un volume lié au contrat. La valeur monétaire finale dépend notamment du symbole, de la taille du contrat, de la devise du compte et parfois du taux de conversion.",
      practice: "Ouvre la spécification du symbole et recopie les décimales, le tick size, le tick value, le contrat, le volume minimal et le pas."
    },
    6: {
      understand: "Le levier réduit la marge immobilisée pour une exposition donnée, mais ne fixe pas directement le montant risqué au Stop Loss. Equity varie avec les positions ouvertes ; lorsque les pertes flottantes augmentent, la marge libre et le niveau de marge diminuent. Les seuils de Margin Call et Stop Out viennent du broker.",
      practice: "Construis un petit tableau avec Balance, résultat flottant, Equity, marge utilisée, marge libre et niveau de marge avant puis après une perte."
    },
    7: {
      understand: "Un ordre au marché cherche une exécution immédiate, alors qu’un ordre en attente dépend de la position du niveau souhaité par rapport au prix actuel. L’exécution peut différer du prix demandé en raison du spread, d’un gap ou du slippage. SL et TP sont des instructions, pas des garanties de prix exact.",
      practice: "Dessine le prix actuel au centre, place les quatre ordres en attente autour de lui et écris le mouvement nécessaire pour les déclencher."
    },
    8: {
      understand: "Le calcul part du risque monétaire accepté et non d’un volume choisi à l’avance. La distance du Stop Loss vient du scénario ; la valeur par pip ou point vient du contrat. Le résultat doit ensuite être adapté au volume minimal et au pas autorisé, de préférence sans dépasser le risque prévu.",
      practice: "Écris chaque valeur avec son unité, remplace-la dans la formule, calcule, puis compare le résultat au pas de volume réel du symbole."
    },
    9: {
      understand: "La gestion du risque encadre une série de résultats incertains. Le taux de réussite ne suffit pas sans les gains et pertes moyens, et plusieurs positions corrélées peuvent constituer une seule exposition économique importante. Un drawdown se calcule depuis un sommet de capital et demande un pourcentage supérieur pour être récupéré.",
      practice: "Définis par écrit le risque par trade, la perte quotidienne maximale, l’exposition corrélée autorisée et la règle d’arrêt après violation."
    },
    10: {
      understand: "L’analyse technique est d’abord descriptive : elle organise sommets, creux, impulsions, retracements et zones déjà observés. Le choix des swings dépend de l’unité de temps et d’une règle constante. Support et résistance sont souvent mieux traités comme des zones que comme un prix exact.",
      practice: "Annote un graphique vierge, puis demande à une autre personne si elle peut retrouver exactement les swings et la règle que tu as utilisés."
    },
    11: {
      understand: "BOS et CHoCH appartiennent à des vocabulaires méthodologiques dont les définitions peuvent varier. La lecture n’est cohérente que si le swing de référence, la clôture exigée et la distinction entre structure interne et externe sont décidés avant l’exemple. Une mèche isolée ne vaut pas automatiquement cassure.",
      practice: "Fige une règle de swing et de clôture, puis indique sur dix cas le niveau cassé, le sens et la raison de la classification."
    },
    12: {
      understand: "La liquidité désigne ici des zones où des ordres peuvent être regroupés, mais l’emplacement réel de tous les ordres n’est pas visible sur un simple graphique. Les notions BSL, SSL, inducement et draw on liquidity sont surtout associées aux lectures ICT/SMC ; elles doivent rester des hypothèses contextualisées.",
      practice: "Marque les sommets, creux et niveaux précédents évidents, puis écris ce qui confirmerait un sweep et ce qui indiquerait une vraie cassure."
    },
    13: {
      understand: "FVG, Order Block, OTE, Premium et Discount sont des constructions issues d’ICT ou de familles SMC, avec des définitions parfois différentes. Elles ne prouvent pas l’activité d’une institution. Pour les tester, il faut retenir une définition écrite, une invalidation et des règles identiques sur tout l’échantillon.",
      practice: "Sur chaque capture, écris la définition appliquée, les trois éléments obligatoires, l’invalidation et la raison éventuelle de ne pas trader."
    },
    14: {
      understand: "Wyckoff propose une lecture de l’offre, de la demande, des phases et du comportement prix-volume. Les événements comme Spring ou UTAD prennent leur sens dans un range et une phase, pas comme formes isolées. Les marchés réels peuvent présenter une séquence incomplète, déformée ou impossible à classer proprement.",
      practice: "Commence par tracer les bornes du range, puis ajoute seulement les événements soutenus par le prix et le volume observés."
    },
    15: {
      understand: "Deux méthodes peuvent décrire une forme visuelle proche tout en lui donnant des conditions et une signification différentes. Un Spring n’est donc pas automatiquement un sweep de SSL, et un SOS n’est pas toujours un displacement ICT. La comparaison sert à traduire prudemment, pas à fusionner les vocabulaires.",
      practice: "Crée deux colonnes Wyckoff et ICT/SMC : note les ressemblances visuelles, puis les conditions qui empêchent une équivalence parfaite."
    },
    16: {
      understand: "L’analyse multi-timeframe réduit le bruit en donnant une fonction à chaque horizon. Le supérieur décrit le contexte, l’intermédiaire précise la structure et la zone, puis l’inférieur cherche éventuellement un déclencheur. Descendre d’unité ne doit pas servir à fabriquer une confirmation contraire au scénario initial.",
      practice: "Limite-toi à trois étages, écris une question par étage et arrête l’analyse dès qu’une condition obligatoire devient contradictoire."
    },
    17: {
      understand: "Les sessions sont des repères d’activité et non des garanties de volatilité. Les heures dépendent du fuseau utilisé, de la date et des règles d’heure d’été de chaque région ; l’Europe et l’Amérique du Nord ne changent pas toujours le même jour. La plateforme peut aussi afficher l’heure du serveur.",
      practice: "Pour une date précise, conserve l’heure UTC, l’heure New York, ton heure locale et l’heure du serveur dans la même ligne."
    },
    18: {
      understand: "La qualité de l’Order Flow dépend de la source : un marché centralisé peut fournir des transactions consolidées, tandis qu’un CFD ou le Forex au comptant peut afficher un flux propre au fournisseur. Delta, Footprint et profil décrivent l’activité enregistrée ; ils ne révèlent pas automatiquement l’intention future.",
      practice: "Décris POC, VAH, VAL, Delta et réaction du prix sans employer les mots acheter ou vendre, puis ajoute le contexte."
    },
    19: {
      understand: "Un setup devient testable lorsque chaque condition produit une réponse observable : oui, non ou non disponible. Contexte, zone, déclencheur, invalidation et risque ont des rôles distincts. Une confluence facultative peut renforcer une idée, mais elle ne remplace jamais une condition obligatoire manquante.",
      practice: "Transforme le setup en checklist binaire et ajoute trois chemins de sortie : invalidation avant entrée, non-trade et gestion après exécution."
    },
    20: {
      understand: "Une stratégie rassemble un univers, des horaires, un setup, une exécution et des limites de risque stables. Modifier plusieurs règles pendant le test empêche de savoir quelle version a produit les résultats. Chaque évolution doit donc recevoir un numéro, une date et un nouvel échantillon séparé.",
      practice: "Verrouille une version sur une page, fais-la relire, puis vérifie qu’une autre personne prendrait les mêmes décisions sur les mêmes exemples."
    },
    21: {
      understand: "Le backtest mesure le comportement historique d’un ensemble de règles, avec ses frais, ses pertes et ses périodes défavorables. Un petit échantillon sert surtout à vérifier le protocole. En augmentant le nombre de trades et la diversité des régimes, l’estimation devient plus utile sans garantir l’avenir.",
      practice: "Enregistre chaque occurrence dans l’ordre, y compris les pertes et non-trades, puis calcule les statistiques uniquement après avoir fermé l’échantillon."
    },
    22: {
      understand: "Un journal utile sépare ce qui était connu avant l’entrée de ce qui a été observé après. Il conserve les captures, le risque prévu, les actions de gestion et le respect du plan. Cette chronologie réduit la tendance à reconstruire une justification une fois le résultat connu.",
      practice: "Remplis les champs avant l’ordre, verrouille la capture, puis ajoute résultat, comportement, erreur et une seule action corrective après la sortie."
    },
    23: {
      understand: "Une émotion n’est pas une faute ; le risque apparaît lorsqu’elle déclenche une action non prévue. FOMO, revenge trading et euphorie deviennent mesurables par la fréquence des ordres, le changement de volume, le déplacement du SL ou l’abandon de la checklist. Les règles de pause doivent être objectives.",
      practice: "Associe chaque déclencheur à un comportement observable, un coût possible et une règle automatique de pause ou de réduction d’exposition."
    },
    24: {
      understand: "La démo entraîne la mécanique complète : préparation, calcul, ordre, gestion, fermeture et revue. Elle ne reproduit pas parfaitement la pression émotionnelle ni toutes les conditions d’exécution du réel. Son objectif est donc de rendre le processus stable et de supprimer les erreurs techniques répétées.",
      practice: "Réalise trente occurrences du même protocole avec un risque simulé fixe et journalise aussi les situations où la bonne décision est de ne pas entrer."
    },
    25: {
      understand: "La préparation au réel ne se résume pas à un solde démo positif. Elle combine exactitude technique, échantillon statistique, respect du risque, capacité à accepter les pertes et situation financière personnelle. Un seul critère critique instable peut justifier de prolonger la démo ou de réduire l’exposition.",
      practice: "Note chaque critère avec une preuve vérifiable et fixe à l’avance les conditions de retour en démo avant d’engager le moindre capital."
    },
    26: {
      understand: "Une zone Offre/Demande et un Order Block peuvent couvrir la même origine de mouvement tout en utilisant des conventions de bornes différentes. La comparaison doit toujours nommer l’école, la définition, le timeframe, le retest et l’invalidation ; aucune étiquette ne révèle à elle seule des ordres institutionnels encore présents.",
      practice: "Travaille en Replay, superpose les deux conventions sur le même graphique et conserve les cas où une zone fraîche ou un Order Block correctement tracé échoue."
    },
    27: {
      understand: "Ce module est volontairement dépourvu de nouvelle théorie. La compétence mesurée est l’application répétable de la convention apprise : même ordre de checklist, mêmes bornes, même règle d’invalidation et correction indépendante du résultat futur.",
      practice: "Fige chaque réponse avant d’afficher la correction, conserve les échecs et calcule un taux de cohérence du processus plutôt qu’un taux de gains."
    },
    28: {
      understand: "Le flux d’ordres décrit une donnée d’exécution ou de carnet pour une source et une période précises. Même une taille extrême ne permet pas d’identifier avec certitude l’acteur, son portefeuille, sa couverture ou son intention ; la conclusion doit rester probabiliste et conditionnelle.",
      practice: "Sépare systématiquement fait mesuré, comparaison locale, hypothèse, confirmation attendue et invalidation, sans transformer Delta ou absorption en signal automatique."
    },
    29: {
      understand: "Agressif et passif décrivent une interaction avec la liquidité, pas une prévision. La quantité affichée peut changer, la priorité dépend du marché et les horizons peuvent se contredire. Un protocole de conflit écrit protège contre le choix opportuniste de l’information qui confirme le trade souhaité.",
      practice: "Applique le Guide Orderflow sur plusieurs scénarios alignés et contradictoires, puis vérifie que les mêmes cases produisent la même décision ou le même non-trade."
    },
    30: {
      understand: "Indice cash, future et CFD sont des objets distincts. Leurs horaires, multiplicateurs, ticks, frais et sources changent la lecture d’un gap et le calcul du risque. Les publications macro augmentent parfois la volatilité mais ne déterminent pas une direction universelle.",
      practice: "Crée une fiche par symbole réellement disponible chez ton broker ou ton exchange et refais intégralement le calcul du module 8 avec les spécifications vérifiées."
    }
  };

  const simpleVariants = [
    title => `Pour « ${title} », commence par nommer ce que tu observes sans chercher un signal. Distingue le fait visible, son unité ou sa source, puis l’interprétation possible. Cette séparation évite de transformer un mot nouveau en décision automatique.`,
    title => `Imagine que tu dois expliquer « ${title} » à une personne qui n’a jamais ouvert un graphique. Utilise une phrase courte, un exemple concret et une limite. Si l’explication exige un autre terme technique, définis d’abord ce terme.`,
    title => `L’objectif de « ${title} » n’est pas de mémoriser un label. Tu dois reconnaître l’information, savoir où la trouver et comprendre ce qu’elle ne permet pas de conclure. Une observation correcte peut très bien conduire à ne rien faire.`,
    title => `Lis « ${title} » comme une pièce du processus, jamais comme une promesse de résultat. Demande-toi où cette information apparaît, comment elle est mesurée et quelle erreur un débutant ferait en l’utilisant trop vite.`,
    title => `Avant de passer à la suite, reformule « ${title} » avec tes propres mots. Ton explication doit indiquer l’idée principale, un exemple simple et au moins une condition qui dépend du marché, du broker, de la plateforme ou de la méthode.`
  ];

  const understandVariants = [
    title => `Relie maintenant « ${title} » aux étapes qui viennent avant et après. Vérifie quelles données sont certaines, lesquelles sont estimées et quelle règle permettrait à une autre personne de reproduire exactement ton raisonnement.`,
    title => `À ce niveau, le vocabulaire seul ne suffit plus. Pour « ${title} », identifie la donnée d’entrée, la transformation éventuelle, le résultat obtenu et la limite qui empêcherait d’en faire une règle universelle.`,
    title => `Une lecture rigoureuse de « ${title} » conserve le contexte et les unités. Elle précise aussi la définition choisie lorsque plusieurs écoles emploient le même mot différemment, afin que l’exercice reste comparable d’un graphique à l’autre.`,
    title => `Observe les dépendances de « ${title} » : actif, timeframe, fournisseur de données, version de plateforme ou règle méthodologique. Si l’une d’elles change, note explicitement ce qui peut changer dans la conclusion.`,
    title => `Le point important est la reproductibilité. Deux élèves appliquant la même définition de « ${title} » devraient pouvoir comparer leurs réponses, expliquer un désaccord et retrouver la règle utilisée sans regarder le résultat futur.`
  ];

  const practiceVariants = [
    title => `Effectue l’exercice une première fois avec les explications visibles, puis une seconde fois sans aide. Pour « ${title} », conserve une capture ou un calcul et écris la règle qui justifie chaque annotation.`,
    title => `Prépare un exemple correct et un exemple incorrect de « ${title} ». Compare-les point par point, puis écris le détail précis qui invalide le second au lieu de répondre seulement qu’il paraît moins bon.`,
    title => `Travaille sur des données démo et arrête-toi avant toute exécution réelle. Pour « ${title} », note observation, décision, invalidation et information manquante dans quatre lignes séparées.`,
    title => `Répète « ${title} » sur trois situations différentes. Si ta règle change entre les exemples, corrige d’abord la définition ; ne choisis pas après coup la version qui produit le résultat le plus favorable.`,
    title => `Termine par une vérification active : montre « ${title} » sur un exemple, explique ton choix à voix haute, puis cherche volontairement un contre-exemple. Corrige la règle si elle classe trop facilement toutes les situations.`
  ];

  const wordCount = text => String(text).trim().split(/\s+/).filter(Boolean).length;
  const report = [];

  modules.forEach(module => {
    const deep = course[module.id];
    const frame = frames[module.id];
    if (!deep || !frame) return;

    deep.chapters = deep.chapters.map((chapter, index) => {
      const title = module.lessons[index] || `Leçon ${index + 1}`;
      const enriched = [
        `${chapter[0]} ${simpleVariants[index % simpleVariants.length](title)}`,
        `${chapter[1]} ${frame.understand} ${understandVariants[index % understandVariants.length](title)}`,
        `${chapter[2]} ${frame.practice} ${practiceVariants[index % practiceVariants.length](title)}`
      ];
      if (wordCount(enriched[0]) < 45) enriched[0] += " Tu dois pouvoir donner cette explication sans relire le vocabulaire du cours.";
      if (wordCount(enriched[2]) < 60) enriched[2] += " Conserve la preuve de ton travail et compare-la ensuite à la correction.";
      report.push({
        module: module.id,
        lesson: index + 1,
        title,
        words: enriched.map(wordCount)
      });
      return enriched;
    });
  });

  window.courseDensityAudit = report;
})();

/*
 * Complément de sources : chaque module conserve au moins trois références.
 * Les ressources généralistes servent de cadre observable ; elles ne transforment
 * pas les vocabulaires ICT/SMC en normes universelles.
 */
(() => {
  const additions = {
    4: [["CME Group — Cours d’analyse technique", "https://www.cmegroup.com/education/courses/technical-analysis", "OHLC, graphiques et lecture du prix dans le cadre éducatif d’un marché organisé."]],
    7: [["CFTC — Glossaire des futures", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CFTCGlossary/index.htm", "Terminologie réglementaire des ordres, contrats et exécutions sur marchés à terme."]],
    10: [["CME Group — Cours d’analyse technique", "https://www.cmegroup.com/education/courses/technical-analysis", "Tendances, graphiques, supports et résistances dans un parcours éducatif institutionnel."]],
    11: [
      ["CME Group — Cours d’analyse technique", "https://www.cmegroup.com/education/courses/technical-analysis", "Cadre général des tendances et ruptures ; BOS et CHoCH n’y constituent pas des définitions réglementaires normalisées."],
      ["Fidelity — Guide des indicateurs techniques", "https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/overview", "Présente l’analyse technique comme une lecture de données historiques et d’entrées/sorties possibles, non comme une certitude."]
    ],
    12: [
      ["CME Group — Méthodologie de l’outil de liquidité", "https://www.cmegroup.com/education/articles-and-reports/understanding-the-cme-liquidity-tool-methodology", "Distingue la liquidité mesurée dans le carnet des zones de liquidité déduites d’un graphique."],
      ["CME Group — Fonctionnement d’un carnet central", "https://www.cmegroup.com/education/articles-and-reports/overview-what-makes-ags-markets-work", "Ordres affichés, modifications, annulations et exécutions dans un carnet centralisé."]
    ],
    13: [
      ["CME Group — Cours d’analyse technique", "https://www.cmegroup.com/education/courses/technical-analysis", "Fournit un cadre technique général distinct des conventions propres aux écoles ICT/SMC."],
      ["Fidelity — Guide des indicateurs techniques", "https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/overview", "Rappelle que l’analyse historique sert à identifier des possibilités et doit être combinée à d’autres éléments."],
      ["CME Group — Méthodologie de la liquidité", "https://www.cmegroup.com/education/articles-and-reports/understanding-the-cme-liquidity-tool-methodology", "Permet de séparer mesures de carnet et interprétations graphiques telles que FVG ou Order Block."]
    ],
    14: [["StockCharts ChartSchool — Méthode Wyckoff", "https://chartschool.stockcharts.com/table-of-contents/market-analysis/wyckoff-analysis-articles/the-wyckoff-method-a-tutorial", "Phases, Springs, tests, SOS, UTAD et lecture prix-volume dans la méthode Wyckoff."]],
    15: [["StockCharts ChartSchool — Méthode Wyckoff", "https://chartschool.stockcharts.com/table-of-contents/market-analysis/wyckoff-analysis-articles/the-wyckoff-method-a-tutorial", "Critères propres à Wyckoff utiles pour comparer sans fusionner Spring, UTAD, sweep et displacement."]],
    16: [["CME Group — Cours d’analyse technique", "https://www.cmegroup.com/education/courses/technical-analysis", "Cadre pour relier tendance, niveaux et horizon d’analyse sans additionner mécaniquement les signaux."]],
    17: [["CME Group — Horaires de négociation", "https://www.cmegroup.com/markets/equities/dow-jones/e-mini-dow.contractSpecs.html", "Exemple officiel d’horaires et de spécifications propres à un contrat, à distinguer des sessions graphiques génériques."]],
    18: [["CME Group — Méthodologie de l’outil de liquidité", "https://www.cmegroup.com/education/articles-and-reports/understanding-the-cme-liquidity-tool-methodology", "Profondeur, spread et coût d’exécution mesurés à partir de données de marché centralisé."]],
    19: [["MetaTrader 5 — Tester une stratégie", "https://www.metatrader5.com/fr/terminal/help/algotrading/testing", "Cadre de test reproductible pour distinguer règles écrites, occurrences et résultats."]],
    20: [["CFTC — Risques du Forex", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_MustKnowForex.html", "Rappelle qu’une stratégie documentée n’élimine ni pertes, ni levier, ni risque de contrepartie."]],
    22: [["CFTC — Huit points avant de trader le Forex", "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/CustomerAdvisory_MustKnowForex.html", "Éléments de vigilance à consigner avant et après une opération, notamment coûts et risque."]],
    23: [["American Psychological Association — Émotions", "https://www.apa.org/topics/emotions", "Ressource institutionnelle sur les émotions et leur influence sur les comportements et la poursuite d’objectifs."]]
  };

  Object.entries(additions).forEach(([moduleId, sources]) => {
    const target = window.deepCourse?.[moduleId]?.sources;
    if (!target) return;
    sources.forEach(source => {
      if (!target.some(existing => existing[1] === source[1])) target.push(source);
    });
  });
})();

/* Cas intégrés du parcours principal et stratégie pédagogique complète. */
(() => {
  window.__coreIntegratedCases = {
    13: {
      id: "D",
      title: "Structure, liquidité et zone ICT/SMC sous contrainte",
      modules: [10, 11, 12, 13],
      scenario: "EURUSD H1 progresse de 1,0720 à 1,0860 avec des sommets 1,0780 puis 1,0860 et des creux 1,0745 puis 1,0810. Le prix dépasse 1,0860 jusqu’à 1,0868, clôture ensuite à 1,0842, puis casse 1,0810 avec une bougie baissière qui clôture à 1,0794. Cette impulsion laisse un FVG baissier entre 1,0806 et 1,0816. La dernière bougie haussière avant l’impulsion couvre 1,0812–1,0830. Un rebond revient à 1,0814, mais aucune bougie baissière de confirmation n’est encore clôturée.",
      constraints: ["La règle de swing exige une clôture au-delà du niveau protégé.", "Un simple contact avec le FVG ou l’Order Block n’autorise aucune entrée.", "Le risque maximal est 0,50 % et la partie droite du graphique reste masquée."],
      decisions: ["Identifier HH, HL et le creux protégé avant toute étiquette BOS/CHoCH.", "Classer le dépassement de 1,0860 comme sweep ou cassure selon la règle annoncée.", "Nommer la rupture de 1,0810 et justifier s’il s’agit d’un CHoCH ou d’un BOS dans la convention choisie.", "Tracer séparément le FVG 1,0806–1,0816 et l’Order Block candidat 1,0812–1,0830.", "Décider entrée, attente ou non-trade en repérant le piège de confirmation manquante."],
      correction: ["La séquence initiale est haussière : deux HH et deux HL ; 1,0810 est le creux protégé retenu par la règle.", "Le passage à 1,0868 suivi d’une clôture sous 1,0860 est un sweep de liquidité dans cette convention, pas une cassure haussière confirmée.", "La clôture à 1,0794 rompt le creux protégé. On peut la nommer CHoCH baissier dans une convention ICT/SMC ; une autre convention peut parler de première rupture structurelle, mais le tag doit rester stable.", "Le FVG et l’Order Block se chevauchent partiellement sans être synonymes. Leurs bornes doivent rester celles fixées avant le retour.", "Le retour à 1,0814 ressemble à un signal vendeur, mais la confirmation prévue n’est pas clôturée : la décision correcte est attente ou non-trade. Le mouvement ultérieur ne peut pas réparer cette condition manquante."],
      mastery: "Réussite globale : les quatre lectures — structure, sweep, rupture et zone — doivent utiliser la même convention et conduire à respecter la confirmation manquante. Réussir les quiz séparés ne suffit pas ; les niveaux sont pédagogiques et aucun résultat d’exemple ne constitue une preuve statistique."
    },
    14: {
      id: "E",
      title: "Spring Wyckoff, invalidation et taille de position",
      modules: [14, 8, 9],
      scenario: "Sur EURUSD H1, un range s’étend de 1,0950 à 1,1050 après une baisse. Le prix imprime un SC près de 1,0948, un AR à 1,1047, puis un ST à 1,0962. Plus tard, il descend à 1,0938 et clôture à 1,0964, puis effectue un test à 1,0958 avec une amplitude réduite. Une entrée pédagogique n’est envisagée qu’après clôture au-dessus de 1,0980, avec un Stop à 1,0930 et un objectif à 1,1080. Capital : 12 000 $, risque : 0,50 %, valeur vérifiée : 10 $ par pip pour 1 lot, pas de volume : 0,01.",
      constraints: ["Le Spring reste une hypothèse jusqu’au test et à la confirmation écrite.", "Le Stop vient de l’invalidation, pas du volume désiré.", "Le volume doit être arrondi vers le bas au pas de 0,01."],
      decisions: ["Délimiter le range et ordonner SC, AR, ST, Spring potentiel et test.", "Dire ce qui rend la lecture d’accumulation plausible sans la présenter comme certaine.", "Calculer le risque monétaire maximal.", "Calculer la distance du Stop et la taille de position compatible.", "Décider si l’entrée est autorisée et écrire l’invalidation structurelle et financière."],
      correction: ["Les bornes 1,0950–1,1050 viennent du SC/AR ; le passage à 1,0938 puis le retour dans le range est compatible avec un Spring, et 1,0958 peut servir de test.", "La séquence et l’amplitude réduite rendent l’hypothèse plausible, mais seule la confirmation au-dessus de 1,0980 satisfait le plan ; un Spring isolé ne suffit pas.", "Le risque monétaire vaut 12 000 × 0,005 = 60 $.", "De 1,0980 à 1,0930, la distance est 50 pips. Taille = 60 ÷ (50 × 10) = 0,12 lot ; le pas de 0,01 permet exactement 0,12 lot.", "Avant la clôture au-dessus de 1,0980 : non-trade. Après confirmation, le scénario respecte le risque prévu ; une clôture ou exécution au Stop invalide le trade sans invalider automatiquement toute la méthode Wyckoff."],
      mastery: "Réussite globale : l’étiquette Wyckoff, le déclencheur, le calcul de 60 $ et le volume de 0,12 lot doivent tous être corrects avant l’entrée. Réussir les quiz séparés ne suffit pas et cet exemple unique ne prouve aucun avantage statistique."
    },
    25: {
      id: "F",
      title: "Du backtest à la démo : décider sans se raconter d’histoire",
      modules: [20, 21, 24, 25],
      scenario: "Une stratégie a produit 100 trades de backtest : 43 gains, 57 pertes, gain moyen +1,8 R, perte moyenne −1 R, Profit Factor 1,36 et Drawdown maximal 11 R, frais inclus. En démo, 30 trades donnent 11 gains, 19 pertes, +1,6 R de gain moyen, −1 R de perte moyenne, Expectancy +0,01 R et Drawdown maximal 8 R. Six trades n’ont pas respecté le plan, dont trois après la limite quotidienne ; deux tailles de position étaient erronées. Les 15 derniers trades sont conformes, mais l’élève n’a pas encore vécu une série de cinq pertes conforme au plan.",
      constraints: ["Aucun seuil isolé ne décide du passage au réel.", "Les violations de processus ne doivent pas être mélangées aux performances conformes.", "Le capital réel envisagé est indispensable aux dépenses mensuelles."],
      decisions: ["Recalculer l’Expectancy du backtest à partir du Win Rate et des gains/pertes moyens.", "Comparer backtest et démo sans conclure à partir du seul Profit Factor.", "Séparer résultats conformes, erreurs d’exécution et violations du plan.", "Évaluer les critères techniques, statistiques, comportementaux et financiers du module 25.", "Décider réel, prolongation démo ou retour au travail ciblé, puis définir la prochaine preuve attendue."],
      correction: ["Expectancy backtest = 0,43 × 1,8 − 0,57 × 1 = +0,204 R par trade ; elle est positive sur cet échantillon, sans garantie future.", "La démo affiche une Expectancy presque nulle : 11/30 × 1,6 − 19/30 × 1 ≈ −0,047 R, et non +0,01 R. Cette incohérence doit être corrigée avant toute décision.", "Les six violations et les deux erreurs de taille sont des défauts de processus. Les quinze trades récents montrent un progrès, mais l’échantillon conforme reste trop court pour conclure.", "Le comportement sous série de pertes n’est pas démontré et le capital est financièrement inéligible parce qu’il est nécessaire aux dépenses. Deux critères critiques échouent.", "Décision : rester en démo. Prochaine preuve : au moins 30 à 50 nouveaux trades tous conformes, calculs de taille sans erreur, statistiques recalculées et série de pertes gérée sans violation, avec un capital qui peut être perdu sans compromettre les besoins essentiels."],
      mastery: "Réussite globale : l’élève doit détecter l’Expectancy démo erronée, séparer performance et discipline, puis refuser le réel malgré un backtest positif. Réussir les quiz séparés ne suffit pas ; aucun backtest ni résultat démo ne constitue une preuve de performance future."
    }
  };

  window.namedStrategy = {
    name: "Djonia SSR — Sweep, Shift, Retour",
    scope: "Stratégie pédagogique EURUSD, contexte H1 et déclenchement M15. Elle doit être backtestée avec les mêmes règles avant toute utilisation en démo.",
    mandatory: ["Biais H1 explicite et niveau de liquidité daté.", "Sweep du niveau, puis clôture M15 rompant le swing opposé selon la convention choisie.", "Déplacement laissant un FVG mesurable.", "Retour dans le FVG sans invalidation préalable.", "Stop structurel, taille calculée et objectif offrant au moins 2 R."],
    optional: ["Session Londres ou New York définie avec date et fuseau.", "POI H1 cohérent avec le biais.", "Volume ou Delta utilisé seulement comme contexte supplémentaire."],
    invalidations: ["Clôture au-delà du niveau structurel qui justifie le Stop.", "Absence de déplacement ou FVG mal formé.", "Objectif disponible inférieur à 2 R.", "Annonce majeure située dans la fenêtre de non-trade du plan."],
    noTrade: ["Sweep sans rupture structurelle clôturée.", "Rupture sans retour planifié dans la zone.", "Spécifications du symbole ou valeur du pip non vérifiées.", "Limite quotidienne atteinte ou état émotionnel imposant une pause."],
    paths: [
      {label: "Exemple gagnant", tone: "up", text: "EURUSD H1 est haussier. Le Previous Day Low 1,0830 est balayé jusqu’à 1,0824. M15 clôture au-dessus du swing 1,0852, se déplace vers 1,0878 et laisse un FVG 1,0848–1,0856. Entrée au retour à 1,0852, Stop 1,0822 : 30 pips ; TP 1,0912 : 60 pips, soit 2 R. Sur 10 000 $ à 0,50 %, risque 50 $ ; avec 10 $/pip/lot, taille théorique 0,166 lot, arrondie à 0,16 lot, risque prévu 48 $. Le TP est atteint dans cet exemple, mais ce gain ne valide pas la stratégie."},
      {label: "Exemple perdant", tone: "down", text: "Le même contexte, le même sweep, la même rupture et le même calcul sont présents. Entrée 1,0852, Stop 1,0822 et TP 1,0912 restent inchangés. Après le retour dans le FVG, le prix repart brièvement puis atteint 1,0822 : perte planifiée de 30 pips, environ −48 $ ou −1 R avec 0,16 lot. Le trade est conforme malgré la perte ; déplacer le Stop après coup détruirait la mesure statistique."},
      {label: "Faux signal / non-trade", tone: "zone", text: "Le prix balaie 1,0830 et rebondit jusqu’à 1,0850, mais aucune bougie M15 ne clôture au-dessus du swing 1,0852 et aucun déplacement ne laisse de FVG valide. Le mouvement ressemble visuellement au début du setup, mais deux conditions obligatoires manquent. Décision : non-trade, même si le prix monte ensuite jusqu’à 1,0900."}
    ],
    warning: "Ces trois déroulés sont des scénarios pédagogiques sur niveaux fictifs. Ils ne constituent ni un signal, ni une recommandation, ni une preuve statistique de rentabilité."
  };
})();

/*
 * Synthèses de fin de module et cas transversaux.
 * Ces textes relient explicitement les notions, erreurs et gestes déjà enseignés.
 */
(() => {
  window.moduleSyntheses = {
    1: {
      summary: "Le trading consiste à intervenir sur un marché, tandis que l’investissement poursuit généralement un horizon plus long. Le broker donne accès à des produits dont les règles, les coûts et les risques doivent être identifiés avant toute opération. Le compte démo sert donc à apprendre le fonctionnement du marché sans confondre découverte et promesse d’enrichissement.",
      takeaways: ["Distingue toujours trading et investissement avant de définir ton objectif.", "Identifie le produit réellement proposé par le broker.", "Commence les manipulations sur un compte démo.", "Refuse toute promesse de gain rapide ou garanti."]
    },
    2: {
      summary: "TradingView devient utile lorsque le symbole, la source de données et le timeframe sont choisis consciemment. Les outils de dessin servent à rendre une analyse reproductible, tandis que Bar Replay permet de pratiquer sans voir immédiatement la suite. Une bonne configuration privilégie la lisibilité et la vérification du fournisseur plutôt que l’accumulation d’indicateurs.",
      takeaways: ["Vérifie le symbole et sa source avant d’annoter.", "Choisis le timeframe selon la question posée.", "Sauvegarde un espace de travail simple et reproductible.", "Utilise Bar Replay sans oublier ses limites d’exécution."]
    },
    3: {
      summary: "MT4 et MT5 exécutent les ordres selon les symboles et conditions fournis par le broker connecté. Market Watch, Navigator et Toolbox ou Terminal relient le compte, le graphique, les positions et l’historique dans un même processus. Une exécution correcte commence par le serveur et le symbole exacts, puis se termine par la vérification du ticket, du volume, du Stop Loss et du Take Profit.",
      takeaways: ["Contrôle le serveur et le compte avant toute manipulation.", "Ouvre la fiche du symbole avant de choisir le volume.", "Relis le ticket complet avant de confirmer un ordre.", "Vérifie la position dans l’historique après sa fermeture."]
    },
    4: {
      summary: "Le prix affiché résulte de deux cotations, Bid et Ask, séparées par le spread. Une bougie résume Open, High, Low et Close sur une période sans révéler nécessairement l’ordre exact des mouvements internes. Lire correctement une mèche ou une variation exige donc le timeframe, le côté de cotation et la volatilité, sans conclure automatiquement à un retournement.",
      takeaways: ["Distingue Bid et Ask avant d’expliquer une exécution.", "Lis les quatre valeurs OHLC d’une bougie terminée.", "Replace toujours une mèche dans son timeframe.", "N’invente pas l’ordre interne des mouvements d’une bougie."]
    },
    5: {
      summary: "Pip, point et tick sont des unités de variation, alors que le lot décrit une quantité liée au contrat. Leur valeur monétaire dépend du symbole, de la taille du contrat, de la devise du compte et parfois d’une conversion. La fiche du produit doit donc précéder tout calcul afin d’éviter de supposer qu’un point ou un lot possède partout la même valeur.",
      takeaways: ["Nomme l’unité utilisée avant chaque calcul.", "Vérifie tick size, tick value et taille du contrat.", "Respecte le volume minimal et le pas de volume.", "Ne transpose jamais une valeur de point entre deux instruments."]
    },
    6: {
      summary: "Le levier augmente l’exposition accessible mais ne définit pas à lui seul le risque prévu au Stop Loss. La marge immobilisée, l’Equity et la Free Margin évoluent avec les positions et les pertes flottantes. Comprendre Margin Call et Stop Out revient donc à suivre la capacité du compte à supporter l’exposition, selon les seuils propres au broker.",
      takeaways: ["Calcule l’exposition avant d’utiliser le levier.", "Surveille Equity et Free Margin pendant une position.", "Vérifie les seuils de Margin Call et Stop Out du broker.", "Réduis l’exposition au lieu d’utiliser le levier comme objectif de gain."]
    },
    7: {
      summary: "Le type d’ordre traduit un scénario de prix précis, pas une préférence arbitraire pour Buy ou Sell. Les ordres Limit anticipent un retour vers un niveau, tandis que les ordres Stop attendent une continuation au-delà d’un niveau. Le Stop Loss, le Take Profit et les conditions d’exécution doivent être définis avec le volume avant l’envoi, car spread, gap et slippage peuvent modifier le résultat réel.",
      takeaways: ["Dessine le mouvement attendu avant de choisir l’ordre.", "Place Limit et Stop du bon côté du prix actuel.", "Définis SL, TP et volume avant la confirmation.", "Anticipe spread, gap, slippage et exécution partielle."]
    },
    8: {
      summary: "La taille de position est le résultat d’une chaîne qui commence par le capital et le pourcentage de risque. Le Stop Loss vient de l’invalidation du scénario, puis sa distance est combinée avec la valeur monétaire du pip ou du point. Le volume obtenu doit enfin être adapté au pas autorisé sans dépasser le risque, ce qui interdit de choisir d’abord un lot confortable ou impressionnant.",
      takeaways: ["Calcule d’abord le risque monétaire maximal.", "Place le Stop selon l’invalidation avant de mesurer sa distance.", "Vérifie la valeur unitaire sur le symbole exact.", "Arrondis le volume vers le bas si le pas du broker l’exige."]
    },
    9: {
      summary: "La gestion du risque organise une série de résultats incertains plutôt qu’un trade isolé. Le R:R et le taux de réussite prennent leur sens avec l’Expectancy, les coûts, les corrélations et le Drawdown. Des limites par trade, par jour et par exposition empêchent une perte ou une émotion de transformer une stratégie viable en risque de ruine.",
      takeaways: ["Fixe le risque avant chaque entrée.", "Additionne les expositions corrélées comme un risque commun.", "Arrête la session lorsque la limite quotidienne est atteinte.", "Évalue Expectancy et Drawdown sur un échantillon, pas sur un trade."]
    },
    10: {
      summary: "L’analyse technique organise le prix en swings, impulsions, retracements, tendances et ranges. Les séquences HH et HL ou LH et LL dépendent d’une règle de swing constante et du timeframe observé. Supports, résistances, breakouts et retests deviennent utiles seulement si l’analyste distingue un niveau important d’une micro-oscillation choisie après coup.",
      takeaways: ["Fige ta règle de swing avant d’annoter.", "Classe le marché en tendance ou en range avant le setup.", "Traite support et résistance comme des zones lorsque nécessaire.", "Attends les critères prévus avant de valider un breakout."]
    },
    11: {
      summary: "La structure de marché exige d’identifier le swing réellement protégé avant de parler de BOS ou de CHoCH. Une cassure valide dépend de la définition choisie, de la clôture exigée et de la distinction entre structure interne et externe. Le vocabulaire ne prédit pas le retournement : il décrit une rupture qui doit encore être contextualisée et invalidée.",
      takeaways: ["Marque le swing de référence avant toute cassure.", "Définis si une clôture est obligatoire.", "Sépare structure interne et structure externe.", "Ne transforme jamais une mèche isolée en BOS automatique."]
    },
    12: {
      summary: "La liquidité graphique repère des zones où des ordres peuvent être regroupés sans prétendre voir tous les ordres réels. BSL, SSL, Equal Highs, Equal Lows et niveaux précédents aident à formuler un trajet possible du prix. Un sweep se distingue d’une cassure par une règle de retour ou de clôture, et ne devient un setup qu’avec contexte, confirmation et invalidation.",
      takeaways: ["Repère d’abord les niveaux évidents et datés.", "Présente BSL et SSL comme des hypothèses de liquidité.", "Définis la différence entre sweep et cassure.", "Exige une confirmation distincte avant toute entrée."]
    },
    13: {
      summary: "Les concepts ICT et SMC combinent contexte HTF, déplacement, FVG, Order Block et lecture Premium ou Discount. Ces constructions dépendent de définitions méthodologiques qui doivent rester stables pendant le backtest. Aucun FVG ne doit obligatoirement être comblé et aucun Order Block ne prouve une intervention institutionnelle, ce qui rend l’invalidation et le non-trade indispensables.",
      takeaways: ["Étiquette clairement la vision ICT ou SMC utilisée.", "Exige un déplacement et les critères écrits de ta définition.", "Trace les bornes du FVG avec les trois bougies concernées.", "Conserve les FVG et Order Blocks qui échouent dans le backtest."]
    },
    14: {
      summary: "Wyckoff lit un range comme une évolution possible de l’offre, de la demande et du comportement prix-volume. Spring, SOS, UTAD et SOW n’ont de sens qu’avec leurs phases et leurs tests, jamais comme silhouettes isolées. Le modèle sert à construire une hypothèse structurée tout en acceptant qu’un marché réel puisse rester incomplet ou impossible à classer.",
      takeaways: ["Trace le range avant de nommer ses événements.", "Relie chaque événement à une phase Wyckoff.", "Compare prix et volume sans forcer un schéma parfait.", "Classe le cas comme indéterminé si les conditions manquent."]
    },
    15: {
      summary: "Wyckoff et ICT peuvent décrire des formes proches avec des mécanismes et des conditions différentes. Un Spring peut ressembler à un sweep de SSL, tandis qu’un SOS peut rappeler un displacement, mais ces correspondances restent partielles. Comparer les méthodes demande donc deux colonnes de critères afin de traduire les ressemblances sans fusionner artificiellement les vocabulaires.",
      takeaways: ["Compare les conditions avant les ressemblances visuelles.", "Conserve les tags Wyckoff et ICT dans tes annotations.", "Écris ce qui empêche chaque équivalence parfaite.", "Choisis une seule convention pour mesurer ton backtest."]
    },
    16: {
      summary: "L’analyse multi-timeframe attribue une fonction différente à chaque horizon au lieu de multiplier les confirmations. Weekly et Daily donnent le contexte, H4 et H1 structurent la zone, puis M15 ou M5 cherchent un déclencheur éventuel. Une contradiction avec le timeframe supérieur doit conduire à réviser ou abandonner le scénario, pas à descendre jusqu’à trouver un signal favorable.",
      takeaways: ["Assigne une seule question à chaque timeframe.", "Commence toujours par le contexte supérieur.", "Descends seulement pour préciser une zone ou un déclencheur.", "Arrête l’analyse lorsqu’une condition supérieure est invalidée."]
    },
    17: {
      summary: "Les sessions structurent les périodes d’activité autour de l’Asie, de Londres et de New York. Asian Range, ouvertures et chevauchements restent inutilisables sans date, fuseau et heure du serveur, car les changements saisonniers ne sont pas simultanés. Les Kill Zones relèvent d’une lecture ICT et ne garantissent ni volatilité ni setup.",
      takeaways: ["Inscris la date et le fuseau à côté de chaque heure.", "Convertis UTC, New York, heure locale et heure serveur.", "Vérifie les changements d’heure de chaque région.", "Traite une fenêtre de session comme un contexte, jamais comme un signal."]
    },
    18: {
      summary: "Volume, Delta, Footprint et Volume Profile décrivent l’activité enregistrée par une source donnée. POC, VAH et VAL situent la distribution du volume, tandis que l’absorption et l’exhaustion restent des interprétations contextuelles. La qualité du flux et le type de marché déterminent donc ce que l’on peut conclure, sans transformer une valeur de Delta en bouton Buy ou Sell.",
      takeaways: ["Identifie la source et la portée du volume.", "Lis Delta et Footprint avec le contexte de prix.", "Repère POC, VAH et VAL sans leur attribuer une direction automatique.", "Formule absorption et exhaustion comme des hypothèses invalidables."]
    },
    19: {
      summary: "Un setup transforme plusieurs observations en une séquence reproductible de conditions obligatoires et facultatives. Contexte, liquidité, POI, confirmation, invalidation et risque doivent exister avant l’entrée, tandis qu’une condition manquante produit un non-trade. L’exemple gagnant, l’exemple perdant et le faux signal vérifient la règle sans permettre d’ajouter des critères après coup.",
      takeaways: ["Sépare conditions obligatoires et confluences.", "Écris l’invalidation avant le déclencheur.", "Calcule la position seulement après le Stop.", "Classe immédiatement non-trade toute condition obligatoire absente."]
    },
    20: {
      summary: "Une stratégie documente les marchés, horaires, timeframes, déclencheurs, sorties et limites qui rendent un setup testable. Sa valeur potentielle vient d’un échantillon exécuté avec des règles fixes, pas de quelques gains ou pertes récents. La gestion de position et les checklists réduisent les décisions improvisées, tandis que les statistiques déterminent si l’avantage observé mérite un test prospectif.",
      takeaways: ["Fixe l’univers et les horaires autorisés.", "Écris le déclencheur, le Stop et la sortie avant le backtest.", "Conserve les règles pendant tout l’échantillon.", "Modifie une version de stratégie seulement après la revue complète."]
    },
    21: {
      summary: "Le backtesting confronte des règles fixes à une suite chronologique de trades sans sélectionner seulement les meilleurs exemples. Win Rate, gains et pertes moyens, Expectancy, Profit Factor et Drawdown décrivent ensemble la distribution des résultats. Passer de 20 à 50 puis 100 trades améliore l’observation de la variance, mais les frais et les régimes de marché empêchent toute garantie future.",
      takeaways: ["Fige les règles avant de lancer Replay.", "Enregistre chaque occurrence, y compris les pertes.", "Intègre spread, commissions et slippage estimé.", "Interprète plusieurs statistiques ensemble avant toute décision."]
    },
    22: {
      summary: "Le journal relie la décision prise avant le trade à son exécution et à sa revue après le résultat. Les captures, le risque prévu, le résultat en R et les émotions observables empêchent de reconstruire l’histoire uniquement à partir du profit ou de la perte. Une action corrective mesurable transforme chaque erreur répétée en donnée de travail plutôt qu’en jugement personnel.",
      takeaways: ["Capture le graphique avant toute entrée.", "Note le risque et la justification avant de connaître le résultat.", "Journalise aussi les gains et les non-trades.", "Choisis une seule action corrective mesurable par revue."]
    },
    23: {
      summary: "FOMO, revenge trading et euphorie deviennent utiles à étudier lorsqu’ils sont reliés à des comportements observables. Volume augmenté, Stop déplacé, entrée tardive ou multiplication des trades peuvent être mesurés et limités par une routine. La discipline repose donc sur des contraintes préparées, des pauses et un risque supportable plutôt que sur la volonté ou la motivation du moment.",
      takeaways: ["Nomme le comportement précis au lieu de juger l’émotion.", "Réduis le risque s’il empêche de suivre le plan.", "Applique une pause automatique après une violation.", "Mesure le taux de trades hors plan dans le journal."]
    },
    24: {
      summary: "Le compte démo entraîne toute la chaîne opérationnelle, depuis la préparation jusqu’à la revue. Un capital virtuel réaliste, les spécifications du symbole et le calcul du volume évitent de pratiquer des habitudes impossibles à reproduire en réel. La performance utile est le respect répété du plan, incluant les modifications, fermetures et entrées de journal, pas le solde fictif obtenu au hasard.",
      takeaways: ["Configure un capital démo proche de ta situation d’apprentissage.", "Calcule chaque volume comme s’il s’agissait d’argent réel.", "Exécute SL, TP, modification et fermeture sur la plateforme.", "Journalise chaque entraînement avant de juger le résultat."]
    },
    25: {
      summary: "Le passage au réel est une évaluation de préparation et non une récompense de fin de formation. Les preuves techniques, statistiques, comportementales et financières doivent converger, car un seul critère critique instable peut justifier de rester en démo. Une transition prudente utilise un risque minimal, des limites écrites et une condition de retour en simulation.",
      takeaways: ["Exige des preuves pour chaque critère de préparation.", "Reste en démo si un critère critique est instable.", "N’engage jamais un capital emprunté ou indispensable.", "Écris les conditions de retour en démo avant le premier trade réel."]
    },
    26: {
      summary: "Une zone Offre/Demande part d’une base et d’un départ dont la force, la fraîcheur et le timeframe doivent être décrits. Un Order Block ICT peut recouvrir la même origine avec des bornes et des conditions différentes, ce qui impose de tagger la méthode avant de comparer. La zone reste une hypothèse invalidable et ne prouve jamais que des ordres institutionnels attendent encore au niveau.",
      takeaways: ["Fige les bornes de la base avant le retest.", "Classe la zone fraîche ou testée avec les visites visibles.", "Compare le départ aux mouvements voisins sur le même timeframe.", "Distingue explicitement vision Offre/Demande classique et vision ICT."]
    },
    27: {
      summary: "La maîtrise pratique apparaît lorsque la même convention de zone est appliquée avant de connaître la suite du graphique. La checklist relie structure, base, départ, fraîcheur, confirmation, invalidation et risque dans un ordre constant. Une zone correctement analysée peut échouer, mais déplacer ses bornes ou consulter la correction avant de répondre invalide l’exercice.",
      takeaways: ["Masque la suite avant de tracer chaque zone.", "Fige le classement et l’invalidation avant la correction.", "Conserve les zones conformes qui produisent une perte.", "Mesure la cohérence du processus plutôt que le taux de gain."]
    },
    28: {
      summary: "Une divergence de Delta, une absorption ou un bloc inhabituel décrit une anomalie relative à une source et une référence locales. Ces observations peuvent soutenir une hypothèse sur l’exécution, mais elles ne révèlent ni l’identité ni l’intention complète de leur auteur. La lecture rigoureuse sépare donc fait mesuré, hypothèse, confirmation attendue et invalidation sans produire de signal automatique.",
      takeaways: ["Vérifie le contrat, la source et l’agrégation du flux.", "Compare toute taille inhabituelle à une référence pertinente.", "Décris l’absorption comme une hypothèse conditionnelle.", "N’attribue jamais un ordre à une baleine ou une banque avec certitude."]
    },
    29: {
      summary: "Les ordres agressifs consomment la liquidité disponible, tandis que les ordres passifs attendent dans une file dont les règles dépendent du marché. La lecture multi-échelle relie le contexte lent à l’événement rapide sans donner automatiquement priorité au timeframe le plus court. Lorsque prix et flux se contredisent, le Guide Orderflow impose une décision préparée d’attente, d’invalidation ou de non-trade.",
      takeaways: ["Sépare liquidité affichée et exécution réellement obtenue.", "Attribue une fonction différente à chaque échelle de flux.", "Vérifie synchronisation, contrat et rollover avant d’interpréter un conflit.", "Applique le même protocole de conflit quel que soit le résultat suivant."]
    },
    30: {
      summary: "US30, NAS100 et GER40 peuvent désigner des CFD, des futures ou des références cash dont les horaires et contrats diffèrent. Les gaps, corrélations et réactions macro doivent être rattachés au produit exact et à sa session, sans supposer une direction après une annonce. Le calcul du module 8 reste valable seulement lorsque la valeur du point, le volume minimal et le risque de l’instrument réel sont vérifiés.",
      takeaways: ["Identifie cash, future, micro-future ou CFD avant l’analyse.", "Définis la session utilisée pour mesurer chaque gap.", "Vérifie calendrier macro, heure et fuseau avant la session.", "Recalcule la position avec la valeur du point du contrat exact."]
    }
  };

  window.integratedCases = {
    27: {
      id: "A",
      title: "De la zone au plan exécutable",
      modules: [26, 27, 13],
      scenario: "EURUSD H1 évolue dans une structure haussière. Une base entre 1,0810 et 1,0822 précède une expansion jusqu’à 1,0905 qui casse le sommet 1,0870. Le prix n’a pas revisité la base depuis le départ et revient maintenant à 1,0820. Selon la convention ICT retenue, la dernière bougie baissière avant le déplacement couvre 1,0816–1,0822.",
      constraints: ["La partie droite du graphique reste masquée.", "Les bornes doivent être figées avant le retest.", "Le risque maximal est 0,50 % et aucune entrée n’est automatique au contact."],
      decisions: ["Tracer la zone de demande classique avec une règle annoncée.", "Classer la zone fraîche ou testée à partir des visites visibles.", "Comparer cette zone à l’Order Block selon la définition ICT choisie.", "Exécuter la checklist complète du module 27 avant toute décision.", "Écrire confirmation, invalidation et condition de non-trade."],
      correction: ["La zone classique peut couvrir toute la base 1,0810–1,0822 si cette convention a été fixée avant le retour.", "Elle est fraîche parce qu’aucune revisite n’est visible depuis le départ, mais cette fraîcheur ne garantit aucune réaction.", "L’Order Block ICT proposé est plus étroit, 1,0816–1,0822 : les deux tracés se recouvrent sans devenir des concepts indépendants.", "La checklist doit confirmer structure, base, départ, cassure, fraîcheur, arrivée, déclencheur éventuel, invalidation et risque.", "Sans déclencheur prévu ou si l’invalidation impose un risque non conforme, la bonne décision est non-trade, même si le prix monte ensuite."],
      mastery: "Réussite globale : le tracé, le tag méthodologique, la checklist et l’invalidation doivent rester cohérents avant la révélation du résultat. Réussir les quiz 26 et 27 ne compense pas une chaîne incomplète."
    },
    29: {
      id: "B",
      title: "Quand le prix et le flux ne racontent pas encore la même histoire",
      modules: [18, 28, 29, 16],
      scenario: "Sur le future NQ de l’échéance active, la structure H1 reste haussière au-dessus du dernier HL à 19 580. À 19 640, le prix inscrit un sommet marginal, tandis que le Delta cumulé M1 baisse et que plusieurs ventes agressives apparaissent sans progression baissière proportionnelle. Le contrat, la session et le fournisseur de données sont identiques sur toutes les vues.",
      constraints: ["Aucun participant ne peut être identifié par son ordre.", "Le Delta court ne peut pas annuler seul la structure H1.", "Le Guide Orderflow doit être complété avant toute entrée."],
      decisions: ["Séparer les faits de prix des faits de flux.", "Formuler au moins deux hypothèses compatibles avec les données.", "Classer la relation prix–flux comme alignée, contradictoire ou insuffisante.", "Appliquer le protocole de conflit multi-échelle.", "Décider entrée, attente ou non-trade avec une confirmation et une invalidation observables."],
      correction: ["Le fait de prix est une structure H1 encore haussière ; le fait de flux est un Delta court négatif avec faible réponse baissière.", "Une absorption passive possible et un simple rééquilibrage sont deux hypothèses recevables ; aucune ne révèle une baleine.", "La lecture est contradictoire ou insuffisante, car le flux court et la structure lente ne valident pas encore le même scénario.", "Le protocole impose d’attendre soit une confirmation de continuation, soit la cassure du HL, sans choisir arbitrairement H1 ou M1.", "En l’absence de cette résolution, non-trade est la décision rigoureuse. Une entrée ultérieure exige encore le calcul du risque et les règles du setup."],
      mastery: "Réussite globale : la décision doit citer la structure, la portée du flux, le conflit et la branche exacte du Guide Orderflow. Un bon score aux quiz ne valide pas une attribution d’auteur ou une priorité improvisée."
    },
    30: {
      id: "C",
      title: "GER40, risque calculé et fenêtre BCE",
      modules: [30, 8, 17, 9],
      scenario: "Compte de 10 000 €, risque maximal de 0,50 %, GER40 CFD avec valeur vérifiée de 1 € par point pour 1 lot, volume minimal 0,10 et pas de 0,10. Le Stop logique se situe à 40 points. Une décision de la BCE est prévue dans 12 minutes et le plan interdit toute nouvelle position de 30 minutes avant à 15 minutes après l’annonce.",
      constraints: ["Les valeurs du contrat sont des données de scénario et doivent être revérifiées chez le broker.", "L’heure de la BCE et le fuseau ont été confirmés sur le calendrier officiel.", "La règle de non-trade a été écrite avant la session."],
      decisions: ["Identifier le produit exact et confirmer sa valeur du point.", "Calculer le risque monétaire maximal.", "Calculer puis adapter la taille au pas de volume.", "Comparer l’heure actuelle à la fenêtre macro interdite.", "Décider si l’ordre peut être placé malgré un calcul de position valide."],
      correction: ["Le symbole est un CFD GER40 précis, pas le DAX cash ni un future Eurex ; ses spécifications viennent donc de la fiche du broker.", "Le risque monétaire est 10 000 × 0,005 = 50 €.", "La taille théorique est 50 ÷ (40 × 1) = 1,25 lot ; avec un pas de 0,10, arrondir vers le bas à 1,20 lot limite le risque prévu à 48 €.", "Douze minutes avant la BCE se trouve dans la fenêtre interdite de trente minutes avant l’annonce.", "La décision finale est non-trade maintenant. Un calcul correct ne permet jamais de contourner une règle macro écrite à l’avance."],
      mastery: "Réussite globale : l’élève doit obtenir le calcul correct et respecter la fenêtre de non-trade. Valider le quiz du module 30 sans relier contrat, module 8 et calendrier macro ne démontre pas une compréhension autonome."
    }
  };
  Object.assign(window.integratedCases, window.__coreIntegratedCases || {});
  delete window.__coreIntegratedCases;
})();
