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
    // Color rhythm based on index for floating orbs
    const primaryOrbColor = index % 2 === 0 ? 'bg-skin-primary' : 'bg-skin-primary-2';
    const accentOrbColor = index % 2 === 0 ? 'bg-skin-accent-4' : 'bg-skin-secondary';

    return `
        <a href="#"
            class="group relative bg-white transition-all duration-700 ease-out rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-skin-primary/10 hover:-translate-y-3 border border-skin-primary/30 p-huge min-h-[400px] flex flex-col justify-between"
            data-aos="fade-up" data-aos-delay="${item.delay}">
            
            <!-- NEW: Pure CSS "Digital Glass" Background System -->
            <div class="absolute inset-0 -z-10 overflow-hidden select-none pointer-events-none">
                <!-- Soft Canvas Base -->
                <div class="absolute inset-0 bg-linear-to-br from-slate-50/50 via-white to-slate-50/30"></div>
                
                <!-- Floating Animated Orb 1 (Expanded on hover) -->
                <div class="absolute -top-24 -right-24 w-80 h-80 ${primaryOrbColor}/5 rounded-full blur-[80px] group-hover:scale-150 group-hover:${primaryOrbColor}/10 transition-all duration-1000 ease-in-out"></div>
                
                <!-- Floating Animated Orb 2 (Drifts slightly) -->
                <div class="absolute -bottom-24 -left-24 w-80 h-80 ${accentOrbColor}/5 rounded-full blur-[80px] group-hover:scale-150 group-hover:${accentOrbColor}/10 transition-all duration-1000 ease-in-out delay-100"></div>

                <!-- Subtle Clinical Grid Motif -->
                <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#2563eb 1px, transparent 1px); background-size: 30px 30px;"></div>
            </div>

            <!-- Left Premium Accent Bar (Full height reveal on hover) -->
            <div class="absolute top-0 left-0 w-1.5 h-0 bg-skin-primary group-hover:h-full transition-all duration-700 ease-in-out shadow-lg shadow-skin-primary/20"></div>

            <div class="relative z-10">
              <!-- Re-styled Category Tag -->
              <div class="text-size-body inline-flex items-center px-medium py-1.5 rounded-xl bg-skin-primary/5 text-skin-primary text-size-accent font-black uppercase mb-large group-hover:bg-skin-primary group-hover:text-white transition-all duration-500 transform group-hover:translate-x-1">
                ${item.category}
              </div>
              
              <h3 class="text-size-header font-black text-skin-accent leading-tight mb-large group-hover:text-skin-primary transition-colors duration-300">
                ${item.title}
              </h3>
              
              <!-- Dynamic Separator -->
              <div class="w-12 h-1 bg-skin-primary/20 rounded-full mb-medium group-hover:w-28 group-hover:bg-skin-primary/40 transition-all duration-700 ease-in-out"></div>
              
              <p class="text-size-body text-skin-accent-2 font-medium leading-relaxed line-clamp-3">
                ${item.description}
              </p>
            </div>

            <div class="relative z-10 mt-huge flex items-center justify-between border-t border-slate-100 pt-huge">
              <div class="flex items-center gap-small">
                <span class="text-size-body font-bold text-skin-accent-4 uppercase tracking-widest">${item.date}</span>
                <span class="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-skin-primary/30 transition-colors duration-300"></span>
                <span class="text-size-body font-bold text-skin-accent-4 uppercase tracking-widest">${item.extraInfo}</span>
              </div>
              
              <!-- Pulse-style Read More Button -->
              <div class="w-10 h-10 rounded-full bg-skin-primary/10 text-skin-primary flex items-center justify-center transform group-hover:translate-x-2 group-hover:bg-skin-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-skin-primary/30">
                <i class="fa-solid fa-plus text-xs transform group-hover:rotate-90 transition-transform duration-700"></i>
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
