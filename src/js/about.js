/**
 * DATA DEFINITION
 */
const aboutSectionsData = [
    {
        id: "identity",
        badge: "Our Identity",
        title: "Who We Are",
        description: "Growth engineers and digital strategists dedicated to scaling healthcare brands through clinical precision.",
        image: "./images/WhoWeAre.png",
        imageOverlay: "Legacy Health Growth",
        imageOnRight: true,
        cards: [
            { icon: "fa-solid fa-stethoscope", title: "Market Leadership", desc: "Turning practices into leaders via", highlight: "data-driven strategy.", colorScheme: "teal" },
            { icon: "fa-solid fa-rocket", title: "Beyond Marketing", desc: "Scaling legacy brands with", highlight: "clinical precision.", colorScheme: "indigo" },
            { icon: "fa-solid fa-handshake-angle", title: "Strategic Partner", desc: "Operating as your", highlight: "internal team", afterHighlight: "for success.", colorScheme: "violet" }
        ]
    },
    {
        id: "mission",
        badge: "Our Purpose",
        title: "Our Mission",
        description: "To empower healthcare providers with predictable systems that bridge the gap between clinical excellence and digital visibility.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&w=800&q=60",
        imageOverlay: "Bridge Clinical & Digital",
        imageOnRight: false,
        cards: [
            { icon: "fa-solid fa-rocket", title: "Predictable Systems", desc: "Building", highlight: "scalable foundations", afterHighlight: "for patient care.", colorScheme: "teal" },
            { icon: "fa-solid fa-chart-pie", title: "Transparent Data", desc: "Eliminating uncertainty through", highlight: "measurable growth.", colorScheme: "indigo" },
            { icon: "fa-solid fa-bridge", title: "Digital Bridge", desc: "Connecting clinical excellence with", highlight: "online authority.", colorScheme: "violet" }
        ]
    },
    {
        id: "experience",
        badge: "Proven Track Record",
        title: "Our Experience",
        description: "Over a decade in the trenches of medical marketing, scaling local clinics into regional powerhouses.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=60",
        imageOverlay: "Global Healthcare Scaling",
        imageOnRight: true,
        cards: [
            { icon: "fa-solid fa-users", title: "500+ Practices", desc: "Actively managed and", highlight: "scaled globally.", colorScheme: "teal" },
            { icon: "fa-solid fa-dollar-sign", title: "$50M+ Ad Spend", desc: "Optimized for", highlight: "maximum ROI.", colorScheme: "indigo" },
            { icon: "fa-solid fa-trophy", title: "15+ Years", desc: "Combined industry", highlight: "experience.", colorScheme: "violet" }
        ]
    },
    {
        id: "expertise",
        badge: "Sector Expertise",
        title: "Why Specialized Marketing?",
        description: "The patient journey is deeply personal, heavily regulated, and built entirely on trust.",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=60",
        imageOverlay: "Healthcare-First Strategy",
        imageOnRight: false,
        cards: [
            { icon: "fa-solid fa-shield-virus", title: "HIPAA Compliance", desc: "Navigating strict privacy regulations with", highlight: "100% confidence.", colorScheme: "teal" },
            { icon: "fa-solid fa-hand-holding-heart", title: "Empathy Content", desc: "Communicating expertise with", highlight: "clarity and compassion.", colorScheme: "indigo" },
            { icon: "fa-solid fa-chart-line", title: "Data-Backed", desc: "Tracking every lead for", highlight: "measurable patient ROI.", colorScheme: "violet" }
        ]
    }
];

/**
 * CONFIGURATION & HELPERS
 */
const colorMap = {
    teal: { bg: "bg-teal-50", text: "text-teal-600", active: "group-hover:bg-teal-600" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", active: "group-hover:bg-indigo-600" },
    violet: { bg: "bg-violet-50", text: "text-violet-600", active: "group-hover:bg-violet-600" }
};

// Unified Card UI - One function to rule them all
function createAboutCard(card, idx) {
    const colors = colorMap[card.colorScheme] || colorMap.teal;
    return `
        <div class="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-default">
            <div class="w-12 h-12 shrink-0 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center transition-all duration-500 ${colors.active} group-hover:text-white group-hover:${idx % 2 === 0 ? 'rotate-6' : '-rotate-6'}">
                <i class="${card.icon} text-size-body"></i>
            </div>
            <div>
                <h4 class="text-size-body font-black text-skin-accent uppercase tracking-wider">${card.title}</h4>
                <p class="text-size-accent font-medium text-skin-accent-1 mt-small leading-snug">
                    ${card.desc} <span class="${colors.text} font-bold">${card.highlight}</span> ${card.afterHighlight || ''}
                </p>
            </div>
        </div>
    `;
}


export function renderAboutSwiper() {
    const wrapper = document.querySelector('#about-swiper-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = aboutSectionsData.map(section => `
        <div class="swiper-slide h-full">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-large h-[90%]">
            <div class="flex flex-col gap-medium">
                <div>
                    <span class="text-size-sub-header font-semibold uppercase text-skin-primary">${section.badge}</span>
                    <h3 class="text-size-header font-bold text-skin-accent mt-small">${section.title}</h3>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    ${section.cards.map((card, idx) => createAboutCard(card, idx)).join('')}
                </div>
            </div>
                <div class="hidden md:block rounded-3xl overflow-hidden h-full shadow-lg border-2 border-black relative group">
                    <img src="${section.image}" class="w-full h-full object-cover" alt="preview" loading="lazy">
                    <div class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex items-end justify-center">
                         <span class="text-size-accent mb-large text-white font-bold uppercase tracking-widest">${section.imageOverlay || ''}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

export function renderAboutPageContent() {
    const container = document.querySelector('#about-content-container');
    if (!container) return;

    container.innerHTML = aboutSectionsData.map((section, index) => {
        const textContent = `
            <div class="flex flex-col justify-center lg:w-1/2" data-aos="fade-${section.imageOnRight ? 'right' : 'left'}">
                <div class="mb-6">
                    <span class="inline-block px-4 py-1.5 rounded-full bg-skin-primary/10 text-skin-primary text-size-accent font-bold uppercase tracking-wider mb-4 border border-skin-primary/20">${section.badge}</span>
                    <h2 class="text-size-header font-black text-skin-accent mb-4">${section.title}</h2>
                    <p class="text-size-body text-skin-accent-2 font-medium leading-relaxed">${section.description}</p>
                </div>
                <div class="grid grid-cols-1 gap-4">
                    ${section.cards.map((card, idx) => createAboutCard(card, idx)).join('')}
                </div>
            </div>
        `;

        const imageContent = `
            <div class="relative group lg:w-1/2" data-aos="fade-${section.imageOnRight ? 'left' : 'right'}">
                <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 aspect-video lg:aspect-auto lg:h-full">
                    <img src="${section.image}" alt="${section.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 right-6">
                        <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-size-accent font-bold uppercase tracking-widest rounded-xl shadow-lg">
                            ${section.imageOverlay || ''}
                        </span>
                    </div>
                </div>
                <!-- Decorative background blob -->
                <div class="absolute -z-10 inset-0 ${section.imageOnRight ? 'translate-x-4' : '-translate-x-4'} translate-y-4 bg-skin-primary/20 rounded-3xl blur-xl transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:bg-skin-primary/30"></div>
            </div>
        `;

        return `
            <div class="flex flex-col ${section.imageOnRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-large lg:gap-16 items-stretch w-full py-8 lg:py-12">
                ${textContent}
                ${imageContent}
            </div>
        `;
    }).join('');
}

/**
 * INITIALIZATION
 */
// renderAboutSwiper and renderAboutPageContent are now called by main.js
// to ensure proper initialization order.