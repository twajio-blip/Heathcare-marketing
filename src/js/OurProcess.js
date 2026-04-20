import AOS from 'aos';

const processData = [
  {
    id: 1,
    title: "Market Research & Audit",
    description: "In-depth analysis of your <span class=\"text-skin-accent/90 font-bold\">local healthcare market</span>, direct competitors, and patient demographics.",
    icon: "fa-magnifying-glass-chart",
    color: "blue-600",
    hoverBorder: "blue-300",
    hoverBg: "blue-50/40",
  },
  {
    id: 2,
    title: "Strategy & Compliance",
    description: "Developing a roadmap while ensuring all systems meet <span class=\"text-skin-accent/90 font-bold\">strict HIPAA and medical advertising standards.</span>",
    icon: "fa-clipboard-check",
    color: "teal-500",
    hoverBorder: "teal-300",
    hoverBg: "teal-50/40",
  },
  {
    id: 3,
    title: "Creative & Technical Dev",
    description: "Building out the assets: <span class=\"text-skin-accent/90 font-bold\">website redesigns, ad creatives, and automation workflows.</span>",
    icon: "fa-laptop-code",
    color: "purple-500",
    hoverBorder: "purple-300",
    hoverBg: "purple-50/40",
  },
  {
    id: 4,
    title: "Campaign Launch",
    description: "Deploying multi-channel campaigns precisely targeted at <span class=\"text-skin-accent/90 font-bold\">acquiring high-value patients.</span>",
    icon: "fa-rocket",
    color: "rose-500",
    hoverBorder: "rose-300",
    hoverBg: "rose-50/40",
  },
  {
    id: 5,
    title: "Optimize & Report",
    description: "Continuous A/B testing and delivering <span class=\"text-skin-accent/90 font-bold\">transparent performance reports</span> directly to you.",
    icon: "fa-chart-line",
    color: "amber-500",
    hoverBorder: "amber-300",
    hoverBg: "amber-50/40",
  },
  {
    id: 6,
    title: "Growth & Expansion",
    description: "Scaling successful strategies to capture more market share or <span class=\"text-skin-accent/90 font-bold\">introduce additional service lines.</span>",
    icon: "fa-arrow-trend-up",
    color: "emerald-500",
    hoverBorder: "emerald-300",
    hoverBg: "emerald-50/40",
  }
];

export function renderProcess() {
  const container = document.querySelector('#process-list');
  if (!container) return;

  container.innerHTML = processData.map((item, index) => {
    const isEven = (index + 1) % 2 === 0;
    const phaseLabel = `Phase ${item.id.toString().padStart(2, '0')}`;

    return `
            <div class="relative flex flex-col md:flex-row items-center justify-between group py-medium md:py-huge"
              data-aos="fade-up">
              
              <!-- Mobile Circle (Hidden on Desktop because absolute circle is used) -->
              <div class="flex md:hidden w-12 h-12 rounded-full border-4 border-${item.color} text-${item.color} items-center justify-center font-black mb-medium bg-white shadow-lg">
                ${item.id}
              </div>

              <!-- Content -->
              <div class="md:w-5/12 text-center ${isEven ? 'md:text-left md:pl-12 group-hover:translate-x-2' : 'md:text-right md:pr-12 group-hover:-translate-x-2'} transition-all duration-500">
                <h3 class="text-size-header text-skin-accent mb-small tracking-tight">${item.title}</h3>
                <p class="text-skin-accent-2 text-size-body font-medium leading-relaxed">
                  ${item.description}
                </p>
              </div>

              <!-- Desktop Number Circle (Absolute) -->
              <div
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border-4 border-${item.color} text-${item.color} hidden md:flex items-center justify-center font-black shadow-xl z-20 transition-all duration-500 group-hover:scale-110 group-hover:bg-${item.color} group-hover:text-white">
                ${item.id}
              </div>

              <!-- Icon Box (Visible only on desktop, placeholder for other side) -->
              <div class="md:w-5/12 ${isEven ? 'md:pr-12 order-first' : 'md:pl-12'} hidden md:block">
                <div
                  class="h-32 bg-slate-50/50 rounded-3xl border-2 border-slate-100 border-dashed flex items-center justify-center transition-all duration-500 group-hover:border-${item.hoverBorder} group-hover:bg-${item.hoverBg}">
                  <i class="fa-solid ${item.icon} text-size-heading text-slate-300 group-hover:text-${item.hoverBorder}"></i>
                </div>
              </div>
            </div>
        `;
  }).join('');

  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProcess();
});
