import AOS from 'aos';

const resourceData = [
  {
    category: "Marketing",
    date: "March 12, 2026",
    extraInfo: "5 min read",
    title: "The Ultimate Guide to Healthcare <span class=\"text-skin-primary\">Local SEO</span> in 2026",
    description: "Learn step-by-step how to optimize your clinic's Google Business Profile to capture the #1 ranking in your local area.",
    delay: 0
  },
  {
    category: "Press Releases",
    date: "March 05, 2026",
    extraInfo: "News",
    title: "Legacy Health Growth Wins <span class=\"text-skin-primary\">Top Agency</span> Award",
    description: "We are thrilled to announce our recent recognition as the leading digital growth partner for healthcare practices.",
    delay: 100
  },
  {
    category: "Case Studies",
    date: "Feb 28, 2026",
    extraInfo: "Results",
    title: "Scaling a National <span class=\"text-skin-primary\">Dental Network</span>",
    description: "Read how our comprehensive PPC overhaul reduced cost-per-lead by 40% across 50+ locations.",
    delay: 200
  },
  {
    category: "Ebook",
    date: "Feb 15, 2026",
    extraInfo: "Free Guide",
    title: "HIPAA-Compliant <span class=\"text-skin-primary\">Facebook Ads</span> Handbook",
    description: "A deep dive into navigating social media advertising rules while running high-converting patient campaigns.",
    delay: 0
  },
  {
    category: "Guide",
    date: "Jan 22, 2026",
    extraInfo: "Playbook",
    title: "The Physician's Playbook for <span class=\"text-skin-primary\">Reputation Management</span>",
    description: "Learn the best strategies for managing, soliciting, and responding to patient reviews online.",
    delay: 100
  },
  {
    category: "Research",
    date: "Jan 10, 2026",
    extraInfo: "Insights",
    title: "How <span class=\"text-skin-primary\">AI is Reshaping</span> Patient Acquisition",
    description: "Discover the top 3 ways leading healthcare brands are leveraging AI to reduce CPL and increase engagement.",
    delay: 200
  }
];

export function renderResources() {
  const container = document.querySelector('#resources-grid');
  if (!container) return;

  container.innerHTML = resourceData.map((item, index) => {
    const primaryOrbColor = index % 2 === 0 ? 'bg-skin-primary' : 'bg-skin-primary-2';
    const accentOrbColor = index % 2 === 0 ? 'bg-skin-accent-4' : 'bg-skin-secondary';

    return `
        <a href="#"
            class="group relative bg-white rounded-[2.5rem] overflow-hidden border border-skin-primary/20 p-huge min-h-[400px] flex flex-col justify-between  
           shadow-xl shadow-skin-accent-2/10 
           hover:shadow-2xl hover:shadow-skin-primary/15 
           hover:-translate-y-6 transition-all duration-500 ease-in-out"
            data-aos="fade-up" data-aos-delay="${item.delay}">
            
            <div class="absolute inset-0 -z-10 overflow-hidden select-none pointer-events-none">
                <div class="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-slate-50/50"></div>
                
                <div class="absolute -top-32 -right-32 w-96 h-96 ${primaryOrbColor} opacity-[0.03] rounded-full blur-[100px] transition-all duration-1000 ease-in-out group-hover:opacity-[0.08] group-hover:-translate-x-12 group-hover:translate-y-12 group-hover:scale-125" style="will-change: transform, opacity;"></div>
                
                <div class="absolute -bottom-32 -left-32 w-96 h-96 ${accentOrbColor} opacity-[0.03] rounded-full blur-[100px] transition-all duration-1000 ease-in-out delay-75 group-hover:opacity-[0.08] group-hover:translate-x-12 group-hover:-translate-y-12 group-hover:scale-125" style="will-change: transform, opacity;"></div>

                <div class="absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(var(--color-skin-primary) 0.5px, transparent 0.5px); background-size: 40px 40px;"></div>
            </div>

            <div class="absolute top-0 left-0 w-1 h-0 bg-skin-primary group-hover:h-full transition-all duration-700 ease-in-out" style="will-change: height;"></div>

            <div class="relative z-10">
              <div class="text-[10px] inline-flex items-center px-4 py-1.5 rounded-xl bg-skin-primary/5 text-skin-primary font-black uppercase mb-large transition-all duration-500 group-hover:bg-skin-primary group-hover:text-white group-hover:scale-105 origin-left">
                ${item.category}
              </div>
              
              <h3 class="text-2xl font-black text-skin-accent leading-tight mb-large group-hover:text-skin-primary transition-colors duration-500">
                ${item.title}
              </h3>
              
              <div class="w-10 h-1 bg-skin-primary/10 rounded-full mb-medium group-hover:w-24 group-hover:bg-skin-primary/30 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)"></div>
              
              <p class="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                ${item.description}
              </p>
            </div>

            <div class="relative z-10 mt-huge flex items-center justify-between border-t border-slate-100 pt-8">
              <div class="flex items-center gap-3">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${item.date}</span>
                <span class="w-1 h-1 rounded-full bg-slate-200"></span>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${item.extraInfo}</span>
              </div>
              
              <div class="w-12 h-12 rounded-full bg-skin-primary/5 text-skin-primary flex items-center justify-center transition-all duration-500 group-hover:bg-skin-primary group-hover:text-white group-hover:rotate-[360deg] shadow-sm">
                <i class="fa-solid fa-plus transition-transform duration-700"></i>
              </div>
            </div>
        </a>
    `;
  }).join('');

  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderResources();
});
