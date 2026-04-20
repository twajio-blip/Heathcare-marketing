import AOS from 'aos';

const worksData = [
  {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Hospital Client",
    category: "Multi-Specialty",
    strategy: "Strategy: Local SEO",
    quote: "Transforming patient acquisition through clinical-grade search dominance.",
    heading: "215% Increase in <br />Patient Volume",
    subtitle: "High-precision Google Ads & local search strategy implemented over a 6-month scale-up phase.",
    link: "#",
    delay: 0
  },
  {
    image: "https://images.unsplash.com/photo-1538108149393-cebb47ac1953?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Dental Practice",
    category: "Dental Network",
    strategy: "Strategy: PPC Campaigns",
    quote: "Driving efficient lead generation and robust patient acquisition.",
    heading: "Reduced Cost-Per-Lead <br />by 40%",
    subtitle: "Complete overhaul of PPC campaigns and highly optimized landing pages.",
    link: "#",
    delay: 100
  },
  {
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: "Healthcare Startup",
    category: "Telehealth Provider",
    strategy: "Strategy: Brand Awareness",
    quote: "Rapidly expanding national reach with engaging multimedia marketing.",
    heading: "Scale from 0 to <br />10k Active Users",
    subtitle: "National brand awareness campaign leveraging video and social media.",
    link: "#",
    delay: 200
  }
];

export function renderWorks() {
  const container = document.querySelector('#works-grid');
  if (!container) return;

  container.innerHTML = worksData.map(item => `
        <div
          class="group relative rounded-4xl bg-white shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 overflow-hidden border border-slate-100"
          data-aos="zoom-in" data-aos-delay="${item.delay}">

          <div class="relative h-72 overflow-hidden">
            <img
              src="${item.image}"
              alt="${item.alt}"
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />

            <div
              class="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-medium py-small rounded-2xl text-size-body font-black uppercase tracking-widest text-skin-accent shadow-sm z-20">
              ${item.category}
            </div>

            <div
              class="absolute inset-0 bg-linear-to-t from-skin-primary/90 via-skin-primary-2/40 to-transparent opacity-100 md:opacity-0 group-hover:md:opacity-90 transition-all duration-500 flex flex-col justify-end p-huge md:translate-y-medium md:group-hover:translate-y-0 z-10">
              <h5 class="text-skin-accent text-size-body font-black uppercase tracking-[0.2em] mb-small">
                ${item.strategy}
              </h5>
              <div class="w-12 h-1 bg-white rounded-full mb-medium"></div>

              <div class="hidden md:block md:backdrop-blur-md bg-white60 p-4 rounded-2xl border border-white/10">
                <p class="text-skin-accent-3 leading-relaxed max-w-xs text-size-body font-black">
                  "${item.quote}"
                </p>
              </div>
            </div>
          </div>

          <div class="p-huge bg-white relative z-10 min-h-[220px] flex flex-col justify-between overflow-hidden">
            <div class="transition-all duration-500 group-hover:md:blur-sm group-hover:md:opacity-40">
              <h3
                class="text-size-header font-black text-skin-accent mb-small tracking-tighter leading-tight group-hover:text-skin-primary transition-colors duration-300">
                ${item.heading}
              </h3>
              <p class="text-skin-accent-2 text-size-body font-medium mb-medium">
                ${item.subtitle}
              </p>
            </div>

            <div
              class="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 md:scale-90 md:group-hover:scale-100 transition-all duration-500 z-30 hidden md:block">
              <a href="${item.link}"
                class="inline-flex items-center text-skin-primary font-black text-size-body uppercase group/link transition-all whitespace-nowrap bg-white px-8 py-medium rounded-full shadow-2xl border border-slate-100">
                View Case Study
                <span
                  class="ml-3 w-8 h-8 rounded-full bg-skin-primary/10 text-skin-primary flex items-center justify-center group-hover/link:bg-skin-primary group-hover/link:text-white transition-all duration-300">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>

            <div class="md:hidden mt-small">
              <a href="${item.link}"
                class="inline-flex items-center text-skin-primary font-black text-size-body uppercase tracking-widest">
                View Case Study
                <i class="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          <div
            class="absolute bottom-0 left-0 h-1 w-0 bg-skin-primary group-hover:w-full transition-all duration-700 z-20">
          </div>
        </div>
    `).join('');

  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderWorks();
});
