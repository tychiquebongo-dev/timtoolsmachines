/**
 * TIM TOOLS MACHINES - Application Web Dynamique & Interactive
 * Distributeur Officiel UPSPIRIT
 * Contact: +225 07 89 55 74 42 | WhatsApp: +225 07 15 03 27 98
 */

// BASE DE DONNÉES DES 36 MACHINES & OUTILS AVEC LEURS VRAIES IMAGES
const PRODUCTS = [
    {
        "id": "p1",
        "name": "Mallette à outils 186 pièces",
        "name_en": "186-Piece Professional Tool Set with Trolley",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "image": "images/p1.jpg",
        "icon": "fa-solid fa-toolbox",
        "role_badge": "Maintenance & Mécanique 186 pcs",
        "role_badge_en": "186-Piece Maintenance & Mechanics",
        "role": "Mallette complète ultra-robuste avec coffre à roulettes en aluminium. Contient 186 outils professionnels pour mécanique, électricité et maintenance générale.",
        "role_en": "Ultra-heavy-duty complete toolkit in aluminum rolling trolley case. Contains 186 professional tools for mechanics, electrical and general maintenance.",
        "specs": [
            "186 pièces acier CR-V",
            "Valise trolley alu",
            "Verrouillage à clé",
            "Polyvalence totale"
        ],
        "specs_en": [
            "186 pcs CR-V steel",
            "Rolling aluminum case",
            "Key lock security",
            "Total versatility"
        ]
    },
    {
        "id": "p2",
        "name": "Pulvérisateur à pression 16L manuel",
        "name_en": "Manual Pressure Sprayer 16L",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "image": "images/p2.jpg",
        "icon": "fa-solid fa-spray-can",
        "role_badge": "Pulvérisation agricole 16L",
        "role_badge_en": "16L Agricultural Spraying",
        "role": "Pulvérisateur dorsal haute résistance avec réservoir 16 litres, lance en inox et buse réglable. Idéal pour traitements agricoles, désinfection et jardinage.",
        "role_en": "High-resistance backpack sprayer with 16-liter tank, stainless steel wand and adjustable nozzle. Ideal for agriculture, pest control and disinfection.",
        "specs": [
            "Capacité 16 Litres",
            "Pression manuelle",
            "Lance télescopique",
            "Harnais confort"
        ],
        "specs_en": [
            "16-Liter capacity",
            "Manual pump action",
            "Telescopic lance",
            "Padded shoulder straps"
        ]
    },
    {
        "id": "p3",
        "name": "Pulvérisateur à pression 20L",
        "name_en": "High-Capacity Pressure Sprayer 20L",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "image": "images/p3.jpg",
        "icon": "fa-solid fa-pump-soap",
        "role_badge": "Pulvérisation grand volume 20L",
        "role_badge_en": "20L High-Capacity Spraying",
        "role": "Modèle grande contenance 20 litres conçu pour les exploitations agricoles, grands chantiers et désinfection intensive. Ergonomie et débit continu.",
        "role_en": "Large 20-liter tank designed for agricultural spraying, disinfection and construction sites. Continuous pressure and rugged build.",
        "specs": [
            "Capacité 20 Litres",
            "Réservoir polyéthylène",
            "Pression constante",
            "Buse multi-jets"
        ],
        "specs_en": [
            "20-Liter capacity",
            "HDPE heavy tank",
            "Constant pressure",
            "Multi-pattern nozzle"
        ]
    },
    {
        "id": "p4",
        "name": "Coffret à douilles 46 pièces",
        "name_en": "46-Piece Socket & Bit Set",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "image": "images/p4.jpg",
        "icon": "fa-solid fa-wrench",
        "role_badge": "Coffret serrage & cliquet 46 pcs",
        "role_badge_en": "46-Piece Ratchet & Sockets",
        "role": "Coffret compact d'outils de précision avec cliquet réversible 1/4\", rallonges, douilles et embouts variés. Indispensable pour la petite mécanique et auto.",
        "role_en": "Compact socket set with 1/4\" quick-release ratchet, extension bars, Torx, Hex and Phillips bits. Indispensable for automotive and precision mechanical work.",
        "specs": [
            "46 pièces",
            "Cliquet réversible 1/4\"",
            "Acier Chrome-Vanadium",
            "Boîtier anti-chocs"
        ],
        "specs_en": [
            "46 precision pieces",
            "1/4\" reversible ratchet",
            "Chrome-Vanadium steel",
            "Shockproof hard case"
        ]
    },
    {
        "id": "p5",
        "name": "Souffleur électrique standard bleu",
        "name_en": "Standard Electric Blower (Blue)",
        "category": "souffleur",
        "brand": "UPSPIRIT",
        "image": "images/p5.jpg",
        "icon": "fa-solid fa-wind",
        "role_badge": "Nettoyage & Dépoussiérage atelier",
        "role_badge_en": "Workshop Dusting & Cleaning",
        "role": "Souffleur compact léger bleu pour dépoussiérage des ateliers, ordinateurs, tableaux électriques, climatiseurs et surfaces de travail.",
        "role_en": "Compact lightweight electric blower for dust cleaning in workshops, AC units, computer hardware and electrical cabinets.",
        "specs": [
            "Filaire haute vitesse",
            "Buse souple fournie",
            "Poignée ergonomique",
            "Léger & maniable"
        ],
        "specs_en": [
            "High-speed motor",
            "Flexible nozzle included",
            "Ergonomic grip",
            "Light & compact"
        ]
    },
    {
        "id": "p6",
        "name": "Souffleur électrique jaune",
        "name_en": "Electric Blower (Yellow)",
        "category": "souffleur",
        "brand": "UPSPIRIT",
        "image": "images/p6.jpg",
        "icon": "fa-solid fa-fan",
        "role_badge": "Soufflage copeaux & Sciures",
        "role_badge_en": "Sawdust & Debris Sweeping",
        "role": "Souffleur électrique classique de couleur jaune avec moteur à régime accéléré, idéal pour le nettoyage des copeaux et débris de sciage.",
        "role_en": "Classic yellow electric blower with high-velocity airflow for workshop sawdust and debris removal.",
        "specs": [
            "Turbine équilibrée",
            "Débit d'air renforcé",
            "Fonction aspiration",
            "Double isolation"
        ],
        "specs_en": [
            "Balanced impeller",
            "Enhanced airflow",
            "Blowing/suction mode",
            "Double insulated"
        ]
    },
    {
        "id": "p7",
        "name": "Souffleur électrique renforcé",
        "name_en": "Heavy-Duty Electric Blower",
        "category": "souffleur",
        "brand": "UPSPIRIT",
        "image": "images/p7.jpg",
        "icon": "fa-solid fa-tornado",
        "role_badge": "Soufflage haute vitesse renforcé",
        "role_badge_en": "High-Velocity Site Blower",
        "role": "Modèle renforcé pour usage professionnel régulier. Boîtier résistant aux chocs, débit d'air puissant pour expulsion rapide des résidus tenaces.",
        "role_en": "Reinforced model for regular workshop usage. Impact-resistant housing and high-power airflow for stubborn debris.",
        "specs": [
            "Moteur blindé",
            "Débit supérieur",
            "Résistance thermique",
            "Usage soutenu"
        ],
        "specs_en": [
            "Reinforced motor",
            "Higher air volume",
            "Thermal protection",
            "Heavy-duty cycle"
        ]
    },
    {
        "id": "p8",
        "name": "Souffleur électrique grand modèle",
        "name_en": "Industrial High-Power Blower",
        "category": "souffleur",
        "brand": "UPSPIRIT",
        "image": "images/p8.jpg",
        "icon": "fa-solid fa-feather-pointed",
        "role_badge": "Turbine industrielle gros volume",
        "role_badge_en": "High-Volume Industrial Blower",
        "role": "Turbine industrielle de grande capacité pour nettoyage des vastes surfaces, cours, gros chantiers de construction et ateliers métallurgiques.",
        "role_en": "Industrial-grade high-capacity blower turbine for large construction yards, metallurgical shops and outdoor facilities.",
        "specs": [
            "Très grand débit",
            "Moteur haute puissance",
            "Buse extra large",
            "Qualité industrielle"
        ],
        "specs_en": [
            "Extra-large airflow",
            "High-wattage motor",
            "Wide-bore nozzle",
            "Industrial grade"
        ]
    },
    {
        "id": "p9",
        "name": "Marteau perforateur rotatif 20 mm",
        "name_en": "Rotary Hammer Drill 20mm",
        "category": "perforateur",
        "brand": "UPSPIRIT",
        "image": "images/p9.jpg",
        "icon": "fa-solid fa-hammer",
        "role_badge": "Perçage rapide cloisons 20mm",
        "role_badge_en": "Fast 20mm Partition Drilling",
        "role": "Perforateur électropneumatique compact 20 mm pour forer rapidement et sans effort la brique, le plâtre et le béton léger.",
        "role_en": "Compact electro-pneumatic 20mm hammer drill for fast effortless drilling into brick, plaster, and light concrete.",
        "specs": [
            "Diamètre 20 mm",
            "Mandrin SDS-Plus",
            "Perçage / Percussion",
            "Poignée auxiliaire"
        ],
        "specs_en": [
            "20mm max diameter",
            "SDS-Plus chuck",
            "Drill / Hammer mode",
            "Auxiliary handle"
        ]
    },
    {
        "id": "p10",
        "name": "Marteau perforateur rotatif 24 mm",
        "name_en": "Rotary Hammer Drill 24mm",
        "category": "perforateur",
        "brand": "UPSPIRIT",
        "image": "images/p10.jpg",
        "icon": "fa-solid fa-screwdriver-wrench",
        "role_badge": "Passage tuyaux & Gaines 24mm",
        "role_badge_en": "24mm Pipe & Conduit Drilling",
        "role": "Perforateur multi-fonctions 24 mm avec excellente énergie d'impact. Recommandé pour maçons, électriciens et installateurs de sanitaires.",
        "role_en": "Multi-function 24mm rotary hammer with high impact energy. Recommended for masonry, electrical conduits and plumbing installations.",
        "specs": [
            "Diamètre 24 mm",
            "Frappe pneumatique",
            "Sélecteur 3 modes",
            "Variateur de vitesse"
        ],
        "specs_en": [
            "24mm max diameter",
            "Pneumatic impact",
            "3-mode selector",
            "Variable speed trigger"
        ]
    },
    {
        "id": "p11",
        "name": "Marteau perforateur rotatif 26 mm",
        "name_en": "Rotary Hammer Drill 26mm",
        "category": "perforateur",
        "brand": "UPSPIRIT",
        "image": "images/p11.jpg",
        "icon": "fa-solid fa-gear",
        "role_badge": "Perforation béton armé 26mm",
        "role_badge_en": "26mm Reinforced Concrete Drilling",
        "role": "Machine robuste 26 mm à force de frappe élevée pour perçages réguliers dans le béton armé et petites opérations de burinage.",
        "role_en": "Heavy-duty 26mm rotary hammer drill delivering powerful impact for reinforced concrete drilling and light chiseling.",
        "specs": [
            "Diamètre 26 mm",
            "Force de percussion élevée",
            "Carter alliage",
            "Protection anti-vibration"
        ],
        "specs_en": [
            "26mm max diameter",
            "High impact force",
            "Alloy gear housing",
            "Anti-vibration design"
        ]
    },
    {
        "id": "p12",
        "name": "Marteau piqueur HK-DH35B",
        "name_en": "Demolition Jackhammer HK-DH35B",
        "category": "perforateur",
        "brand": "UPSPIRIT",
        "image": "images/p12.jpg",
        "icon": "fa-solid fa-trowel-bricks",
        "role_badge": "Démolition lourde & Brise-béton",
        "role_badge_en": "Heavy Demolition & Breaker",
        "role": "Brise-béton et marteau piqueur haute cadence HK-DH35B pour la démolition de dalles, le piquetage de murs en béton et le décapage de sols.",
        "role_en": "High-impact demolition breaker HK-DH35B for slab demolition, concrete wall breaking and ground chiseling.",
        "specs": [
            "Modèle HK-DH35B",
            "Force d'impact max",
            "Système anti-choc",
            "Livré avec burins"
        ],
        "specs_en": [
            "Model HK-DH35B",
            "Max impact force",
            "Shock-absorbing body",
            "Chisels included"
        ]
    },
    {
        "id": "p13",
        "name": "Poste à souder inverter MMA MINI 250",
        "name_en": "MMA MINI 250 Inverter Welder",
        "category": "soudure",
        "brand": "UPSPIRIT",
        "image": "images/p13.jpg",
        "icon": "fa-solid fa-bolt-lightning",
        "role_badge": "Soudure arc portative 250A",
        "role_badge_en": "Portable 250A MMA Arc Welding",
        "role": "Poste de soudure électronique à technologie IGBT Inverter 250A. Ultra-léger, amorçage stable et fusion propre pour baguettes de 2.0 à 3.2 mm.",
        "role_en": "IGBT Inverter electronic welding machine 250A. Ultra-portable, stable arc ignition and clean fusion for 2.0 to 3.2mm electrodes.",
        "specs": [
            "Courant 250A",
            "Technologie IGBT Inverter",
            "Compact & portatif",
            "Affichage numérique"
        ],
        "specs_en": [
            "250A output",
            "IGBT Inverter tech",
            "Compact & portable",
            "Digital display"
        ]
    },
    {
        "id": "p14",
        "name": "Poste à souder inverter MMA MINI 300",
        "name_en": "MMA MINI 300 Inverter Welder",
        "category": "soudure",
        "brand": "UPSPIRIT",
        "image": "images/p14.jpg",
        "icon": "fa-solid fa-fire",
        "role_badge": "Soudure intensive 300A",
        "role_badge_en": "Continuous 300A Heavy Welding",
        "role": "Poste à souder haute puissance 300A pour travaux métalliques exigeants. Prise en charge des grosses baguettes de soudure avec ventilation renforcée.",
        "role_en": "Heavy-duty 300A inverter arc welder for continuous welding on gates, steel frames and industrial sheet metal.",
        "specs": [
            "Courant 300A",
            "Arc Force / Anti-Stick",
            "Protection surchauffe",
            "Câbles de masse inclus"
        ],
        "specs_en": [
            "300A high power",
            "Hot start & Arc force",
            "Overheat protection",
            "Electrodes up to 4.0mm"
        ]
    },
    {
        "id": "p15",
        "name": "Balance électronique à colonne 300 kg HK-DS150K",
        "name_en": "Platform Scale 300kg HK-DS150K",
        "category": "pesage",
        "brand": "UPSPIRIT",
        "image": "images/p15.jpg",
        "icon": "fa-solid fa-scale-balanced",
        "role_badge": "Pesée industrielle 300 kg",
        "role_badge_en": "300kg Industrial Platform Scale",
        "role": "Plateforme de pesée industrielle avec colonne et afficheur digital LED. Idéale pour peser sacs de cacao, café, colis et matières premières jusqu'à 300 kg.",
        "role_en": "Heavy-duty platform scale with steel column up to 300 kg. High-precision sensor, backlit digital screen and rechargeable battery.",
        "specs": [
            "Charge max 300 kg",
            "Réf HK-DS150K",
            "Batterie rechargeable",
            "Plateau acier gaufré"
        ],
        "specs_en": [
            "Capacity up to 300 kg",
            "Model HK-DS150K",
            "Stainless platform",
            "Rechargeable battery"
        ]
    },
    {
        "id": "p16",
        "name": "Balance électronique de comptoir HK-836",
        "name_en": "Countertop Electronic Scale HK-836",
        "category": "pesage",
        "brand": "UPSPIRIT",
        "image": "images/p16.jpg",
        "icon": "fa-solid fa-calculator",
        "role_badge": "Pesée comptoir & Calcul prix",
        "role_badge_en": "Retail Price Computing Scale",
        "role": "Balance commerciale de précision HK-836 avec calcul automatique des prix au kg, double affichage recto-verso client/vendeur et touches mémoires.",
        "role_en": "Retail computing scale with double digital display (vendor/customer), price calculation, stainless steel tray and waterproof keypad.",
        "specs": [
            "Réf HK-836",
            "Calcul de prix auto",
            "Double écran LED",
            "Autonomie sur batterie"
        ],
        "specs_en": [
            "Model HK-836",
            "Dual LCD screens",
            "Tare & Price memory",
            "Built-in battery"
        ]
    },
    {
        "id": "p17",
        "name": "Meuleuse d'angle 115mm HK-G2-115",
        "name_en": "Angle Grinder 115mm HK-G2-115",
        "category": "meuleuse",
        "brand": "UPSPIRIT",
        "image": "images/p17.jpg",
        "icon": "fa-solid fa-compact-disc",
        "role_badge": "Ébavurage & Meulage 115mm",
        "role_badge_en": "115mm Deburring & Grinding",
        "role": "Meuleuse d'angle compacte 115 mm HK-G2-115 pour coupes rapides de tubes, fers plats, carrelages et travaux d'ébarbage en espaces étroits.",
        "role_en": "Compact 115mm angle grinder for precision metal cutting, deburring, sharpening and grinding in tight spaces.",
        "specs": [
            "Disque 115 mm",
            "Modèle HK-G2-115",
            "Corps profilé fin",
            "Carter protecteur réglable"
        ],
        "specs_en": [
            "Disc 115mm (4.5\")",
            "Model HK-G2-115",
            "High-speed motor",
            "Protective safety guard"
        ]
    },
    {
        "id": "p18",
        "name": "Meuleuse d'angle 125mm",
        "name_en": "Angle Grinder 125mm",
        "category": "meuleuse",
        "brand": "UPSPIRIT",
        "image": "images/p18.jpg",
        "icon": "fa-solid fa-compact-disc",
        "role_badge": "Tronçonnage universel 125mm",
        "role_badge_en": "125mm Universal Steel Cutting",
        "role": "La meuleuse polyvalente par excellence en 125 mm. Moteur puissant et équilibré pour tronçonner et meuler métal, maçonnerie et dalles.",
        "role_en": "Standard 125mm grinder with slim body and optimal torque. The go-to tool for ironworkers, pipefitters and building sites.",
        "specs": [
            "Disque 125 mm",
            "Moteur haute performance",
            "Blocage de broche",
            "Poignée 2 positions"
        ],
        "specs_en": [
            "Disc 125mm (5\")",
            "Ergonomic slim body",
            "Side handle included",
            "Spindle lock"
        ]
    },
    {
        "id": "p19",
        "name": "Meuleuse d'angle 180mm",
        "name_en": "Angle Grinder 180mm",
        "category": "meuleuse",
        "brand": "UPSPIRIT",
        "image": "images/p19.jpg",
        "icon": "fa-solid fa-circle-notch",
        "role_badge": "Découpe profonde fers 180mm",
        "role_badge_en": "180mm Deep Rebar Cutting",
        "role": "Meuleuse semi-lourde 180 mm offrant une profondeur de coupe supérieure pour profilés épais, tuyaux métalliques de gros diamètre et maçonnerie.",
        "role_en": "Semi-heavy 180mm grinder with robust gear head for deep pipe cutting, thick rebar and heavy steel grinding.",
        "specs": [
            "Disque 180 mm",
            "Puissance élevée",
            "Poignée arrière rotative",
            "Démarrage progressif"
        ],
        "specs_en": [
            "Disc 180mm (7\")",
            "Reinforced motor",
            "Vibration reduction",
            "Heavy-duty cutting"
        ]
    },
    {
        "id": "p20",
        "name": "Meuleuse d'angle grand format 230mm HK-AG180",
        "name_en": "Heavy Angle Grinder 230mm HK-AG180",
        "category": "meuleuse",
        "brand": "UPSPIRIT",
        "image": "images/p20.jpg",
        "icon": "fa-solid fa-circle-notch",
        "role_badge": "Sciage gros œuvre 230mm",
        "role_badge_en": "230mm Heavy Masonry Sawing",
        "role": "Très grand modèle 230 mm HK-AG180 pour gros travaux de chantier et métallurgie lourde. Coupe profonde des blocs de béton et structures en acier.",
        "role_en": "Extra-large 230mm angle grinder for masonry sawing, concrete slabs, thick beam cutting and major industrial work.",
        "specs": [
            "Grand disque 230 mm",
            "Réf HK-AG180",
            "Moteur ultra-puissant",
            "Sécurité anti-rebond"
        ],
        "specs_en": [
            "Disc 230mm (9\")",
            "Model HK-AG180",
            "Rotating handle",
            "Heavy industrial power"
        ]
    },
    {
        "id": "p21",
        "name": "Malaxeur électrique / mélangeur HK-PM01",
        "name_en": "Electric Paint & Mortar Mixer HK-PMO1",
        "category": "soudure",
        "brand": "UPSPIRIT",
        "image": "images/p21.jpg",
        "icon": "fa-solid fa-blender",
        "role_badge": "Malaxage mortier & Peintures",
        "role_badge_en": "Mortar & Paint Mixing",
        "role": "Malaxeur double poignée ergonomique HK-PM01 pour préparer et homogénéiser facilement ciment, mortier, colle pour carrelage, plâtre et peinture.",
        "role_en": "Twin-handle mixer HK-PMO1 with speed regulator. Perfect for blending paints, tile adhesives, mortar, resins and plasters without lumps.",
        "specs": [
            "Réf HK-PM01",
            "Double poignée ergonomique",
            "Variateur électronique",
            "Pale mélangeuse incluse"
        ],
        "specs_en": [
            "Model HK-PMO1",
            "Variable speed gear",
            "M14 spiral paddle",
            "Dual steering grip"
        ]
    },
    {
        "id": "p22",
        "name": "Scie à onglet radiale alu / bois HK-MS003",
        "name_en": "Sliding Compound Miter Saw HK-MS003",
        "category": "meuleuse",
        "brand": "UPSPIRIT",
        "image": "images/p22.jpg",
        "icon": "fa-solid fa-ruler-combined",
        "role_badge": "Coupes d'onglets alu & Bois",
        "role_badge_en": "Aluminum & Wood Miter Cutting",
        "role": "Scie circulaire à onglet radiale de haute précision HK-MS003 pour menuiserie bois et profilés aluminium. Angles de coupe précis de 0° à 45°.",
        "role_en": "High-precision sliding miter saw for aluminum profiles and woodwork. Bevel and miter angle adjustment for clean carpentry cuts.",
        "specs": [
            "Réf HK-MS003",
            "Chariot radial",
            "Coupe bois & alu",
            "Guide laser de coupe"
        ],
        "specs_en": [
            "Model HK-MS003",
            "Wood & aluminum blade",
            "Dual sliding rails",
            "High precision"
        ]
    },
    {
        "id": "p23",
        "name": "Scie à onglet / Tronçonneuse HK-MS004",
        "name_en": "Miter Saw / Cut-Off Machine HK-MS004",
        "category": "meuleuse",
        "brand": "UPSPIRIT",
        "image": "images/p23.jpg",
        "icon": "fa-solid fa-shapes",
        "role_badge": "Tronçonnage stationnaire bois",
        "role_badge_en": "Stationary Wood Cutting",
        "role": "Station d'onglet et tronçonneuse d'atelier HK-MS004. Bâti robuste en aluminium moulé, table de découpe graduée pour coupes d'onglets nettes.",
        "role_en": "Heavy workshop miter saw HK-MS004 with heavy cast base. Designed for fast, repetitive cross-cutting of metal and timber.",
        "specs": [
            "Réf HK-MS004",
            "Plateau tournant cranté",
            "Butée de profondeur",
            "Lame carbure incluse"
        ],
        "specs_en": [
            "Model HK-MS004",
            "Solid cast base",
            "Accurate angle fence",
            "Heavy workshop grade"
        ]
    },
    {
        "id": "p24",
        "name": "Tronçonneuse à métaux / Découpeuse 355mm OKM-355A",
        "name_en": "Metal Cut-Off Saw 355mm OKM-355A",
        "category": "meuleuse",
        "brand": "UPSPIRIT",
        "image": "images/p24.jpg",
        "icon": "fa-solid fa-circle-dot",
        "role_badge": "Découpe pendulaire acier 355mm",
        "role_badge_en": "355mm Steel Chop Sawing",
        "role": "Tronçonneuse pendulaire 355 mm OKM-355A pour la découpe à froid nette et rapide de fers ronds, cornières, poutrelles et tubes acier.",
        "role_en": "Stationary abrasive metal cut-off saw 355mm (14\") for rapid cutting of steel pipes, angles, tubes and solid bars.",
        "specs": [
            "Disque 355 mm (14\")",
            "Réf OKM-355A",
            "Étau de serrage rapide",
            "Capot enveloppant"
        ],
        "specs_en": [
            "Abrasive disc 355mm",
            "Model OKM-355A",
            "Quick-clamp vise",
            "Full spark deflector"
        ]
    },
    {
        "id": "p25",
        "name": "Décapeur thermique / Pistolet à air chaud HK-HG01",
        "name_en": "Heat Gun / Hot Air Gun HK-HGO1",
        "category": "souffleur",
        "brand": "UPSPIRIT",
        "image": "images/p25.jpg",
        "icon": "fa-solid fa-temperature-arrow-up",
        "role_badge": "Décapage & Chauffage thermique",
        "role_badge_en": "Heat Stripping & Forming",
        "role": "Générateur d'air chaud professionnel HK-HG01 pour décaper peintures et vernis, déformer les tuyaux PVC, souder bâches et rétracter gaines.",
        "role_en": "Professional variable-temperature heat gun for paint stripping, pipe bending, heat-shrink tubing and drying.",
        "specs": [
            "Réf HK-HG01",
            "Thermostat réglable",
            "Multi-embouts fournis",
            "Position statique verticale"
        ],
        "specs_en": [
            "Model HK-HGO1",
            "Multi-stage heat",
            "Nozzle kit included",
            "Ceramic core"
        ]
    },
    {
        "id": "p26",
        "name": "Touret à meuler 150mm (6\") HK-BG601",
        "name_en": "Bench Grinder 150mm (6\") HK-BG601",
        "category": "soudure",
        "brand": "UPSPIRIT",
        "image": "images/p26.jpg",
        "icon": "fa-solid fa-ring",
        "role_badge": "Affûtage d'outils atelier 150mm",
        "role_badge_en": "150mm Tool Sharpening",
        "role": "Touret d'établi 150 mm HK-BG601 à deux meules (ébauche et finition). Indispensable pour affûter mèches, forets, ciseaux à bois et burins.",
        "role_en": "Twin-wheel 150mm bench grinder for sharpening drill bits, chisels, lawnmower blades and metal deburring.",
        "specs": [
            "Meules 150 mm (6\")",
            "Réf HK-BG601",
            "Pare-étincelles réglables",
            "Moteur induction silencieux"
        ],
        "specs_en": [
            "Wheel 150mm (6\")",
            "Model HK-BG601",
            "Dual spark shields",
            "Cast iron base"
        ]
    },
    {
        "id": "p27",
        "name": "Touret à meuler 200mm (8\") HK-BG801",
        "name_en": "Bench Grinder 200mm (8\") HK-BG801",
        "category": "soudure",
        "brand": "UPSPIRIT",
        "image": "images/p27.jpg",
        "icon": "fa-solid fa-gears",
        "role_badge": "Meulage atelier lourd 200mm",
        "role_badge_en": "200mm Heavy Workshop Grinding",
        "role": "Grand touret d'atelier 200 mm HK-BG801 lourd et stable. Conçu pour le meulage intensif de grosses pièces métalliques et réaffûtage d'outils lourds.",
        "role_en": "Heavy-duty 200mm bench grinder with powerful induction motor for intensive sharpening and workshop grinding.",
        "specs": [
            "Meules 200 mm (8\")",
            "Réf HK-BG801",
            "Socle fonte antivibrations",
            "Éclairage de travail"
        ],
        "specs_en": [
            "Wheel 200mm (8\")",
            "Model HK-BG801",
            "Induction quiet motor",
            "Adjustable tool rests"
        ]
    },
    {
        "id": "p28",
        "name": "Perceuse électrique filaire 13mm HK-ED1305",
        "name_en": "Corded Electric Drill 13mm HK-ED1305",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "image": "images/p28.jpg",
        "icon": "fa-solid fa-bore-hole",
        "role_badge": "Perçage filaire précis 13mm",
        "role_badge_en": "13mm Precise Corded Drilling",
        "role": "Perceuse électrique maniable HK-ED1305 avec mandrin à clé 13 mm. Inverseur de sens de rotation et variateur pour forer bois, métal et plastique.",
        "role_en": "Compact 13mm keyed chuck drill with reverse switch and speed control. Ideal for steel, wood and plastic drilling.",
        "specs": [
            "Mandrin 13 mm",
            "Réf HK-ED1305",
            "Vitesse variable",
            "Poignée ergonomique"
        ],
        "specs_en": [
            "13mm keyed chuck",
            "Model HK-ED1305",
            "Forward/Reverse",
            "Depth gauge included"
        ]
    },
    {
        "id": "p29",
        "name": "Enrouleur de câble électrique 25m OKEM-CR25",
        "name_en": "Cable Extension Reel 25m OKEM-CR25",
        "category": "cables",
        "brand": "UPSPIRIT",
        "image": "images/p29.jpg",
        "icon": "fa-solid fa-satellite-dish",
        "role_badge": "Alimentation mobile sécurisée 25m",
        "role_badge_en": "25m Safe Mobile Power Reel",
        "role": "Tambour enrouleur 25 mètres modèle OKEM-CR25. Châssis métallique stable, 4 prises protégées avec clapets et coupe-circuit thermique.",
        "role_en": "25-meter heavy-duty cable reel on steel frame with thermal overload cut-out and 4 socket outlets.",
        "specs": [
            "Longueur 25 mètres",
            "Réf OKEM-CR25",
            "4 prises 230V",
            "Disjoncteur thermique"
        ],
        "specs_en": [
            "25 meters length",
            "Model OKEM-CR25",
            "4 grounded sockets",
            "Steel tubular frame"
        ]
    },
    {
        "id": "p30",
        "name": "Enrouleur de câble électrique 50m HK-CR50",
        "name_en": "Cable Extension Reel 50m HK-CR50",
        "category": "cables",
        "brand": "UPSPIRIT",
        "image": "images/p30.jpg",
        "icon": "fa-solid fa-circle-nodes",
        "role_badge": "Distribution électrique 50m",
        "role_badge_en": "50m Long-Range Extension Reel",
        "role": "Grand enrouleur de chantier 50 mètres HK-CR50. Idéal pour alimenter vos machines à longue distance en extérieur sans perte de tension.",
        "role_en": "Long-range 50-meter extension drum on steel stand with crank handle for building sites and workshops.",
        "specs": [
            "Portée 50 mètres",
            "Réf HK-CR50",
            "Tambour renforcé",
            "Poignée guide-câble"
        ],
        "specs_en": [
            "50 meters length",
            "Model HK-CR50",
            "Heavy-gauge cable",
            "Ergonomic winder"
        ]
    },
    {
        "id": "p31",
        "name": "Enrouleur tambour câble caréné 50m HK-CR50",
        "name_en": "Enclosed Drum Cable Reel 50m HK-CR50",
        "category": "cables",
        "brand": "UPSPIRIT",
        "image": "images/p31.jpg",
        "icon": "fa-solid fa-shield",
        "role_badge": "Enrouleur caréné antichoc 50m",
        "role_badge_en": "50m Armored Enclosed Reel",
        "role": "Enrouleur professionnel 50 mètres HK-CR50 doté d'un carénage protecteur intégral anti-poussière, boue et chocs mécaniques sur chantier.",
        "role_en": "Fully enclosed 50m cable drum protecting wire from dust, water splashes and mechanical impacts on job sites.",
        "specs": [
            "Longueur 50 m",
            "Carénage hermétique",
            "Protection intempéries",
            "Tambour rotatif fluide"
        ],
        "specs_en": [
            "50m enclosed drum",
            "Model HK-CR50",
            "Splash-proof sockets",
            "Protected casing"
        ]
    },
    {
        "id": "p32",
        "name": "Enrouleur tambour câble caréné 25m HK-CR25",
        "name_en": "Enclosed Drum Cable Reel 25m HK-CR25",
        "category": "cables",
        "brand": "UPSPIRIT",
        "image": "images/p32.jpg",
        "icon": "fa-solid fa-shield-halved",
        "role_badge": "Enrouleur caréné compact 25m",
        "role_badge_en": "25m Compact Enclosed Reel",
        "role": "Version carénée compacte 25 mètres HK-CR25. Protège parfaitement votre câble électrique lors des déplacements fréquents en atelier et chantier.",
        "role_en": "Enclosed 25m cable reel offering optimal cable preservation with thermal circuit breaker.",
        "specs": [
            "Longueur 25 m",
            "Carénage antichoc",
            "Réf HK-CR25",
            "Prises protégées"
        ],
        "specs_en": [
            "25m enclosed drum",
            "Model HK-CR25",
            "Overheat cutoff",
            "Compact design"
        ]
    },
    {
        "id": "p33",
        "name": "Rallonge câble électrique 10m (norme EU)",
        "name_en": "Heavy-Duty Extension Cord 10m (EU Standard)",
        "category": "cables",
        "brand": "UPSPIRIT",
        "image": "images/p33.jpg",
        "icon": "fa-solid fa-plug-circle-check",
        "role_badge": "Rallonge industrielle 10m EU",
        "role_badge_en": "10m Heavy EU Extension Lead",
        "role": "Cordon prolongateur de haute sécurité de 10 mètres certifié selon les normes européennes. Câble néoprène résistant aux frottements et graisses.",
        "role_en": "High-grade rubber insulated 10-meter industrial extension lead (EU standard) resistant to oils and abrasions.",
        "specs": [
            "Longueur 10 mètres",
            "Certifié Norme EU",
            "Fiche étanche IP44",
            "Section de fil renforcée"
        ],
        "specs_en": [
            "10 meters length",
            "EU safety standard",
            "Heavy-gauge wire",
            "Water-resistant plugs"
        ]
    },
    {
        "id": "p34",
        "name": "Balai de charbon moteur",
        "name_en": "Motor Carbon Brushes (Pair)",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "image": "images/p34.jpg",
        "icon": "fa-solid fa-bolt",
        "role_badge": "Charbon de rechange moteur",
        "role_badge_en": "Replacement Motor Carbon Brush",
        "role": "Paire de balais de charbon haute densité pour moteurs électriques d'outils électroportatifs. Assure un contact électrique parfait sans étincelage excessif.",
        "role_en": "High-conductivity replacement carbon brushes for electric tool motors and universal power tools.",
        "specs": [
            "Graphite haute qualité",
            "Ressort & cosse cuivre",
            "Durabilité prolongée",
            "Prix unitaire 100 XOF"
        ],
        "specs_en": [
            "Motor replacement",
            "High conductivity",
            "Wear indicator",
            "100 XOF each"
        ]
    },
    {
        "id": "p35",
        "name": "Balai de charbon perforateur",
        "name_en": "Hammer Drill Carbon Brushes (Pair)",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "image": "images/p35.jpg",
        "icon": "fa-solid fa-sparkles",
        "role_badge": "Charbon perforateur lourd",
        "role_badge_en": "Heavy Hammer Drill Carbon Brush",
        "role": "Charbon spécial pour marteaux perforateurs et piqueurs. Résiste aux fortes vibrations et aux températures de fonctionnement intenses.",
        "role_en": "Specific carbon brushes for rotary hammers and demolition breakers with auto-cut safety feature.",
        "specs": [
            "Adapté aux perforateurs",
            "Auto-rupteur de sécurité",
            "Haute conductivité",
            "Prix unitaire 100 XOF"
        ],
        "specs_en": [
            "Hammer drill fit",
            "Auto-cut spring",
            "Extended lifespan",
            "100 XOF each"
        ]
    },
    {
        "id": "p36",
        "name": "Échelles et escabeaux professionnels (Ladder tout type)",
        "name_en": "Ladders of All Types (Telescopic / Stepladder / Multi-position)",
        "category": "echelles",
        "brand": "UPSPIRIT",
        "image": "images/p36.jpg",
        "icon": "fa-solid fa-stairs",
        "role_badge": "Accès sécurisé en hauteur",
        "role_badge_en": "Professional Height Access",
        "role": "Gamme complète d'échelles télescopiques en aluminium, escabeaux pliants de sécurité, échelles transformables et articulées multi-usages.",
        "role_en": "Full range of professional aluminum ladders: telescopic, multi-purpose, extension and stepladders for safe height work.",
        "specs": [
            "Aluminium aéronautique",
            "Hauteurs sur mesure",
            "Pieds antidérapants",
            "Sur devis personnalisé"
        ],
        "specs_en": [
            "All models available",
            "Aviation aluminum",
            "Non-slip rungs",
            "Quote on request"
        ]
    }
];


// DICTIONNAIRE MULTILINGUE (FRANÇAIS & ANGLAIS)
const TRANSLATIONS = {
    "fr": {
        "top_official": "Distributeur Officiel",
        "google_view": "View on Google",
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
        "nav_machines": "Machines & Tools (36)",
        "nav_reviews": "Avis",
        "nav_faq": "FAQ",
        "nav_contact": "Contact",
        "nav_whatsapp_btn": "WhatsApp : +225 07 15 03 27 98",
        "nav_call_btn": "Appel : +225 07 89 55 74 42",
        "hero_badge": "Leader Outillage & Équipements Professionnels",
        "hero_welcome": "Bienvenue à",
        "hero_subtitle": "Votre partenaire de référence pour la vente d'outillage robuste et de machines haute performance de la marque <strong>UPSPIRIT</strong> à travers le monde. Matériel 100% fiable au meilleur prix.",
        "hero_cta_whatsapp": "Commander sur WhatsApp",
        "hero_cta_catalog": "View our 36 Machines",
        "hero_stat_machines": "UPSPIRIT Machines",
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
        "cat_all": "All Items",
        "cat_perforateur": "Hammer Drills & Breakers",
        "cat_meuleuse": "Grinders & Cutters",
        "cat_souffleur": "Blowers & Heat Guns",
        "cat_soudure": "Welding & Workshop",
        "cat_pesage": "Scales & Weighing",
        "cat_cables": "Cables & Extension Reels",
        "cat_outillage": "Pro Tools & Hardware",
        "cat_echelles": "Ladders & Access",
        "budget_label": "Budget :",
        "budget_all": "Tous les prix",
        "budget_under10k": "< 10 000 XOF",
        "budget_10k25k": "10 000 - 25 000 XOF",
        "budget_above25k": "> 25 000 XOF",
        "results_count_single": "Showing <strong>1</strong> UPSPIRIT machine",
        "results_count_multi": "Showing <strong>{count}</strong> UPSPIRIT machines",
        "delivery_hint": "Prêts pour expédition immédiate",
        "empty_title": "Aucun produit correspondant trouvé",
        "empty_desc": "Essayez avec d'autres mots clés ou réinitialisez les filtres.",
        "empty_reset": "Réinitialiser les filtres",
        "card_stock": "In Stock - Ready to Ship",
        "card_price_label": "Prix Tarif",
        "card_order_btn": "Order on WhatsApp",
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
        "modal_order_btn": "Order on WhatsApp",
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
        const badgeFr = (p.role_badge || "").toLowerCase();
        const badgeEn = (p.role_badge_en || "").toLowerCase();

        const matchesSearch = !currentSearch ||
            titleFr.includes(currentSearch) ||
            titleEn.includes(currentSearch) ||
            roleFr.includes(currentSearch) ||
            roleEn.includes(currentSearch) ||
            brand.includes(currentSearch) ||
            badgeFr.includes(currentSearch) ||
            badgeEn.includes(currentSearch);

        return matchesCategory && matchesSearch;
    });

    // Sort: default or alphabetical
    if (currentSort === "name") {
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
        const roleBadge = currentLang === 'en' ? (product.role_badge_en || product.role_badge) : product.role_badge;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent('UPSPIRIT ' + title)}&tbm=isch`;

        const waMsgText = currentLang === 'en'
            ? `Hello Tim Tools Machines,\nI would like to order the following machine:\n- Product: ${title}\n- Brand: UPSPIRIT\nPlease confirm availability and delivery details in Abidjan / Cote d'Ivoire.`
            : `Bonjour Tim Tools Machines,\nJe souhaite commander la machine suivante :\n- Produit : ${title}\n- Marque : UPSPIRIT\nMerci de me confirmer la disponibilité et les modalités de livraison à Abidjan / Côte d'Ivoire.`;

        const waMessage = encodeURIComponent(waMsgText);

        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-media" onclick="openProductModal('${product.id}')" style="cursor: pointer;">
                    <div class="brand-chip"><i class="fa-solid fa-shield-halved text-yellow"></i> ${product.brand}</div>
                    <a href="${googleSearchUrl}" target="_blank" rel="noopener noreferrer" class="google-badge" title="${t('google_view')}" onclick="event.stopPropagation();">
                        <i class="fa-brands fa-google text-yellow"></i> Google
                    </a>
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
                            <i class="fa-solid fa-screwdriver-wrench text-yellow"></i> ${roleBadge}
                        </div>
                    </div>

                    <h3 class="product-title" onclick="openProductModal('${product.id}')" style="cursor: pointer;">${title}</h3>
                    <p class="product-role">${role}</p>

                    <div class="product-specs-pills">
                        ${specs.map(spec => `<span class="spec-pill"><i class="fa-solid fa-circle-check text-yellow"></i> ${spec}</span>`).join('')}
                    </div>

                    <div class="product-footer single-action">
                        <a href="https://wa.me/2250715032798?text=${waMessage}" target="_blank" class="btn-card-order-full">
                            <i class="fa-brands fa-whatsapp"></i> ${t("card_order_btn")}
                        </a>
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
            <option value="name">${t("sort_name")}</option>
        `;
        sortSelect.value = selected === "name" ? "name" : "default";
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
    const roleBadge = currentLang === 'en' ? (product.role_badge_en || product.role_badge) : product.role_badge;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent('UPSPIRIT ' + title)}&tbm=isch`;

    const waMsgText = currentLang === 'en'
        ? `Hello Tim Tools Machines,\nI would like to order the following machine:\n- Product: ${title}\n- Brand: UPSPIRIT\nPlease confirm availability and delivery options in Abidjan / Cote d'Ivoire.`
        : `Bonjour Tim Tools Machines,\nJe souhaite commander la machine suivante :\n- Produit : ${title}\n- Marque : UPSPIRIT\nMerci de me confirmer la disponibilité et les modalités de livraison à Abidjan / Côte d'Ivoire.`;

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
                    <i class="fa-solid fa-bolt text-yellow"></i> ${currentLang === 'en' ? 'Official Brand' : 'Marque Officielle'} ${product.brand}
                </div>
                <div class="stock-badge" style="display: inline-flex; margin-left: 0.4rem; margin-bottom: 0;">
                    <span class="stock-dot"></span> ${t("card_stock")}
                </div>
                <h3>${title}</h3>
            </div>
        </div>

        <div class="modal-section-title"><i class="fa-solid fa-circle-info"></i> ${t("modal_role_title")}</div>
        <div class="product-role-tag" style="margin-bottom: 0.6rem; font-size: 0.85rem; padding: 0.3rem 0.65rem; display: inline-flex;">
            <i class="fa-solid fa-shield-halved text-yellow"></i> ${roleBadge}
        </div>
        <p class="modal-role-text">${role}</p>

        <div class="modal-section-title"><i class="fa-solid fa-list-check"></i> ${t("modal_specs_title")}</div>
        <div class="product-specs-pills" style="margin-bottom: 1.5rem;">
            ${specs.map(s => `<span class="spec-pill" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;"><i class="fa-solid fa-circle-check text-yellow"></i> ${s}</span>`).join('')}
        </div>

        <div class="modal-actions" style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <a href="https://wa.me/2250715032798?text=${waMessage}" target="_blank" class="btn btn-whatsapp-large" style="flex: 2; min-width: 200px; justify-content: center; padding: 0.85rem 1.4rem; font-size: 1rem;">
                <i class="fa-brands fa-whatsapp"></i> ${t("modal_order_btn")}
            </a>
            <a href="${googleSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn-google-info" style="flex: 1; min-width: 130px;">
                <i class="fa-brands fa-google text-yellow"></i> ${t("google_view")}
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
