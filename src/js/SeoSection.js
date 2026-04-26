const seoData = [
    {
        icon: "fa-chart-pie",
        title: "Data-Driven Research",
        desc: "Analyzing market trends and competitor strategies for precise targeting.",
        hoverDesc: "We use advanced heatmapping and demographic data to ensure your marketing spend is directed toward high-conversion patients.",
        delay: 0
    },
    {
        icon: "fa-keyboard",
        title: "Keyword Research",
        desc: "Identifying high-intent search terms patients use for specialized care.",
        hoverDesc: "We target 'Long-Tail' medical queries that have lower competition but 3x higher conversion rates than generic terms.",
        delay: 50
    },
    {
        icon: "fa-file-code",
        title: "On-Page Optimization",
        desc: "Structuring website elements and meta tags for maximum visibility.",
        hoverDesc: "We optimize your H1-H4 tags and schema markup so Google’s crawlers instantly recognize your clinic as a high-authority provider.",
        delay: 100
    },
    {
        icon: "fa-link",
        title: "Off-Page Optimization",
        desc: "Building digital authority across reputable healthcare directories.",
        hoverDesc: "We secure placements on medical journals and high-DA portals to transfer authority to your domain, boosting your trust score.",
        delay: 150
    },
    {
        icon: "fa-server",
        title: "Technical SEO",
        desc: "Optimizing site speed and ensuring HIPAA-compliant architecture.",
        hoverDesc: "Our 20-point technical audit ensures your site loads in under 2 seconds, preventing patient bounce and improving Core Web Vitals.",
        delay: 200
    },
    {
        icon: "fa-pen-nib",
        title: "Content Optimization",
        desc: "Crafting authoritative medical content that resonates with algorithms.",
        hoverDesc: "We implement the E-E-A-T framework required by Google for all 'Your Money or Your Life' (YMYL) medical content.",
        delay: 250
    }
];

export function renderSeoCards() {
    const grid = document.querySelector('#seo-cards-grid');
    if (!grid) return;

    grid.innerHTML = '';

    seoData.forEach(item => {
        const cardHtml = `
        <div class="group relative min-h-[250px] cursor-pointer overflow-hidden rounded-[2.5rem] bg-white p-medium md:p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-skin-primary/20"
             data-aos="fade-up" data-aos-delay="${item.delay}">
            
            <div class="flex h-full flex-col items-center justify-center text-center transition-all duration-700 group-hover:opacity-0 group-hover:scale-90 group-active:scale-95">
                <div class="mb-medium flex h-20 w-20 items-center justify-center rounded-3xl bg-skin-primary/5 text-skin-primary transition-all duration-500 group-hover:rotate-12">
                    <i class="fa-solid ${item.icon} text-size-header"></i>
                </div>
                <h4 class="text-size-sub-header font-black text-skin-accent tracking-tight">${item.title}</h4>
                <p class="mt-medium text-size-accent font-semibold text-slate-500 line-clamp-3">
                    ${item.desc}
                </p>
            </div>

            <div class="absolute inset-0 z-20 flex flex-col items-center justify-center p-large text-center 
                        bg-linear-to-br from-skin-primary to-skin-secondary animate-bg-flow
                        md:opacity-0 md:scale-0 md:translate-x-full md:-translate-y-full md:rounded-bl-[100%]
                        transition-all duration-500 corner-spring
                        group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rounded-none
                        group-active:opacity-100 group-active:scale-100 group-active:translate-x-0 group-active:translate-y-0 group-active:rounded-none">
                
                <div class="absolute top-6 right-6 opacity-10 rotate-12 pointer-events-none scale-150">
                     <i class="fa-solid ${item.icon} text-8xl text-white"></i>
                </div>

                <h3 class="relative z-30 text-size-header font-black text-skin-accent-3 mb-small tracking-tight">
                    ${item.title}
                </h3>
                
                <p class="relative z-30 text-size-accent font-medium leading-relaxed text-white/90 mb-huge max-w-[90%]">
                    ${item.hoverDesc}
                </p>
            </div>

            <div class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-skin-primary/5 blur-3xl transition-opacity group-hover:opacity-0"></div>
        </div>
    `;
        grid.insertAdjacentHTML('beforeend', cardHtml);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    renderSeoCards();
});