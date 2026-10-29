/**
 * TIM TOOLS MACHINES - Application Web Dynamique & Interactive
 * Distributeur Officiel UPSPIRIT
 * Contact: +225 07 89 55 74 42 | WhatsApp: +225 07 15 03 27 98
 */

// BASE DE DONNÉES DES 36 MACHINES & OUTILS AVEC LEURS VRAIES IMAGES
const PRODUCTS = [
    {
        "id": "m1",
        "name": "Mallette à outils 186 pièces en valise trolley alu",
        "name_en": "186-Piece Professional Tool Set with Rolling Trolley",
        "category": "outillage",
        "price": 40000,
        "brand": "UPSPIRIT",
        "image": "images/parc_mallette_186p.jpg",
        "icon": "fa-solid fa-toolbox",
        "role_badge": "Maintenance & Mécanique générale",
        "role_badge_en": "General Maintenance & Mechanics",
        "role": "Coffre d'outillage complet 186 pièces en acier Chrome-Vanadium avec valise trolley roulante en aluminium. Idéal pour la mécanique automobile, l'électricité et l'équipement d'atelier.",
        "role_en": "Complete 186-piece toolkit in Chrome-Vanadium steel with aluminum rolling trolley case. Ideal for automotive mechanics, electrical work and workshop maintenance.",
        "specs": [
            "186 pièces acier CR-V",
            "Valise trolley à roulettes",
            "Tiroirs coulissants renforcés",
            "Verrouillage de sécurité"
        ],
        "specs_en": [
            "186 pcs CR-V steel",
            "Rolling trolley case",
            "Reinforced slide drawers",
            "Security key lock"
        ]
    },
    {
        "id": "m2",
        "name": "Marteau piqueur HK-DH35B (Burin pointu)",
        "name_en": "Demolition Jackhammer HK-DH35B (Pointed Chisel)",
        "category": "perforation",
        "price": 26000,
        "brand": "UPSPIRIT",
        "image": "images/parc_piqueur_dh35b_pointu.jpg",
        "icon": "fa-solid fa-hammer",
        "role_badge": "Démolition lourde & Piquetage de murs",
        "role_badge_en": "Heavy Demolition & Wall Chiseling",
        "role": "Brise-béton haute énergie pour la démolition de cloisons, le décarrelage, le rainurage et le piquetage avant enduit.",
        "role_en": "High-impact breaker for wall demolition, tile removal, trenching and surface chiseling prior to plastering.",
        "specs": [
            "Modèle HK-DH35B",
            "Force d'impact maximale",
            "Burin pointu SDS",
            "Système anti-vibration"
        ],
        "specs_en": [
            "Model HK-DH35B",
            "Maximum impact force",
            "Pointed SDS chisel",
            "Anti-vibration grip"
        ]
    },
    {
        "id": "m3",
        "name": "Marteau piqueur brise-béton (Burin plat)",
        "name_en": "Concrete Breaker Jackhammer (Flat Chisel)",
        "category": "perforation",
        "price": 26000,
        "brand": "UPSPIRIT",
        "image": "images/parc_piqueur_dh35b_plat.jpg",
        "icon": "fa-solid fa-trowel-bricks",
        "role_badge": "Cassage de dalles & Fondations",
        "role_badge_en": "Slab Breaking & Footings Demolition",
        "role": "Éclatage et terrassement de chapes en béton, défonçage de seuils de portes et découpage d'enrobé.",
        "role_en": "Cracking and breaking concrete slabs, foundation breaking and asphalt cutting on job sites.",
        "specs": [
            "Énergie de frappe continue",
            "Burin plat large inclus",
            "Carter renforcé",
            "Usage intensif BTP"
        ],
        "specs_en": [
            "Continuous impact power",
            "Wide flat chisel included",
            "Reinforced alloy casing",
            "Heavy-duty construction"
        ]
    },
    {
        "id": "m4",
        "name": "Marteau piqueur / burineur bleu grand modèle",
        "name_en": "Heavy-Duty Blue Demolition Hammer",
        "category": "perforation",
        "price": 26000,
        "brand": "UPSPIRIT",
        "image": "images/parc_piqueur_bleu.jpg",
        "icon": "fa-solid fa-mountain",
        "role_badge": "Démolition horizontale de sols",
        "role_badge_en": "Horizontal & Floor Demolition",
        "role": "Démolition au sol et travaux de réhabilitation de bâtiments avec absorption des chocs.",
        "role_en": "Ground demolition and building rehabilitation tasks with advanced shock absorption.",
        "specs": [
            "Frappe pneumatique lourde",
            "Poignée auxiliaire 360°",
            "Moteur étanche aux poussières",
            "Câble blindé"
        ],
        "specs_en": [
            "Heavy pneumatic impact",
            "360° auxiliary handle",
            "Dust-sealed motor",
            "Reinforced power cord"
        ]
    },
    {
        "id": "m5",
        "name": "Marteau perforateur rotatif 26 mm",
        "name_en": "Rotary Hammer Drill 26mm",
        "category": "perforation",
        "price": 19000,
        "brand": "UPSPIRIT",
        "image": "images/parc_perforateur_26mm.jpg",
        "icon": "fa-solid fa-gears",
        "role_badge": "Perforation de béton armé",
        "role_badge_en": "Reinforced Concrete Drilling",
        "role": "Puissance d'impact électropneumatique renforcée pour forer rapidement les dalles pleines et bétons armés.",
        "role_en": "Enhanced electro-pneumatic impact power for rapid drilling into solid concrete and reinforced slabs.",
        "specs": [
            "Diamètre 26 mm max",
            "Mandrin SDS-Plus",
            "3 modes (perçage/percu/burin)",
            "Débrayage de sécurité"
        ],
        "specs_en": [
            "26mm max diameter",
            "SDS-Plus chuck",
            "3 operating modes",
            "Safety clutch"
        ]
    },
    {
        "id": "m6",
        "name": "Marteau perforateur rotatif 24 mm",
        "name_en": "Rotary Hammer Drill 24mm",
        "category": "perforation",
        "price": 18000,
        "brand": "UPSPIRIT",
        "image": "images/parc_perforateur_24mm.jpg",
        "icon": "fa-solid fa-screwdriver-wrench",
        "role_badge": "Passage de câbles & Tuyauteries",
        "role_badge_en": "Cable & Pipe Conduit Drilling",
        "role": "Forage standard des maçonneries pour électriciens, plombiers et poseurs d'installations sanitaires.",
        "role_en": "Standard masonry drilling for electricians, plumbers and sanitary pipe installers.",
        "specs": [
            "Diamètre 24 mm",
            "Variateur de vitesse",
            "Inverseur droite/gauche",
            "Butée de profondeur"
        ],
        "specs_en": [
            "24mm diameter",
            "Variable speed trigger",
            "Forward/Reverse switch",
            "Depth gauge rod"
        ]
    },
    {
        "id": "m7",
        "name": "Marteau perforateur rotatif 20 mm",
        "name_en": "Rotary Hammer Drill 20mm",
        "category": "perforation",
        "price": 12000,
        "brand": "UPSPIRIT",
        "image": "images/parc_perforateur_20mm.jpg",
        "icon": "fa-solid fa-bolt",
        "role_badge": "Forage rapide en hauteur & Cloisons",
        "role_badge_en": "Fast Overhead & Wall Drilling",
        "role": "Perçage rapide dans les briques, plâtres et bétons légers. Compact et ultra-maniable pour les travaux en hauteur.",
        "role_en": "Fast drilling in brick, plaster and light concrete. Compact and easy to handle for overhead drilling.",
        "specs": [
            "Diamètre 20 mm",
            "Poids plume ergonomique",
            "Poignée Softgrip",
            "Cadence accélérée"
        ],
        "specs_en": [
            "20mm diameter",
            "Lightweight ergonomic body",
            "Softgrip handle",
            "Fast impact rate"
        ]
    },
    {
        "id": "m8",
        "name": "Meuleuse d'angle 115 mm HK-G2-115",
        "name_en": "Angle Grinder 115mm HK-G2-115",
        "category": "meulage",
        "price": 7000,
        "brand": "UPSPIRIT",
        "image": "images/parc_meuleuse_115.jpg",
        "icon": "fa-solid fa-compact-disc",
        "role_badge": "Ébavurage & Meulage de précision",
        "role_badge_en": "Deburring & Precision Grinding",
        "role": "Découpe de profilés minces, ébavurage de soudures et ponçage dans les zones étroites.",
        "role_en": "Cutting thin metal profiles, weld deburring and grinding in restricted spaces.",
        "specs": [
            "Disque 115 mm (4.5\")",
            "Modèle HK-G2-115",
            "Carter de protection orientable",
            "Poignée latérale 2 positions"
        ],
        "specs_en": [
            "115mm (4.5\") disc",
            "Model HK-G2-115",
            "Adjustable safety guard",
            "2-position side handle"
        ]
    },
    {
        "id": "m9",
        "name": "Meuleuse d'angle 125 mm",
        "name_en": "Angle Grinder 125mm",
        "category": "meulage",
        "price": 8000,
        "brand": "UPSPIRIT",
        "image": "images/parc_meuleuse_125.jpg",
        "icon": "fa-solid fa-compact-disc",
        "role_badge": "Tronçonnage acier & Carrelage",
        "role_badge_en": "Steel & Tile Cutting",
        "role": "L'outil universel des ferronniers et carreleurs : disque 125 mm pour coupes franches et surfaçage.",
        "role_en": "The essential tool for metalworkers and tilers: 125mm disc for clean metal cuts and surface prep.",
        "specs": [
            "Disque 125 mm (5\")",
            "Corps compact affiné",
            "Blocage d'arbre rapide",
            "Protection thermique"
        ],
        "specs_en": [
            "125mm (5\") disc",
            "Slim ergonomic body",
            "Spindle lock button",
            "Thermal protection"
        ]
    },
    {
        "id": "m10",
        "name": "Meuleuse d'angle 180 mm",
        "name_en": "Heavy Angle Grinder 180mm",
        "category": "meulage",
        "price": 16000,
        "brand": "UPSPIRIT",
        "image": "images/parc_meuleuse_180.jpg",
        "icon": "fa-solid fa-gear",
        "role_badge": "Découpe lourde de fers & Poutrelles",
        "role_badge_en": "Heavy Rebar & Beam Cutting",
        "role": "Tronçonnage en profondeur des tuyaux d'acier, poutrelles IPN et fers de gros diamètre.",
        "role_en": "Deep cutting of steel pipes, structural beams and thick reinforcement rebar.",
        "specs": [
            "Disque 180 mm (7\")",
            "Moteur couple élevé",
            "Engrenages acier renforcé",
            "Poignée anti-vibration"
        ],
        "specs_en": [
            "180mm (7\") disc",
            "High-torque motor",
            "Hardened steel gears",
            "Anti-vibration handle"
        ]
    },
    {
        "id": "m11",
        "name": "Meuleuse d'angle grand format 230 mm HK-AG180",
        "name_en": "Industrial Angle Grinder 230mm HK-AG180",
        "category": "meulage",
        "price": 25000,
        "brand": "UPSPIRIT",
        "image": "images/parc_meuleuse_180.jpg",
        "icon": "fa-solid fa-burst",
        "role_badge": "Sciage de maçonnerie & Gros œuvre",
        "role_badge_en": "Masonry Sawing & Heavy Civil Work",
        "role": "Grand diamètre 230 mm pour la découpe de dalles béton, bordures de trottoir et charpentes métalliques.",
        "role_en": "Large 230mm disc for sawing concrete slabs, kerbs and heavy industrial steel structures.",
        "specs": [
            "Disque 230 mm (9\")",
            "Modèle HK-AG180",
            "Poignée rotative orientable",
            "Démarrage progressif"
        ],
        "specs_en": [
            "230mm (9\") disc",
            "Model HK-AG180",
            "Rotatable main handle",
            "Soft start system"
        ]
    },
    {
        "id": "m12",
        "name": "Rainureuse / Découpeuse à béton",
        "name_en": "Wall Chaser & Concrete Cutter",
        "category": "meulage",
        "price": 40000,
        "brand": "UPSPIRIT",
        "image": "images/parc_rainureuse_decoupeuse.jpg",
        "icon": "fa-solid fa-grip-lines-vertical",
        "role_badge": "Saignées murales électriques",
        "role_badge_en": "Electrical Wall Chasing & Grooving",
        "role": "Création de saignées nettes et précises pour l'encastrement de gaines électriques et tuyaux dans les murs.",
        "role_en": "Accurate clean wall chasing for embedding electrical conduits and water pipes into masonry walls.",
        "specs": [
            "Semelle de guidage stable",
            "Raccord aspiration poussière",
            "Profondeur réglable",
            "Double disque"
        ],
        "specs_en": [
            "Stable guide plate",
            "Dust extractor port",
            "Adjustable depth",
            "Dual blade action"
        ]
    },
    {
        "id": "m13",
        "name": "Souffleur électrique standard bleu",
        "name_en": "Standard Electric Blower (Blue)",
        "category": "soufflage",
        "price": 5000,
        "brand": "UPSPIRIT",
        "image": "images/parc_souffleur_bleu.jpg",
        "icon": "fa-solid fa-wind",
        "role_badge": "Nettoyage & Dépoussiérage atelier",
        "role_badge_en": "Workshop Dusting & Cleaning",
        "role": "Dépoussiérage rapide et sans contact des armoires électriques, ordinateurs, blocs de climatisation et établis.",
        "role_en": "Fast contactless dust blowing for electrical cabinets, computers, air conditioners and workbenches.",
        "specs": [
            "Filaire haute vitesse",
            "Buse souple fournie",
            "Poignée ergonomique",
            "Fonction soufflage/aspiration"
        ],
        "specs_en": [
            "High-speed corded motor",
            "Flexible nozzle included",
            "Ergonomic grip",
            "Blowing/suction mode"
        ]
    },
    {
        "id": "m14",
        "name": "Souffleur électrique jaune haute vitesse",
        "name_en": "High-Speed Electric Blower (Yellow)",
        "category": "soufflage",
        "price": 6000,
        "brand": "UPSPIRIT",
        "image": "images/parc_souffleur_jaune.jpg",
        "icon": "fa-solid fa-fan",
        "role_badge": "Évacuation sciures & Copeaux de bois",
        "role_badge_en": "Sawdust & Wood Shaving Removal",
        "role": "Expulsion rapide des copeaux de bois, sciures de menuiserie et poussières tenaces de chantier.",
        "role_en": "Fast sawdust expulsion, carpentry debris clearance and workshop floor sweeping.",
        "specs": [
            "Turbine équilibrée",
            "Débit d'air renforcé",
            "Double isolation",
            "Boîtier résistant"
        ],
        "specs_en": [
            "Balanced impeller",
            "Enhanced air volume",
            "Double insulated",
            "Rugged housing"
        ]
    },
    {
        "id": "m15",
        "name": "Poste à souder inverter MMA MINI 250",
        "name_en": "MMA MINI 250 Inverter Welder",
        "category": "soudure",
        "price": 15000,
        "brand": "UPSPIRIT",
        "image": "images/parc_poste_souder_mma.jpg",
        "icon": "fa-solid fa-fire",
        "role_badge": "Soudure à l'arc portative sur chantier",
        "role_badge_en": "Portable Arc Welding on Sites",
        "role": "Assemblage de grilles, portails et ferrures avec électrodes de 2.0 à 3.2 mm. Ultra-compact et léger.",
        "role_en": "Welding gates, steel grilles and fittings with 2.0 to 3.2mm rods. Ultra-light and portable.",
        "specs": [
            "Courant 250A",
            "Technologie IGBT Inverter",
            "Câbles & pince inclus",
            "Affichage digital LCD"
        ],
        "specs_en": [
            "250A output",
            "IGBT Inverter tech",
            "Cables & clamps included",
            "Digital LCD display"
        ]
    },
    {
        "id": "m16",
        "name": "Poste à souder inverter MMA MINI 300",
        "name_en": "MMA MINI 300 Inverter Welder",
        "category": "soudure",
        "price": 17000,
        "brand": "UPSPIRIT",
        "image": "images/parc_poste_souder_mma.jpg",
        "icon": "fa-solid fa-bolt-lightning",
        "role_badge": "Soudure industrielle intensive 300A",
        "role_badge_en": "Heavy Industrial Welding 300A",
        "role": "Haute intensité 300A pour ferronnerie lourde, chaudronnerie et soudure continue sans surchauffe.",
        "role_en": "High 300A output for heavy steel frames, continuous welding and thick metal plates.",
        "specs": [
            "Puissance 300A",
            "Refroidissement turbo",
            "Électrodes jusqu'à 4.0 mm",
            "Protection surtension"
        ],
        "specs_en": [
            "300A power",
            "Turbo fan cooling",
            "Electrodes up to 4.0mm",
            "Overvoltage protection"
        ]
    },
    {
        "id": "m17",
        "name": "Balance électronique à colonne 300 kg HK-DS150K",
        "name_en": "Platform Scale 300kg HK-DS150K",
        "category": "pesage",
        "price": 16000,
        "brand": "UPSPIRIT",
        "image": "images/parc_balance_300kg_haut.jpg",
        "icon": "fa-solid fa-scale-balanced",
        "role_badge": "Pesage de charges lourdes jusqu'à 300 kg",
        "role_badge_en": "Heavy-Duty Weighing up to 300kg",
        "role": "Pesée de sacs de ciment, fûts, produits agricoles et colis volumineux avec grand plateau inox et colonne.",
        "role_en": "Weighing cement bags, agricultural sacks, barrels and large parcels with stainless steel platform.",
        "specs": [
            "Capacité 300 kg",
            "Plateau inox renforcé",
            "Écran digital rétroéclairé",
            "Batterie rechargeable"
        ],
        "specs_en": [
            "300kg capacity",
            "Stainless platform",
            "Backlit digital display",
            "Rechargeable battery"
        ]
    },
    {
        "id": "m18",
        "name": "Balance électronique de comptoir HK-836",
        "name_en": "Countertop Price Computing Scale HK-836",
        "category": "pesage",
        "price": 10000,
        "brand": "UPSPIRIT",
        "image": "images/parc_balance_300kg_bas.jpg",
        "icon": "fa-solid fa-calculator",
        "role_badge": "Pesée de comptoir & Calcul de prix",
        "role_badge_en": "Retail Price Computing & Weighing",
        "role": "Pesée commerciale avec calcul automatique du prix au kilo, double écran client/vendeur et plateau lavable.",
        "role_en": "Retail weighing with automatic price-per-kg calculation, dual screens and washable tray.",
        "specs": [
            "Double écran LCD",
            "Calcul auto du montant",
            "Clavier étanche",
            "Batterie intégrée"
        ],
        "specs_en": [
            "Dual LCD displays",
            "Auto price calculation",
            "Waterproof keypad",
            "Built-in battery"
        ]
    },
    {
        "id": "m19",
        "name": "Enrouleur de câble électrique 25m OKEM-CR25 (Bleu)",
        "name_en": "Cable Extension Reel 25m OKEM-CR25 (Blue)",
        "category": "cables",
        "price": 12000,
        "brand": "UPSPIRIT",
        "image": "images/parc_enrouleur_25m_bleu.jpg",
        "icon": "fa-solid fa-plug",
        "role_badge": "Alimentation mobile sécurisée 25m",
        "role_badge_en": "Safe 25m Power Extension",
        "role": "Alimentation simultanée de plusieurs outils électriques sur un rayon de 25 mètres avec sécurité thermique.",
        "role_en": "Simultaneous power distribution for multiple tools across 25 meters with thermal protection.",
        "specs": [
            "25 mètres de câble",
            "4 prises protégées",
            "Châssis tubulaire métal",
            "Disjoncteur thermique"
        ],
        "specs_en": [
            "25 meters cable",
            "4 protected sockets",
            "Tubular metal stand",
            "Thermal circuit breaker"
        ]
    },
    {
        "id": "m20",
        "name": "Enrouleur de câble électrique 50m HK-CR50 (Jaune)",
        "name_en": "Cable Extension Reel 50m HK-CR50 (Yellow)",
        "category": "cables",
        "price": 20000,
        "brand": "UPSPIRIT",
        "image": "images/parc_enrouleur_50m_jaune.jpg",
        "icon": "fa-solid fa-circle-notch",
        "role_badge": "Distribution électrique longue portée 50m",
        "role_badge_en": "Long-Range 50m Power Distribution",
        "role": "Grande portée de 50 mètres pour chantiers en extérieur, ateliers de montage et alimentation mobile.",
        "role_en": "Long 50-meter extension range for outdoor construction sites, machinery and workshops.",
        "specs": [
            "50 mètres de câble",
            "Manivelle d'enroulement rapide",
            "Poignée de transport",
            "Norme CE / EU"
        ],
        "specs_en": [
            "50 meters cable",
            "Fast winding crank",
            "Ergonomic carry handle",
            "CE / EU safety standard"
        ]
    },
    {
        "id": "m21",
        "name": "Perceuse électrique filaire 13 mm HK-ED1305",
        "name_en": "Corded Electric Drill 13mm HK-ED1305",
        "category": "percage",
        "price": 6000,
        "brand": "UPSPIRIT",
        "image": "images/parc_perceuse_bleue.jpg",
        "icon": "fa-solid fa-screwdriver",
        "role_badge": "Perçage précis bois, acier & plastique",
        "role_badge_en": "Wood, Steel & Plastic Drilling",
        "role": "Perçage polyvalent avec mandrin à clé 13 mm, variateur de vitesse et inverseur de sens de rotation.",
        "role_en": "Versatile drilling with 13mm keyed chuck, variable speed trigger and forward/reverse switch.",
        "specs": [
            "Mandrin 13 mm",
            "Modèle HK-ED1305",
            "Variateur de vitesse",
            "Butée réglable"
        ],
        "specs_en": [
            "13mm chuck",
            "Model HK-ED1305",
            "Variable speed",
            "Adjustable stop"
        ]
    },
    {
        "id": "m22",
        "name": "Perceuse visseuse compacte sans fil 20V",
        "name_en": "Compact Cordless Drill Driver 20V",
        "category": "percage",
        "price": 12000,
        "brand": "UPSPIRIT",
        "image": "images/parc_mini_perceuse.jpg",
        "icon": "fa-solid fa-bolt",
        "role_badge": "Vissage rapide & Montage de meubles",
        "role_badge_en": "Fast Screwdriving & Furniture Assembly",
        "role": "Maniable et légère, idéale pour les travaux de montage, vissage dans le bois et assemblages en série.",
        "role_en": "Lightweight and versatile cordless driver for carpentry, assembling partitions and serial screws.",
        "specs": [
            "Moteur 20V",
            "Mandrin auto-serrant",
            "2 vitesses mécaniques",
            "Lampe de travail intégrée"
        ],
        "specs_en": [
            "20V motor",
            "Keyless chuck",
            "2 mechanical speeds",
            "Integrated worklight"
        ]
    },
    {
        "id": "m23",
        "name": "Pack Batterie Lithium & Station de charge rapide",
        "name_en": "Lithium Battery Pack & Fast Charger Dock",
        "category": "percage",
        "price": 10000,
        "brand": "UPSPIRIT",
        "image": "images/parc_batterie_chargeur.jpg",
        "icon": "fa-solid fa-battery-three-quarters",
        "role_badge": "Alimentation continue des outils sans fil",
        "role_badge_en": "Continuous Power for Cordless Tools",
        "role": "Pack d'alimentation composé d'une batterie Lithium-Ion haute densité et de son dock chargeur rapide intelligent.",
        "role_en": "Power pack including high-density Lithium-Ion battery and intelligent rapid charging dock.",
        "specs": [
            "Technologie Li-Ion",
            "Recharge rapide en 45 min",
            "Témoin de charge LED",
            "Protection surcharge"
        ],
        "specs_en": [
            "Li-Ion technology",
            "45-min fast charging",
            "LED fuel gauge",
            "Overload protection"
        ]
    }
];


// DICTIONNAIRE MULTILINGUE (FRANÇAIS & ANGLAIS)
const TRANSLATIONS = {
    "fr": {
        "top_official": "Distributeur Officiel",
        "showroom_badge": "100% Real Physical Stock",
        "showroom_desc": "All tools and machines displayed below are physically present in our showroom in Abidjan Angré Les Oscars. Brand new, tested and ready for immediate pickup or dispatch.",
        "showroom_title": "Real Equipment Photographed on Site in Angré",
        "showroom_tag": "REAL INVENTORY ON DISPLAY",
        "cat_percage": "Drilling & Fastening",
        "cat_soufflage": "Blowing & Dust Cleaning",
        "cat_meulage": "Grinding & Cutting",
        "cat_perforation": "Demolition & Hammer Drills",
        "top_location": "Abidjan, Angré Les Oscars (en diagonale du Centre Médical Hoffmann)",
        "nav_home": "Accueil",
        "nav_about": "À Propos",
        "nav_machines": "Machines & Tools (23)",
        "nav_reviews": "Avis",
        "nav_faq": "FAQ",
        "nav_contact": "Contact",
        "nav_whatsapp_btn": "WhatsApp : +225 07 15 03 27 98",
        "nav_call_btn": "Appel : +225 07 89 55 74 42",
        "hero_badge": "Leader Outillage & Équipements Professionnels",
        "hero_welcome": "Bienvenue à",
        "hero_subtitle": "Votre partenaire de référence pour la vente d'outillage robuste et de machines haute performance de la marque <strong>UPSPIRIT</strong> à travers le monde. Matériel 100% fiable au meilleur prix.",
        "hero_cta_whatsapp": "Commander sur WhatsApp",
        "hero_cta_catalog": "View our 23 Machines",
        "hero_stat_machines": "Machines on Site",
        "hero_stat_brand": "Marque Upspirit Certifiée",
        "hero_stat_clients": "Artisans & Pros Équipés",
        "hero_stat_support": "Assistance WhatsApp",
        "about_tag": "QUI SOMMES-NOUS ?",
        "about_title": "À Propos de",
        "about_lead": "<strong>Tim Tools Machines</strong> est une entreprise basée à <strong>Abidjan, Côte d'Ivoire</strong> (Angré Les Oscars, en diagonale du Centre Médical Hoffmann). Nous sommes spécialisés dans la vente et la distribution d'outillage électroportatif, de postes à souder, d'appareils de mesure et de machines professionnelles de la marque <strong>UPSPIRIT</strong>.",
        "about_sub": "Tous nos équipements sont neufs, testés et proposés au meilleur tarif direct en Francs CFA (XOF) avec confirmation immédiate sur WhatsApp, retrait sur place à Angré ou expédition rapide.",
        "about_f1_title": "Qualité Industrielle",
        "about_f1_desc": "Machines robustes conçues pour résister aux cadences intenses.",
        "about_f2_title": "Meilleurs Prix en XOF",
        "about_f2_desc": "Rapport qualité/prix imbattable direct importateur.",
        "about_f3_title": "Commande en 1 Clic",
        "about_f3_desc": "Confirmation immédiate et suivi par WhatsApp.",
        "catalog_tag": "CATALOGUE OFFICIEL",
        "catalog_title": "Nos Outils &",
        "catalog_title_highlight": "Machines Disponibles",
        "catalog_subtitle": "Explorez l'ensemble de notre gamme professionnelle avec leurs caractéristiques, rôles détaillés et tarifs en FCFA (XOF).",
        "search_placeholder": "Rechercher une machine, meuleuse, perforateur, référence...",
        "sort_label": "Trier par :",
        "sort_default": "Recommandés",
        "sort_price_asc": "Prix croissant",
        "sort_price_desc": "Prix décroissant",
        "sort_name": "Nom (A-Z)",
        "cat_all": "All Equipment",
        "cat_perforateur": "Perforateurs & Piqueurs",
        "cat_meuleuse": "Meuleuses & Découpe",
        "cat_souffleur": "Souffleurs & Chaleur",
        "cat_soudure": "Industrial Welding",
        "cat_pesage": "Scales & Weighing",
        "cat_cables": "Cables & Extension Reels",
        "cat_outillage": "Toolboxes & Hand Tools",
        "cat_echelles": "Échelles & Accès",
        "budget_label": "Budget :",
        "budget_all": "Tous les prix",
        "budget_under10k": "< 10 000 XOF",
        "budget_10k25k": "10 000 - 25 000 XOF",
        "budget_above25k": "> 25 000 XOF",
        "results_count_single": "Showing <strong>1</strong> machine & tool",
        "results_count_multi": "Showing <strong>{count}</strong> real machines in stock",
        "delivery_hint": "Prêts pour expédition immédiate",
        "empty_title": "Aucun produit correspondant trouvé",
        "empty_desc": "Essayez avec d'autres mots clés ou réinitialisez les filtres.",
        "empty_reset": "Réinitialiser les filtres",
        "card_stock": "En Stock - Expédition 24h",
        "card_price_label": "Prix Tarif",
        "card_order_btn": "Commander",
        "card_quote": "Sur devis",
        "contact_tag": "CONTACTEZ-NOUS",
        "contact_title": "Besoin d'une Machine ou d'un",
        "contact_title_highlight": "Conseil Technique ?",
        "contact_desc": "L'équipe de <strong>Tim Tools Machines</strong> est à votre écoute pour vos commandes de matériel, demandes de devis sur mesure ou conseils d'utilisation.",
        "contact_loc_label": "Localisation Magasin & Showroom",
        "contact_loc_text": "<strong>Côte d'Ivoire, Abidjan — Angré Les Oscars</strong><br><span class=\"landmark-text\"><i class=\"fa-solid fa-compass text-yellow\"></i> En diagonale du Centre Médical Hoffmann</span>",
        "contact_loc_map": "Voir l'itinéraire Google Maps",
        "contact_phone_label": "Service Téléphonique Direct",
        "contact_wa_label": "Service Client WhatsApp (24h/7j)",
        "contact_shipping_label": "Livraison & Expéditions",
        "contact_shipping_text": "Retrait en magasin ou expédition rapide partout en Côte d'Ivoire & international",
        "contact_box_badge": "Équipe Disponible sur WhatsApp",
        "contact_box_title": "Commandez Directement en Ligne",
        "contact_box_desc": "Cliquez ci-dessous pour discuter immédiatement avec notre équipe commerciale sur WhatsApp :",
        "contact_box_wa_btn": "Discuter sur WhatsApp (+225 07 15 03 27 98)",
        "contact_box_or": "OU APPELEZ DIRECTEMENT",
        "contact_box_call_btn": "Appeler le +225 07 89 55 74 42",
        "footer_about": "Tim Tools Machines est votre référence mondiale pour l'outillage et les machines de marque <strong>UPSPIRIT</strong>. Fiabilité, robustesse et performance au meilleur prix.",
        "footer_badge_new": "Matériel 100% Neuf",
        "footer_badge_pro": "Norme Pro",
        "footer_nav_heading": "Navigation",
        "footer_cat_heading": "Top Catégories",
        "footer_contact_heading": "Coordonnées",
        "footer_copyright": "© 2026 <strong>Tim Tools Machines</strong>. Tous droits réservés. Vente d'outils et machines Upspirit.",
        "footer_credit": "Conçu avec <i class=\"fa-solid fa-bolt text-yellow\"></i> pour les professionnels de l'industrie.",
        "drawer_title": "Votre Panier / Devis",
        "drawer_total_label": "Total Estimé :",
        "drawer_validate_btn": "Valider la commande sur WhatsApp",
        "drawer_clear_btn": "Vider le panier",
        "drawer_empty": "Votre panier est vide",
        "drawer_empty_desc": "Découvrez notre catalogue et ajoutez les machines de votre choix.",
        "toast_added": "\"{name}\" a été ajouté à votre panier",
        "toast_removed": "Produit retiré du panier",
        "toast_cleared": "Panier vidé",
        "toast_empty": "Votre panier est vide !",
        "modal_specs_title": "Fiche Technique & Points Forts",
        "modal_role_title": "Rôle & Description Détaillée",
        "modal_order_btn": "Commander sur WhatsApp",
        "modal_add_btn": "Ajouter au Panier"
    },
    "en": {
        "top_official": "Official Distributor",
        "top_location": "Abidjan, Angré Les Oscars (diagonally across from Hoffmann Medical Center)",
        "nav_home": "Home",
        "nav_about": "About",
        "nav_machines": "Machines & Tools (36)",
        "nav_reviews": "Reviews",
        "nav_faq": "FAQ",
        "nav_contact": "Contact",
        "nav_whatsapp_btn": "WhatsApp: +225 07 15 03 27 98",
        "nav_call_btn": "Call: +225 07 89 55 74 42",
        "hero_badge": "Leading Professional Tools & Equipment",
        "hero_welcome": "Welcome to",
        "hero_subtitle": "Your premier partner for durable tools and high-performance machinery from <strong>UPSPIRIT</strong> worldwide. 100% reliable equipment at the best prices.",
        "hero_cta_whatsapp": "Order on WhatsApp",
        "hero_cta_catalog": "View our 36 Machines",
        "hero_stat_machines": "Machines & Tools",
        "hero_stat_brand": "Certified Upspirit Brand",
        "hero_stat_clients": "Pros & Craftsmen Equipped",
        "hero_stat_support": "24/7 WhatsApp Support",
        "about_tag": "WHO WE ARE",
        "about_title": "About",
        "about_lead": "<strong>Tim Tools Machines</strong> is based in <strong>Abidjan, Ivory Coast</strong> (Angré Les Oscars, diagonally opposite Hoffmann Medical Center). We specialize in the sale and worldwide distribution of power tools, welders, scales and professional machines by <strong>UPSPIRIT</strong>.",
        "about_sub": "All our equipment is brand new, factory tested and offered at direct importer prices in CFA Francs (XOF) with instant WhatsApp confirmation, store pickup in Angré or fast shipping.",
        "about_f1_title": "Industrial Quality",
        "about_f1_desc": "Rugged machines built to endure heavy workloads.",
        "about_f2_title": "Best XOF Prices",
        "about_f2_desc": "Unbeatable direct-from-importer value.",
        "about_f3_title": "1-Click Ordering",
        "about_f3_desc": "Immediate WhatsApp order confirmation & tracking.",
        "catalog_tag": "OFFICIAL CATALOG",
        "catalog_title": "Our Available",
        "catalog_title_highlight": "Tools & Machines",
        "catalog_subtitle": "Explore our complete professional range with detailed specifications, roles and prices in CFA Francs (XOF).",
        "search_placeholder": "Search for a machine, grinder, hammer drill, reference...",
        "sort_label": "Sort by:",
        "sort_default": "Recommended",
        "sort_price_asc": "Price: Low to High",
        "sort_price_desc": "Price: High to Low",
        "sort_name": "Name (A-Z)",
        "cat_all": "All Items",
        "cat_perforateur": "Hammer Drills & Breakers",
        "cat_meuleuse": "Grinders & Cutters",
        "cat_souffleur": "Blowers & Heat Guns",
        "cat_soudure": "Welding & Bench",
        "cat_pesage": "Scales & Measurement",
        "cat_cables": "Cables & Extension Reels",
        "cat_outillage": "Pro Tools & Hardware",
        "cat_echelles": "Ladders & Access",
        "budget_label": "Budget:",
        "budget_all": "All Prices",
        "budget_under10k": "< 10 000 XOF",
        "budget_10k25k": "10 000 - 25 000 XOF",
        "budget_above25k": "> 25 000 XOF",
        "results_count_single": "Showing <strong>1</strong> machine and tool",
        "results_count_multi": "Showing <strong>{count}</strong> machines and tools",
        "delivery_hint": "Ready for immediate dispatch",
        "empty_title": "No matching products found",
        "empty_desc": "Try searching with different keywords or reset your filters.",
        "empty_reset": "Reset Filters",
        "card_stock": "In Stock - 24h Shipping",
        "card_price_label": "List Price",
        "card_order_btn": "Order",
        "card_quote": "On Quote",
        "contact_tag": "CONTACT US",
        "contact_title": "Need a Machine or",
        "contact_title_highlight": "Technical Advice?",
        "contact_desc": "The <strong>Tim Tools Machines</strong> team is at your service for machine orders, custom quote requests or technical guidance.",
        "contact_loc_label": "Store & Showroom Location",
        "contact_loc_text": "<strong>Ivory Coast, Abidjan — Angré Les Oscars</strong><br><span class=\"landmark-text\"><i class=\"fa-solid fa-compass text-yellow\"></i> Diagonally opposite Hoffmann Medical Center</span>",
        "contact_loc_map": "Open in Google Maps",
        "contact_phone_label": "Direct Phone Support",
        "contact_wa_label": "WhatsApp Support (24/7)",
        "contact_shipping_label": "Shipping & Pickup",
        "contact_shipping_text": "In-store pickup or fast dispatch throughout Ivory Coast & internationally",
        "contact_box_badge": "Team Available on WhatsApp",
        "contact_box_title": "Order Directly Online",
        "contact_box_desc": "Click below to chat immediately with our sales team on WhatsApp:",
        "contact_box_wa_btn": "Chat on WhatsApp (+225 07 15 03 27 98)",
        "contact_box_or": "OR CALL DIRECTLY",
        "contact_box_call_btn": "Call +225 07 89 55 74 42",
        "footer_about": "Tim Tools Machines is your global reference for <strong>UPSPIRIT</strong> tools and machinery. Reliability, strength and performance at the best price.",
        "footer_badge_new": "100% Brand New",
        "footer_badge_pro": "Pro Grade",
        "footer_nav_heading": "Navigation",
        "footer_cat_heading": "Top Categories",
        "footer_contact_heading": "Contact Info",
        "footer_copyright": "© 2026 <strong>Tim Tools Machines</strong>. All rights reserved. Upspirit tools and machinery sales.",
        "footer_credit": "Engineered with <i class=\"fa-solid fa-bolt text-yellow\"></i> for industry professionals.",
        "drawer_title": "Your Cart / Quote",
        "drawer_total_label": "Estimated Total:",
        "drawer_validate_btn": "Confirm Order via WhatsApp",
        "drawer_clear_btn": "Clear Cart",
        "drawer_empty": "Your cart is empty",
        "drawer_empty_desc": "Explore our catalog and add the machines of your choice.",
        "toast_added": "\"{name}\" has been added to your cart",
        "toast_removed": "Product removed from cart",
        "toast_cleared": "Cart cleared",
        "toast_empty": "Your cart is empty!",
        "modal_specs_title": "Technical Specifications & Highlights",
        "modal_role_title": "Role & Detailed Description",
        "modal_order_btn": "Order on WhatsApp",
        "modal_add_btn": "Add to Cart"
    }
};

// STATE MANAGEMENT
let currentLang = localStorage.getItem("timtools_lang") || "fr";
let currentModalProductId = null;

let currentCategory = "all";
let currentBudget = "all";
let currentSearch = "";
let currentSort = "default";
let cart = [];

// DOM ELEMENTS
const productsGrid = document.getElementById("productsGrid");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearch");
const sortSelect = document.getElementById("sortSelect");
const categoryTabs = document.getElementById("categoryTabs");
const budgetPills = document.getElementById("budgetPills");
const productModal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalBackdrop = document.getElementById("modalBackdrop");
const cartDrawer = document.getElementById("cartDrawer");
const drawerItems = document.getElementById("drawerItems");
const drawerTotalAmount = document.getElementById("drawerTotalAmount");
const openCartBtn = document.getElementById("openCartBtn");
const drawerCloseBtn = document.getElementById("drawerCloseBtn");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const clearCartBtn = document.getElementById("clearCartBtn");
const sendWhatsAppOrderBtn = document.getElementById("sendWhatsAppOrderBtn");
const cartCountBadge = document.getElementById("cartCount");
const toastContainer = document.getElementById("toastContainer");
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");
const header = document.getElementById("header");
const scrollProgressBar = document.getElementById("scrollProgressBar");
const backToTopBtn = document.getElementById("backToTop");

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromStorage();
    applyLanguage(currentLang);
    renderProducts();
    setupEventListeners();
    updateCartCount();
    initSparks();
    initScrollDynamics();
    initCounters();
    initFaq();
});

// SETUP LISTENERS
function setupEventListeners() {
    
    // Language switcher buttons
    document.addEventListener("click", (e) => {
        const langBtn = e.target.closest(".lang-btn");
        if (langBtn && langBtn.dataset.lang) {
            applyLanguage(langBtn.dataset.lang);
        }
    });

    // Search input
    searchInput.addEventListener("input", (e) => {
        currentSearch = e.target.value.trim().toLowerCase();
        clearSearchBtn.style.display = currentSearch ? "block" : "none";
        renderProducts();
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        currentSearch = "";
        clearSearchBtn.style.display = "none";
        renderProducts();
        searchInput.focus();
    });

    // Sort select
    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    // Category tabs
    categoryTabs.addEventListener("click", (e) => {
        const btn = e.target.closest(".cat-pill");
        if (!btn) return;

        categoryTabs.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
        renderProducts();
    });

    // Budget Filter pills
    if (budgetPills) {
        budgetPills.addEventListener("click", (e) => {
            const btn = e.target.closest(".b-pill");
            if (!btn) return;

            budgetPills.querySelectorAll(".b-pill").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentBudget = btn.dataset.budget;
            renderProducts();
        });
    }

    // Reset filters
    const resetFiltersBtn = document.getElementById("resetFiltersBtn");
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener("click", () => {
            searchInput.value = "";
            currentSearch = "";
            clearSearchBtn.style.display = "none";
            currentCategory = "all";
            currentBudget = "all";
            currentSort = "default";
            sortSelect.value = "default";
            categoryTabs.querySelectorAll(".cat-pill").forEach(p => {
                p.classList.toggle("active", p.dataset.category === "all");
            });
            if (budgetPills) {
                budgetPills.querySelectorAll(".b-pill").forEach(b => {
                    b.classList.toggle("active", b.dataset.budget === "all");
                });
            }
            renderProducts();
        });
    }

    // Modal close
    modalCloseBtn.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", closeModal);

    // Cart drawer
    openCartBtn.addEventListener("click", openCart);
    drawerCloseBtn.addEventListener("click", closeCart);
    drawerBackdrop.addEventListener("click", closeCart);
    clearCartBtn.addEventListener("click", clearCart);
    sendWhatsAppOrderBtn.addEventListener("click", sendWhatsAppCartOrder);

    // Mobile menu toggle
    mobileToggle.addEventListener("click", () => {
        mobileToggle.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close mobile menu on link click
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileToggle.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // ESC key closes modals
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
            closeCart();
        }
    });

    // Back to top click
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}


// RENDER PRODUCTS WITH REAL IMAGES & DYNAMIC BADGES (BILINGUAL)
function renderProducts() {
    let filtered = PRODUCTS.filter(p => {
        const matchesCategory = currentCategory === "all" || p.category === currentCategory;
        
        const titleFr = (p.name || "").toLowerCase();
        const titleEn = (p.name_en || "").toLowerCase();
        const roleFr = (p.role || "").toLowerCase();
        const roleEn = (p.role_en || "").toLowerCase();
        const brand = (p.brand || "").toLowerCase();

        const matchesSearch = !currentSearch ||
            titleFr.includes(currentSearch) ||
            titleEn.includes(currentSearch) ||
            roleFr.includes(currentSearch) ||
            roleEn.includes(currentSearch) ||
            brand.includes(currentSearch);

        let matchesBudget = true;
        if (currentBudget === "under10k") {
            matchesBudget = p.price !== null && p.price < 10000;
        } else if (currentBudget === "10k25k") {
            matchesBudget = p.price !== null && p.price >= 10000 && p.price <= 25000;
        } else if (currentBudget === "above25k") {
            matchesBudget = p.price !== null && p.price > 25000;
        }

        return matchesCategory && matchesSearch && matchesBudget;
    });

    // Sort
    if (currentSort === "price-asc") {
        filtered.sort((a, b) => (a.price || 9999999) - (b.price || 9999999));
    } else if (currentSort === "price-desc") {
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (currentSort === "name") {
        filtered.sort((a, b) => {
            const nameA = getProductTitle(a);
            const nameB = getProductTitle(b);
            return nameA.localeCompare(nameB);
        });
    }

    // Update Counter
    if (resultsCount) {
        resultsCount.innerHTML = filtered.length === 1 
            ? t("results_count_single") 
            : t("results_count_multi").replace("{count}", filtered.length);
    }

    if (filtered.length === 0) {
        productsGrid.innerHTML = "";
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    productsGrid.innerHTML = filtered.map(product => {
        const title = getProductTitle(product);
        const role = getProductRole(product);
        const specs = getProductSpecs(product);
        const formattedPrice = product.price !== null
            ? `<span class="price-value">${formatXOF(product.price)} XOF</span>`
            : `<span class="price-devis"><i class="fa-solid fa-clipboard-question"></i> ${t("card_quote")}</span>`;

        const priceText = product.price !== null ? formatXOF(product.price) + ' XOF' : t("card_quote");
        const waMsgText = currentLang === 'en'
            ? `Hello Tim Tools Machines,\nI would like to order:\n- Product: ${title}\n- Price: ${priceText}\nPlease contact me regarding delivery.`
            : `Bonjour Tim Tools Machines,\nJe souhaite commander :\n- Produit : ${title}\n- Prix : ${priceText}\nMerci de me contacter pour la livraison.`;

        const waMessage = encodeURIComponent(waMsgText);

        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-media" onclick="openProductModal('${product.id}')" style="cursor: pointer;">
                    <div class="brand-chip"><i class="fa-solid fa-shield-halved text-yellow"></i> ${product.brand}</div>
                    <div class="category-tag">${getCategoryName(product.category)}</div>
                    <div class="product-img-wrapper">
                        <img src="${product.image}" alt="${title}" class="product-real-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                        <div class="product-icon-display" style="display: none;">
                            <i class="${product.icon}"></i>
                        </div>
                        <div class="img-glow-overlay"></div>
                    </div>
                </div>

                <div class="product-content">
                    <div class="product-meta-row">
                        <div class="stock-badge">
                            <span class="stock-dot"></span> ${t("card_stock")}
                        </div>
                        <div class="product-role-tag">
                            <i class="fa-solid fa-shield-halved text-yellow"></i> ${currentLang === 'en' ? (product.role_badge_en || product.role_badge) : product.role_badge}
                        </div>
                    </div>

                    <h3 class="product-title" onclick="openProductModal('${product.id}')" style="cursor: pointer;">${title}</h3>
                    <p class="product-role">${role}</p>

                    <div class="product-specs-pills">
                        ${specs.map(spec => `<span class="spec-pill"><i class="fa-solid fa-circle-check text-yellow"></i> ${spec}</span>`).join('')}
                    </div>

                    <div class="product-footer">
                        <div class="price-box">
                            <span class="price-label">${t("card_price_label")}</span>
                            ${formattedPrice}
                        </div>
                        <div class="card-actions">
                            <button class="btn-card-cart" onclick="addToCart('${product.id}', this)" title="${t('modal_add_btn')}">
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                            <a href="https://wa.me/2250715032798?text=${waMessage}" target="_blank" class="btn-card-whatsapp" title="${t('card_order_btn')}">
                                <i class="fa-brands fa-whatsapp"></i> ${t("card_order_btn")}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    init3DTilt();
}


// FORMAT XOF
function formatXOF(num) {
    return num.toLocaleString('fr-FR');
}

// GET CATEGORY LABEL

// I18N HELPERS
function t(key, fallback = "") {
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
        return TRANSLATIONS[currentLang][key];
    }
    if (TRANSLATIONS["fr"] && TRANSLATIONS["fr"][key]) {
        return TRANSLATIONS["fr"][key];
    }
    return fallback;
}

function getProductTitle(product) {
    return (currentLang === "en" && product.name_en) ? product.name_en : product.name;
}

function getProductRole(product) {
    return (currentLang === "en" && product.role_en) ? product.role_en : product.role;
}

function getProductSpecs(product) {
    return (currentLang === "en" && product.specs_en) ? product.specs_en : product.specs;
}

function getCategoryName(cat) {
    const key = "cat_" + cat;
    return t(key, "Machine");
}

window.applyLanguage = function(lang) {
    if (lang !== "fr" && lang !== "en") lang = "fr";
    currentLang = lang;
    try {
        localStorage.setItem("timtools_lang", lang);
    } catch (e) {}

    document.documentElement.lang = lang;

    // Update switcher buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Update all data-i18n elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        const translation = t(key);
        if (translation) {
            el.innerHTML = translation;
        }
    });

    // Update placeholder
    if (searchInput) {
        searchInput.placeholder = t("search_placeholder");
    }

    // Update sort select
    if (sortSelect) {
        const selected = sortSelect.value;
        sortSelect.innerHTML = `
            <option value="default">${t("sort_default")}</option>
            <option value="price-asc">${t("sort_price_asc")}</option>
            <option value="price-desc">${t("sort_price_desc")}</option>
            <option value="name">${t("sort_name")}</option>
        `;
        sortSelect.value = selected;
    }

    renderProducts();
    renderCart();
    if (productModal && productModal.classList.contains("active") && currentModalProductId) {
        openProductModal(currentModalProductId);
    }
};


// EXTERNAL CATEGORY FILTER TRIGGER
window.filterByCategory = function (category) {
    currentCategory = category;
    categoryTabs.querySelectorAll(".cat-pill").forEach(p => {
        p.classList.toggle("active", p.dataset.category === category);
    });
    renderProducts();
};


// MODAL HANDLING WITH REAL IMAGE (BILINGUAL)
window.openProductModal = function (productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    currentModalProductId = productId;

    const title = getProductTitle(product);
    const role = getProductRole(product);
    const specs = getProductSpecs(product);

    const formattedPrice = product.price !== null
        ? `${formatXOF(product.price)} XOF`
        : t("card_quote");

    const waMsgText = currentLang === 'en'
        ? `Hello Tim Tools Machines,\nI would like information or to order:\n- Product: ${title}\n- Price: ${formattedPrice}\nPlease let me know availability and delivery options.`
        : `Bonjour Tim Tools Machines,\nJe souhaite des informations ou commander :\n- Produit : ${title}\n- Prix : ${formattedPrice}\nMerci de m'indiquer la disponibilité et les modalités de livraison.`;

    const waMessage = encodeURIComponent(waMsgText);

    modalBody.innerHTML = `
        <div class="modal-prod-header">
            <div class="modal-prod-img-box">
                <img src="${product.image}" alt="${title}" class="modal-real-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <div class="modal-prod-icon" style="display: none;">
                    <i class="${product.icon}"></i>
                </div>
            </div>
            <div class="modal-prod-info">
                <div class="brand-chip" style="position: static; display: inline-block; margin-bottom: 0.4rem;">
                    <i class="fa-solid fa-bolt text-yellow"></i> ${currentLang === 'en' ? 'Brand' : 'Marque'} ${product.brand}
                </div>
                <h3>${title}</h3>
                <div class="modal-price">${formattedPrice}</div>
            </div>
        </div>

        <div class="modal-section-title"><i class="fa-solid fa-circle-info"></i> ${t("modal_role_title")}</div>
        <div class="product-role-tag" style="margin-bottom: 0.6rem; font-size: 0.85rem; padding: 0.3rem 0.65rem; display: inline-flex;">
            <i class="fa-solid fa-shield-halved text-yellow"></i> ${currentLang === 'en' ? (product.role_badge_en || product.role_badge) : product.role_badge}
        </div>
        <p class="modal-role-text">${role}</p>

        <div class="modal-section-title"><i class="fa-solid fa-list-check"></i> ${t("modal_specs_title")}</div>
        <div class="product-specs-pills" style="margin-bottom: 1.5rem;">
            ${specs.map(s => `<span class="spec-pill" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;"><i class="fa-solid fa-circle-check text-yellow"></i> ${s}</span>`).join('')}
        </div>

        <div class="modal-actions">
            <button class="btn btn-warning" onclick="addToCart('${product.id}'); closeModal();">
                <i class="fa-solid fa-cart-plus"></i> ${t("modal_add_btn")}
            </button>
            <a href="https://wa.me/2250715032798?text=${waMessage}" target="_blank" class="btn btn-whatsapp-large" style="padding: 0.75rem 1.2rem; font-size: 0.95rem;">
                <i class="fa-brands fa-whatsapp"></i> ${t("modal_order_btn")}
            </a>
        </div>
    `;

    productModal.classList.add("active");
    document.body.style.overflow = "hidden";
};

function closeModal() {
    productModal.classList.remove("active");
    document.body.style.overflow = "";
}


    // CART & DYNAMIC FLYING ANIMATION
    window.addToCart = function (productId, triggerBtn) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        const existingIndex = cart.findIndex(item => item.id === productId);
        if (existingIndex > -1) {
            cart[existingIndex].qty += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                qty: 1
            });
        }

        if (triggerBtn) {
            animateFlyToCart(triggerBtn);
        }

        saveCartToStorage();
        updateCartCount();
        renderCart();
        showToast(t("toast_added").replace("{name}", getProductTitle(product)));
    };

    function animateFlyToCart(button) {
        const btnRect = button.getBoundingClientRect();
        const cartRect = openCartBtn.getBoundingClientRect();

        const ball = document.createElement("div");
        ball.className = "flying-ball";
        ball.style.top = `${btnRect.top + btnRect.height / 2 - 14}px`;
        ball.style.left = `${btnRect.left + btnRect.width / 2 - 14}px`;
        document.body.appendChild(ball);

        // Force reflow
        void ball.offsetWidth;

        ball.style.top = `${cartRect.top + cartRect.height / 2 - 14}px`;
        ball.style.left = `${cartRect.left + cartRect.width / 2 - 14}px`;
        ball.style.transform = "scale(0.3)";
        ball.style.opacity = "0.7";

        setTimeout(() => {
            ball.remove();
            openCartBtn.classList.add("cart-bounce");
            setTimeout(() => openCartBtn.classList.remove("cart-bounce"), 400);
        }, 700);
    }

    function updateCartCount() {
        const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
        cartCountBadge.textContent = totalCount;
    }

    function openCart() {
        renderCart();
        cartDrawer.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeCart() {
        cartDrawer.classList.remove("active");
        document.body.style.overflow = "";
    }

    
    function renderCart() {
        if (cart.length === 0) {
            drawerItems.innerHTML = `
            <div class="drawer-empty">
                <i class="fa-solid fa-cart-shopping"></i>
                <h4>${t("drawer_empty")}</h4>
                <p>${t("drawer_empty_desc")}</p>
            </div>
        `;
            drawerTotalAmount.textContent = "0 XOF";
            return;
        }

        let total = 0;
        drawerItems.innerHTML = cart.map(item => {
            const product = PRODUCTS.find(p => p.id === item.id) || item;
            const title = getProductTitle(product);
            const itemTotal = item.price !== null ? item.price * item.qty : null;
            if (itemTotal !== null) total += itemTotal;

            const priceText = item.price !== null
                ? `${formatXOF(item.price)} XOF`
                : t("card_quote");

            return `
            <div class="cart-item">
                <img src="${item.image || 'images/' + item.id + '.jpg'}" alt="${title}" class="cart-item-thumb" onerror="this.style.display='none';" />
                <div class="ci-details">
                    <div class="ci-title">${title}</div>
                    <div class="ci-price">${priceText}</div>
                </div>
                <div class="ci-controls">
                    <button class="ci-qty-btn" onclick="changeQty('${item.id}', -1)">-</button>
                    <span class="ci-qty">${item.qty}</span>
                    <button class="ci-qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
                </div>
                <button class="ci-remove" onclick="removeFromCart('${item.id}')" title="Supprimer">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
        }).join("");

        drawerTotalAmount.textContent = `${formatXOF(total)} XOF`;
    }


    window.changeQty = function (id, delta) {
        const item = cart.find(i => i.id === id);
        if (!item) return;

        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }

        saveCartToStorage();
        updateCartCount();
        renderCart();
    };

    window.removeFromCart = function (id) {
        cart = cart.filter(i => i.id !== id);
        saveCartToStorage();
        updateCartCount();
        renderCart();
        showToast(t("toast_removed"));
    };

    function clearCart() {
        if (cart.length === 0) return;
        cart = [];
        saveCartToStorage();
        updateCartCount();
        renderCart();
        showToast(t("toast_cleared"));
    }

    
    function sendWhatsAppCartOrder() {
        if (cart.length === 0) {
            showToast(t("toast_empty"));
            return;
        }

        let total = 0;
        let message = currentLang === 'en'
            ? "Hello Tim Tools Machines,\n\nI would like to place an order for the following equipment:\n"
            : "Bonjour Tim Tools Machines,\n\nJe souhaite passer commande pour le matériel suivant :\n";

        cart.forEach((item, index) => {
            const product = PRODUCTS.find(p => p.id === item.id) || item;
            const title = getProductTitle(product);
            const priceStr = item.price !== null ? `${formatXOF(item.price)} XOF` : t("card_quote");
            message += `${index + 1}. *${title}* x${item.qty} (${priceStr})\n`;
            if (item.price !== null) {
                total += item.price * item.qty;
            }
        });

        if (currentLang === 'en') {
            message += `\n*ESTIMATED TOTAL: ${formatXOF(total)} XOF*\n\nPlease contact me to confirm availability and schedule delivery.`;
        } else {
            message += `\n*TOTAL ESTIMÉ : ${formatXOF(total)} XOF*\n\nMerci de me contacter pour valider la disponibilité et programmer la livraison.`;
        }

        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/2250715032798?text=${encoded}`, "_blank");
    }


    function saveCartToStorage() {
        localStorage.setItem("timtools_cart", JSON.stringify(cart));
    }

    function loadCartFromStorage() {
        try {
            const saved = localStorage.getItem("timtools_cart");
            if (saved) {
                cart = JSON.parse(saved);
            }
        } catch (e) {
            console.warn("Storage error", e);
        }
    }

    // TOAST NOTIFICATIONS
    function showToast(msg) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${msg}</span>`;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(20px)";
            toast.style.transition = "all 0.3s ease";
            setTimeout(() => toast.remove(), 300);
        }, 2800);
    }

    // 1. DYNAMIC INDUSTRIAL SPARKS SYSTEM (Hero Canvas - Desktop Only for best mobile performance)
    function initSparks() {
        const canvas = document.getElementById("sparksCanvas");
        if (!canvas) return;
        if (window.innerWidth <= 768) {
            canvas.style.display = "none";
            return;
        }
        const ctx = canvas.getContext("2d");

        let width = (canvas.width = canvas.parentElement.offsetWidth);
        let height = (canvas.height = canvas.parentElement.offsetHeight);

        window.addEventListener("resize", () => {
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
        });

        const sparks = [];
        const maxSparks = 45;

        class Spark {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * width;
                this.y = height + Math.random() * 50;
                this.vx = (Math.random() - 0.5) * 1.5;
                this.vy = -(Math.random() * 2.5 + 1.2);
                this.size = Math.random() * 2.5 + 1;
                this.alpha = Math.random() * 0.8 + 0.2;
                this.decay = Math.random() * 0.008 + 0.004;
                this.color = Math.random() > 0.3 ? "#ffc107" : "#ffd43b";
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.alpha -= this.decay;
                if (this.alpha <= 0 || this.y < 0) {
                    this.reset();
                }
            }
            draw() {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 8;
                ctx.shadowColor = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        for (let i = 0; i < maxSparks; i++) {
            sparks.push(new Spark());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            sparks.forEach(s => {
                s.update();
                s.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();
    }

    // 2. SCROLL PROGRESS BAR & BACK TO TOP DYNAMICS
    function initScrollDynamics() {
        const circle = document.querySelector(".progress-ring-circle");
        const circumference = 132;

        window.addEventListener("scroll", () => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / (docHeight || 1)) * 100;

            // Progress bar
            if (scrollProgressBar) {
                scrollProgressBar.style.width = `${scrolled}%`;
            }

            // Header style
            if (window.scrollY > 40) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

            // Back to top button
            if (backToTopBtn) {
                if (window.scrollY > 400) {
                    backToTopBtn.classList.add("visible");
                } else {
                    backToTopBtn.classList.remove("visible");
                }

                if (circle) {
                    const offset = circumference - (circumference * scrolled) / 100;
                    circle.style.strokeDashoffset = Math.max(0, offset);
                }
            }
        });
    }

    // 3. ANIMATED NUMBER COUNTERS (Intersection Observer)
    function initCounters() {
        const counterElements = document.querySelectorAll(".count-up");
        if (!counterElements.length) return;

        let started = false;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !started) {
                    started = true;
                    counterElements.forEach(el => {
                        const target = parseInt(el.dataset.target, 10);
                        const suffix = el.dataset.suffix || "";
                        let current = 0;
                        const duration = 1800;
                        const stepTime = Math.abs(Math.floor(duration / target));

                        const timer = setInterval(() => {
                            current += Math.ceil(target / 45);
                            if (current >= target) {
                                current = target;
                                clearInterval(timer);
                            }
                            el.textContent = `${current}${suffix}`;
                        }, stepTime);
                    });
                }
            });
        }, { threshold: 0.3 });

        const heroStats = document.getElementById("heroStats");
        if (heroStats) observer.observe(heroStats);
    }

    // 4. FAQ ACCORDION
    function initFaq() {
        const faqItems = document.querySelectorAll(".faq-item");
        faqItems.forEach(item => {
            const questionBtn = item.querySelector(".faq-question");
            questionBtn.addEventListener("click", () => {
                const isActive = item.classList.contains("active");
                faqItems.forEach(i => i.classList.remove("active"));
                if (!isActive) {
                    item.classList.add("active");
                }
            });
        });
    }

    // 5. 3D CARD HOVER TILT (Desktop only)
    function init3DTilt() {
        if (window.innerWidth < 992) return;
        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -6;
                const rotateY = ((x - centerX) / centerX) * 6;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
            });
        });
    }
