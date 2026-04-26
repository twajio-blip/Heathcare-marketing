/**
 * DATA DEFINITION
 */
const processData = [
  {
    id: 1,
    title: "Market Research & Audit",
    description: "In-depth analysis of your <span class=\"text-skin-accent/90 font-bold\">local healthcare market</span>, direct competitors, and patient demographics.",
    icon: "fa-magnifying-glass-chart",
    color: "#2563eb", // blue-600
    glow: "rgba(37, 99, 235, 0.05)"
  },
  {
    id: 2,
    title: "Strategy & Compliance",
    description: "Developing a roadmap while ensuring all systems meet <span class=\"text-skin-accent/90 font-bold\">strict HIPAA and medical advertising standards.</span>",
    icon: "fa-clipboard-check",
    color: "#14b8a6", // teal-500
    glow: "rgba(20, 184, 166, 0.05)"
  },
  {
    id: 3,
    title: "Creative & Technical Dev",
    description: "Building out the assets: <span class=\"text-skin-accent/90 font-bold\">website redesigns, ad creatives, and automation workflows.</span>",
    icon: "fa-laptop-code",
    color: "#a855f7", // purple-500
    glow: "rgba(168, 85, 247, 0.05)"
  },
  {
    id: 4,
    title: "Campaign Launch",
    description: "Deploying multi-channel campaigns precisely targeted at <span class=\"text-skin-accent/90 font-bold\">acquiring high-value patients.</span>",
    icon: "fa-rocket",
    color: "#f43f5e", // rose-500
    glow: "rgba(244, 63, 94, 0.05)"
  },
  {
    id: 5,
    title: "Optimize & Report",
    description: "Continuous A/B testing and delivering <span class=\"text-skin-accent/90 font-bold\">transparent performance reports</span> directly to you.",
    icon: "fa-chart-line",
    color: "#f59e0b", // amber-500
    glow: "rgba(245, 158, 11, 0.05)"
  },
  {
    id: 6,
    title: "Growth & Expansion",
    description: "Scaling successful strategies to capture more market share or <span class=\"text-skin-accent/90 font-bold\">introduce additional service lines.</span>",
    icon: "fa-arrow-trend-up",
    color: "#10b981", // emerald-500
    glow: "rgba(16, 185, 129, 0.05)"
  }
];

export function renderProcess() {
  const container = document.querySelector('#process-list');
  if (!container) return;

  container.innerHTML = processData.map((item, index) => {
    const isEven = (index + 1) % 2 === 0;

    return `
      <div class="relative flex flex-col md:flex-row items-center justify-between group py-12 md:py-24"
           data-aos="fade-up"
           style="--step-primary: ${item.color}; --step-glow: ${item.glow};">
        
        <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 hidden md:block -z-10"></div>

        <div class="flex md:hidden w-14 h-14 rounded-full border-4 items-center justify-center font-black mb-8 bg-white shadow-xl"
             style="border-color: var(--step-primary); color: var(--step-primary);">
          ${item.id}
        </div>

        <div class="md:w-[42%] text-center ${isEven ? 'md:text-left md:order-2' : 'md:text-right md:order-1'} transition-all duration-500 group-hover:translate-y-[-5px]">
          <span class="text-[10px] font-black tracking-[0.3em] uppercase opacity-50" style="color: var(--step-primary)">Phase ${item.id.toString().padStart(2, '0')}</span>
          <h3 class="text-2xl md:text-3xl font-bold text-skin-accent mt-2 mb-4 tracking-tight">${item.title}</h3>
          <p class="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
            ${item.description}
          </p>
        </div>

        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border-4 hidden md:flex items-center justify-center font-black shadow-xl z-30 transition-all duration-500 
                    group-hover:scale-125 group-hover:text-white"
             style="border-color: var(--step-primary); color: var(--step-primary); --hover-bg: ${item.color};">
          <style>
            .group:hover .absolute { background-color: var(--step-primary) !important; color: white !important; }
          </style>
          ${item.id}
        </div>

        <div class="md:w-[42%] hidden md:block ${isEven ? 'md:order-1' : 'md:order-2'}">
          <div class="relative h-48 rounded-[2.5rem] border-2 border-dashed border-slate-200 bg-slate-50/30 flex items-center justify-center overflow-hidden transition-all duration-700 
                      group-hover:border-solid group-hover:shadow-2xl group-hover:bg-white"
               style="--hover-border: var(--step-primary);">
             
             <i class="fa-solid ${item.icon} absolute -bottom-4 -right-4 text-8xl opacity-[0.03] transition-all duration-700 group-hover:scale-150 group-hover:opacity-[0.07]" style="color: var(--step-primary)"></i>
             
             <i class="fa-solid ${item.icon} text-5xl md:text-6xl text-slate-300 transition-all duration-500 group-hover:scale-110" 
                style="--icon-color: var(--step-primary);">
                <style>
                    .group:hover .h-48 { border-color: var(--step-primary) !important; }
                    .group:hover .fa-solid { color: var(--step-primary) !important; }
                </style>
             </i>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.AOS) window.AOS.refresh();
}

document.addEventListener('DOMContentLoaded', renderProcess);