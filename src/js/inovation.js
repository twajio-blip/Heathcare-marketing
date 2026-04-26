import AOS from 'aos';

const innovationData = [
  {
    icon: "fa-robot",
    title: "AI-Powered Systems",
    description: "Leverage artificial intelligence for <span class=\"text-indigo-400 font-bold\">smarter patient segmentation</span> and hyper-personalized healthcare marketing campaigns.",
    linkText: "Explore AI Systems",
    linkUrl: "#",
    color: "indigo",
    delay: "0"
  },
  {
    icon: "fa-gears",
    title: "Marketing Automation",
    description: "Streamline patient communication and follow-ups with <span class=\"text-blue-400 font-bold\">robust automated workflows</span> designed for efficiency.",
    linkText: "View Workflows",
    linkUrl: "#",
    color: "blue",
    delay: "100"
  },
  {
    icon: "fa-chart-line",
    title: "Advanced Analytics",
    description: "Gain deep visibility into acquisition costs and ROI through <span class=\"text-teal-400 font-bold\">interactive performance dashboards.</span>",
    linkText: "Open Dashboard",
    linkUrl: "#",
    color: "teal",
    delay: "200"
  },
  {
    icon: "fa-shield-virus",
    title: "HIPAA-Conscious Systems",
    description: "Rest easy knowing your technology stack maintains <span class=\"text-rose-400 font-bold\">strict compliance</span> with global healthcare regulations.",
    linkText: "Learn Compliance",
    linkUrl: "#",
    color: "rose",
    delay: "300"
  },
  {
    icon: "fa-display",
    title: "Performance Dashboards",
    description: "Real-time reporting portals providing <span class=\"text-amber-400 font-bold\">complete transparency</span> into your growth trajectory.",
    linkText: "Review Growth",
    linkUrl: "#",
    color: "amber",
    delay: "400"
  }
];

export function renderInnovation() {
  const container = document.querySelector('#innovation-grid');
  if (!container) return;

  container.innerHTML = innovationData.map(item => `
    <div
      class="relative h-full flex flex-col bg-slate-800/40 backdrop-blur-md p-huge rounded-4xl border border-slate-700/50 hover:border-${item.color}-500/40 hover:shadow-2xl hover:shadow-${item.color}-500/10 transition-all duration-700 group overflow-hidden"
      data-aos="fade-up" data-aos-delay="${item.delay}">
      
      <!-- Ambient Glow -->
      <div
        class="absolute -top-20 -right-20 w-60 h-60 bg-${item.color}-500/10 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition duration-700">
      </div>
      
      <!-- Hover Overlay -->
      <div
        class="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-sm bg-slate-900/0 group-hover:bg-slate-900/40 transition-all duration-500 z-10">
      </div>

      <!-- Action Button (Appear on Hover) -->
      <a href="${item.linkUrl}"
        class="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span
          class="px-large py-small rounded-full bg-linear-to-r from-${item.color}-700 to-${item.color}-900 border border-${item.color}-400/30 text-white font-bold text-size-body tracking-wide flex items-center gap-small shadow-lg shadow-${item.color}-950/50 hover:scale-105 hover:border-${item.color}-400/60 transition-all duration-300">
          ${item.linkText} <i class="fa-solid fa-arrow-right text-accent"></i>
        </span>
      </a>

      <!-- Content -->
      <div class="relative z-0 flex flex-col h-full">
        <div
          class="w-14 h-14 rounded-2xl bg-${item.color}-500/20 text-${item.color}-400 flex items-center justify-center mb-large group-hover:bg-${item.color}-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg">
          <i class="fa-solid ${item.icon} text-size-header"></i>
        </div>
        <h3 class="text-size-header text-skin-accent-3 mb-small tracking-tight">${item.title}</h3>
        <p
          class="text-size-body text-skin-accent-3/70 leading-relaxed group-hover:text-skin-accent-3/50 transition-colors duration-500 grow">
          ${item.description}
        </p>
      </div>
    </div>
  `).join('');

  // Refresh AOS to detect new elements
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  renderInnovation();
});
