import { loadComponents } from '../header&footer.js';
import '../css/style.css';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const helperData = [
  {
    id: "tab-hospitals",
    title: "Hospitals",
    heading: "Scale your hospital network with",
    highlight: "precision marketing.",
    desc: "Drive high-value service line growth and improve patient retention across your entire health system using clinical-grade data.",
    features: [
      "Increase patient volume for profitable service lines.",
      "Enhance brand reputation and community trust.",
      "Streamline patient scheduling and intake flows."
    ],
    btnText: "Explore Hospital Growth",
    link: "./hospital-growth.html",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80",
    statLabel: "Patient Volume",
    statValue: "+45%",
    color: "from-teal-400 to-teal-600",
    icon: "fa-chart-line"
  },
  {
    id: "tab-clinics",
    title: "Dental Practices",
    heading: "Dominate the local pack and",
    highlight: "fill your dental chairs.",
    desc: "Targeted digital strategies specifically crafted to attract new patients and build a loyal patient base for your clinic.",
    features: [
      "Rank #1 in local search results (Local SEO).",
      "Generate high-quality leads through targeted ads.",
      "Automate patient follow-ups and review generation."
    ],
    btnText: "Explore Dental Marketing",
    link: "./dental-marketing.html",
    img: "https://images.unsplash.com/photo-1538108149393-cebb47ac1953?auto=format&fit=crop&w=1000&q=80",
    statLabel: "New Patients",
    statValue: "2.4x",
    color: "from-blue-400 to-blue-600",
    icon: "fa-user-plus"
  },
  {
    id: "tab-pharmacies",
    title: "Pharmacies",
    heading: "Expand your pharmacy's reach and",
    highlight: "digital footprint.",
    desc: "Promote your unique services, prescription delivery, and wellness products to a broader online audience near you.",
    features: [
      "Promote specialty pharmacy services directly to patients.",
      "Drive in-store foot traffic with hyper-local ads.",
      "Boost online traffic for health and wellness products."
    ],
    btnText: "Explore Pharmacy Growth",
    link: "pharmacies.html",
    img: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1000&q=80",
    statLabel: "Prescriptions",
    statValue: "+32%",
    color: "from-indigo-400 to-indigo-600",
    icon: "fa-prescription-bottle-medical"
  },
  {
    id: "tab-startups",
    title: "Healthcare Startups",
    heading: "Accelerate user acquisition for your",
    highlight: "healthtech startup.",
    desc: "Lean, aggressive growth strategies to help you scale fast, secure funding, and capture market share quickly.",
    features: [
      "Rapidly scale B2B or B2C user acquisition.",
      "Build a disruptive and authoritative brand identity.",
      "Optimize conversion rates across all digital funnels."
    ],
    btnText: "Explore Startup Scaling",
    link: "healthtech-scaling.html",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1000&q=80",
    statLabel: "User Growth",
    statValue: "10x",
    color: "from-fuchsia-400 to-fuchsia-600",
    icon: "fa-rocket"
  },
  {
    id: "tab-diagnostic",
    title: "Diagnostic Centers",
    heading: "Increase booking volume for your",
    highlight: "essential diagnostic services.",
    desc: "Position your center as the preferred, trusted choice for both referring physicians and direct patients in your region.",
    features: [
      "Increase direct-to-patient online appointments.",
      "Build stronger physician referral networks.",
      "Highlight advanced technology and fast turnaround times."
    ],
    btnText: "Explore Diagnostic Growth",
    link: "DiagnosticCenters.html",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=80",
    statLabel: "Bookings",
    statValue: "+65%",
    color: "from-amber-400 to-amber-600",
    icon: "fa-calendar-check"
  },
  {
    id: "tab-telehealth",
    title: "Telehealth",
    heading: "Unbound growth for your",
    highlight: "virtual care platform.",
    desc: "Target patients actively seeking immediate, convenient virtual care options across any geographic region.",
    features: [
      "Capture high-intent search traffic for telemedicine.",
      "Reduce customer acquisition cost (CAC) rapidly.",
      "Promote 24/7 access and specialized virtual care domains."
    ],
    btnText: "Explore Telehealth Scaling",
    link: "telehealth-scaling.html",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    statLabel: "Consults",
    statValue: "+80%",
    color: "from-emerald-400 to-emerald-600",
    icon: "fa-video"
  },
  {
    id: "tab-device",
    title: "Medical Device & Tech",
    heading: "Connect your innovations with the",
    highlight: "right decision-makers.",
    desc: "B2B marketing strategies designed specifically for complex sales cycles in the modern healthcare industry.",
    features: [
      "Generate highly qualified leads from hospitals and clinics.",
      "Showcase product efficacy through thought leadership content.",
      "Navigate complex B2B healthcare buying cycles effectively."
    ],
    btnText: "Explore Med-Tech Solutions",
    link: "medical-device.html",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    statLabel: "Lead Quality",
    statValue: "Top 1%",
    color: "from-purple-400 to-purple-600",
    icon: "fa-bullseye"
  }
];




export function renderTabs() {
  const menuRoot = document.getElementById('tabs-menu');
  const contentRoot = document.getElementById('tabs-content-root');

  if (!menuRoot || !contentRoot) return;

  menuRoot.innerHTML = '';
  contentRoot.innerHTML = '';

  helperData.forEach((item, index) => {
    const isActive = index === 0;

    // 1. Generate the Button HTML
    const btnHtml = `
      <button class="tab-btn group ${isActive ? 'active' : ''}" data-target="${item.id}">
        <span class="relative z-10 font-bold">${item.title}</span>
      </button>`;
    menuRoot.insertAdjacentHTML('beforeend', btnHtml);

    // 2. Generate the Content HTML
    const contentHtml = `
      <div id="${item.id}" 
           class="overflow-visible pb-huge tab-content flex-col lg:flex-row items-center gap-huge transition-opacity duration-500 ${isActive ? 'flex opacity-100 animate-fade-in-up' : 'hidden opacity-0'}">
        <!-- Left Content -->
        <div class="lg:w-1/2">
          <div class="mb-medium">
            <h2 class="text-size-header text-skin-accent leading-tight">
              ${item.heading}
              <span class="bg-linear-to-r from-skin-primary to-skin-secondary bg-size-[200%_auto] animate-gradient bg-clip-text text-transparent">${item.highlight}</span>
            </h2>
          </div>
          <p class="text-size-body text-skin-accent-2 mb-medium leading-relaxed max-w-xl">
            ${item.desc}
          </p>
          <ul class="space-y-small mb-medium">
            ${item.features.map(f => `
              <li class="flex items-center gap-medium group">
                <div class="w-8 h-8 rounded-full bg-skin-primary/10 text-skin-primary flex items-center justify-center shrink-0 group-hover:bg-skin-primary group-hover:text-white transition-colors duration-300">
                  <i class="fa-solid fa-check text-xs"></i>
                </div>
                <span class="text-skin-accent text-size-body font-black">${f}</span>
              </li>
            `).join('')}
          </ul>
          <a href="${item.link}" class="text-size-sub-header font-bold btn-primary mt-small hover:shadow-lg hover:shadow-blue-600/20 transition-all active:scale-95">
            ${item.btnText}
          </a>
        </div>

        <!-- Right Image -->
        <div class="hidden md:block lg:w-1/2 w-full relative overflow-visible">
          <div class="rounded-[2.5rem] overflow-hidden shadow-lg bg-slate-100 aspect-4/3 relative group border border-slate-200/50">
            <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div class="absolute inset-0 bg-linear-to-t from-slate-900/30 to-transparent pointer-events-none"></div>
          </div>

          <!-- Stat Card -->
          <div class="overflow-visible hidden sm:block absolute -bottom-medium -left-medium bg-white/90 backdrop-blur-xl p-medium rounded-2xl shadow-lg border border-white z-10 animate-bounce hover:scale-105 transition-transform duration-500">
            <div class="flex items-center gap-small">
              <div class="w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                <i class="fa-solid ${item.icon} text-size-medium"></i>
              </div>
              <div>
                <p class="text-size-body text-skin-accent-2 font-black uppercase tracking-widest leading-none mb-1">${item.statLabel}</p>
                <p class="text-size-body font-black text-skin-accent leading-none">${item.statValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    contentRoot.insertAdjacentHTML('beforeend', contentHtml);
  });
}

export function initWhoWeHelpTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // 1. Silent Guard: If these don't exist, stop immediately without error
  if (tabBtns.length === 0 || tabContents.length === 0) {
    return;
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 2. Clear previous states
      tabBtns.forEach(b => {
        b.classList.remove('bg-skin-primary', 'text-white', 'shadow-md', 'shadow-skin-primary/30', 'active');
        b.classList.add('bg-white/50', 'backdrop-blur-sm', 'text-slate-600');
      });

      tabContents.forEach(c => {
        c.classList.add('hidden', 'opacity-0');
        c.classList.remove('flex', 'opacity-100', 'animate-fade-in-up');
      });

      // 3. Set Active Tab
      btn.classList.remove('bg-white/50', 'backdrop-blur-sm', 'text-slate-600');
      btn.classList.add('active', 'bg-skin-primary', 'text-white', 'shadow-md', 'shadow-skin-primary/30');

      // 4. Show Content with Safe Check
      const targetId = btn.getAttribute('data-target');
      if (!targetId) return; // Error handling for missing attribute

      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('flex');

        setTimeout(() => {
          targetContent.classList.remove('opacity-0');
          targetContent.classList.add('opacity-100', 'animate-fade-in-up');
        }, 50);
      }
    });
  });
}

// Initialization Flow
document.addEventListener('DOMContentLoaded', () => {
  renderTabs();
  initWhoWeHelpTabs();
});
