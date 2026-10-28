/**
 * TIM TOOLS MACHINES - Application Web Dynamique
 * Distributeur Officiel UPSPIRIT
 * Contact: +225 07 89 55 74 42 | WhatsApp: +225 07 15 03 27 98
 */

// BASE DE DONNÉES DES 36 MACHINES & OUTILS AVEC LEURS VRAIES IMAGES
const PRODUCTS = [
    {
        id: "p1",
        name: "Mallette à outils 186 pièces",
        category: "outillage",
        price: 40000,
        brand: "UPSPIRIT",
        image: "images/p1.jpg",
        icon: "fa-solid fa-toolbox",
        role: "Mallette complète ultra-robuste avec coffre à roulettes en aluminium. Contient 186 outils professionnels pour mécanique, électricité et maintenance générale.",
        specs: ["186 pièces acier CR-V", "Valise trolley alu", "Verrouillage à clé", "Polyvalence totale"]
    },
    {
        id: "p2",
        name: "Pulvérisateur à pression 16L manuel",
        category: "outillage",
        price: 11500,
        brand: "UPSPIRIT",
        image: "images/p2.jpg",
        icon: "fa-solid fa-spray-can",
        role: "Pulvérisateur dorsal haute résistance avec réservoir 16 litres, lance en inox et buse réglable. Idéal pour traitements agricoles, désinfection et jardinage.",
        specs: ["Capacité 16 Litres", "Pression manuelle", "Lance télescopique", "Harnais confort"]
    },
    {
        id: "p3",
        name: "Pulvérisateur à pression 20L",
        category: "outillage",
        price: 20000,
        brand: "UPSPIRIT",
        image: "images/p3.jpg",
        icon: "fa-solid fa-pump-soap",
        role: "Modèle grande contenance 20 litres conçu pour les exploitations agricoles, grands chantiers et désinfection intensive. Ergonomie et débit continu.",
        specs: ["Capacité 20 Litres", "Réservoir polyéthylène", "Pression constante", "Buse multi-jets"]
    },
    {
        id: "p4",
        name: "Coffret à douilles 46 pièces",
        category: "outillage",
        price: 6500,
        brand: "UPSPIRIT",
        image: "images/p4.jpg",
        icon: "fa-solid fa-wrench",
        role: "Coffret compact d'outils de précision avec cliquet réversible 1/4\", rallonges, douilles et embouts variés. Indispensable pour la petite mécanique et auto.",
        specs: ["46 pièces", "Cliquet réversible 1/4\"", "Acier Chrome-Vanadium", "Boîtier anti-chocs"]
    },
    {
        id: "p5",
        name: "Souffleur électrique standard bleu",
        category: "souffleur",
        price: 5000,
        brand: "UPSPIRIT",
        image: "images/p5.jpg",
        icon: "fa-solid fa-wind",
        role: "Souffleur compact léger bleu pour dépoussiérage des ateliers, ordinateurs, tableaux électriques, climatiseurs et surfaces de travail.",
        specs: ["Filaire haute vitesse", "Buse souple fournie", "Poignée ergonomique", "Léger & maniable"]
    },
    {
        id: "p6",
        name: "Souffleur électrique jaune",
        category: "souffleur",
        price: 6000,
        brand: "UPSPIRIT",
        image: "images/p6.jpg",
        icon: "fa-solid fa-fan",
        role: "Souffleur électrique classique de couleur jaune avec moteur à régime accéléré, idéal pour le nettoyage des copeaux et débris de sciage.",
        specs: ["Turbine équilibrée", "Débit d'air renforcé", "Fonction aspiration", "Double isolation"]
    },
    {
        id: "p7",
        name: "Souffleur électrique renforcé",
        category: "souffleur",
        price: 8000,
        brand: "UPSPIRIT",
        image: "images/p7.jpg",
        icon: "fa-solid fa-tornado",
        role: "Modèle renforcé pour usage professionnel régulier. Boîtier résistant aux chocs, débit d'air puissant pour expulsion rapide des résidus tenaces.",
        specs: ["Moteur blindé", "Débit supérieur", "Résistance thermique", "Usage soutenu"]
    },
    {
        id: "p8",
        name: "Souffleur électrique grand modèle",
        category: "souffleur",
        price: 22000,
        brand: "UPSPIRIT",
        image: "images/p8.jpg",
        icon: "fa-solid fa-feather-pointed",
        role: "Turbine industrielle de grande capacité pour nettoyage des vastes surfaces, cours, gros chantiers de construction et ateliers métallurgiques.",
        specs: ["Très grand débit", "Moteur haute puissance", "Buse extra large", "Qualité industrielle"]
    },
    {
        id: "p9",
        name: "Marteau perforateur rotatif 20 mm",
        category: "perforateur",
        price: 12000,
        brand: "UPSPIRIT",
        image: "images/p9.jpg",
        icon: "fa-solid fa-hammer",
        role: "Perforateur électropneumatique compact 20 mm pour forer rapidement et sans effort la brique, le plâtre et le béton léger.",
        specs: ["Diamètre 20 mm", "Mandrin SDS-Plus", "Perçage / Percussion", "Poignée auxiliaire"]
    },
    {
        id: "p10",
        name: "Marteau perforateur rotatif 24 mm",
        category: "perforateur",
        price: 18000,
        brand: "UPSPIRIT",
        image: "images/p10.jpg",
        icon: "fa-solid fa-screwdriver-wrench",
        role: "Perforateur multi-fonctions 24 mm avec excellente énergie d'impact. Recommandé pour maçons, électriciens et installateurs de sanitaires.",
        specs: ["Diamètre 24 mm", "Frappe pneumatique", "Sélecteur 3 modes", "Variateur de vitesse"]
    },
    {
        id: "p11",
        name: "Marteau perforateur rotatif 26 mm",
        category: "perforateur",
        price: 19000,
        brand: "UPSPIRIT",
        image: "images/p11.jpg",
        icon: "fa-solid fa-gear",
        role: "Machine robuste 26 mm à force de frappe élevée pour perçages réguliers dans le béton armé et petites opérations de burinage.",
        specs: ["Diamètre 26 mm", "Force de percussion élevée", "Carter alliage", "Protection anti-vibration"]
    },
    {
        id: "p12",
        name: "Marteau piqueur HK-DH35B",
        category: "perforateur",
        price: 26000,
        brand: "UPSPIRIT",
        image: "images/p12.jpg",
        icon: "fa-solid fa-trowel-bricks",
        role: "Brise-béton et marteau piqueur haute cadence HK-DH35B pour la démolition de dalles, le piquetage de murs en béton et le décapage de sols.",
        specs: ["Modèle HK-DH35B", "Force d'impact max", "Système anti-choc", "Livré avec burins"]
    },
    {
        id: "p13",
        name: "Poste à souder inverter MMA MINI 250",
        category: "soudure",
        price: 15000,
        brand: "UPSPIRIT",
        image: "images/p13.jpg",
        icon: "fa-solid fa-bolt-lightning",
        role: "Poste de soudure électronique à technologie IGBT Inverter 250A. Ultra-léger, amorçage stable et fusion propre pour baguettes de 2.0 à 3.2 mm.",
        specs: ["Courant 250A", "Technologie IGBT Inverter", "Compact & portatif", "Affichage numérique"]
    },
    {
        id: "p14",
        name: "Poste à souder inverter MMA MINI 300",
        category: "soudure",
        price: 17000,
        brand: "UPSPIRIT",
        image: "images/p14.jpg",
        icon: "fa-solid fa-fire",
        role: "Poste à souder haute puissance 300A pour travaux métalliques exigeants. Prise en charge des grosses baguettes de soudure avec ventilation renforcée.",
        specs: ["Courant 300A", "Arc Force / Anti-Stick", "Protection surchauffe", "Câbles de masse inclus"]
    },
    {
        id: "p15",
        name: "Balance électronique à colonne 300 kg HK-DS150K",
        category: "pesage",
        price: 16000,
        brand: "UPSPIRIT",
        image: "images/p15.jpg",
        icon: "fa-solid fa-scale-balanced",
        role: "Plateforme de pesée industrielle avec colonne et afficheur digital LED. Idéale pour peser sacs de cacao, café, colis et matières premières jusqu'à 300 kg.",
        specs: ["Charge max 300 kg", "Réf HK-DS150K", "Batterie rechargeable", "Plateau acier gaufré"]
    },
    {
        id: "p16",
        name: "Balance électronique de comptoir HK-836",
        category: "pesage",
        price: 10000,
        brand: "UPSPIRIT",
        image: "images/p16.jpg",
        icon: "fa-solid fa-calculator",
        role: "Balance commerciale de précision HK-836 avec calcul automatique des prix au kg, double affichage recto-verso client/vendeur et touches mémoires.",
        specs: ["Réf HK-836", "Calcul de prix auto", "Double écran LED", "Autonomie sur batterie"]
    },
    {
        id: "p17",
        name: "Meuleuse d'angle 115mm HK-G2-115",
        category: "meuleuse",
        price: 7000,
        brand: "UPSPIRIT",
        image: "images/p17.jpg",
        icon: "fa-solid fa-compact-disc",
        role: "Meuleuse d'angle compacte 115 mm HK-G2-115 pour coupes rapides de tubes, fers plats, carrelages et travaux d'ébarbage en espaces étroits.",
        specs: ["Disque 115 mm", "Modèle HK-G2-115", "Corps profilé fin", "Carter protecteur réglable"]
    },
    {
        id: "p18",
        name: "Meuleuse d'angle 125mm",
        category: "meuleuse",
        price: 8000,
        brand: "UPSPIRIT",
        image: "images/p18.jpg",
        icon: "fa-solid fa-compact-disc",
        role: "La meuleuse polyvalente par excellence en 125 mm. Moteur puissant et équilibré pour tronçonner et meuler métal, maçonnerie et dalles.",
        specs: ["Disque 125 mm", "Moteur haute performance", "Blocage de broche", "Poignée 2 positions"]
    },
    {
        id: "p19",
        name: "Meuleuse d'angle 180mm",
        category: "meuleuse",
        price: 16000,
        brand: "UPSPIRIT",
        image: "images/p19.jpg",
        icon: "fa-solid fa-circle-notch",
        role: "Meuleuse semi-lourde 180 mm offrant une profondeur de coupe supérieure pour profilés épais, tuyaux métalliques de gros diamètre et maçonnerie.",
        specs: ["Disque 180 mm", "Puissance élevée", "Poignée arrière rotative", "Démarrage progressif"]
    },
    {
        id: "p20",
        name: "Meuleuse d'angle grand format 230mm HK-AG180",
        category: "meuleuse",
        price: 25000,
        brand: "UPSPIRIT",
        image: "images/p20.jpg",
        icon: "fa-solid fa-circle-notch",
        role: "Très grand modèle 230 mm HK-AG180 pour gros travaux de chantier et métallurgie lourde. Coupe profonde des blocs de béton et structures en acier.",
        specs: ["Grand disque 230 mm", "Réf HK-AG180", "Moteur ultra-puissant", "Sécurité anti-rebond"]
    },
    {
        id: "p21",
        name: "Malaxeur électrique / mélangeur HK-PM01",
        category: "soudure",
        price: 15000,
        brand: "UPSPIRIT",
        image: "images/p21.jpg",
        icon: "fa-solid fa-blender",
        role: "Malaxeur double poignée ergonomique HK-PM01 pour préparer et homogénéiser facilement ciment, mortier, colle pour carrelage, plâtre et peinture.",
        specs: ["Réf HK-PM01", "Double poignée ergonomique", "Variateur électronique", "Pale mélangeuse incluse"]
    },
    {
        id: "p22",
        name: "Scie à onglet radiale alu / bois HK-MS003",
        category: "meuleuse",
        price: 100000,
        brand: "UPSPIRIT",
        image: "images/p22.jpg",
        icon: "fa-solid fa-ruler-combined",
        role: "Scie circulaire à onglet radiale de haute précision HK-MS003 pour menuiserie bois et profilés aluminium. Angles de coupe précis de 0° à 45°.",
        specs: ["Réf HK-MS003", "Chariot radial", "Coupe bois & alu", "Guide laser de coupe"]
    },
    {
        id: "p23",
        name: "Scie à onglet / Tronçonneuse HK-MS004",
        category: "meuleuse",
        price: 100000,
        brand: "UPSPIRIT",
        image: "images/p23.jpg",
        icon: "fa-solid fa-shapes",
        role: "Station d'onglet et tronçonneuse d'atelier HK-MS004. Bâti robuste en aluminium moulé, table de découpe graduée pour coupes d'onglets nettes.",
        specs: ["Réf HK-MS004", "Plateau tournant cranté", "Butée de profondeur", "Lame carbure incluse"]
    },
    {
        id: "p24",
        name: "Tronçonneuse à métaux / Découpeuse 355mm OKM-355A",
        category: "meuleuse",
        price: 40000,
        brand: "UPSPIRIT",
        image: "images/p24.jpg",
        icon: "fa-solid fa-circle-dot",
        role: "Tronçonneuse pendulaire 355 mm OKM-355A pour la découpe à froid nette et rapide de fers ronds, cornières, poutrelles et tubes acier.",
        specs: ["Disque 355 mm (14\")", "Réf OKM-355A", "Étau de serrage rapide", "Capot enveloppant"]
    },
    {
        id: "p25",
        name: "Décapeur thermique / Pistolet à air chaud HK-HG01",
        category: "souffleur",
        price: 65000,
        brand: "UPSPIRIT",
        image: "images/p25.jpg",
        icon: "fa-solid fa-temperature-arrow-up",
        role: "Générateur d'air chaud professionnel HK-HG01 pour décaper peintures et vernis, déformer les tuyaux PVC, souder bâches et rétracter gaines.",
        specs: ["Réf HK-HG01", "Thermostat réglable", "Multi-embouts fournis", "Position statique verticale"]
    },
    {
        id: "p26",
        name: "Touret à meuler 150mm (6\") HK-BG601",
        category: "soudure",
        price: 12000,
        brand: "UPSPIRIT",
        image: "images/p26.jpg",
        icon: "fa-solid fa-ring",
        role: "Touret d'établi 150 mm HK-BG601 à deux meules (ébauche et finition). Indispensable pour affûter mèches, forets, ciseaux à bois et burins.",
        specs: ["Meules 150 mm (6\")", "Réf HK-BG601", "Pare-étincelles réglables", "Moteur induction silencieux"]
    },
    {
        id: "p27",
        name: "Touret à meuler 200mm (8\") HK-BG801",
        category: "soudure",
        price: 20000,
        brand: "UPSPIRIT",
        image: "images/p27.jpg",
        icon: "fa-solid fa-gears",
        role: "Grand touret d'atelier 200 mm HK-BG801 lourd et stable. Conçu pour le meulage intensif de grosses pièces métalliques et réaffûtage d'outils lourds.",
        specs: ["Meules 200 mm (8\")", "Réf HK-BG801", "Socle fonte antivibrations", "Éclairage de travail"]
    },
    {
        id: "p28",
        name: "Perceuse électrique filaire 13mm HK-ED1305",
        category: "outillage",
        price: 6000,
        brand: "UPSPIRIT",
        image: "images/p28.jpg",
        icon: "fa-solid fa-bore-hole",
        role: "Perceuse électrique maniable HK-ED1305 avec mandrin à clé 13 mm. Inverseur de sens de rotation et variateur pour forer bois, métal et plastique.",
        specs: ["Mandrin 13 mm", "Réf HK-ED1305", "Vitesse variable", "Poignée ergonomique"]
    },
    {
        id: "p29",
        name: "Enrouleur de câble électrique 25m OKEM-CR25",
        category: "cables",
        price: 12000,
        brand: "UPSPIRIT",
        image: "images/p29.jpg",
        icon: "fa-solid fa-satellite-dish",
        role: "Tambour enrouleur 25 mètres modèle OKEM-CR25. Châssis métallique stable, 4 prises protégées avec clapets et coupe-circuit thermique.",
        specs: ["Longueur 25 mètres", "Réf OKEM-CR25", "4 prises 230V", "Disjoncteur thermique"]
    },
    {
        id: "p30",
        name: "Enrouleur de câble électrique 50m HK-CR50",
        category: "cables",
        price: 20000,
        brand: "UPSPIRIT",
        image: "images/p30.jpg",
        icon: "fa-solid fa-circle-nodes",
        role: "Grand enrouleur de chantier 50 mètres HK-CR50. Idéal pour alimenter vos machines à longue distance en extérieur sans perte de tension.",
        specs: ["Portée 50 mètres", "Réf HK-CR50", "Tambour renforcé", "Poignée guide-câble"]
    },
    {
        id: "p31",
        name: "Enrouleur tambour câble caréné 50m HK-CR50",
        category: "cables",
        price: 21000,
        brand: "UPSPIRIT",
        image: "images/p31.jpg",
        icon: "fa-solid fa-shield",
        role: "Enrouleur professionnel 50 mètres HK-CR50 doté d'un carénage protecteur intégral anti-poussière, boue et chocs mécaniques sur chantier.",
        specs: ["Longueur 50 m", "Carénage hermétique", "Protection intempéries", "Tambour rotatif fluide"]
    },
    {
        id: "p32",
        name: "Enrouleur tambour câble caréné 25m HK-CR25",
        category: "cables",
        price: 17000,
        brand: "UPSPIRIT",
        image: "images/p32.jpg",
        icon: "fa-solid fa-shield-halved",
        role: "Version carénée compacte 25 mètres HK-CR25. Protège parfaitement votre câble électrique lors des déplacements fréquents en atelier et chantier.",
        specs: ["Longueur 25 m", "Carénage antichoc", "Réf HK-CR25", "Prises protégées"]
    },
    {
        id: "p33",
        name: "Rallonge câble électrique 10m (norme EU)",
        category: "cables",
        price: 19000,
        brand: "UPSPIRIT",
        image: "images/p33.jpg",
        icon: "fa-solid fa-plug-circle-check",
        role: "Cordon prolongateur de haute sécurité de 10 mètres certifié selon les normes européennes. Câble néoprène résistant aux frottements et graisses.",
        specs: ["Longueur 10 mètres", "Certifié Norme EU", "Fiche étanche IP44", "Section de fil renforcée"]
    },
    {
        id: "p34",
        name: "Balai de charbon moteur",
        category: "outillage",
        price: 100,
        brand: "UPSPIRIT",
        image: "images/p34.jpg",
        icon: "fa-solid fa-bolt",
        role: "Paire de balais de charbon haute densité pour moteurs électriques d'outils électroportatifs. Assure un contact électrique parfait sans étincelage excessif.",
        specs: ["Graphite haute qualité", "Ressort & cosse cuivre", "Durabilité prolongée", "Prix unitaire 100 XOF"]
    },
    {
        id: "p35",
        name: "Balai de charbon perforateur",
        category: "outillage",
        price: 100,
        brand: "UPSPIRIT",
        image: "images/p35.jpg",
        icon: "fa-solid fa-sparkles",
        role: "Charbon spécial pour marteaux perforateurs et piqueurs. Résiste aux fortes vibrations et aux températures de fonctionnement intenses.",
        specs: ["Adapté aux perforateurs", "Auto-rupteur de sécurité", "Haute conductivité", "Prix unitaire 100 XOF"]
    },
    {
        id: "p36",
        name: "Échelles et escabeaux professionnels (Ladder tout type)",
        category: "echelles",
        price: null, // Sur devis
        brand: "UPSPIRIT",
        image: "images/p36.jpg",
        icon: "fa-solid fa-stairs",
        role: "Gamme complète d'échelles télescopiques en aluminium, escabeaux pliants de sécurité, échelles transformables et articulées multi-usages.",
        specs: ["Aluminium aéronautique", "Hauteurs sur mesure", "Pieds antidérapants", "Sur devis personnalisé"]
    }
];

// STATE MANAGEMENT
let currentCategory = "all";
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

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromStorage();
    renderProducts();
    setupEventListeners();
    updateCartCount();
});

// SETUP LISTENERS
function setupEventListeners() {
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

    // Reset filters
    const resetFiltersBtn = document.getElementById("resetFiltersBtn");
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener("click", () => {
            searchInput.value = "";
            currentSearch = "";
            clearSearchBtn.style.display = "none";
            currentCategory = "all";
            currentSort = "default";
            sortSelect.value = "default";
            categoryTabs.querySelectorAll(".cat-pill").forEach(p => {
                p.classList.toggle("active", p.dataset.category === "all");
            });
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

    // Scroll header styling
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // ESC key closes modals
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal();
            closeCart();
        }
    });
}

// RENDER PRODUCTS WITH REAL IMAGES
function renderProducts() {
    let filtered = PRODUCTS.filter(p => {
        const matchesCategory = currentCategory === "all" || p.category === currentCategory;
        const matchesSearch = !currentSearch || 
            p.name.toLowerCase().includes(currentSearch) || 
            p.role.toLowerCase().includes(currentSearch) ||
            (p.brand && p.brand.toLowerCase().includes(currentSearch));
        return matchesCategory && matchesSearch;
    });

    // Sort
    if (currentSort === "price-asc") {
        filtered.sort((a, b) => (a.price || 9999999) - (b.price || 9999999));
    } else if (currentSort === "price-desc") {
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (currentSort === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Update Counter
    resultsCount.innerHTML = `Affichage de <strong>${filtered.length}</strong> machine${filtered.length > 1 ? 's' : ''} et outil${filtered.length > 1 ? 's' : ''}`;

    if (filtered.length === 0) {
        productsGrid.innerHTML = "";
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    productsGrid.innerHTML = filtered.map(product => {
        const formattedPrice = product.price !== null
            ? `<span class="price-value">${formatXOF(product.price)} XOF</span>`
            : `<span class="price-devis"><i class="fa-solid fa-clipboard-question"></i> Sur devis</span>`;

        const waMessage = encodeURIComponent(
            `Bonjour Tim Tools Machines,\nJe souhaite commander :\n- Produit : ${product.name}\n- Prix : ${product.price !== null ? formatXOF(product.price) + ' XOF' : 'Sur devis'}\nMerci de me contacter pour la livraison.`
        );

        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-media" onclick="openProductModal('${product.id}')" style="cursor: pointer;">
                    <div class="brand-chip"><i class="fa-solid fa-shield-halved text-yellow"></i> ${product.brand}</div>
                    <div class="category-tag">${getCategoryName(product.category)}</div>
                    <div class="product-img-wrapper">
                        <img src="${product.image}" alt="${product.name}" class="product-real-img" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                        <div class="product-icon-display" style="display: none;">
                            <i class="${product.icon}"></i>
                        </div>
                        <div class="img-glow-overlay"></div>
                    </div>
                </div>

                <div class="product-content">
                    <h3 class="product-title" onclick="openProductModal('${product.id}')" style="cursor: pointer;">${product.name}</h3>
                    <p class="product-role">${product.role}</p>

                    <div class="product-specs-pills">
                        ${product.specs.map(spec => `<span class="spec-pill"><i class="fa-solid fa-circle-check text-yellow"></i> ${spec}</span>`).join('')}
                    </div>

                    <div class="product-footer">
                        <div class="price-box">
                            <span class="price-label">Prix Tarif</span>
                            ${formattedPrice}
                        </div>
                        <div class="card-actions">
                            <button class="btn-card-cart" onclick="addToCart('${product.id}')" title="Ajouter au devis/panier">
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                            <a href="https://wa.me/2250715032798?text=${waMessage}" target="_blank" class="btn-card-whatsapp" title="Commander directement sur WhatsApp">
                                <i class="fa-brands fa-whatsapp"></i> Commander
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// FORMAT XOF
function formatXOF(num) {
    return num.toLocaleString('fr-FR');
}

// GET CATEGORY LABEL
function getCategoryName(cat) {
    const map = {
        perforateur: "Perforateur",
        meuleuse: "Meuleuse & Découpe",
        souffleur: "Souffleur",
        soudure: "Soudure & Établi",
        pesage: "Pesage & Mesure",
        cables: "Câble & Rallonge",
        outillage: "Outillage Pro",
        echelles: "Échelles & Accès"
    };
    return map[cat] || "Machine";
}

// EXTERNAL CATEGORY FILTER TRIGGER (From Footer)
window.filterByCategory = function(category) {
    currentCategory = category;
    categoryTabs.querySelectorAll(".cat-pill").forEach(p => {
        p.classList.toggle("active", p.dataset.category === category);
    });
    renderProducts();
};

// MODAL HANDLING WITH REAL IMAGE
window.openProductModal = function(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const formattedPrice = product.price !== null
        ? `${formatXOF(product.price)} XOF`
        : "Sur devis personnalisé";

    const waMessage = encodeURIComponent(
        `Bonjour Tim Tools Machines,\nJe souhaite des informations ou commander :\n- Produit : ${product.name}\n- Prix : ${formattedPrice}\nMerci de m'indiquer la disponibilité et les modalités de livraison.`
    );

    modalBody.innerHTML = `
        <div class="modal-prod-header">
            <div class="modal-prod-img-box">
                <img src="${product.image}" alt="${product.name}" class="modal-real-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <div class="modal-prod-icon" style="display: none;">
                    <i class="${product.icon}"></i>
                </div>
            </div>
            <div class="modal-prod-info">
                <div class="brand-chip" style="position: static; display: inline-block; margin-bottom: 0.4rem;">
                    <i class="fa-solid fa-bolt text-yellow"></i> Marque ${product.brand}
                </div>
                <h3>${product.name}</h3>
                <div class="modal-price">${formattedPrice}</div>
            </div>
        </div>

        <div class="modal-section-title"><i class="fa-solid fa-circle-info"></i> Rôle & Description Détaillée</div>
        <p class="modal-role-text">${product.role}</p>

        <div class="modal-section-title"><i class="fa-solid fa-list-check"></i> Fiche Technique & Points Forts</div>
        <div class="product-specs-pills" style="margin-bottom: 1.5rem;">
            ${product.specs.map(s => `<span class="spec-pill" style="font-size: 0.85rem; padding: 0.35rem 0.75rem;"><i class="fa-solid fa-circle-check text-yellow"></i> ${s}</span>`).join('')}
        </div>

        <div class="modal-actions">
            <button class="btn btn-warning" onclick="addToCart('${product.id}'); closeModal();">
                <i class="fa-solid fa-cart-plus"></i> Ajouter au Panier
            </button>
            <a href="https://wa.me/2250715032798?text=${waMessage}" target="_blank" class="btn btn-whatsapp-large" style="padding: 0.75rem 1.2rem; font-size: 0.95rem;">
                <i class="fa-brands fa-whatsapp"></i> Commander sur WhatsApp
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

// CART / ORDER SYSTEM
window.addToCart = function(productId) {
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

    saveCartToStorage();
    updateCartCount();
    renderCart();
    showToast(`"${product.name}" a été ajouté à votre panier`);
};

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
                <h4>Votre panier est vide</h4>
                <p>Découvrez notre catalogue et ajoutez les machines de votre choix.</p>
            </div>
        `;
        drawerTotalAmount.textContent = "0 XOF";
        return;
    }

    let total = 0;
    drawerItems.innerHTML = cart.map(item => {
        const itemTotal = item.price !== null ? item.price * item.qty : null;
        if (itemTotal !== null) total += itemTotal;

        const priceText = item.price !== null
            ? `${formatXOF(item.price)} XOF`
            : "Sur devis";

        return `
            <div class="cart-item">
                <img src="${item.image || 'images/' + item.id + '.jpg'}" alt="${item.name}" class="cart-item-thumb" onerror="this.style.display='none';" />
                <div class="ci-details">
                    <div class="ci-title">${item.name}</div>
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

window.changeQty = function(id, delta) {
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

window.removeFromCart = function(id) {
    cart = cart.filter(i => i.id !== id);
    saveCartToStorage();
    updateCartCount();
    renderCart();
    showToast("Produit retiré du panier");
};

function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    saveCartToStorage();
    updateCartCount();
    renderCart();
    showToast("Panier vidé");
}

function sendWhatsAppCartOrder() {
    if (cart.length === 0) {
        showToast("Votre panier est vide !");
        return;
    }

    let message = "Bonjour Tim Tools Machines,\n\nJe souhaite passer commande pour le matériel suivant :\n";
    let total = 0;

    cart.forEach((item, index) => {
        const priceStr = item.price !== null ? `${formatXOF(item.price)} XOF` : "Sur devis";
        message += `${index + 1}. *${item.name}* x${item.qty} (${priceStr})\n`;
        if (item.price !== null) {
            total += item.price * item.qty;
        }
    });

    message += `\n*TOTAL ESTIMÉ : ${formatXOF(total)} XOF*\n\nMerci de me contacter pour valider la disponibilité et programmer la livraison.`;

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
