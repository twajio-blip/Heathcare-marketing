const aboutSectionsData = [
    {
        id: "identity",
        badge: "Our Identity",
        title: "Who We Are",
        description: "Growth engineers and digital strategists dedicated to scaling healthcare brands through clinical precision.",
        image: "./images/WhoWeAre.png",
        imageOverlay: "Legacy Health Growth",
        imageOnRight: true,
        floatingStat: {
            icon: "fa-solid fa-chart-line",
            label: "EFFICIENCY",
            value: "+142% Growth",
            colorScheme: "green"
        },
        cards: [
            {
                icon: "fa-solid fa-stethoscope",
                title: "Market Leadership",
                desc: "Turning practices into leaders via",
                highlight: "data-driven strategy.",
                colorScheme: "teal"
            },
            {
                icon: "fa-solid fa-rocket",
                title: "Beyond Marketing",
                desc: "Scaling legacy brands with",
                highlight: "clinical precision.",
                colorScheme: "indigo"
            },
            {
                icon: "fa-solid fa-handshake-angle",
                title: "Strategic Partner",
                desc: "Operating as your",
                highlight: "internal team",
                afterHighlight: "for success.",
                colorScheme: "violet"
            }
        ]
    },
    {
        id: "mission",
        badge: "Our Purpose",
        title: "Our Mission",
        description: "To empower healthcare providers with predictable systems that bridge the gap between clinical excellence and digital visibility.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&w=1000&q=80",
        imageOverlay: "Bridge Clinical & Digital",
        imageOnRight: false,
        cards: [
            {
                icon: "fa-solid fa-rocket",
                title: "Predictable Systems",
                desc: "Building",
                highlight: "scalable foundations",
                afterHighlight: "for patient care.",
                colorScheme: "teal"
            },
            {
                icon: "fa-solid fa-chart-pie",
                title: "Transparent Data",
                desc: "Eliminating uncertainty through",
                highlight: "measurable growth.",
                colorScheme: "indigo"
            },
            {
                icon: "fa-solid fa-bridge",
                title: "Digital Bridge",
                desc: "Connecting clinical excellence with",
                highlight: "online authority.",
                colorScheme: "violet"
            }
        ]
    },
    {
        id: "experience",
        badge: "Proven Track Record",
        title: "Our Experience",
        description: "Over a decade in the trenches of medical marketing, scaling local clinics into regional powerhouses.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
        imageOnRight: true,
        cards: [
            {
                icon: "fa-solid fa-users",
                title: "500+ Practices",
                desc: "Actively managed and",
                highlight: "scaled globally.",
                colorScheme: "teal"
            },
            {
                icon: "fa-solid fa-dollar-sign",
                title: "$50M+ Ad Spend",
                desc: "Optimized for",
                highlight: "maximum ROI.",
                colorScheme: "indigo"
            },
            {
                icon: "fa-solid fa-trophy",
                title: "15+ Years",
                desc: "Combined industry",
                highlight: "experience.",
                colorScheme: "violet"
            }
        ]
    },
    {
        id: "expertise",
        badge: "Sector Expertise",
        title: "Why Specialized Marketing?",
        description: "The patient journey is deeply personal, heavily regulated, and built entirely on trust.",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1000&q=80",
        imageOverlay: "Healthcare-First Strategy",
        imageOnRight: false,
        cards: [
            {
                icon: "fa-solid fa-shield-virus",
                title: "HIPAA Compliance",
                desc: "Navigating strict privacy regulations with",
                highlight: "100% confidence.",
                colorScheme: "teal"
            },
            {
                icon: "fa-solid fa-hand-holding-heart",
                title: "Empathy-Driven Content",
                desc: "Communicating medical expertise with",
                highlight: "clarity and compassion.",
                colorScheme: "indigo"
            },
            {
                icon: "fa-solid fa-chart-line",
                title: "Data-Backed Growth",
                desc: "Tracking every lead for",
                highlight: "measurable patient ROI.",
                colorScheme: "violet"
            }
        ]
    }
];


const colorMap = {
    teal: { bg: "bg-teal-50", text: "text-teal-600", hover: "hover:border-teal-500/30", active: "group-hover:bg-teal-600" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", hover: "hover:border-indigo-500/30", active: "group-hover:bg-indigo-600" },
    violet: { bg: "bg-violet-50", text: "text-violet-600", hover: "hover:border-violet-500/30", active: "group-hover:bg-violet-600" },
    green: { bg: "bg-green-100", text: "text-green-600", hover: "", active: "" }
};

export function renderAboutSections() {
    const container = document.querySelector('#about-content-container');
    if (!container) return;

    container.innerHTML = aboutSectionsData.map((section, idx) => {
        const orderClass = section.imageOnRight ? 'lg:order-1' : 'lg:order-2';
        const imageOrderClass = section.imageOnRight ? 'lg:order-2' : 'lg:order-1';

        const cardsHtml = section.cards.map(card => {
            const colors = colorMap[card.colorScheme];
            return `
                <div class="flex items-center gap-medium px-small py-medium sm:py-small rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl ${colors.hover} group cursor-default transition-all duration-500 hover:-translate-y-1">
                    <div class="w-12 h-12 shrink-0 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center transition-all duration-500 ${colors.active} group-hover:text-white group-hover:rotate-6">
                        <i class="${card.icon} text-size-medium"></i>
                    </div>
                    <div>
                        <h4 class="text-size-sub-header font-black text-skin-accent uppercase tracking-wide">${card.title}</h4>
                        <p class="text-size-body text-skin-accent-2 font-medium">
                            ${card.desc} <span class="${colors.text} font-bold">${card.highlight}</span> ${card.afterHighlight || ''}
                        </p>
                    </div>
                </div>
            `;
        }).join('');

        const floatingStatHtml = section.floatingStat ? `
            <div class="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce transition-all hover:scale-110 hidden sm:block">
                <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full ${colorMap[section.floatingStat.colorScheme].bg} flex items-center justify-center ${colorMap[section.floatingStat.colorScheme].text}">
                        <i class="${section.floatingStat.icon}"></i>
                    </div>
                    <div class="text-left">
                        <p class="text-[10px] font-black text-slate-400 leading-none">${section.floatingStat.label}</p>
                        <p class="text-xs font-bold text-slate-800">${section.floatingStat.value}</p>
                    </div>
                </div>
            </div>
        ` : '';

        const imageOverlayHtml = section.imageOverlay ? `
            <div class="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">
                <p class="text-size-body text-white uppercase tracking-widest font-bold text-center">${section.imageOverlay}</p>
            </div>
        ` : '';

        // Special overlay for the first section (Who We Are)
        const primaryOverlayHtml = section.id === 'identity' ? `
            <div class="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div class="flex flex-col items-center">
                    <p class="text-size-body text-white uppercase tracking-[0.3em] font-black text-center drop-shadow-lg">
                        ${section.imageOverlay}
                    </p>
                </div>
            </div>
        ` : imageOverlayHtml;

        return `
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-huge items-center" data-aos="fade-up">
                <div class="${orderClass} flex flex-col justify-center relative">
                    <div class="mb-medium group/header w-fit">
                        <span class="text-size-header relative inline-block text-size-xsmall font-bold tracking-[0.3em] uppercase text-skin-primary opacity-80">
                            ${section.badge}
                            <span class="absolute -bottom-1 left-0 h-[2px] w-0 bg-skin-primary transition-all duration-500 ease-out group-hover/header:w-full"></span>
                        </span>
                        <h3 class="text-size-sub-header font-bold leading-tight mt-small text-transparent bg-clip-text bg-linear-to-r from-skin-primary to-skin-primary-2">
                            ${section.title}
                        </h3>
                    </div>

                    <p class="hidden sm:block text-size-body text-skin-accent-2 font-medium leading-relaxed mb-medium border-l-2 border-skin-primary-2 pl-medium italic">
                        ${section.description}
                    </p>

                    <div class="flex flex-col justify-start gap-4 h-full">
                        ${cardsHtml}
                    </div>
                </div>

                <div class="${imageOrderClass} relative ${section.id === 'identity' ? 'h-[450px] lg:h-[600px]' : 'h-[400px] lg:h-[500px]'} flex items-center justify-center">
                    ${section.id === 'identity' ? '<div class="absolute inset-0 bg-linear-to-br from-skin-primary/20 to-transparent rounded-full rotate-12 blur-2xl scale-75 animate-pulse"></div>' : ''}
                    
                    <div class="relative w-full h-full rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-white group transition-all duration-700 hover:rounded-2xl">
                        <img src="${section.image}" alt="${section.title}" class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110">
                        
                        <div class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                        
                        ${primaryOverlayHtml}
                    </div>

                    ${floatingStatHtml}
                </div>
            </div>
        `;
    }).join('');
}


// Initializer
document.addEventListener('DOMContentLoaded', () => {
    renderAboutSections();
});
