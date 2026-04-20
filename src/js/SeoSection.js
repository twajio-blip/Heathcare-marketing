const seoData = [
    {
        icon: "fa-chart-pie",
        title: "Data-Driven Research",
        desc: "Analyzing market trends, patient demographics, and competitor strategies for precise targeting.",
        delay: 0
    },
    {
        icon: "fa-keyboard",
        title: "Keyword Research",
        desc: "Identifying high-intent search terms patients use when seeking specialized medical care.",
        delay: 50
    },
    {
        icon: "fa-file-code",
        title: "On-Page Optimization",
        desc: "Structuring website elements, meta tags, and internal links for maximum search engine visibility.",
        delay: 100
    },
    {
        icon: "fa-link",
        title: "Off-Page Optimization",
        desc: "Building high-quality backlinks and digital authority across reputable healthcare directories.",
        delay: 150
    },
    {
        icon: "fa-server",
        title: "Technical SEO",
        desc: "Optimizing site speed, mobile responsiveness, and ensuring strict HIPAA-compliant architecture.",
        delay: 200
    },
    {
        icon: "fa-pen-nib",
        title: "Content Optimization",
        desc: "Crafting authoritative, empathetic medical content that resonates with patients and search algorithms.",
        delay: 250
    },
    {
        icon: "fa-map-location-dot",
        title: "Local SEO",
        desc: "Dominating Google Maps and local listings to capture \"near me\" healthcare searches.",
        delay: 300
    },
    {
        icon: "fa-arrow-trend-up",
        title: "Ranking Improvements",
        desc: "Continuous monitoring and adjustments to consistently climb SERPs for critical medical treatments.",
        delay: 350
    },
    {
        icon: "fa-chart-line",
        title: "Analytics & Reporting",
        desc: "Providing transparent, actionable insights into patient acquisition costs and campaign ROI.",
        delay: 400
    }
];

export function renderSeoCards() {
    const grid = document.querySelector('#seo-cards-grid');
    if (!grid) return;

    grid.innerHTML = '';

    seoData.forEach(item => {
        const cardHtml = `
            <div class="group relative h-[260px] md:h-[240px] w-full overflow-hidden rounded-3xl bg-white p-large shadow-md hover:shadow-xl transition-all duration-500"
                 data-aos="fade-up" data-aos-delay="${item.delay}">
                <!-- Default Content -->
                <div class="hidden md:flex h-full w-full flex-col items-center justify-center transition-all duration-500 group-hover:scale-90 group-hover:opacity-0">
                    <div class="mb-medium flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-skin-primary/10 to-skin-primary-2/10 text-skin-primary">
                        <i class="fa-solid ${item.icon} text-size-badge"></i>
                    </div>
                    <h4 class="text-size-header text-skin-accent">${item.title}</h4>
                </div>

                <!-- Hover Content -->
                <div class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-linear-to-br from-skin-primary to-skin-primary-2 p-large text-center translate-y-0 opacity-100 md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
                    <h3 class="text-size-header text-skin-accent-3">${item.title}</h3>
                    <p class="mt-medium mb-large text-size-body leading-relaxed text-skin-accent-3">
                        ${item.desc}
                    </p>
                    <a href="#" class="text-size-body rounded-full bg-white/20 px-medium py-small text-size-small font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-skin-primary">
                        Book appointment →
                    </a>
                </div>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// Initialization Flow
document.addEventListener('DOMContentLoaded', () => {
    renderSeoCards();
});
