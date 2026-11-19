/**
 * TIM TOOLS MACHINES - Application Web Dynamique & Interactive
 * Distributeur Officiel UPSPIRIT
 * Contact: +225 07 89 55 74 42 | WhatsApp: +225 07 15 03 27 98
 */

// BASE DE DONNÉES DES 36 MACHINES & OUTILS AVEC LEURS VRAIES IMAGES
const PRODUCTS = [
    {
        "id": "p1",
        "name": "Mallette d'outillage complète avec visseuse sans fil",
        "name_en": "Complete Toolkit Set with Cordless Drill (2 Batteries)",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "image": "images/p1.jpg",
        "icon": "fa-solid fa-toolbox",
        "role_badge": "Outillage complet + Visseuse 2 batt",
        "role_badge_en": "Full Toolkit + Cordless Drill",
        "role": "Coffret d'outillage complet ultra-polyvalent comprenant une perceuse-visseuse sans fil lithium avec 2 batteries et chargeur, marteau, pinces, scie, niveau, mètre ruban, forets, embouts et quincaillerie.",
        "role_en": "Comprehensive all-in-one professional toolkit featuring a cordless lithium drill with 2 batteries & charger, hammer, pliers, handsaw, level, tape measure, drill bits, screw bits and fastener assortment.",
        "specs": [
            "Visseuse 2 batteries + chargeur",
            "Marteau, pinces & clé à molette",
            "Scie, niveau & tournevis",
            "Forets, embouts & quincaillerie"
        ],
        "specs_en": [
            "Cordless drill + 2 batt + charger",
            "Hammer, pliers & wrench",
            "Handsaw, level & screwdrivers",
            "Drill & driver bits set"
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
        "role": "Pulvérisateur dorsal haute résistance de marque officielle Upspirit. Réservoir ergonomique gradué, levier de pompage manuel réversible, lance télescopique inox avec buse laiton coudée réglable et bretelles confort.",
        "role_en": "Heavy-duty genuine Upspirit backpack pressure sprayer. Ergonomic graduated tank, reversible manual pumping lever, stainless telescopic wand with adjustable brass nozzle and padded straps.",
        "specs": [
            "Capacité 16 Litres",
            "Cuve graduée Upspirit",
            "Lance inox & buse laiton réglable",
            "Bretelles de portage confort"
        ],
        "specs_en": [
            "16-Liter capacity",
            "Genuine Upspirit graduated tank",
            "Stainless wand & brass nozzle",
            "Padded backpack straps"
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
        "role": "Modèle grande contenance 20 litres conçu pour les exploitations agricoles, grands chantiers et désinfection intensive. Cuve polyéthylène haute résistance, pression constante et lance inox professionnelle.",
        "role_en": "Large 20-liter tank designed for agricultural spraying, disinfection and construction sites. Heavy HDPE tank, continuous pressure, stainless wand and adjustable brass nozzle.",
        "specs": [
            "Capacité 20 Litres",
            "Cuve polyéthylène renforcée",
            "Buse laiton réglable",
            "Pression constante & filtre"
        ],
        "specs_en": [
            "20-Liter capacity",
            "Reinforced HDPE tank",
            "Adjustable brass nozzle",
            "Continuous pressure & filter"
        ]
    },
    {
        "id": "p4",
        "name": "Coffret à douilles et cliquet 46 pièces UPSPIRIT",
        "name_en": "46-Piece Ratchet, Sockets & Bits Tool Set UPSPIRIT",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "image": "images/p4.jpg",
        "icon": "fa-solid fa-wrench",
        "role_badge": "Coffret cliquet 1/4\" & 46 pcs",
        "role_badge_en": "1/4\" Ratchet & 46-Pc Socket Set",
        "role": "Coffret antichoc jaune et noir de marque officielle UPSPIRIT contenant 46 pièces : cliquet réversible 1/4\" ergonomique, douilles acier chrome-vanadium 4 à 14 mm, poignée coulissante en T, rallonges, cardan et assortiment complet d'embouts Torx, Hex, plats et Phillips.",
        "role_en": "Genuine UPSPIRIT 46-piece shockproof mechanics set: 1/4\" quick-release reversible ratchet, 4 to 14mm CR-V steel sockets, sliding T-bar, extensions, universal joint and full Torx/Hex/Phillips bit collection.",
        "specs": [
            "Marque officielle UPSPIRIT",
            "Cliquet réversible 1/4\" ergonomique",
            "Douilles 4 à 14 mm & rallonges",
            "Embouts de précision & coffret rigide"
        ],
        "specs_en": [
            "Official UPSPIRIT brand",
            "Ergonomic 1/4\" quick-release ratchet",
            "4 to 14mm sockets & extension bars",
            "Precision bits & rugged carry case"
        ]
    },
    {
        "id": "p5",
        "name": "Souffleur électrique compact d'atelier UPSPIRIT",
        "name_en": "Compact Workshop Electric Air Blower UPSPIRIT",
        "category": "souffleur",
        "brand": "UPSPIRIT",
        "image": "images/p5.jpg",
        "icon": "fa-solid fa-wind",
        "role_badge": "Dépoussiérage & Nettoyage rapide",
        "role_badge_en": "Fast Dusting & Workshop Cleanup",
        "role": "Souffleur électrique compact ergonomique jaune & noir officiel UPSPIRIT. Conçu pour le nettoyage rapide et efficace des postes de travail, machines, climatiseurs, armoires électriques et zones difficiles d'accès.",
        "role_en": "Official UPSPIRIT ergonomic compact yellow & black electric air blower. Engineered for fast, efficient clearing of workbenches, machinery, AC units, electronics and hard-to-reach areas.",
        "specs": [
            "Modèle compact UPSPIRIT",
            "Buse directionnelle souple",
            "Moteur dynamique haute vitesse",
            "Gâchette ergonomique verrouillable"
        ],
        "specs_en": [
            "Official UPSPIRIT compact model",
            "Flexible directional nozzle",
            "High-speed airflow motor",
            "Ergonomic lock-on trigger"
        ]
    },
    {
        "id": "p6",
        "name": "Souffleur électrique jaune haute vitesse HK-BL3008",
        "name_en": "High-Speed Yellow Electric Blower HK-BL3008",
        "category": "souffleur",
        "brand": "UPSPIRIT",
        "image": "images/p6.jpg",
        "icon": "fa-solid fa-fan",
        "role_badge": "Soufflage copeaux & Sciures",
        "role_badge_en": "Sawdust & Debris Sweeping",
        "role": "Souffleur électrique haute vitesse modèle HK-BL3008 avec buse longue directionnelle. Idéal pour l'expulsion rapide des sciures de bois, copeaux d'usinage et poussières d'atelier.",
        "role_en": "High-velocity electric air blower model HK-BL3008 with long directional nozzle. Perfect for rapid sawdust clearance, machining debris and workshop dusting.",
        "specs": [
            "Modèle HK-BL3008",
            "Moteur haute vitesse",
            "Buse longue directionnelle",
            "Gâchette avec verrouillage"
        ],
        "specs_en": [
            "Model HK-BL3008",
            "High-speed motor",
            "Long directional nozzle",
            "Trigger lock-on button"
        ]
    },
    {
        "id": "p7",
        "name": "Polisseuse / Lustreuse rotative d'angle UPSPIRIT",
        "name_en": "Professional Rotary Car Polisher & Buffer UPSPIRIT",
        "category": "meuleuse",
        "brand": "UPSPIRIT",
        "image": "images/p7.jpg",
        "icon": "fa-solid fa-compact-disc",
        "role_badge": "Lustrage carrosserie & Finitions",
        "role_badge_en": "Car Polishing & Detailing",
        "role": "Polisseuse lustreuse rotative ergonomique avec disque mousse et variateur de vitesse. Idéale pour le lustrage de carrosseries automobiles, l'élimination des micro-rayures et le cirage de finitions miroir.",
        "role_en": "Ergonomic rotary polisher with foam buffing pad and variable speed. Perfect for automotive detailing, scratch removal, waxing and mirror finish polishing.",
        "specs": [
            "Disque mousse de polissage",
            "Variateur de vitesse",
            "Poignée auxiliaire latérale",
            "Bouton de verrouillage continu"
        ],
        "specs_en": [
            "Foam buffing pad included",
            "Variable speed dial",
            "Ergonomic side grip",
            "Continuous lock button"
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
        "name": "Perceuse à percussion filaire 13mm UPSPIRIT IMPACT DRILL",
        "name_en": "Corded Impact Hammer Drill 13mm UPSPIRIT IMPACT DRILL",
        "category": "perforateur",
        "brand": "UPSPIRIT",
        "image": "images/p9.jpg",
        "icon": "fa-solid fa-hammer",
        "role_badge": "Perçage & Percussion 13mm",
        "role_badge_en": "13mm Drilling & Impact Hammer",
        "role": "Perceuse à percussion filaire 13 mm de marque officielle UPSPIRIT IMPACT DRILL. Sélecteur 2 modes (perçage rotatif / percussion frappe), mandrin tout acier à clé, poignée auxiliaire 360° et réglette de profondeur.",
        "role_en": "Heavy-duty 13mm corded impact drill by official brand UPSPIRIT IMPACT DRILL. 2-mode selector (rotary drilling / impact hammering), all-steel keyed chuck, 360° aux handle and depth gauge rod.",
        "specs": [
            "Modèle UPSPIRIT IMPACT DRILL",
            "Sélecteur Perçage / Percussion",
            "Mandrin tout acier 13 mm",
            "Poignée auxiliaire + butée"
        ],
        "specs_en": [
            "UPSPIRIT IMPACT DRILL model",
            "Drill / Hammer mode switch",
            "13mm heavy-duty steel chuck",
            "Auxiliary handle + depth stop"
        ]
    },
    {
        "id": "p10",
        "name": "Marteau perforateur rotatif 24 mm SDS-Plus UPSPIRIT",
        "name_en": "24mm SDS-Plus Rotary Hammer Drill UPSPIRIT",
        "category": "perforateur",
        "brand": "UPSPIRIT",
        "image": "images/p10.jpg",
        "icon": "fa-solid fa-screwdriver-wrench",
        "role_badge": "Forage & Percussion SDS-Plus 24mm",
        "role_badge_en": "24mm SDS-Plus Rotary Hammer",
        "role": "Marteau perforateur rotatif 24 mm officiel UPSPIRIT. Sélecteur 3 modes (perçage rotatif, perforation avec frappe pneumatique, burinage d'ajustement), carter robuste, poignée auxiliaire 360° et jauge de profondeur.",
        "role_en": "Official UPSPIRIT 24mm SDS-Plus rotary hammer drill. 3-mode selector (drilling, pneumatic hammer drilling, light chiseling), rugged housing, 360° auxiliary handle and depth gauge rod.",
        "specs": [
            "Mandrin SDS-Plus 24 mm",
            "Frappe pneumatique haute cadence",
            "Sélecteur 3 modes de travail",
            "Poignée auxiliaire 360° + jauge"
        ],
        "specs_en": [
            "24mm SDS-Plus keyed/quick chuck",
            "High-frequency pneumatic impact",
            "3 functional work modes",
            "360° aux handle + depth stop"
        ]
    },
    {
        "id": "p11",
        "name": "Marteau perforateur rotatif 26 mm lourd UPSPIRIT",
        "name_en": "Heavy-Duty 26mm SDS-Plus Rotary Hammer UPSPIRIT",
        "category": "perforateur",
        "brand": "UPSPIRIT",
        "image": "images/p11.jpg",
        "icon": "fa-solid fa-gear",
        "role_badge": "Perforation béton armé & Burinage 26mm",
        "role_badge_en": "26mm Heavy Concrete Drilling",
        "role": "Perforateur burineur lourd 26 mm officiel UPSPIRIT avec carter mécanique en alliage métallique. Puissance d'impact supérieure pour perçages intensifs dans le béton armé, la pierre et démolition légère.",
        "role_en": "Official UPSPIRIT heavy-duty 26mm rotary hammer drill featuring a rugged metal alloy gearbox. High-impact energy engineered for intensive drilling in reinforced concrete, stone and light demolition.",
        "specs": [
            "Diamètre de perçage 26 mm",
            "Carter en alliage d'aluminium",
            "Force de frappe pneumatique lourde",
            "Système anti-vibration & D-Handle"
        ],
        "specs_en": [
            "26mm max drilling diameter",
            "Rugged aluminum alloy gearbox",
            "Heavy-duty pneumatic impact force",
            "Anti-vibration system & D-handle"
        ]
    },
    {
        "id": "p12",
        "name": "Marteau piqueur brise-béton HK-DH35B",
        "name_en": "Heavy Demolition Breaker Jackhammer HK-DH35B",
        "category": "perforateur",
        "brand": "UPSPIRIT",
        "image": "images/p12.jpg",
        "icon": "fa-solid fa-trowel-bricks",
        "role_badge": "Démolition lourde & Brise-béton",
        "role_badge_en": "Heavy Demolition & Breaker",
        "role": "Marteau piqueur et brise-béton haute cadence modèle HK-DH35B livré dans sa mallette métallique industrielle UPSPIRIT. Force d'impact phénoménale pour casser dalles béton, fondations, murs et tranchées.",
        "role_en": "Heavy-duty high-impact demolition breaker model HK-DH35B supplied in rugged UPSPIRIT industrial steel chest. Ultimate impact energy for breaking concrete slabs, foundations, walls and trenches.",
        "specs": [
            "Modèle HK-DH35B",
            "Coffre métallique UPSPIRIT",
            "Burin pointu + burin plat",
            "Poignée auxiliaire 360°"
        ],
        "specs_en": [
            "Model HK-DH35B",
            "Industrial steel carry chest",
            "Pointed & flat chisels included",
            "360° auxiliary handle"
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
            "Disque 115 mm (4.5\")",
            "Modèle HK-G2-115",
            "Carter orientable + poignée",
            "Clé à ergots incluse"
        ],
        "specs_en": [
            "Disc 115mm (4.5\")",
            "Model HK-G2-115",
            "Adjustable guard + handle",
            "Pin spanner included"
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
            "Disque 125 mm (5\")",
            "Interrupteur à glissière",
            "Poignée latérale 2 positions",
            "Blocage d'arbre rapide"
        ],
        "specs_en": [
            "Disc 125mm (5\")",
            "Slide on/off switch",
            "2-position side handle",
            "Spindle lock button"
        ]
    },
    {
        "id": "p19",
        "name": "Meuleuse d'angle semi-lourde 180mm",
        "name_en": "Heavy-Duty Angle Grinder 180mm",
        "category": "meuleuse",
        "brand": "UPSPIRIT",
        "image": "images/p19.jpg",
        "icon": "fa-solid fa-gear",
        "role_badge": "Découpe profonde fers 180mm",
        "role_badge_en": "180mm Deep Rebar Cutting",
        "role": "Meuleuse 180 mm haute endurance avec poignée arrière étrier D-handle pour découpes profondes dans les profilés métalliques épais, poutrelles et rails.",
        "role_en": "Heavy-duty 180mm (7\") angle grinder with rear loop handle for deep cuts in structural steel, thick rebars and beam channels.",
        "specs": [
            "Disque 180 mm (7\")",
            "Poignée arrière étrier",
            "Moteur couple élevé",
            "Accès charbons externe"
        ],
        "specs_en": [
            "Disc 180mm (7\")",
            "Rear D-handle grip",
            "High-torque motor",
            "External brush caps"
        ]
    },
    {
        "id": "p20",
        "name": "Meuleuse d'angle grand format 230mm HK-AG180",
        "name_en": "Heavy Industrial Angle Grinder 230mm HK-AG180",
        "category": "meuleuse",
        "brand": "UPSPIRIT",
        "image": "images/p20.jpg",
        "icon": "fa-solid fa-burst",
        "role_badge": "Sciage gros œuvre 230mm",
        "role_badge_en": "230mm Heavy Masonry Sawing",
        "role": "Très grand modèle 230 mm HK-AG180 pour gros travaux de chantier et métallurgie lourde. Coupe profonde des blocs de béton, dalles et structures en acier.",
        "role_en": "Extra-large 230mm angle grinder HK-AG180 for heavy construction: cutting concrete slabs, paving blocks, curb stones and heavy industrial steel.",
        "specs": [
            "Grand disque 230 mm (9\")",
            "Réf HK-AG180",
            "Poignée étrier anti-fatigue",
            "Carter orientable renforcé"
        ],
        "specs_en": [
            "Disc 230mm (9\")",
            "Model HK-AG180",
            "Anti-fatigue D-handle",
            "Reinforced guard"
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
        "name": "Scie découpeuse de carreaux & béton / Rainureuse",
        "name_en": "Handheld Tile, Marble & Concrete Cutter Saw",
        "category": "meuleuse",
        "brand": "UPSPIRIT",
        "image": "images/p22.jpg",
        "icon": "fa-solid fa-ruler-combined",
        "role_badge": "Découpe carrelage, marbre & saignées",
        "role_badge_en": "Tile, Marble & Masonry Cutting",
        "role": "Scie circulaire découpeuse de matériaux compacte haute puissance de marque officielle UPSPIRIT. Disque diamant segmenté, semelle réglable en profondeur et en biseau avec buse de coupe à eau pour carrelages, dalles et briques.",
        "role_en": "High-powered compact masonry and tile cutter by official brand UPSPIRIT. Features segmented diamond blade, depth & bevel adjustable shoe plate and wet cutting nozzle for tiles, marble and masonry.",
        "specs": [
            "Disque diamant segmenté inclus",
            "Semelle réglable profondeur & biseau",
            "Buse d'arrosage coupe à eau",
            "Poignée ergonomique sécurisée"
        ],
        "specs_en": [
            "Segmented diamond disc included",
            "Depth & bevel adjustable shoe",
            "Wet cutting water feed",
            "Ergonomic safety D-handle"
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
        "role": "Station d'onglet et tronçonneuse d'atelier HK-MS004. Bâti robuste en aluminium moulé, sac collecteur de poussière et table graduée pour coupes d'onglets nettes.",
        "role_en": "Heavy workshop miter saw HK-MS004 with heavy cast base and dust bag. Designed for fast, repetitive cross-cutting of metal and timber.",
        "specs": [
            "Modèle HK-MS004",
            "Sac récupérateur de poussière",
            "Lame carbure & presseur",
            "Plateau tournant cranté"
        ],
        "specs_en": [
            "Model HK-MS004",
            "Dust collection bag",
            "Carbide blade & clamp",
            "Graduated miter table"
        ]
    },
    {
        "id": "p24",
        "name": "Tronçonneuse à métaux / Découpeuse 355mm UPSPIRIT HK-CM355",
        "name_en": "Metal Cut-Off Saw 355mm UPSPIRIT HK-CM355",
        "category": "meuleuse",
        "brand": "UPSPIRIT",
        "image": "images/p24.jpg",
        "icon": "fa-solid fa-circle-dot",
        "role_badge": "Découpe pendulaire acier 355mm",
        "role_badge_en": "355mm Steel Chop Sawing",
        "role": "Tronçonneuse pendulaire 355 mm modèle HK-CM355 pour la découpe à froid nette et rapide de fers ronds, cornières, poutrelles et tubes acier.",
        "role_en": "Stationary abrasive metal cut-off saw 355mm (14\") model HK-CM355 for rapid cold cutting of steel pipes, angles, tubes and solid bars.",
        "specs": [
            "Disque abrasif 355 mm (14\")",
            "Modèle HK-CM355",
            "Étau de serrage rapide",
            "Carter enveloppant de sécurité"
        ],
        "specs_en": [
            "Abrasive disc 355mm (14\")",
            "Model HK-CM355",
            "Quick-release clamp vise",
            "Full spark safety guard"
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
        "role": "Générateur d'air chaud professionnel HK-HG01 avec kit de 4 buses inox. Idéal pour décaper peintures et vernis, cintrer les tuyaux PVC et rétracter gaines.",
        "role_en": "Professional heat gun model HK-HG01 with 4 stainless nozzles included. Ideal for paint stripping, pipe bending and heat-shrink tubing.",
        "specs": [
            "Réf HK-HG01",
            "4 buses inox fournies",
            "Thermostat 2 allures",
            "Position statique verticale"
        ],
        "specs_en": [
            "Model HK-HGO1",
            "4 stainless nozzles included",
            "Dual-temperature switch",
            "Hands-free vertical stand"
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
        "role": "Touret d'établi 150 mm HK-BG601 à deux meules (ébauche et finition). Écrans pare-étincelles transparents et porte-outils réglables pour l'affûtage de mèches, forets, ciseaux et burins.",
        "role_en": "Twin-wheel 150mm (6\") bench grinder HK-BG601 with dual transparent spark shields and adjustable tool rests. Ideal for sharpening drill bits, chisels and metal deburring.",
        "specs": [
            "Meules 150 mm (6\")",
            "Modèle HK-BG601",
            "Écrans pare-étincelles réglables",
            "Socle fonte anti-vibrations"
        ],
        "specs_en": [
            "Wheels 150mm (6\")",
            "Model HK-BG601",
            "Adjustable spark shields",
            "Anti-vibration cast base"
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
        "role": "Grand touret d'atelier 200 mm HK-BG801 lourd et stable. Équipé de deux meules 200 mm grand diamètre pour l'écroûtage, le meulage intensif de pièces métalliques et le réaffûtage lourd.",
        "role_en": "Heavy-duty 200mm (8\") bench grinder HK-BG801 with powerful induction motor for intensive sharpening, heavy metal grinding and tool restoration.",
        "specs": [
            "Meules 200 mm (8\")",
            "Modèle HK-BG801",
            "Écrans de protection transparents",
            "Socle fonte d'atelier robuste"
        ],
        "specs_en": [
            "Wheels 200mm (8\")",
            "Model HK-BG801",
            "Clear safety eye shields",
            "Heavy-duty cast iron base"
        ]
    },
    {
        "id": "p28",
        "name": "Perceuse électrique filaire 13mm UPSPIRIT HK-ED1305",
        "name_en": "Corded Electric Drill 13mm UPSPIRIT HK-ED1305",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "image": "images/p28.jpg",
        "icon": "fa-solid fa-bore-hole",
        "role_badge": "Perçage filaire précis 13mm",
        "role_badge_en": "13mm Precise Corded Drilling",
        "role": "Perceuse électrique maniable et puissante officielle UPSPIRIT modèle HK-ED1305. Mandrin tout acier 13 mm à clé, poignée auxiliaire 360°, réglette de profondeur, inverseur de sens et variateur électronique pour percer avec précision bois, métal, maçonnerie et plastique.",
        "role_en": "Official UPSPIRIT heavy-duty 13mm corded drill model HK-ED1305. Features an all-steel 13mm keyed chuck, 360° aux handle, depth rod, reverse switch and electronic variable speed for accurate drilling in steel, wood, masonry and plastic.",
        "specs": [
            "Mandrin acier à clé 13 mm",
            "Modèle officiel UPSPIRIT",
            "Poignée auxiliaire 360° + butée",
            "Variateur et inverseur de sens"
        ],
        "specs_en": [
            "13mm keyed steel chuck",
            "Official UPSPIRIT model",
            "360° aux handle + depth stop",
            "Variable speed + reverse switch"
        ]
    },
    {
        "id": "p29",
        "name": "Enrouleur de câble électrique 25m UPSPIRIT HK-CR25",
        "name_en": "Cable Extension Reel 25m UPSPIRIT HK-CR25",
        "category": "cables",
        "brand": "UPSPIRIT",
        "image": "images/p29.jpg",
        "icon": "fa-solid fa-satellite-dish",
        "role_badge": "Alimentation mobile sécurisée 25m",
        "role_badge_en": "25m Safe Mobile Power Reel",
        "role": "Tambour enrouleur 25 mètres HK-CR25 avec câble jaune haute visibilité. Châssis métallique tubulaire stable, 4 prises protégées par clapets étanches et disjoncteur thermique avec bouton reset.",
        "role_en": "Heavy-duty 25-meter cable reel HK-CR25 with high-visibility yellow cable, steel tubular stand, 4 flap-protected sockets and thermal overload reset.",
        "specs": [
            "Longueur 25 mètres",
            "Câble jaune haute visibilité",
            "4 prises à clapets étanches",
            "Disjoncteur thermique reset"
        ],
        "specs_en": [
            "25 meters length",
            "High-vis yellow cable",
            "4 flap-covered sockets",
            "Thermal overload reset"
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
        "role": "Grand enrouleur de chantier 50 mètres HK-CR50 sur pied tubulaire acier. Flasque tambour jaune haute résistance, 4 prises à obturateur avec disjoncteur thermique et poignée de rembobinage rapide.",
        "role_en": "Heavy-duty 50-meter extension drum HK-CR50 on steel tubular stand with yellow steel drum, 4 protected sockets, thermal cutoff button and rapid winder crank.",
        "specs": [
            "Portée 50 mètres",
            "Modèle HK-CR50",
            "Tambour jaune renforcé",
            "4 prises + disjoncteur thermique"
        ],
        "specs_en": [
            "50 meters length",
            "Model HK-CR50",
            "Reinforced yellow drum",
            "4 sockets + thermal safety"
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
        "role": "Enrouleur professionnel 50 mètres HK-CR50 doté d'un carénage protecteur intégral jaune et noir. 4 prises étanches à clapets IP44, poignée de portage ergonomique et manivelle escamotable.",
        "role_en": "Enclosed cassette 50m cable drum HK-CR50 protecting cord from dust, water splashes and impacts. 4 IP44 flap sockets and ergonomic carry handle.",
        "specs": [
            "Longueur 50 m",
            "Carénage antichoc jaune/noir",
            "4 prises étanches à clapets IP44",
            "Manivelle d'enroulement fluide"
        ],
        "specs_en": [
            "50m enclosed cassette",
            "Shockproof yellow/black casing",
            "4 IP44 flap-covered sockets",
            "Smooth winding knob"
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
        "role": "Enrouleur tambour caréné compact 25 mètres HK-CR25. Boîtier circulaire jaune et noir avec poignée intégrée, 4 prises sécurisées, interrupteur à bascule lumineux et manivelle escamotable.",
        "role_en": "Compact enclosed 25m cable reel HK-CR25. Yellow & black round housing with integrated top handle, 4 grounded sockets, illuminated switch and fold-out winder crank.",
        "specs": [
            "Longueur 25 m",
            "Modèle HK-CR25",
            "Interrupteur à bascule étanche",
            "Manivelle repliable fluide"
        ],
        "specs_en": [
            "25m enclosed drum",
            "Model HK-CR25",
            "Illuminated rocker switch",
            "Fold-out winding crank"
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
        "role": "Cordon prolongateur de haute sécurité de 10 mètres de marque officielle UPSPIRIT. Fiche Schuko renforcée, prise femelle avec clapet étanche IP44 à ressort et sangle velcro de rangement.",
        "role_en": "Heavy-duty 10-meter UPSPIRIT extension lead with Schuko plug, IP44 spring-loaded waterproof socket flap and velcro storage strap.",
        "specs": [
            "Longueur 10 mètres (16A max)",
            "Prise femelle étanche IP44",
            "Fiche mâle Schuko renforcée",
            "Attaches velcro incluses"
        ],
        "specs_en": [
            "10 meters length (16A max)",
            "IP44 spring-loaded flap socket",
            "Reinforced Schuko plug",
            "Velcro tidy straps included"
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
        "role": "Paire de balais de charbon haute densité gravés UPSPIRIT pour moteurs électriques d'outils électroportatifs. Assure un contact électrique parfait sans étincelage excessif.",
        "role_en": "High-conductivity genuine UPSPIRIT engraved replacement carbon brushes for electric tool motors and power tools.",
        "specs": [
            "Graphite haute qualité",
            "Ressort & cosse cuivre",
            "Gravure officielle Upspirit",
            "Durabilité prolongée"
        ],
        "specs_en": [
            "Genuine Upspirit engraved",
            "High conductivity graphite",
            "Copper helical spring",
            "Extended motor life"
        ]
    },
    {
        "id": "p35",
        "name": "Balai de charbon perforateur UP-CB",
        "name_en": "Hammer Drill Carbon Brushes UP-CB (Pair)",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "image": "images/p35.jpg",
        "icon": "fa-solid fa-sparkles",
        "role_badge": "Charbon perforateur lourd UP-CB",
        "role_badge_en": "Heavy Hammer Drill Carbon Brush",
        "role": "Paire de balais de charbon haute densité pour marteaux perforateurs et piqueurs. Gravure officielle Upspirit UP-CB, ressorts hélicoïdaux en cuivre et cosses plates de connexion rapide.",
        "role_en": "Pair of high-density carbon brushes for rotary hammers and demolition breakers. Genuine Upspirit UP-CB laser engraving, copper springs and flat brass spade connectors.",
        "specs": [
            "Réf officielle UP-CB",
            "Gravure laser Upspirit",
            "Ressorts cuivre & cosses plates",
            "Haute résistance thermique"
        ],
        "specs_en": [
            "Official ref UP-CB",
            "Laser engraved Upspirit",
            "Copper springs & spade lugs",
            "High thermal resistance"
        ]
    },
    {
        "id": "p36",
        "name": "Échelle & Escabeau articulé télescopique UPSPIRIT",
        "name_en": "UPSPIRIT Multi-Position Articulated Telescopic Ladder",
        "category": "echelles",
        "brand": "UPSPIRIT",
        "image": "images/p36.jpg",
        "icon": "fa-solid fa-stairs",
        "role_badge": "Échelle articulée multifonction",
        "role_badge_en": "Multi-Position Articulated Ladder",
        "role": "Échelle et escabeau articulé transformable de marque officielle UPSPIRIT. Montants renforcés jaunes, charnières de sécurité à verrouillage multiposition et barre stabilisatrice avec patins antidérapants.",
        "role_en": "Professional genuine UPSPIRIT articulated multi-position ladder and stepladder. Reinforced yellow stiles, multi-angle locking hinges and wide stabilizer bar with anti-slip feet.",
        "specs": [
            "Marque officielle UPSPIRIT",
            "Charnières articulées multipositions",
            "Configuration échelle & escabeau",
            "Pieds stabilisateurs antidérapants"
        ],
        "specs_en": [
            "Official brand UPSPIRIT",
            "Multi-angle locking hinges",
            "Ladder & Stepladder setup",
            "Wide anti-slip stabilizer base"
        ]
    }
,
    {
        
        "id": "p37",
        "name": "Balance mécanique à ressort sur plateforme 20 kg",
        "name_en": "Spring Platform Mechanical Scale 20kg",
        "category": "pesage",
        "brand": "UPSPIRIT",
        "model": "20KG SCALE",
        "image": "images/scale_20kg.jpg",
        "icon": "fa-solid fa-scale-balanced",
        "role_badge": "Pesage mécanique 20 kg",
        "role_badge_en": "20kg Platform Scale",
        "role": "Balance mécanique à ressort avec grand plateau inox embouti et cadran circulaire haute visibilité. Parfaite pour le pesage quotidien de marchandises, colis et denrées jusqu'à 20 kg en atelier, commerce ou entrepôt.",
        "role_en": "Heavy-duty mechanical spring platform scale with stainless steel pan and high-visibility dial. Perfect for market, parcel, and workshop weighing up to 20kg without electricity.",
        "specs": [
                "Capacité maximale : 20 kg",
                "Plateau embouti en acier inoxydable",
                "Cadran de lecture précis à aiguille",
                "Mécanisme à ressort robuste sans pile"
        ],
        "specs_en": [
                "20 kg maximum weighing capacity",
                "Stainless steel durable platform",
                "High-visibility dial indicator",
                "Zero electricity required, battery-free"
        ],
        "inStock": true
    },
    {
        
        "id": "p38",
        "name": "Peson mécanique suspendu à aiguille 200 kg",
        "name_en": "Heavy Duty Hanging Spring Scale 200kg",
        "category": "pesage",
        "brand": "UPSPIRIT",
        "model": "200KG SCALE",
        "image": "images/scale_200kg.jpg",
        "icon": "fa-solid fa-scale-unbalanced",
        "role_badge": "Peson suspendu 200 kg",
        "role_badge_en": "200kg Hanging Scale",
        "role": "Peson de traction mécanique suspendu avec double crochet de sécurité en acier trempé. Conçu pour le pesage fiable de charges lourdes, sacs agricoles, gibiers et structures jusqu'à 200 kg.",
        "role_en": "Industrial suspended mechanical crane/hanging scale with heavy-duty forged steel hooks. Designed for weighing agricultural bags, luggage, and heavy parts up to 200kg.",
        "specs": [
                "Capacité de pesage : 200 kg",
                "Corps métallique renforcé antichoc",
                "Crochets supérieur et inférieur en acier forgé",
                "Graduation claire et calibrée"
        ],
        "specs_en": [
                "200 kg weighing capacity",
                "Reinforced metallic casing",
                "Heavy-duty forged steel hooks",
                "Clear calibrated dual scale"
        ],
        "inStock": true
    },
    {
        
        "id": "p39",
        "name": "Masque de protection respiratoire FFP2 (Boîte de 20)",
        "name_en": "FFP2 Certified Protective Respirator Mask (Box of 20)",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "FFP2 MASK",
        "image": "images/mask_ffp2.jpg",
        "icon": "fa-solid fa-head-side-mask",
        "role_badge": "Protection FFP2 certifiée",
        "role_badge_en": "Certified FFP2 Protection",
        "role": "Masque de protection respiratoire FFP2 haute filtration contre les poussières fines de chantier, sciures de bois, résidus de béton, vapeurs et particules industrielles. Barrette nasale ajustable et élastiques confort.",
        "role_en": "Certified FFP2 particulate respirator mask providing high-efficiency filtration against jobsite dust, sawdust, concrete debris, fumes and fine particles. Features adjustable nose clip and comfort elastic bands.",
        "specs": [
                "Filtration haute efficacité FFP2",
                "Protection poussières BTP, sciure & ponçage",
                "Barrette nasale ajustable anatomique",
                "Conditionnement économique boîte de 20 pcs"
        ],
        "specs_en": [
                "Certified FFP2 high filtration rating",
                "Protects from construction & sanding dust",
                "Adjustable contoured nose clip",
                "Economic box of 20 pieces"
        ],
        "inStock": true
    },
    {
        
        "id": "p40",
        "name": "Monture de scie à métaux tubulaire 420 g",
        "name_en": "Hack Saw Tubular Steel Frame 420g",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "HACK SAW 420G",
        "image": "images/hacksaw_420g.jpg",
        "icon": "fa-solid fa-ruler-combined",
        "role_badge": "Scie à métaux 420 g",
        "role_badge_en": "420g Hack Saw Frame",
        "role": "Monture de scie à métaux légère et maniable de 420 g en acier tubulaire avec poignée ergonomique. Système de tension rapide de lame pour coupe nette des profilés métalliques, tubes acier et PVC.",
        "role_en": "420g tubular steel hacksaw frame with ergonomic handle. Quick blade tensioning mechanism for clean cutting of steel tubes, PVC pipes and metal profiles.",
        "specs": [
                "Poids maniable 420 g",
                "Cadre tubulaire acier laqué anticorrosion",
                "Compatible avec lames standard 300 mm (12\")",
                "Tension de lame facile par écrou papillon"
        ],
        "specs_en": [
                "420g lightweight ergonomic frame",
                "Tubular powder-coated rustproof steel",
                "Fits standard 300mm / 12\" blades",
                "Wing-nut blade tensioning mechanism"
        ],
        "inStock": true
    },
    {
        
        "id": "p41",
        "name": "Monture de scie à métaux professionnelle lourde 500 g",
        "name_en": "Professional Heavy-Duty Hack Saw Frame 500g",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "HACK SAW 500G",
        "image": "images/hacksaw_500g.jpg",
        "icon": "fa-solid fa-wrench",
        "role_badge": "Scie pro haute tension 500 g",
        "role_badge_en": "500g Pro High-Tension Saw",
        "role": "Monture de scie à métaux renforcée 500 g avec poignée fermée antidérapante en aluminium coulé. Excellente rigidité de tension pour sciage intensif sur chantier et en atelier mécanique.",
        "role_en": "Reinforced 500g hacksaw frame with die-cast aluminum closed handle. Superior frame rigidity allowing high blade tension for demanding workshop and site metal cutting.",
        "specs": [
                "Poids lourd 500 g structure rigide",
                "Poignée fermée ergonomique en fonte d'aluminium",
                "Mécanisme haute tension pour coupe droite",
                "Sciage d'angle droit et incliné à 45°"
        ],
        "specs_en": [
                "500g heavy-duty reinforced design",
                "Die-cast aluminum enclosed safety grip",
                "High-tension blade locking mechanism",
                "Straight and 45-degree angle cutting"
        ],
        "inStock": true
    },
    {
        
        "id": "p42",
        "name": "Clé à molette grande capacité 15\" & 18\" en acier forgé",
        "name_en": "Heavy Duty Drop-Forged Adjustable Wrench 15\" & 18\"",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "HK-AW15 / HK-AW18",
        "image": "images/wrench_adjustable.jpg",
        "icon": "fa-solid fa-wrench",
        "role_badge": "Clé à molette 15\" - 18\"",
        "role_badge_en": "15\" - 18\" Adj. Wrench",
        "role": "Clé à molette professionnelle grand format en acier au carbone forgé chromé. Mâchoire graduée au laser avec vis sans fin de précision pour un réglage fluide et un couple de serrage puissant en plomberie et mécanique lourde.",
        "role_en": "Drop-forged carbon steel heavy-duty adjustable wrench with chrome finish. Laser-etched metric scale with smooth knurl adjustment for maximum torque and plumbing versatility.",
        "specs": [
                "Tailles disponibles : 15 pouces et 18 pouces",
                "Acier au carbone forgé trempé haute résistance",
                "Échelle millimétrique gravée au laser",
                "Ouverture extra-large pour écrous gros diamètre"
        ],
        "specs_en": [
                "Available in 15\" and 18\" sizes",
                "Drop-forged heat-treated carbon steel",
                "Laser-etched metric jaw graduations",
                "Extra-wide jaw capacity for heavy fittings"
        ],
        "inStock": true
    },
    {
        
        "id": "p43",
        "name": "Niveau à bulle aluminium 60 cm orange HK-2006C",
        "name_en": "Professional Aluminum Box Spirit Level 60cm Orange HK-2006C",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "HK-2006C",
        "image": "images/level_orange_2006c.jpg",
        "icon": "fa-solid fa-ruler-horizontal",
        "role_badge": "Niveau tubulaire 60 cm",
        "role_badge_en": "60cm Box Spirit Level",
        "role": "Niveau de maçonnerie en aluminium extrudé renforcé 60 cm avec 3 fioles acryliques antichoc (0°, 90°, 45°). Embouts en caoutchouc absorbeurs de chocs pour protéger le niveau des chutes de chantier.",
        "role_en": "Reinforced extruded aluminum box beam spirit level 60cm with 3 shockproof acrylic vials (horizontal, plumb, 45°). Shock-absorbing rubber end caps protect during heavy jobsite use.",
        "specs": [
                "Longueur 60 cm profilé rigide thermolaqué",
                "3 fioles haute visibilité : 0°, 45° et 90°",
                "Embouts antichocs en caoutchouc souple",
                "Précision professionnelle 0.5 mm/m"
        ],
        "specs_en": [
                "60cm rigid powder-coated aluminum box beam",
                "3 high-visibility vials (0°, 45°, 90°)",
                "Shock-absorbing rubber end caps",
                "Professional accuracy 0.5 mm/m"
        ],
        "inStock": true
    },
    {
        
        "id": "p44",
        "name": "Niveau à bulle aluminium jaune 60 cm HK-HT660B avec poignées",
        "name_en": "Heavy Aluminum Spirit Level 60cm Yellow HK-HT660B with Grips",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "HK-HT660B",
        "image": "images/level_yellow_ht660b.jpg",
        "icon": "fa-solid fa-ruler-horizontal",
        "role_badge": "Niveau à poignées 60 cm",
        "role_badge_en": "60cm Hand-Grip Level",
        "role": "Niveau tubulaire jaune 60 cm haute précision avec double poignée ergonomique intégrée et base usinée pour une planéité parfaite sur tous vos travaux de nivellement, coffrage et menuiserie.",
        "role_en": "60cm yellow tubular spirit level with integrated dual ergonomic hand grips and milled measuring surface for maximum leveling precision in framing and carpentry.",
        "specs": [
                "Longueur 60 cm avec poignées ergonomiques intégrées",
                "Base fraisée pour une planéité absolue",
                "3 fioles de contrôle étanches et lisibles",
                "Structure en alliage d'aluminium renforcé"
        ],
        "specs_en": [
                "60cm with dual ergonomic comfort grip slots",
                "Precision-milled measuring base",
                "3 shockproof sealed acrylic vials",
                "Reinforced heavy-gauge aluminum alloy"
        ],
        "inStock": true
    },
    {
        
        "id": "p45",
        "name": "Niveau à bulle de précision blanc 60 cm HK-WN660B",
        "name_en": "Precision White Spirit Level 60cm HK-WN660B",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "HK-WN660B",
        "image": "images/level_white_wn660b.jpg",
        "icon": "fa-solid fa-ruler-horizontal",
        "role_badge": "Niveau de finition 60 cm",
        "role_badge_en": "60cm Finishing Level",
        "role": "Niveau à bulle laqué blanc 60 cm pour menuiserie, carrelage et second œuvre. Finition anti-rayures, fioles traitées anti-UV pour une excellente lisibilité sur les chantiers lumineux.",
        "role_en": "60cm white powder-coated spirit level for carpentry, tiling and interior finishing. Scratch-resistant finish and UV-resistant vials for clear readings under bright sun.",
        "specs": [
                "Longueur 60 cm finition laquée blanche",
                "Fioles de haute précision traitées anti-UV",
                "Profil aluminium résistant aux déformations",
                "Lecture horizontale, verticale et d'onglet 45°"
        ],
        "specs_en": [
                "60cm white powder-coated finish",
                "UV-resistant precision tubular vials",
                "Torsion-resistant aluminum structure",
                "Plumb, level and 45° miter readings"
        ],
        "inStock": true
    },
    {
        
        "id": "p46",
        "name": "Niveau à bulle de maçon vert 60 cm HK-98B",
        "name_en": "Jobsite Green Masonry Spirit Level 60cm HK-98B",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "HK-98B",
        "image": "images/level_green_98b.jpg",
        "icon": "fa-solid fa-ruler-horizontal",
        "role_badge": "Niveau maçon 60 cm",
        "role_badge_en": "60cm Masonry Level",
        "role": "Niveau à bulle vert 60 cm conçu pour le gros œuvre, la pose de briques et la maçonnerie. Robuste, résistant aux chutes et facile à nettoyer après contact avec le ciment.",
        "role_en": "Heavy-duty 60cm green box level built for masonry and structural construction. Highly durable, shockproof and easy to wipe clean of mortar and cement.",
        "specs": [
                "Longueur 60 cm corps robuste spécial chantier",
                "Conçu pour la maçonnerie et le gros œuvre",
                "Fioles incassables scellées haute précision",
                "Excellente stabilité d'appui au sol et sur briques"
        ],
        "specs_en": [
                "60cm rugged green body for jobsites",
                "Built for masonry, framing and bricklaying",
                "Sealed shatterproof high-accuracy vials",
                "Flat stable working base for accurate laying"
        ],
        "inStock": true
    },
    {
        
        "id": "p47",
        "name": "Niveau à bulle magnétique renforcé 60 cm HK-938B",
        "name_en": "Magnetic Heavy Aluminum Spirit Level 60cm HK-938B",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "HK-938B",
        "image": "images/level_yellow_938b.jpg",
        "icon": "fa-solid fa-ruler-horizontal",
        "role_badge": "Niveau magnétique 60 cm",
        "role_badge_en": "60cm Magnetic Level",
        "role": "Niveau tubulaire équipé d'une base magnétique puissante pour fixation directe sur charpentes métalliques, tubes acier et structures de chaudronnerie. Travaillez les mains libres en toute précision.",
        "role_en": "60cm magnetic spirit level with powerful rare-earth magnets embedded in the base for hands-free attachment to steel beams, studs and metal piping.",
        "specs": [
                "Longueur 60 cm avec semelle magnétique puissante",
                "Adhérence solide sur profilés acier et tuyaux",
                "3 fioles de mesure de haute précision",
                "Poignée de manipulation intégrée"
        ],
        "specs_en": [
                "60cm with powerful magnetic base",
                "Strong hold on steel beams and pipes",
                "3 precision measurement acrylic vials",
                "Integrated ergonomic hand grip"
        ],
        "inStock": true
    },
    {
        
        "id": "p48",
        "name": "Mini niveau à bulle torpille HK-C93",
        "name_en": "Mini Pocket Torpedo Spirit Level HK-C93",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "HK-C93",
        "image": "images/level_mini_c93.jpg",
        "icon": "fa-solid fa-ruler-horizontal",
        "role_badge": "Mini niveau de poche",
        "role_badge_en": "Pocket Torpedo Level",
        "role": "Mini niveau ultra-compact torpille se glissant aisément dans une poche pour vérification rapide des alignements, prises électriques, interrupteurs, tableaux et étagères.",
        "role_en": "Ultra-compact pocket torpedo level designed for rapid alignment of electrical boxes, switches, plumbing runs, pictures and shelving in tight spaces.",
        "specs": [
                "Format poche ultra-compact et léger",
                "Fioles de contrôle horizontale et verticale",
                "Idéal électriciens, plombiers & poseurs",
                "Corps résistant aux chocs quotidiens"
        ],
        "specs_en": [
                "Pocket-sized ultra-compact profile",
                "Horizontal and vertical precision vials",
                "Ideal for electricians & plumbers",
                "Shock-resistant durable body"
        ],
        "inStock": true
    },
    {
        
        "id": "p49",
        "name": "Équerres de fixation pour étagères acier blanc (6x8 à 12x14)",
        "name_en": "Heavy Duty White Steel Shelf Brackets (6x8 to 12x14)",
        "category": "quincaillerie",
        "brand": "UPSPIRIT",
        "model": "SHELF BRACKET 6*8 à 12*14",
        "image": "images/shelf_bracket.jpg",
        "icon": "fa-solid fa-boxes-stacked",
        "role_badge": "Équerres étagère 6x8\" à 12x14\"",
        "role_badge_en": "Shelf Brackets 6x8\"-12x14\"",
        "role": "Équerres murales en acier embouti laqué blanc avec renfort diagonal pour supporter de lourdes charges sur étagères de magasin, atelier, garage ou domicile.",
        "role_en": "Heavy-duty cold-rolled steel shelf brackets in glossy white powder coating with diagonal brace for high load-bearing capacity in shops and warehouses.",
        "specs": [
                "Dimensions au choix : 6x8, 8x10, 10x12, 12x14 pouces",
                "Acier renforcé laqué blanc anticorrosion",
                "Renfort diagonal pour charge lourde",
                "Trous fraisés pré-percés pour fixation murale facile"
        ],
        "specs_en": [
                "Sizes: 6x8, 8x10, 10x12, 12x14 inches",
                "Heavy-duty rustproof white powder coat",
                "Reinforced diagonal strut for heavy loads",
                "Countersunk mounting holes for easy install"
        ],
        "inStock": true
    },
    {
        
        "id": "p50",
        "name": "Coupe-boulons professionnel 24\" à 48\" en acier forgé",
        "name_en": "Industrial Heavy Duty Bolt Cutter 24\" to 48\"",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "BOLT CLIPPER 24\" à 48\"",
        "image": "images/bolt_clipper.jpg",
        "icon": "fa-solid fa-scissors",
        "role_badge": "Coupe-boulons 24\" - 48\"",
        "role_badge_en": "24\" - 48\" Bolt Clipper",
        "role": "Coupe-boulons professionnel pour le sectionnement rapide des aciers ronds, fers à béton, cadenas, maillons de chaîne et câbles d'acier. Mâchoires forgées trempées chrome-molybdène avec double démultiplication d'effort.",
        "role_en": "Heavy-duty industrial bolt clippers for cutting reinforced rebar, padlocks, chains and high-tensile steel wire. Drop-forged Chrome-Moly jaws with high-leverage compound hinge.",
        "specs": [
                "Disponible en : 24\", 30\", 36\", 42\" et 48\"",
                "Mâchoires forgées chrome-molybdène trempé (Cr-Mo)",
                "Bras tubulaires en acier avec poignées caoutchouc",
                "Vis excentrique de réglage de parallélisme des lames"
        ],
        "specs_en": [
                "Available sizes: 24\", 30\", 36\", 42\", 48\"",
                "Drop-forged Chrome-Moly hardened jaws (Cr-Mo)",
                "Tubular steel handles with non-slip grips",
                "Eccentric bolt jaw adjustment mechanism"
        ],
        "inStock": true
    },
    {
        
        "id": "p51",
        "name": "Ruban téflon d'étanchéité PTFE plomberie (19mm x 15m x 0.2mm)",
        "name_en": "PTFE Teflon Thread Seal Plumbing Tape (19mm*15m*0.2mm)",
        "category": "quincaillerie",
        "brand": "UPSPIRIT",
        "model": "PTFE TAPE 19mm*15m*0.2mm",
        "image": "images/ptfe_teflon_tape.jpg",
        "icon": "fa-solid fa-tape",
        "role_badge": "Téflon PTFE 19 mm",
        "role_badge_en": "PTFE Thread Tape 19mm",
        "role": "Ruban téflon 100% PTFE haute densité pour l'étanchéité absolue de tous raccords filetés en plomberie sanitaire, réseaux de gaz et compresseurs d'air. Résiste aux hautes pressions et températures extrêmes.",
        "role_en": "Professional high-density 100% PTFE thread sealing tape for water, gas, air and hydraulic threaded pipe joints. Resists high pressures and temperature fluctuations.",
        "specs": [
                "Dimensions professionnelles : 19 mm x 15 m x 0.20 mm",
                "Étanchéité parfaite eau sous pression, gaz et air",
                "Résistance chimique absolue et anticorrosion",
                "Disponible à l'unité ou en lot de boîtes de chantier"
        ],
        "specs_en": [
                "Pro dimensions: 19mm x 15m x 0.20mm thickness",
                "Leak-proof seal for pressurized water, gas & air",
                "Absolute chemical and corrosion resistance",
                "Available individually or in wholesale packs"
        ],
        "inStock": true
    },
    {
        
        "id": "p52",
        "name": "Ressort de tension industriel en acier haute résilience",
        "name_en": "Heavy Duty Industrial Steel Extension Tension Spring",
        "category": "quincaillerie",
        "brand": "UPSPIRIT",
        "model": "INDUSTRIAL SPRING",
        "image": "images/tension_spring.jpg",
        "icon": "fa-solid fa-ring",
        "role_badge": "Ressort de tension",
        "role_badge_en": "Extension Spring",
        "role": "Ressort de traction industrielle en acier au carbone haute résilience avec boucles d'accrochage forgées. Conçu pour machines agricoles, portes basculantes d'atelier, cribles et mécanismes industriels lourds.",
        "role_en": "Heavy-duty carbon steel extension tension spring with forged end loops. Engineered for agricultural machinery, overhead workshop doors, and industrial mechanical tensioning.",
        "specs": [
                "Acier ressort à haute limite élastique",
                "Boucles d'accrochage d'extrémité ultra-résistantes",
                "Traitement de surface galvanisé antirouille",
                "Longévité et résistance sous traction cyclique intense"
        ],
        "specs_en": [
                "High-elasticity carbon spring steel",
                "Heavy-duty forged closed end loops",
                "Zinc-plated rust-resistant surface treatment",
                "High fatigue resistance under cyclic tension"
        ],
        "inStock": true
    },
    {
        
        "id": "p53",
        "name": "Vis pour plaques de plâtre & vis à bois aggloméré",
        "name_en": "Drywall Screws & Chipboard Wood Fasteners Assortment",
        "category": "quincaillerie",
        "brand": "UPSPIRIT",
        "model": "DRYWALL & CHIPBOARD SCREWS",
        "image": "images/drywall_chipboard_screws.jpg",
        "icon": "fa-solid fa-screwdriver",
        "role_badge": "Vis plâtre & bois 3/4\" à 2\"",
        "role_badge_en": "Drywall & Wood Screws",
        "role": "Gamme complète de vis phosphatées noires pour plaques de plâtre (Placo) et vis zinguées pour bois et panneaux d'aggloméré. Filetage affûté et empreinte cruciforme pour un vissage rapide sans pré-trou.",
        "role_en": "Full line of black phosphated drywall screws and yellow zinc chipboard screws. Deep threads for rapid bite and countersunk bugle head for clean flush finish.",
        "specs": [
                "Vis plâtre noires : 6x3/4\", 6x1\", 6x1-1/4\", 6x1-1/2\", 6x2\"",
                "Vis bois aggloméré : 7x3/4\", 7x1\", 7x1-1/4\", 7x1-1/2\", 7x2\"",
                "Pointe autoforeuse acérée anti-fendillement",
                "Acier cémenté trempé haute résistance à la torsion"
        ],
        "specs_en": [
                "Drywall: 6x3/4\", 6x1\", 6x1-1/4\", 6x1-1/2\", 6x2\"",
                "Chipboard: 7x3/4\", 7x1\", 7x1-1/4\", 7x1-1/2\", 7x2\"",
                "Sharp piercing point prevents wood splitting",
                "Case-hardened steel prevents head breakage"
        ],
        "inStock": true
    },
    {
        
        "id": "p54",
        "name": "Jeu de clés Allen hexagonales & clés étoiles Torx",
        "name_en": "Folding Hex Allen Key & Torx Star Wrench Set",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "ALLEN WRENCH SET (HEX & TORX)",
        "image": "images/allen_hex_torx_keys.jpg",
        "icon": "fa-solid fa-key",
        "role_badge": "Jeu de clés Allen & Torx",
        "role_badge_en": "Hex & Torx Key Set",
        "role": "Jeu de clés mâles hexagonales 6 pans et clés étoiles Torx en acier chrome-vanadium trempé. Support ergonomique pratique pour montage mécanique, entretien de machines, motos et serrage de précision.",
        "role_en": "Metric hex Allen key and Torx star wrench set made of heat-treated Chrome-Vanadium alloy steel. Ergonomic organizer holder for mechanical assembly and precision machinery servicing.",
        "specs": [
                "Jeux complets 6 pans métriques (Hex) et étoiles (Torx)",
                "Acier Chrome-Vanadium forgé (Cr-V) haute dureté",
                "Extrémités chanfreinées pour insertion rapide",
                "Boîtier support compact pliable de rangement"
        ],
        "specs_en": [
                "Complete Hex metric and Torx star sets",
                "Drop-forged Chrome-Vanadium steel (Cr-V)",
                "Chamfered tips for quick socket seating",
                "Compact fold-up ergonomic organizer"
        ],
        "inStock": true
    },
    {
        
        "id": "p55",
        "name": "Coupe-verre professionnel à molette carbure & réservoir d'huile",
        "name_en": "Professional Oil-Feed Carbide Wheel Glass Cutter",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "GLASS CUTTING TOOLS",
        "image": "images/glass_cutter.jpg",
        "icon": "fa-solid fa-gem",
        "role_badge": "Coupe-verre carbure",
        "role_badge_en": "Carbide Glass Cutter",
        "role": "Coupe-verre d'artisan vitrier avec tête métallique pivotante et molette de coupe en carbure de tungstène. Manche ergonomique avec réservoir d'huile de lubrification pour une rayure nette sans éclat du verre et miroir.",
        "role_en": "Professional glass cutter equipped with tungsten carbide scoring wheel and lubricated oil-feed barrel. Ergonomic metal handle ensures effortless, clean scored breaks on glass and mirrors.",
        "specs": [
                "Molette en carbure de tungstène ultra-résistante",
                "Réservoir d'huile intégré pour découpe fluide",
                "Capacité d'épaisseur de verre : 2 mm à 12 mm",
                "Bille métallique terminale pour percussion et détachement"
        ],
        "specs_en": [
                "Tungsten carbide long-life cutting wheel",
                "Automatic oil dispensing lubrication barrel",
                "Glass cutting thickness: 2mm to 12mm",
                "Solid metal ball end for clean snap tapping"
        ],
        "inStock": true
    },
    {
        
        "id": "p56",
        "name": "Tournevis d'électricien rouge 6\" lame plate isolée",
        "name_en": "Electrician Slotted Screwdriver 6\" Red Insulated Grip",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "SCREW DRIVER 6\"-",
        "image": "images/screwdriver_red.jpg",
        "icon": "fa-solid fa-screwdriver",
        "role_badge": "Tournevis plat 6\"",
        "role_badge_en": "6\" Slotted Screwdriver",
        "role": "Tournevis plat d'électricien 6 pouces avec tige en acier chrome-vanadium trempé et manche ergonomique rouge isolant. Pointe usinée noircie magnétique pour maintenir les vis en place.",
        "role_en": "6-inch slotted flathead electrician screwdriver featuring high-grade Chrome-Vanadium steel shank and ergonomic red anti-slip impact grip handle with magnetic tip.",
        "specs": [
                "Lame plate longueur 6 pouces (150 mm)",
                "Tige en acier Chrome-Vanadium (Cr-V)",
                "Pointe usinée de précision magnétique",
                "Manche bi-matière antidérapant isolant"
        ],
        "specs_en": [
                "6-inch slotted blade length (150mm)",
                "Chrome-Vanadium alloy steel shank",
                "Precision-machined magnetized black tip",
                "Ergonomic insulated anti-slip handle"
        ],
        "inStock": true
    },
    {
        
        "id": "p57",
        "name": "Tournevis télescopique réversible jaune 4\" (Plat + Cruciforme)",
        "name_en": "Reversible Telescopic Screwdriver 4\" Yellow (PH2 + Slotted)",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "SCREW DRIVER 4\"+-",
        "image": "images/screwdriver_telescopic.jpg",
        "icon": "fa-solid fa-screwdriver",
        "role_badge": "Tournevis télescopique 2-en-1",
        "role_badge_en": "2-in-1 Telescopic Driver",
        "role": "Tournevis 2-en-1 réversible (embout plat et cruciforme PH2) avec tige télescopique à longueur ajustable. Poignée ergonomique boule jaune offrant un couple de serrage puissant dans les endroits exigus.",
        "role_en": "2-in-1 reversible screwdriver (slotted & Phillips PH2) with adjustable telescopic locking shank. Ergonomic yellow cushion ball handle for maximum torque in confined spaces.",
        "specs": [
                "Embout réversible double face : Plat + Cruciforme PH2",
                "Tige crantée télescopique à verrouillage rapide",
                "Manche boule ergonomique offrant un fort couple",
                "Acier d'outillage trempé résistant à l'usure"
        ],
        "specs_en": [
                "Double-ended reversible bit (Slotted + Phillips PH2)",
                "Telescopic notched shank with quick-lock",
                "High-torque ergonomic ball grip handle",
                "Hardened tool steel bit resists stripping"
        ],
        "inStock": true
    },
    {
        
        "id": "p58",
        "name": "Truelle de maçon professionnelle manche bois 6\" à 10\"",
        "name_en": "Professional Bricklaying Trowel Hardwood Handle 6\" to 10\"",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "BRICK TROWEL 6\"-10\"",
        "image": "images/trowel_wood_handle.jpg",
        "icon": "fa-solid fa-trowel",
        "role_badge": "Truelle maçon 6\" à 10\"",
        "role_badge_en": "Brick Trowel 6\"-10\"",
        "role": "Truelle de maçon en acier trempé forgé d'une seule pièce avec lame flexible et robuste. Manche en bois dur poncé et virole métallique pour l'application de mortier, plâtre et pose de briques.",
        "role_en": "Drop-forged solid carbon steel bricklaying trowel with polished flex blade and ergonomic sanded hardwood handle. Essential for bricklaying, mortar spreading and plastering.",
        "specs": [
                "Tailles disponibles : 6\", 7\", 8\", 9\" et 10\"",
                "Lame acier trempé forgé traitée anticorrosion",
                "Manche en bois naturel poncé parfaitement équilibré",
                "Flexibilité optimale pour lissage du mortier"
        ],
        "specs_en": [
                "Available sizes: 6\", 7\", 8\", 9\", 10\"",
                "Heat-treated forged carbon steel blade",
                "Ergonomic balanced natural hardwood handle",
                "Optimal flex for smooth mortar application"
        ],
        "inStock": true
    },
    {
        
        "id": "p59",
        "name": "Couteau à enduire & spatule de peintre 180 à 220 mm",
        "name_en": "Stainless Putty Knife & Paint Scraper Spatula 180-220mm",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "SCRAPER 180mm-220mm",
        "image": "images/putty_scraper.jpg",
        "icon": "fa-solid fa-paint-roller",
        "role_badge": "Spatule à enduire 180-220mm",
        "role_badge_en": "Putty Scraper 180-220mm",
        "role": "Spatule large en acier inoxydable flexible avec manche ergonomique pour l'application d'enduit de lissage, ratissage des murs, masticage des bandes de plaques de plâtre et décapage de peintures.",
        "role_en": "Wide stainless steel taping scraper spatula with ergonomic soft grip handle. Perfect for spreading wall putty, plaster joint finishing and scraping old paint.",
        "specs": [
                "Largeurs au choix : 180 mm, 200 mm et 220 mm",
                "Lame en acier inox poli souple et indéformable",
                "Manche bimatière antidérapant avec trou d'accrochage",
                "Permet un enduisage ultra-lisse sans trace"
        ],
        "specs_en": [
                "Blade widths: 180mm, 200mm, 220mm",
                "Flexible mirror-polished stainless steel blade",
                "Soft non-slip grip handle with hanging eyelet",
                "Provides ultra-smooth finish without ridge marks"
        ],
        "inStock": true
    },
    {
        
        "id": "p60",
        "name": "Équerre de menuisier et mécanicien acier 200x300 & 400x600 mm",
        "name_en": "Heavy Duty Steel Framing Try Square (200*300 & 400*600)",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "TRY SQUARE 200*300 / 400*600",
        "image": "images/try_square_steel.jpg",
        "icon": "fa-solid fa-ruler-combined",
        "role_badge": "Équerre acier 90°",
        "role_badge_en": "Steel Try Square 90°",
        "role": "Équerre d'atelier en acier trempé haute précision à angle droit 90° avec graduations millimétriques gravées des deux côtés. Indispensable pour la charpente, la ferronnerie, le traçage et la menuiserie.",
        "role_en": "Precision 90-degree steel machinist & framing try square with deep engraved metric graduations on both faces. Ideal for framing, welding layouts and metal fabrication.",
        "specs": [
                "Dimensions au choix : 200x300 mm et 400x600 mm",
                "Acier massif trempé haute résistance à la flexion",
                "Angle droit 90° rectifié de haute précision",
                "Double graduation millimétrique gravée inaltérable"
        ],
        "specs_en": [
                "Sizes: 200x300mm and 400x600mm",
                "Solid hardened steel resists bending and warping",
                "Precision ground 90-degree right angle",
                "Permanent dual-sided etched metric markings"
        ],
        "inStock": true
    },
    {
        
        "id": "p61",
        "name": "Pistolet à mastic & silicone squelette renforcé",
        "name_en": "Heavy Duty Skeleton Caulking & Silicone Sealant Gun",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "CAULKING GUN PRO",
        "image": "images/caulking_gun.jpg",
        "icon": "fa-solid fa-fill-drip",
        "role_badge": "Pistolet mastic silicone",
        "role_badge_en": "Pro Caulking Gun",
        "role": "Pistolet d'extrusion squelette pour cartouches standards de mastic d'étanchéité, colle de fixation et silicone 310 ml. Châssis métallique renforcé avec tige crantée et gâchette démultipliée anti-goutte.",
        "role_en": "Heavy-duty skeleton frame caulking gun for 310ml sealant, adhesive and silicone cartridges. Reinforced stamped metal chassis with smooth thrust rod and drip-free release.",
        "specs": [
                "Compatible cartouches standards 300 ml et 310 ml",
                "Structure squelette métallique ultra-robuste",
                "Tige de poussée crantée avec loquet de débrayage",
                "Gâchette ergonomique démultipliant l'effort"
        ],
        "specs_en": [
                "Fits standard 300ml and 310ml cartridges",
                "Reinforced stamped steel skeleton chassis",
                "Smooth ratchet rod with instant release brake",
                "High-leverage ergonomic fatigue-free trigger"
        ],
        "inStock": true
    },
    {
        
        "id": "p62",
        "name": "Pince universelle isolée 6\" & 8\" haute résistance",
        "name_en": "Heavy Duty Combination Pliers 6\" & 8\" (Cr-V)",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "COMBINATION PLIERS 6\" / 8\"",
        "image": "images/pliers_combination.jpg",
        "icon": "fa-solid fa-wrench",
        "role_badge": "Pince universelle 6\" - 8\"",
        "role_badge_en": "6\" - 8\" Combo Pliers",
        "role": "Pince universelle forgée en acier au carbone avec tranchants trempés par induction pour couper les fils d'acier, clous et serrer des pièces plates ou cylindriques en toute sécurité.",
        "role_en": "Drop-forged carbon steel combination pliers with induction-hardened cutting edges for shearing copper wire, steel nails and gripping flat or round stock securely.",
        "specs": [
                "Tailles disponibles : 6 pouces (160 mm) et 8 pouces (200 mm)",
                "Acier forgé trempé avec mâchoires striées puissantes",
                "Tranchants trempés haute fréquence pour fils durs",
                "Manches isolants ergonomiques bimatière antidérapants"
        ],
        "specs_en": [
                "Available sizes: 6\" (160mm) and 8\" (200mm)",
                "Drop-forged hardened tool steel with serrated jaws",
                "High-frequency induction-hardened cutting edges",
                "Dual-color insulated ergonomic anti-slip handles"
        ],
        "inStock": true
    },
    {
        
        "id": "p63",
        "name": "Pince tenaille de ferrailleur / maçon 8\" & 9\"",
        "name_en": "Heavy Duty Tower Pincers / Concrete Pincer 8\" & 9\"",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "TOWER PINCER 8\" / 9\"",
        "image": "images/tower_pincer.jpg",
        "icon": "fa-solid fa-wrench",
        "role_badge": "Tenaille ferrailleur 8\" - 9\"",
        "role_badge_en": "8\" - 9\" Tower Pincer",
        "role": "Tenaille de ferrailleur et maçon forgée pour ligaturer, tordre et couper le fil de fer à béton sur les chantiers de coffrage, de maçonnerie et d'armature.",
        "role_en": "Heavy-duty concrete tower pincers designed for twisting, tying and flush-cutting rebar tie wires in concrete framing and reinforcement work.",
        "specs": [
                "Tailles disponibles : 8 pouces et 9 pouces",
                "Acier forgé trempé haute résistance à l'usure",
                "Tranchants trempés affûtés pour coupe nette du fil",
                "Longs bras de levier pour un serrage sans effort"
        ],
        "specs_en": [
                "Available sizes: 8\" and 9\"",
                "Drop-forged shock-resistant high-carbon steel",
                "Precision-ground hardened cutting edges",
                "Long handles for powerful twisting leverage"
        ],
        "inStock": true
    },
    {
        
        "id": "p64",
        "name": "Pointes / Clous acier trempé pour béton 1\" à 4\"",
        "name_en": "Hardened Carbon Steel Concrete Masonry Nails 1\" to 4\"",
        "category": "quincaillerie",
        "brand": "UPSPIRIT",
        "model": "CONCRETE NAILS 1\"-4\"",
        "image": "images/concrete_nails.jpg",
        "icon": "fa-solid fa-thumbtack",
        "role_badge": "Clous béton acier 1\" à 4\"",
        "role_badge_en": "Concrete Nails 1\"-4\"",
        "role": "Clous de maçonnerie en acier à haute teneur en carbone trempé avec tige cannelée et pointe diamantée. S'enfoncent dans le béton armé, parpaings et briques sans plier.",
        "role_en": "Premium high-carbon hardened steel concrete masonry nails with fluted shanks and diamond points. Drives firmly into concrete slabs, bricks and masonry without bending.",
        "specs": [
                "Longueurs disponibles : 1\", 1.5\", 2\", 3\" et 4\"",
                "Acier trempé zingué galvanisé anticorrosion",
                "Tige cannelée hélicoïdale anti-arrachement",
                "Pointe diamant pour pénétration maximale"
        ],
        "specs_en": [
                "Available lengths: 1\", 1.5\", 2\", 3\", 4\"",
                "Zinc-plated rust-resistant hardened steel",
                "Fluted shank prevents loosening under vibration",
                "Sharp diamond point penetrates hard surfaces"
        ],
        "inStock": true
    },
    {
        
        "id": "p65",
        "name": "Pointes à tête large galvanisées pour toiture & feutre (Calotins)",
        "name_en": "Large Flat Head Roofing / Felt Nails Galvanized",
        "category": "quincaillerie",
        "brand": "UPSPIRIT",
        "model": "FELT ROOFING NAIL",
        "image": "images/roofing_felt_nails.jpg",
        "icon": "fa-solid fa-thumbtack",
        "role_badge": "Pointes toiture calotins",
        "role_badge_en": "Felt Roofing Nails",
        "role": "Clous à très large tête plate galvanisés pour la fixation sécurisée des membranes d'étanchéité, feutres bitumés, tôles ondulées et bardages extérieurs sans déchirement.",
        "role_en": "Galvanized large flat head felt roofing nails designed for fastening roofing membranes, shingles, sheet metal, and tar paper without tearing the material.",
        "specs": [
                "Large tête plate circulaire répartissant la pression",
                "Acier galvanisé à chaud anticorrosion longue durée",
                "Idéal étanchéité de toiture, tôles, bois & feutre",
                "Conditionnement boîte de chantier"
        ],
        "specs_en": [
                "Extra-wide flat head prevents material tear-out",
                "Hot-dip galvanized long-lasting corrosion coat",
                "Ideal for roofing felt, sheet metal & shingles",
                "Sturdy jobsite cardboard packaging"
        ],
        "inStock": true
    },
    {
        
        "id": "p66",
        "name": "Mètre ruban professionnel antichoc bimatière 3m à 10m",
        "name_en": "Rubber-Armored High-Precision Tape Measure 3m to 10m",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "TAPE MEASURE 3M-10M",
        "image": "images/tape_measure.jpg",
        "icon": "fa-solid fa-ruler",
        "role_badge": "Mètre ruban 3m à 10m",
        "role_badge_en": "Tape Measure 3m-10m",
        "role": "Mètre ruban antichoc avec boîtier ergonomique revêtu de caoutchouc protecteur épais. Ruban en acier laqué à retour automatique avec frein puissant et crochet zéro magnétique.",
        "role_en": "High-impact shockproof tape measure encased in heavy-duty rubber bumper housing. High-standout steel blade, auto-locking brake, and magnetic zero hook.",
        "specs": [
                "Longueurs disponibles : 3m, 5m, 7.5m et 10m",
                "Boîtier antichoc renforcé surmoulé de caoutchouc",
                "Ruban acier traité anti-abrasion haute lisibilité",
                "Bouton de blocage rapide et clip ceinture métallique"
        ],
        "specs_en": [
                "Available lengths: 3m, 5m, 7.5m, 10m",
                "Shock-absorbing heavy rubber armor",
                "Abrasion-resistant nylon-coated steel blade",
                "Positive lock button and sturdy belt clip"
        ],
        "inStock": true
    },
    {
        
        "id": "p67",
        "name": "Maillet caoutchouc & PVC lourd 2000 g non marquant",
        "name_en": "Heavy Duty Rubber & PVC Mallet 2000g Non-Marring",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "PVC HAMMER 2000G",
        "image": "images/mallet_pvc.jpg",
        "icon": "fa-solid fa-hammer",
        "role_badge": "Maillet PVC lourd 2000 g",
        "role_badge_en": "2000g PVC Mallet",
        "role": "Maillet lourd de 2000 g en caoutchouc PVC haute densité avec manche antichoc. Idéal pour la pose de carrelage, bordures de voirie, pavés autobloquants et ajustage sans marquer les surfaces.",
        "role_en": "2000g heavy-duty high-density PVC rubber mallet with shock-absorbing handle. Engineered for paving, curb alignment, tile installation and non-marring heavy assembly.",
        "specs": [
                "Masse de frappe lourde 2000 g non marquante",
                "Tête en polyuréthane/PVC dense résistant aux chocs",
                "Manche ergonomique absorbant les vibrations",
                "Idéal pavage, pose de dalles, carrelage et carrosserie"
        ],
        "specs_en": [
                "2000g non-marring heavy impact weight",
                "Dense resilient polyurethane head",
                "Vibration-reducing ergonomic handle",
                "Ideal for paving slabs, curbs and auto bodywork"
        ],
        "inStock": true
    },
    {
        
        "id": "p68",
        "name": "Masse club / Marteau de frappeur tout acier 2000 g",
        "name_en": "Heavy Steel Club / Drilling Sledge Hammer 2000g",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "STEEL HAMMER 2000G",
        "image": "images/hammer_steel_2000g.jpg",
        "icon": "fa-solid fa-hammer",
        "role_badge": "Masse acier 2000 g",
        "role_badge_en": "2000g Club Hammer",
        "role": "Massette de frappeur en acier forgé trempé 2000 g avec faces polies chanfreinées. Conçue pour frapper burins, broches, piquets et travaux de démolition de maçonnerie.",
        "role_en": "2000g drop-forged carbon steel club / drilling hammer with chamfered faces. Built for striking cold chisels, star drills, masonry stakes, and light demolition.",
        "specs": [
                "Poids tête acier forgé : 2000 g",
                "Double face de frappe trempée et chanfreinée",
                "Manche renforcé absorbant les chocs répétés",
                "Indispensable maçonnerie, taille de pierre & BTP"
        ],
        "specs_en": [
                "2000g drop-forged solid steel head",
                "Dual induction-hardened striking faces",
                "Reinforced shock-absorbing handle",
                "Essential for masonry, chiseling and demolition"
        ],
        "inStock": true
    },
    {
        
        "id": "p69",
        "name": "Maillet de charpentier & menuisier en bois dur 2000 g",
        "name_en": "Hardwood Joiner & Carpenter Mallet 2000g",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "WOOD HAMMER 2000G",
        "image": "images/mallet_wood_2000g.jpg",
        "icon": "fa-solid fa-hammer",
        "role_badge": "Maillet bois 2000 g",
        "role_badge_en": "2000g Wood Mallet",
        "role": "Maillet traditionnel en bois dur dense équilibré 2000 g pour la frappe des ciseaux à bois, gouges, ajustage des tenons-mortaises et assemblage d'ossatures sans éclater le bois.",
        "role_en": "Traditional 2000g balanced dense hardwood carpenter's mallet for striking wood chisels, driving dowels, timber framing joints, and assembling delicate furniture.",
        "specs": [
                "Poids équilibré 2000 g en bois dur massif sélectionné",
                "Faces biseautées pour une frappe précise et amortie",
                "Manche conique riveté sécurisé anti-éjection",
                "Préserve le tranchant des ciseaux et les fibres du bois"
        ],
        "specs_en": [
                "2000g balanced solid selected hardwood",
                "Beveled faces for precision striking",
                "Secure wedged handle prevents head loosening",
                "Protects chisel handles and fine wood grains"
        ],
        "inStock": true
    },
    {
        
        "id": "p70",
        "name": "Marteau arrache-clous manche rond 250 g / 500 g",
        "name_en": "Claw Hammer Classic Round Handle 250g / 500g",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "A HAMMER 250G / 500G",
        "image": "images/hammer_claw_round_flag.jpg",
        "icon": "fa-solid fa-hammer",
        "role_badge": "Marteau arrache-clous",
        "role_badge_en": "Classic Claw Hammer",
        "role": "Marteau d'artisan classique avec panne arrache-clous courbée et face de frappe bombée. Disponible en 250 g pour travaux légers et 500 g pour la charpente et le coffrage.",
        "role_en": "Classic curved claw framing hammer with high-polish striking face and deep nail-pulling claw. Available in 250g and 500g configurations.",
        "specs": [
                "Poids au choix : 250 g ou 500 g",
                "Tête en acier trempé forgé poli",
                "Griffes incurvées puissantes pour arrachage net de pointes",
                "Manche rond équilibré avec excellente prise"
        ],
        "specs_en": [
                "Weight options: 250g or 500g",
                "Drop-forged polished steel head",
                "Curved claw for efficient nail extraction",
                "Balanced round grip handle"
        ],
        "inStock": true
    },
    {
        
        "id": "p71",
        "name": "Marteau arrache-clous manche bimatière antidérapant 250 g / 500 g",
        "name_en": "Pro Claw Hammer Ergonomic Rubber Grip 250g / 500g",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "B HAMMER 250G / 500G",
        "image": "images/hammer_claw_rubber.jpg",
        "icon": "fa-solid fa-hammer",
        "role_badge": "Marteau bimatière pro",
        "role_badge_en": "Rubber Grip Claw Hammer",
        "role": "Marteau de coffreur-charpentier équipé d'un manche en fibre de verre incassable avec surmoulage caoutchouc texturé antivibration pour un confort de travail prolongé sans fatigue.",
        "role_en": "Pro claw hammer built with a shatterproof fiberglass core handle and textured rubber shock-reduction grip. Provides superior leverage and reduced user fatigue.",
        "specs": [
                "Poids au choix : 250 g ou 500 g",
                "Manche en fibre de verre haute résistance mécanique",
                "Revêtement caoutchouc antidérapant antivibration",
                "Tête forgée avec arrache-clous haute précision"
        ],
        "specs_en": [
                "Available weights: 250g and 500g",
                "High-strength shatterproof fiberglass core handle",
                "Textured rubber grip dampens recoil vibrations",
                "Drop-forged steel head with sharp nail puller"
        ],
        "inStock": true
    },
    {
        
        "id": "p72",
        "name": "Marteau arrache-clous monobloc tout acier forgé 250 g / 500 g",
        "name_en": "One-Piece Solid Forged Steel Claw Hammer 250g / 500g",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "ONE-PIECE HAMMER 250G / 500G",
        "image": "images/hammer_claw_onepiece.jpg",
        "icon": "fa-solid fa-hammer",
        "role_badge": "Marteau monobloc tout acier",
        "role_badge_en": "Solid Steel Claw Hammer",
        "role": "Marteau professionnel forgé d'une seule pièce d'acier sans soudure ni raccord, éliminant tout risque de descellement de tête. Poignée caoutchouc antichoc ergonomique pour charpentiers exigeants.",
        "role_en": "Premium solid one-piece drop-forged steel claw hammer. Zero welds or head-joint weaknesses, delivering ultimate strength, balance and durability on heavy construction sites.",
        "specs": [
                "Poids au choix : 250 g ou 500 g",
                "Tête et manche forgés d'un seul bloc d'acier indestructible",
                "Équilibre et transfert d'énergie d'impact exceptionnels",
                "Manche ergonomique surmoulé absorbant les chocs"
        ],
        "specs_en": [
                "Weight choices: 250g or 500g",
                "100% solid drop-forged one-piece steel construction",
                "Optimal balance and impact kinetic transfer",
                "Ergonomic shock-absorbing bonded rubber grip"
        ],
        "inStock": true
    },
    {
        
        "id": "p73",
        "name": "Massette monobloc forgée tout acier 2000 g",
        "name_en": "One-Piece Solid Forged Steel Sledge Hammer 2000g",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "ONE-PIECE SLEDGE 2000G",
        "image": "images/hammer_sledge_onepiece_2000g.jpg",
        "icon": "fa-solid fa-hammer",
        "role_badge": "Massette monobloc 2000 g",
        "role_badge_en": "2000g Solid Sledge Hammer",
        "role": "Massette lourde de 2000 g forgée d'un seul bloc d'acier indestructible. Conçue pour les frappes extrêmes en carrière, chantiers BTP, démolition, enfoncement de coins et travaux de forge.",
        "role_en": "2000g solid one-piece forged steel club sledge hammer. Virtually indestructible construction engineered for quarrying, masonry busting, rebar driving and heavy forge work.",
        "specs": [
                "Poids 2000 g en acier massif forgé d'une seule pièce",
                "Indestructible : aucune pièce rapportée ni risque de casse",
                "Poignée ergonomique antivibrations haute adhérence",
                "Puissance d'impact cinétique maximale"
        ],
        "specs_en": [
                "2000g solid single-piece drop-forged steel",
                "Unbreakable: no glued or pinned head, zero weak points",
                "Cushioned vibration-dampening grip handle",
                "Maximum kinetic energy impact delivery"
        ],
        "inStock": true
    },
    {
        
        "id": "p74",
        "name": "Mini marteau arrache-clous compact 250 g",
        "name_en": "Mini Stubby Claw Hammer 250g (Tight Spaces)",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "MINI HAMMER 250G",
        "image": "images/hammer_mini_stubby_250g.jpg",
        "icon": "fa-solid fa-hammer",
        "role_badge": "Mini marteau compact 250 g",
        "role_badge_en": "250g Stubby Hammer",
        "role": "Marteau miniature ultra-court de 250 g spécialement conçu pour clouer et extraire des fixations dans les tiroirs, combles, dessous d'évier, coffres électriques et espaces exigus.",
        "role_en": "Compact stubby 250g claw hammer with short handle designed specifically for tight quarters, cabinet interiors, under-sink plumbing and tight access nailing.",
        "specs": [
                "Format ultra-court compact 250 g",
                "Idéal placards, tiroirs, combles & espaces étroits",
                "Tête en acier forgé trempé avec arrache-clous",
                "Poignée bimatière ergonomique antidérapante"
        ],
        "specs_en": [
                "Ultra-short 250g compact profile",
                "Perfect for confined, awkward and narrow spaces",
                "Hardened steel head with claw extractor",
                "Cushioned ergonomic comfort grip"
        ],
        "inStock": true
    },
    {
        
        "id": "p75",
        "name": "Masse de démolition lourde 18 LB & 20 LB (8 à 9 kg)",
        "name_en": "Industrial Demolition Sledge Hammer 18LB & 20LB (8-9 kg)",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "BIG HAMMER 18LB / 20LB",
        "image": "images/sledge_hammer_heavy.jpg",
        "icon": "fa-solid fa-hammer",
        "role_badge": "Masse lourde 18-20 LB",
        "role_badge_en": "18-20LB Sledge Hammer",
        "role": "Masse géante de démolition professionnelle de 18 livres (8 kg) et 20 livres (9 kg) avec manche long haute résistance. Conçue pour démolir les murs en béton, casser la pierre et enfoncer des pieux métalliques.",
        "role_en": "Extra-heavy industrial demolition sledge hammer available in 18-pound (8kg) and 20-pound (9kg) models with extra-long high-strength handle for demolishing concrete walls and driving posts.",
        "specs": [
                "Poids au choix : 18 LB (8,1 kg) ou 20 LB (9,0 kg)",
                "Tête massive en acier au carbone trempé par induction",
                "Manche long renforcé à forte énergie cinétique",
                "Indispensable pour gros œuvre & démolition lourde"
        ],
        "specs_en": [
                "Available weights: 18 LB (8.1kg) or 20 LB (9.0kg)",
                "Induction-hardened massive carbon steel head",
                "Extended reinforced handle for high kinetic energy",
                "Essential for structural concrete demolition"
        ],
        "inStock": true
    },
    {
        
        "id": "p76",
        "name": "Jeu de clés mixtes plates & œil 8 mm à 24 mm en acier Chrome-Vanadium",
        "name_en": "Combination Wrench Set 8mm to 24mm (Cr-V Steel)",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "COMBINATION WRENCH 8-24MM",
        "image": "images/wrench_combination_set.jpg",
        "icon": "fa-solid fa-wrench",
        "role_badge": "Clés mixtes 8 à 24 mm",
        "role_badge_en": "8-24mm Combo Wrenches",
        "role": "Clés mixtes professionnelles en acier Chrome-Vanadium forgé avec tête polygonale à 12 pans inclinée à 15° et tête plate fine pour tous travaux de mécanique automobile, poids lourds et maintenance industrielle.",
        "role_en": "Professional combination wrenches manufactured from drop-forged Chrome-Vanadium alloy steel. 15-degree offset 12-point box end and slim open-end for high-torque mechanical repairs.",
        "specs": [
                "Diamètres disponibles : 8, 10, 11, 12, 13, 14, 15, 17, 19, 22, 24 mm",
                "Acier Chrome-Vanadium (Cr-V) finition satinée antirouille",
                "Tête œil 12 pans pour couple optimal sans riper",
                "Conforme aux normes de couple industrielles élevées"
        ],
        "specs_en": [
                "Sizes available: 8, 10, 11, 12, 13, 14, 15, 17, 19, 22, 24mm",
                "Satin-finish Chrome-Vanadium steel (Cr-V)",
                "12-point box end grips fastener flats securely",
                "Complies with heavy-duty industrial torque standards"
        ],
        "inStock": true
    },
    {
        
        "id": "p77",
        "name": "Agrafeuse manuelle puissante 1008F tout acier pour agrafes 4-8 mm",
        "name_en": "Heavy Duty All-Steel Manual Staple Gun 1008F (4-8mm)",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "1008F GUN POWERFUL",
        "image": "images/staple_gun_1008f.jpg",
        "icon": "fa-solid fa-stapler",
        "role_badge": "Agrafeuse 1008F tout acier",
        "role_badge_en": "1008F Pro Staple Gun",
        "role": "Agrafeuse-cloueuse manuelle tout acier professionnelle modèle 1008F pour agrafes plates de 4 à 8 mm. Idéale pour la tapisserie, garniture de meubles, affichage, toiles et fixation d'isolants minces.",
        "role_en": "All-steel professional manual staple tacker gun model 1008F compatible with 4-8mm staples. Perfect for upholstery, furniture repair, plastic sheeting, and insulation fixing.",
        "specs": [
                "Compatible agrafes série 1008F (hauteurs 4, 6, 8 mm)",
                "Boîtier tout acier chromé ultra-résistant aux chutes",
                "Mécanisme de frappe puissant à ressort trempé",
                "Chargement rapide par le bas avec loquet sécurisé"
        ],
        "specs_en": [
                "Takes 1008F series staples (4mm, 6mm, 8mm heights)",
                "Rugged all-steel chrome-plated drop-proof body",
                "High-power tempered spring firing mechanism",
                "Quick bottom-loading magazine with secure latch"
        ],
        "inStock": true
    },
    {
        
        "id": "p78",
        "name": "Charnières de porte sur roulement à billes or 4\" x 3\"",
        "name_en": "Heavy Duty Ball Bearing Door Hinges Gold Finish 4\"x3\"",
        "category": "quincaillerie",
        "brand": "UPSPIRIT",
        "model": "HINGE 4*3*30 GOLD",
        "image": "images/door_hinge_gold.jpg",
        "icon": "fa-solid fa-door-open",
        "role_badge": "Charnières dorées 4\"x3\"",
        "role_badge_en": "Gold Hinges 4\"x3\"",
        "role": "Paumelles et charnières de porte en acier massif avec finition dorée laiton et 4 roulements à billes lubrifiés. Assurent une ouverture silencieuse et fluide des portes lourdes d'entrée, bureaux et villas.",
        "role_en": "Heavy-duty solid steel architectural door hinges in lustrous gold finish with 4 lubricated ball bearings for smooth, silent and squeak-free swinging of heavy residential or commercial doors.",
        "specs": [
                "Dimensions : 4\" x 3\" (100 x 75 mm), épaisseur robuste 3 mm",
                "Finition dorée brillante galvanisée anticorrosion",
                "4 roulements à billes en acier pour rotation silencieuse",
                "Livrées avec vis de fixation fraisées assorties"
        ],
        "specs_en": [
                "Dimensions: 4\" x 3\" (100 x 75mm), 3.0mm thickness",
                "Lustrous gold anti-tarnish electroplated coat",
                "4 smooth heavy-duty ball bearings for silent action",
                "Matching countersunk wood screws included"
        ],
        "inStock": true
    },
    {
        
        "id": "p79",
        "name": "Moraillon de sécurité porte-cadenas renforcé 4\" à 8\"",
        "name_en": "Heavy Duty Safety Hasp & Staple Latch 4\" to 8\"",
        "category": "quincaillerie",
        "brand": "UPSPIRIT",
        "model": "HASP STAPLE 4\"-8\"",
        "image": "images/hasp_staple.jpg",
        "icon": "fa-solid fa-lock",
        "role_badge": "Moraillon porte-cadenas 4\"-8\"",
        "role_badge_en": "Safety Hasp & Staple",
        "role": "Moraillon de sécurité en acier trempé électrozingué pour la fermeture sécurisée par cadenas des portes d'ateliers, portails, coffres à outils et abris de chantier. Vis dissimulées anti-effraction.",
        "role_en": "Hardened electro-galvanized steel safety latch hasp and staple for padlocks on shop doors, shed gates, tool chests and jobsite containers. Concealed fixings prevent tampering.",
        "specs": [
                "Longueurs disponibles : 4\", 6\" et 8\"",
                "Acier trempé épais résistant au sciage et au levier",
                "Vis de fixation masquées en position fermée anti-effraction",
                "Finition électrozinguée brillante antirouille"
        ],
        "specs_en": [
                "Available lengths: 4\", 6\", 8\"",
                "Hardened heavy-gauge steel resists sawing & prying",
                "Concealed mounting screws when locked for anti-theft",
                "Bright zinc corrosion-resistant coating"
        ],
        "inStock": true
    },
    {
        
        "id": "p80",
        "name": "Clé à douille en T 8 mm à 13 mm",
        "name_en": "T-Handle Deep Socket Wrench 8mm to 13mm",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "T-WRENCH 8-13MM",
        "image": "images/t_wrench_socket.jpg",
        "icon": "fa-solid fa-wrench",
        "role_badge": "Clé en T 8 à 13 mm",
        "role_badge_en": "8-13mm T-Wrench",
        "role": "Clé en T avec douille hexagonale forgée pour le serrage et desserrage ultra-rapide des boulons de moteurs, motos et machines. Excellente prise à deux mains et couple élevé.",
        "role_en": "Deep 6-point forged socket T-handle wrench for rapid spinning and torquing of automotive, motorcycle and machinery nuts and bolts.",
        "specs": [
                "Douilles disponibles : 8 mm, 10 mm, 12 mm et 13 mm",
                "Acier Chrome-Vanadium forgé monobloc",
                "Poignée en T pour rotation rapide et fort couple à deux mains",
                "Douille profonde 6 pans pour écrous et goujons saillants"
        ],
        "specs_en": [
                "Available sizes: 8mm, 10mm, 12mm, 13mm",
                "One-piece drop-forged Chrome-Vanadium steel",
                "Ergonomic T-bar for fast spinning and high torque",
                "Deep 6-point socket clears protruding threaded studs"
        ],
        "inStock": true
    },
    {
        
        "id": "p81",
        "name": "Clé à douille 3 voies en Y 8-10-12 mm",
        "name_en": "3-Way Y-Type Socket Wrench 8-10-12mm",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "Y-WRENCH 8-10-12mm",
        "image": "images/y_wrench_socket.jpg",
        "icon": "fa-solid fa-wrench",
        "role_badge": "Clé en Y 8-10-12 mm",
        "role_badge_en": "8-10-12mm Y-Wrench",
        "role": "Clé tridirectionnelle en Y intégrant les 3 tailles les plus courantes en mécanique moto et automobile (8, 10 et 12 mm). Bras forgés rigides pour un levier puissant et un changement instantané de taille.",
        "role_en": "Heavy-duty 3-way Y-handle socket wrench combining the three most common metric sizes (8mm, 10mm, 12mm). Forged arms provide great leverage for quick motorcycle and mechanical service.",
        "specs": [
                "3 tailles métriques en 1 outil : 8 mm, 10 mm et 12 mm",
                "Acier forgé Chrome-Vanadium finition satinée",
                "Accès ultra-rapide sans changer d'embout",
                "Format compact pour sacoche de moto ou boîte à outils"
        ],
        "specs_en": [
                "3 common sizes in one tool: 8mm, 10mm, 12mm",
                "Drop-forged Chrome-Vanadium steel (Cr-V)",
                "Instant size switching with zero bit changing",
                "Compact size fits tool rolls and mobile repair kits"
        ],
        "inStock": true
    },
    {
        
        "id": "p82",
        "name": "Rallonges et poignée de force coudée pour douilles (5\", 10\", 12\")",
        "name_en": "Socket Extension Bars & Heavy Duty Bent Rod (5\", 10\", 12\")",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "BENT ROD 5\" / EXTENSION 10\", 12\"",
        "image": "images/extension_bent_rod.jpg",
        "icon": "fa-solid fa-wrench",
        "role_badge": "Rallonges & poignée coudée",
        "role_badge_en": "Extension Bars & Bent Rod",
        "role": "Poignée de force coudée et barres de rallonge pour douilles d'atelier 1/2\". Permettent d'accéder facilement aux écrous enclavés dans les compartiments moteurs et d'appliquer un couple décuplé.",
        "role_en": "Heavy-duty 1/2\" drive breaker bar bent rod and straight extension bars (5\", 10\", 12\"). Reach deep-seated fasteners in engine bays and apply high leverage without slippage.",
        "specs": [
                "Tailles : Poignée coudée 5\", Rallonges droites 10\" et 12\"",
                "Carré d'entraînement 1/2\" standard avec bille de verrouillage",
                "Acier Chrome-Vanadium forgé traité thermiquement",
                "Résiste aux couples de desserrage de boulons grippés"
        ],
        "specs_en": [
                "Sizes: 5\" Bent Rod, 10\" and 12\" Extensions",
                "Standard 1/2-inch square drive with retention ball",
                "Heat-treated Chrome-Vanadium alloy steel",
                "Engineered to break free stubborn rusted fasteners"
        ],
        "inStock": true
    },
    {
        
        "id": "p83",
        "name": "Chaîne d'attache en acier galvanisé haute résistance",
        "name_en": "High Tensile Galvanized Steel Tie-Out Dog Chain",
        "category": "quincaillerie",
        "brand": "UPSPIRIT",
        "model": "DOG CHAIN (PETITE & GRANDE TAILLE)",
        "image": "images/dog_chain.jpg",
        "icon": "fa-solid fa-link",
        "role_badge": "Chaîne d'attache galvanisée",
        "role_badge_en": "Galvanized Dog Chain",
        "role": "Chaîne en maillons d'acier soudés électriquement et galvanisés antirouille avec mousquetons pivotants 360° aux deux extrémités. Conçue pour l'attache sécurisée sans emmêlement.",
        "role_en": "Welded steel link security tie-out chain with rust-resistant zinc electroplating and 360-degree swivel snap hooks on both ends to prevent knotting and tangling.",
        "specs": [
                "Disponible en petite taille et grande taille de maillons",
                "Maillons d'acier soudés électriquement et zingués",
                "Mousquetons pivotants 360° anti-torsion aux extrémités",
                "Résistance élevée aux intempéries et à la traction"
        ],
        "specs_en": [
                "Available in Small and Large link thicknesses",
                "Electrically welded zinc-plated steel links",
                "360-degree swivel snap hooks prevent twisting",
                "High pull strength and weather resistance"
        ],
        "inStock": true
    },
    {
        
        "id": "p84",
        "name": "Chaîne de levage et traction lourde en acier 8 m",
        "name_en": "Heavy Duty Industrial Traction & Towing Chain 8m",
        "category": "quincaillerie",
        "brand": "UPSPIRIT",
        "model": "HEAVY DUTY CHAIN 8M",
        "image": "images/heavy_duty_chain_8m.jpg",
        "icon": "fa-solid fa-link",
        "role_badge": "Chaîne de traction 8 m",
        "role_badge_en": "8m Heavy Tow Chain",
        "role": "Chaîne de levage, d'arrimage et de remorquage en acier allié trempé galvanisé de 8 mètres. Maillons ultra-résistants pour camions, chantiers forestiers, BTP et sécurisation d'engins lourds.",
        "role_en": "8-meter heavy-duty industrial transport, towing and lashing chain made of heat-treated alloy steel. Built for logging, truck recovery, construction rigging and equipment tie-down.",
        "specs": [
                "Longueur totale : 8 mètres",
                "Acier trempé allié haute résistance à la rupture",
                "Maillons calibrés zingués anticorrosion",
                "Idéal remorquage, arrimage de charges et sécurisation"
        ],
        "specs_en": [
                "Full 8-meter length",
                "High-tensile heat-treated alloy steel",
                "Calibrated rustproof galvanized links",
                "Ideal for towing, truck lashing and rigging"
        ],
        "inStock": true
    },
    {
        
        "id": "p85",
        "name": "Clé démonte-roue en L pour mécanique 8\" à 17\"",
        "name_en": "Heavy Duty L-Shaped Wheel Lug Wrench 8\" to 17\"",
        "category": "outillage",
        "brand": "UPSPIRIT",
        "model": "L-WRENCH 8\" à 17\"",
        "image": "images/l_wrench_wheel.jpg",
        "icon": "fa-solid fa-wrench",
        "role_badge": "Clé démonte-roue en L",
        "role_badge_en": "L-Type Lug Wrench",
        "role": "Clé en L démonte-roue en acier forgé trempé avec douille profonde 6 pans et extrémité biseautée faisant office de démonte-pneu. Permet de débloquer aisément les goujons de roue serrés à bloc.",
        "role_en": "Drop-forged L-type socket lug wrench featuring a deep 6-point hex head and a pry-bar beveled end for removing hubcaps and popping tires. Long arm gives high breaking torque for rusted lug nuts.",
        "specs": [
                "Tailles disponibles du 8\" au 17\"",
                "Acier forgé monobloc haute résistance mécanique",
                "Douille 6 pans profonde antidérapante",
                "Bras de levier coudé à angle droit pour puissance de desserrage"
        ],
        "specs_en": [
                "Available in lengths from 8\" to 17\"",
                "Solid drop-forged heavy-gauge steel",
                "Deep non-slip 6-point hex socket",
                "Right-angle leverage arm for stubborn lug nuts"
        ],
        "inStock": true
    },
    {
        
        "id": "p86",
        "name": "Échelle articulée multifonction aluminium 4x3 à 4x6 marches HK-ML",
        "name_en": "Multipurpose Articulated Aluminum Ladder HK-ML (4x3 to 4x6)",
        "category": "echelles",
        "brand": "UPSPIRIT",
        "model": "HK-ML4*3 / 4*4 / 4*5 / 4*6",
        "image": "images/ladder_multipurpose_hkml.jpg",
        "icon": "fa-solid fa-stairs",
        "role_badge": "Échelle multifonction 4x3-4x6",
        "role_badge_en": "Multipurpose Ladder HK-ML",
        "role": "Échelle télescopique articulée en aluminium avec charnières de verrouillage automatique multipositions. Se transforme instantanément en échelle droite, escabeau double face ou plateforme d'échafaudage.",
        "role_en": "Multi-position folding articulated aluminum ladder featuring multi-angle automatic positive locking hinges. Transforms into a straight extension ladder, step ladder, or scaffold work platform.",
        "specs": [
                "Configurations : 4x3, 4x4, 4x5 et 4x6 échelons",
                "Charnières acier sécurisées à blocage automatique multi-positions",
                "Alliage d'aluminium aéronautique léger et ultra-rigide",
                "Deux barres stabilisatrices larges avec patins antidérapants"
        ],
        "specs_en": [
                "Models: 4x3, 4x4, 4x5, 4x6 rungs",
                "Heavy-duty automatic multi-angle locking hinges",
                "Lightweight yet rigid aerospace aluminum alloy",
                "Dual wide stabilizer bars with non-slip rubber feet"
        ],
        "inStock": true
    },
    {
        
        "id": "p87",
        "name": "Échelle coulissante aluminium industrielle 1, 2 et 3 plans HK-SE",
        "name_en": "Industrial Aluminum Section Extension Ladder HK-SE (1, 2, 3 Plans)",
        "category": "echelles",
        "brand": "UPSPIRIT",
        "model": "HK-SE 1*10-14 / 2*10-14 / 3*10-14",
        "image": "images/ladder_section_hkse.jpg",
        "icon": "fa-solid fa-stairs",
        "role_badge": "Échelle coulissante HK-SE",
        "role_badge_en": "Section Ladder HK-SE",
        "role": "Échelle industrielle en aluminium extrudé nervuré disponible en 1 plan simple, 2 plans et 3 plans coulissants jusqu'à 14 échelons par plan. Guide de coulissement en acier et verrous de sécurité automatiques pour travaux en hauteur.",
        "role_en": "Heavy-duty extruded aluminum section ladder available in single, 2-section and 3-section extension configurations with up to 14 rungs per section for reaching great heights safely.",
        "specs": [
                "Versions disponibles : 1 plan simple, 2 plans et 3 plans coulissants",
                "10, 12 ou 14 échelons striés antidérapants par plan",
                "Glissières acier et système de verrouillage automatique sécurisé",
                "Capacité de charge professionnelle certifiée 150 kg"
        ],
        "specs_en": [
                "Configurations: Single, 2-section, and 3-section extension",
                "10, 12, or 14 slip-resistant ribbed rungs per section",
                "Heavy-duty steel guides with positive rung locks",
                "Certified 150 kg industrial load capacity"
        ],
        "inStock": true
    },
    {
        
        "id": "p88",
        "name": "Escabeau pliant de ménage et chantier en acier 2 à 6 marches HK-SS",
        "name_en": "Heavy Duty Steel Step Stool Ladder 2 to 6 Steps HK-SS",
        "category": "echelles",
        "brand": "UPSPIRIT",
        "model": "HK-SS1302 à HK-SS1306",
        "image": "images/ladder_step_hkss.jpg",
        "icon": "fa-solid fa-stairs",
        "role_badge": "Escabeau acier 2 à 6 marches",
        "role_badge_en": "Steel Step Ladder 2-6 Steps",
        "role": "Escabeau pliant robuste en tubes d'acier laqué blanc avec marches extra-larges antidérapantes et garde-corps supérieur rembourré. Stable et sécurisant pour travaux intérieurs, magasins et chantiers.",
        "role_en": "Folding heavy-duty steel step stool ladder with wide rubberized non-slip treads and padded top safety handrail. Provides rock-solid footing for household, shop and construction tasks.",
        "specs": [
                "Disponible en versions : 2, 3, 4, 5 et 6 marches",
                "Marches extra-larges recouvertes de tapis caoutchouc strié",
                "Structure tubulaire en acier laqué blanc haute stabilité",
                "Pliage ultra-plat pour un rangement et un transport facilités"
        ],
        "specs_en": [
                "Models: 2, 3, 4, 5, and 6 step versions",
                "Extra-wide steps with non-slip rubber tread mats",
                "Solid tubular white powder-coated steel construction",
                "Folds completely flat for easy storage and transport"
        ],
        "inStock": true
    },
    {
        
        "id": "p89",
        "name": "Échelle télescopique droite aluminium portable 2.6 m à 3.8 m HK-TL",
        "name_en": "Compact Aluminum Telescopic Extension Ladder 2.6m to 3.8m HK-TL",
        "category": "echelles",
        "brand": "UPSPIRIT",
        "model": "HK-TL260 / HK-TL320 / HK-TL380",
        "image": "images/ladder_telescopic_hktl.jpg",
        "icon": "fa-solid fa-stairs",
        "role_badge": "Échelle télescopique HK-TL",
        "role_badge_en": "Telescopic Ladder HK-TL",
        "role": "Échelle télescopique portable en aluminium aéronautique à déploiement barreau par barreau avec verrous indépendants. Se replie à moins de 90 cm pour un transport facile dans un coffre de voiture ou placard.",
        "role_en": "Portable aerospace-grade aluminum telescopic extension ladder with independent step-by-step lock latches. Collapses to under 90cm for effortless transport in any vehicle trunk.",
        "specs": [
                "Hauteurs déployées au choix : 2.6 m, 3.2 m et 3.8 m",
                "Système de verrouillage automatique indépendant sur chaque échelon",
                "Repliable en format compact (moins de 90 cm)",
                "Alliage aluminium léger avec patins antidérapants haute adhérence"
        ],
        "specs_en": [
                "Extended heights: 2.6m, 3.2m, and 3.8m",
                "Independent thumb latch locking system on each rung",
                "Collapses to ultra-compact portable length (<90cm)",
                "Lightweight aircraft aluminum with rubber base caps"
        ],
        "inStock": true
    }
];


// DICTIONNAIRE MULTILINGUE (FRANÇAIS & ANGLAIS)
const TRANSLATIONS = {
    "fr": {
        "page_title": "Tim Tools Machines | Outillage & Machines UPSPIRIT Abidjan",
        "top_official": "Distributeur Officiel",
        "top_location": "Abidjan, Angré Les Oscars (en diagonale du Centre Médical Hoffmann)",
        "nav_home": "Accueil",
        "nav_about": "À Propos",
        "nav_machines": "Machines",
        "nav_reviews": "Avis",
        "nav_faq": "FAQ",
        "nav_contact": "Contact",
        "nav_whatsapp_btn": "WhatsApp : +225 07 15 03 27 98",
        "nav_call_btn": "Appel : +225 07 89 55 74 42",
        "hero_badge": "Leader Outillage & Équipements Professionnels",
        "hero_welcome": "Bienvenue chez",
        "hero_subtitle": "Votre partenaire de référence pour la vente d'outillage robuste et de machines haute performance de la marque <strong>UPSPIRIT</strong> à travers le monde. Matériel 100% fiable au meilleur prix direct.",
        "hero_cta_whatsapp": "Commander sur WhatsApp",
        "hero_cta_catalog": "Découvrir tout le Catalogue",
        "hero_stat_machines": "Machines UPSPIRIT",
        "hero_stat_brand": "Marque Upspirit Certifiée",
        "hero_stat_clients": "Artisans & Pros Équipés",
        "hero_stat_support": "Assistance WhatsApp 24/7",
        "about_tag": "QUI SOMMES-NOUS ?",
        "about_title": "À Propos de",
        "about_lead": "<strong>Tim Tools Machines</strong> est une entreprise basée à <strong>Abidjan, Côte d'Ivoire</strong> (Angré Les Oscars, en diagonale du Centre Médical Hoffmann). Nous sommes spécialisés dans la vente et la distribution d'outillage électroportatif, de postes à souder, d'appareils de mesure et de machines professionnelles de la marque <strong>UPSPIRIT</strong>.",
        "about_sub": "Tous nos équipements sont neufs, testés et proposés au meilleur tarif direct en Francs CFA (XOF) avec confirmation immédiate sur WhatsApp, retrait sur place à Angré ou expédition rapide.",
        "about_distributor": "Distributeur Mondial",
        "about_f1_title": "Qualité Industrielle",
        "about_f1_desc": "Machines robustes conçues pour résister aux cadences intenses.",
        "about_f2_title": "Qualité & Authenticité",
        "about_f2_desc": "Équipements 100% neufs, testés et garantis d'origine.",
        "about_f3_title": "Commande en 1 Clic",
        "about_f3_desc": "Confirmation immédiate et suivi par WhatsApp.",
        "catalog_tag": "CATALOGUE OFFICIEL",
        "catalog_title": "Nos Outils &",
        "catalog_title_highlight": "Machines Disponibles",
        "catalog_subtitle": "Explorez l'ensemble de notre gamme professionnelle avec leurs caractéristiques techniques, rôles détaillés et commande directe sur WhatsApp.",
        "search_placeholder": "Rechercher une machine, meuleuse, perforateur, référence...",
        "sort_label": "Trier par :",
        "sort_default": "Recommandés",
        "sort_name": "Nom (A-Z)",
        "cat_all": "Tous les articles",
        "cat_perforateur": "Perforateurs & Piqueurs",
        "cat_meuleuse": "Meuleuses & Découpe",
        "cat_souffleur": "Souffleurs & Chaleur",
        "cat_soudure": "Soudure & Atelier",
        "cat_pesage": "Balances & Mesure",
        "cat_cables": "Câbles & Enrouleurs",
        "cat_outillage": "Outillage & Serrage",
        "cat_quincaillerie": "Quincaillerie & Fixations",
        "cat_echelles": "Échelles & Accès",
        "cat_percage": "Perçage & Vissage",
        "cat_soufflage": "Soufflage & Nettoyage",
        "cat_meulage": "Meulage & Tronçonnage",
        "cat_perforation": "Démolition & Perforation",
        "results_count_single": "Affichage de <strong>1</strong> machine UPSPIRIT",
        "results_count_multi": "Affichage de <strong>{count}</strong> machines UPSPIRIT",
        "delivery_hint": "Prêts pour expédition immédiate",
        "empty_title": "Aucun produit correspondant trouvé",
        "empty_desc": "Essayez avec d'autres mots clés ou réinitialisez les filtres.",
        "empty_reset": "Réinitialiser les filtres",
        "card_stock": "En Stock - Prêt à livrer",
        "card_order_btn": "Commander",
        "card_quote": "Sur devis",
        "adv_tag": "VOS AVANTAGES",
        "adv_title": "Pourquoi Choisir",
        "adv_f1_title": "Gamme Upspirit Authentique",
        "adv_f1_desc": "Produits d'origine certifiée, haute durabilité avec composants électromécaniques renforcés.",
        "adv_f2_title": "Disponibilité & Livraison",
        "adv_f2_desc": "Expédition rapide de vos commandes avec emballage renforcé pour garantir l'intégrité de vos machines.",
        "adv_f3_title": "Support Direct WhatsApp",
        "adv_f3_desc": "Une question technique ou besoin d'un devis ? Nos conseillers vous répondent en temps réel.",
        "adv_f4_title": "Tarifs Direct Importateur",
        "adv_f4_desc": "Les meilleurs prix du marché sans intermédiaire sur l'ensemble de notre gamme de machines.",
        "testi_tag": "RETOUR D'EXPÉRIENCE",
        "testi_title": "Ce que disent",
        "testi_title_highlight": "Nos Clients & Artisans",
        "testi_subtitle": "Découvrez les retours de professionnels du BTP, menuisiers, soudeurs et mécaniciens équipés par Tim Tools Machines.",
        "testi_q1": "\"J'ai commandé le marteau piqueur HK-DH35B et une meuleuse 230mm pour mon chantier à Cocody. Matériel hyper costaud et livré en moins de 24h. Le service WhatsApp est ultra réactif !\"",
        "testi_a1_role": "Entrepreneur BTP - Abidjan",
        "testi_q2": "\"Le poste à souder Inverter MMA 300 Upspirit tient parfaitement la cadence dans mon atelier de ferronnerie. Très léger et soudure propre. Excellent rapport qualité/prix en FCFA.\"",
        "testi_a2_role": "Ferronnier & Soudeur Pro",
        "testi_q3": "\"La mallette 186 pièces et la balance 300kg reçues conformes aux photos. Commande passée sur WhatsApp en 2 minutes. Je recommande vivement Tim Tools Machines !\"",
        "testi_a3_role": "Responsable Maintenance Industrielle",
        "faq_tag": "FOIRE AUX QUESTIONS",
        "faq_title": "Questions",
        "faq_title_highlight": "Fréquentes",
        "faq_subtitle": "Tout ce que vous devez savoir avant de passer commande chez Tim Tools Machines.",
        "faq_q1": "Comment passer commande sur WhatsApp ?",
        "faq_a1": "Cliquez simplement sur le bouton <strong>\"Commander\"</strong> sous n'importe quel article pour démarrer une discussion avec le message pré-rempli. Vous pouvez aussi ajouter plusieurs articles à votre panier et cliquer sur <strong>\"Valider la commande sur WhatsApp\"</strong> pour transmettre l'ensemble de votre devis chiffré.",
        "faq_q2": "Les machines Upspirit sont-elles authentiques et garanties ?",
        "faq_a2": "Absolument. Nous sommes distributeurs de la marque <strong>UPSPIRIT</strong>. Chaque équipement est 100% neuf, vérifié en usine et livré dans son emballage d'origine avec ses accessoires officiels.",
        "faq_q3": "Quels sont les délais et zones de livraison ?",
        "faq_a3": "La livraison s'effectue en <strong>24h à 48h</strong> sur Abidjan et partout en Côte d'Ivoire. Nous expédions également par fret routier et aérien dans toute la sous-région ouest-africaine et à l'international.",
        "faq_q4": "Quels sont les modes de paiement acceptés ?",
        "faq_a4": "Vous pouvez régler par Wave, Orange Money, MTN MoMo, Moov Money, virement bancaire ou paiement comptant à la livraison selon votre localisation.",
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
        "footer_nav_home": "Accueil",
        "footer_nav_about": "À Propos",
        "footer_nav_machines": "Tout le Catalogue",
        "footer_nav_contact": "Contact Direct",
        "footer_cat_heading": "Top Catégories",
        "footer_cat_perfo": "Perforation & Démolition",
        "footer_cat_meule": "Meulage & Découpe",
        "footer_cat_soudure": "Soudure Industrielle",
        "footer_cat_souffleur": "Soufflage & Nettoyage",
        "footer_cat_pesage": "Balances & Pesage",
        "footer_contact_heading": "Coordonnées",
        "footer_store_label": "Magasin & Showroom :",
        "footer_store_city": "Abidjan, Angré Les Oscars",
        "footer_store_landmark": "En diagonale du Centre Médical Hoffmann, Côte d'Ivoire",
        "footer_phone_label": "Appel Téléphonique :",
        "footer_wa_label": "WhatsApp Officiel :",
        "footer_brand_label": "Marque Distribuée :",
        "footer_brand_val": "UPSPIRIT (Mondial)",
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
        "modal_order_btn": "Commander",
        "modal_add_btn": "Ajouter au Panier",
        "floating_wa_tip": "Commander sur WhatsApp"
    },
    "en": {
        "page_title": "Tim Tools Machines | Professional UPSPIRIT Tools & Machinery Abidjan",
        "top_official": "Official Distributor",
        "top_location": "Abidjan, Angré Les Oscars (diagonally across from Hoffmann Medical Center)",
        "nav_home": "Home",
        "nav_about": "About",
        "nav_machines": "Machines",
        "nav_reviews": "Reviews",
        "nav_faq": "FAQ",
        "nav_contact": "Contact",
        "nav_whatsapp_btn": "WhatsApp: +225 07 15 03 27 98",
        "nav_call_btn": "Call: +225 07 89 55 74 42",
        "hero_badge": "Leading Professional Tools & Equipment",
        "hero_welcome": "Welcome to",
        "hero_subtitle": "Your premier partner for heavy-duty tools and high-performance machinery from <strong>UPSPIRIT</strong> worldwide. 100% reliable equipment at the best direct prices.",
        "hero_cta_whatsapp": "Order on WhatsApp",
        "hero_cta_catalog": "Explore Full Catalog",
        "hero_stat_machines": "UPSPIRIT Machines",
        "hero_stat_brand": "Certified Upspirit Brand",
        "hero_stat_clients": "Pros & Craftsmen Equipped",
        "hero_stat_support": "24/7 WhatsApp Support",
        "about_tag": "WHO WE ARE",
        "about_title": "About",
        "about_lead": "<strong>Tim Tools Machines</strong> is based in <strong>Abidjan, Ivory Coast</strong> (Angré Les Oscars, diagonally opposite Hoffmann Medical Center). We specialize in the sale and worldwide distribution of power tools, welders, scales and professional machinery by <strong>UPSPIRIT</strong>.",
        "about_sub": "All our equipment is brand new, factory tested and offered at direct importer prices in CFA Francs (XOF) with instant WhatsApp confirmation, store pickup in Angré or fast shipping.",
        "about_distributor": "Global Distributor",
        "about_f1_title": "Industrial Quality",
        "about_f1_desc": "Rugged machines built to endure heavy workloads.",
        "about_f2_title": "Quality & Authenticity",
        "about_f2_desc": "100% brand new equipment, tested and factory certified.",
        "about_f3_title": "1-Click Ordering",
        "about_f3_desc": "Immediate WhatsApp order confirmation & tracking.",
        "catalog_tag": "OFFICIAL CATALOG",
        "catalog_title": "Our Available",
        "catalog_title_highlight": "Tools & Machines",
        "catalog_subtitle": "Explore our complete professional range with detailed specifications, roles and direct WhatsApp ordering.",
        "search_placeholder": "Search for a machine, grinder, hammer drill, reference...",
        "sort_label": "Sort by:",
        "sort_default": "Recommended",
        "sort_name": "Name (A-Z)",
        "cat_all": "All Items",
        "cat_perforateur": "Hammer Drills & Breakers",
        "cat_meuleuse": "Grinders & Cutters",
        "cat_souffleur": "Blowers & Heat Guns",
        "cat_soudure": "Welding & Workshop",
        "cat_pesage": "Scales & Measurement",
        "cat_cables": "Cables & Extension Reels",
        "cat_outillage": "Pro Tools & Hand Tools",
        "cat_quincaillerie": "Hardware & Fasteners",
        "cat_echelles": "Ladders & Access",
        "cat_percage": "Drilling & Fastening",
        "cat_soufflage": "Blowing & Dust Cleaning",
        "cat_meulage": "Grinding & Cutting",
        "cat_perforation": "Demolition & Hammer Drills",
        "results_count_single": "Showing <strong>1</strong> UPSPIRIT machine",
        "results_count_multi": "Showing <strong>{count}</strong> UPSPIRIT machines",
        "delivery_hint": "Ready for immediate dispatch",
        "empty_title": "No matching products found",
        "empty_desc": "Try searching with different keywords or reset your filters.",
        "empty_reset": "Reset Filters",
        "card_stock": "In Stock - Ready to Ship",
        "card_order_btn": "Order",
        "card_quote": "On Quote",
        "adv_tag": "YOUR ADVANTAGES",
        "adv_title": "Why Choose",
        "adv_f1_title": "Authentic Upspirit Range",
        "adv_f1_desc": "Certified genuine products, high durability with reinforced electromechanical components.",
        "adv_f2_title": "Availability & Shipping",
        "adv_f2_desc": "Fast order dispatch with reinforced packaging to guarantee the integrity of your machinery.",
        "adv_f3_title": "Direct WhatsApp Support",
        "adv_f3_desc": "Technical question or quote needed? Our advisors respond to you in real time.",
        "adv_f4_title": "Direct Importer Pricing",
        "adv_f4_desc": "Best market rates with zero middlemen across our entire machinery range.",
        "testi_tag": "CUSTOMER FEEDBACK",
        "testi_title": "What Our",
        "testi_title_highlight": "Clients & Craftsmen Say",
        "testi_subtitle": "Discover reviews from construction pros, carpenters, welders and mechanics equipped by Tim Tools Machines.",
        "testi_q1": "\"I ordered the HK-DH35B demolition hammer and a 230mm grinder for my site in Cocody. Heavy-duty equipment delivered in under 24 hours. The WhatsApp support is ultra responsive!\"",
        "testi_a1_role": "Construction Contractor - Abidjan",
        "testi_q2": "\"The Upspirit MMA 300 Inverter welder keeps up with the pace in my metal fabrication shop. Very lightweight and clean welds. Excellent value for money in CFA Francs.\"",
        "testi_a2_role": "Pro Metalworker & Welder",
        "testi_q3": "\"The 186-piece tool set and 300kg platform scale matched the photos exactly. Order placed on WhatsApp in 2 minutes. I highly recommend Tim Tools Machines!\"",
        "testi_a3_role": "Industrial Maintenance Manager",
        "faq_tag": "FREQUENTLY ASKED QUESTIONS",
        "faq_title": "Frequently Asked",
        "faq_title_highlight": "Questions",
        "faq_subtitle": "Everything you need to know before placing an order with Tim Tools Machines.",
        "faq_q1": "How do I place an order via WhatsApp?",
        "faq_a1": "Simply click the <strong>\"Order\"</strong> button under any machine to start a chat with a pre-filled message. You can also add multiple items to your cart and click <strong>\"Order on WhatsApp\"</strong> to send your complete order summary.",
        "faq_q2": "Are Upspirit machines genuine and guaranteed?",
        "faq_a2": "Absolutely. We are an official distributor of <strong>UPSPIRIT</strong>. Every machine is 100% brand new, factory inspected and delivered in original packaging with genuine accessories.",
        "faq_q3": "What are the delivery times and coverage areas?",
        "faq_a3": "Delivery takes <strong>24h to 48h</strong> within Abidjan and across Ivory Coast. We also ship via road and air freight throughout West Africa and internationally.",
        "faq_q4": "What payment methods are accepted?",
        "faq_a4": "You can pay via Wave, Orange Money, MTN MoMo, Moov Money, bank transfer or cash on delivery depending on your location.",
        "contact_tag": "CONTACT US",
        "contact_title": "Need a Machine or",
        "contact_title_highlight": "Technical Advice?",
        "contact_desc": "The <strong>Tim Tools Machines</strong> team is at your service for machine orders, custom quote requests or technical guidance.",
        "contact_loc_label": "Store & Showroom Location",
        "contact_loc_text": "<strong>Ivory Coast, Abidjan — Angré Les Oscars</strong><br><span class=\"landmark-text\"><i class=\"fa-solid fa-compass text-yellow\"></i> Diagonally opposite Hoffmann Medical Center</span>",
        "contact_loc_map": "Open in Google Maps",
        "contact_phone_label": "Direct Phone Inquiries",
        "contact_wa_label": "WhatsApp Customer Service (24/7)",
        "contact_shipping_label": "Delivery & Global Shipping",
        "contact_shipping_text": "In-store pickup or fast dispatch across Ivory Coast & worldwide",
        "contact_box_badge": "Live Team on WhatsApp",
        "contact_box_title": "Order Directly Online",
        "contact_box_desc": "Click below to chat immediately with our sales team on WhatsApp:",
        "contact_box_wa_btn": "Chat on WhatsApp (+225 07 15 03 27 98)",
        "contact_box_or": "OR CALL DIRECTLY",
        "contact_box_call_btn": "Call +225 07 89 55 74 42",
        "footer_about": "Tim Tools Machines is your global reference for <strong>UPSPIRIT</strong> tools and machinery. Reliability, strength and performance at the best direct prices.",
        "footer_badge_new": "100% Brand New",
        "footer_badge_pro": "Professional Grade",
        "footer_nav_heading": "Navigation",
        "footer_nav_home": "Home",
        "footer_nav_about": "About Us",
        "footer_nav_machines": "Full Catalog",
        "footer_nav_contact": "Direct Contact",
        "footer_cat_heading": "Top Categories",
        "footer_cat_perfo": "Demolition & Drilling",
        "footer_cat_meule": "Grinding & Cutting",
        "footer_cat_soudure": "Industrial Welding",
        "footer_cat_souffleur": "Blowing & Dusting",
        "footer_cat_pesage": "Scales & Weighing",
        "footer_contact_heading": "Contact Us",
        "footer_store_label": "Store & Showroom:",
        "footer_store_city": "Abidjan, Angre Les Oscars",
        "footer_store_landmark": "Diagonally opposite Hoffmann Medical Center, Ivory Coast",
        "footer_phone_label": "Phone Support:",
        "footer_wa_label": "Official WhatsApp:",
        "footer_brand_label": "Brand Distributed:",
        "footer_brand_val": "UPSPIRIT (Global)",
        "footer_copyright": "© 2026 <strong>Tim Tools Machines</strong>. All rights reserved. Upspirit machinery and tools sales.",
        "footer_credit": "Engineered with <i class=\"fa-solid fa-bolt text-yellow\"></i> for industrial professionals.",
        "drawer_title": "Your Cart / Quote",
        "drawer_total_label": "Estimated Total:",
        "drawer_validate_btn": "Order on WhatsApp",
        "drawer_clear_btn": "Clear Cart",
        "drawer_empty": "Your cart is empty",
        "drawer_empty_desc": "Explore our catalog and add the machines of your choice.",
        "toast_added": "\"{name}\" has been added to your cart",
        "toast_removed": "Product removed from cart",
        "toast_cleared": "Cart cleared",
        "toast_empty": "Your cart is empty!",
        "modal_specs_title": "Technical Specifications & Highlights",
        "modal_role_title": "Role & Detailed Description",
        "modal_order_btn": "Order",
        "modal_add_btn": "Add to Cart",
        "floating_wa_tip": "Order on WhatsApp"
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

    // Language dropdown toggle (Mobile & Desktop)
    const langDropdown = document.getElementById("headerLangDropdown");
    const langDropdownBtn = document.getElementById("langDropdownBtn");

    if (langDropdown && langDropdownBtn) {
        langDropdownBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            const isOpen = langDropdown.classList.toggle("open");
            langDropdownBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        // Close dropdown when clicking outside
        document.addEventListener("click", (e) => {
            if (!langDropdown.contains(e.target)) {
                langDropdown.classList.remove("open");
                langDropdownBtn.setAttribute("aria-expanded", "false");
            }
        });

        // Close on Escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && langDropdown.classList.contains("open")) {
                langDropdown.classList.remove("open");
                langDropdownBtn.setAttribute("aria-expanded", "false");
            }
        });
    }

    // Language switcher buttons & dropdown items
    document.addEventListener("click", (e) => {
        const target = e.target.closest(".lang-btn, .lang-dropdown-item");
        if (target && target.dataset.lang) {
            applyLanguage(target.dataset.lang);
            if (langDropdown) {
                langDropdown.classList.remove("open");
                if (langDropdownBtn) langDropdownBtn.setAttribute("aria-expanded", "false");
            }
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
    const countAllEl = document.getElementById("countAll");
    if (countAllEl) countAllEl.textContent = PRODUCTS.length;
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

        const waMsgText = currentLang === 'en'
            ? `Hello Tim Tools Machines,\nI would like to order the following machine:\n- Product: ${title}\n- Brand: UPSPIRIT\nPlease confirm availability and delivery details in Abidjan / Cote d'Ivoire.`
            : `Bonjour Tim Tools Machines,\nJe souhaite commander la machine suivante :\n- Produit : ${title}\n- Marque : UPSPIRIT\nMerci de me confirmer la disponibilité et les modalités de livraison à Abidjan / Côte d'Ivoire.`;

        const waMessage = encodeURIComponent(waMsgText);

        return `
            <article class="product-card" data-id="${product.id}" itemscope itemtype="https://schema.org/Product">
                <meta itemprop="name" content="${title}">
                <meta itemprop="brand" content="UPSPIRIT">
                <meta itemprop="description" content="${role}">
                <div class="product-media" onclick="openProductModal('${product.id}')" style="cursor: pointer;">
                    <div class="brand-chip"><i class="fa-solid fa-shield-halved text-yellow"></i> ${product.brand}</div>
                    <div class="product-img-wrapper">
                        <img src="${product.image}" alt="${title} - UPSPIRIT Outillage Professionnel" itemprop="image" class="product-real-img" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
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
            </article>
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

window.applyLanguage = function (lang) {
    if (lang !== "fr" && lang !== "en") lang = "fr";
    currentLang = lang;
    try {
        localStorage.setItem("timtools_lang", lang);
    } catch (e) { }

        document.documentElement.lang = lang;
    if (t("page_title")) {
        document.title = t("page_title");
    }

    // Update switcher buttons & dropdown
    const currentFlagEl = document.getElementById("currentLangFlag");
    const currentCodeEl = document.getElementById("currentLangCode");
    if (currentFlagEl) currentFlagEl.textContent = lang === "en" ? "🇬🇧" : "🇫🇷";
    if (currentCodeEl) currentCodeEl.textContent = lang === "en" ? "EN" : "FR";

    document.querySelectorAll(".lang-dropdown-item").forEach(item => {
        item.classList.toggle("active", item.dataset.lang === lang);
    });

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

        <div class="modal-actions">
            <a href="https://wa.me/2250715032798?text=${waMessage}" target="_blank" class="btn btn-whatsapp-large" style="width: 100%; justify-content: center; padding: 0.85rem 1.4rem; font-size: 1rem;">
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
                <button class="ci-remove" onclick="removeFromCart('${item.id}')" title="${currentLang === 'en' ? 'Remove' : 'Supprimer'}">
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
