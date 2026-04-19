import { loadComponents } from './header&footer.js';
import '/src/css/style.css';
import Swiper from 'swiper';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const helperData = [
  {
    id: "tab-hospitals",
    title: "Hospitals",
    heading: "Scale your hospital network with",
    highlight: "precision marketing.",
    desc: "Drive high-value service line growth and improve patient retention using clinical-grade data.",
    features: ["Increase patient volume", "Enhance brand reputation", "Streamline scheduling"],
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
    desc: "Targeted digital strategies specifically crafted to attract new patients to your clinic.",
    features: ["Rank #1 in local search", "Generate high-quality leads", "Automate follow-ups"],
    btnText: "Explore Dental Marketing",
    link: "./dental-marketing.html",
    img: "https://images.unsplash.com/photo-1538108149393-cebb47ac1953?auto=format&fit=crop&w=1000&q=80",
    statLabel: "New Patients",
    statValue: "2.4x",
    color: "from-blue-400 to-blue-600",
    icon: "fa-user-plus"
  }
];


// Run loader when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);

export function initProgressBar() {
  const scrollProgress = document.getElementById("progress");
  if (!scrollProgress) return;

  const calcScrollValue = () => {
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    scrollProgress.style.display = pos > 100 ? "grid" : "none";
    scrollProgress.style.background = `conic-gradient(#2e3092 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };

  window.addEventListener('scroll', calcScrollValue);
  calcScrollValue(); // Calculate initially

  scrollProgress.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Initialize mobile menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenuItems = document.getElementById('mobile-menu-items');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

  if (mobileMenuBtn && mobileMenuItems && mobileMenuOverlay) {
    const toggleMenu = () => {
      const isOpen = mobileMenuItems.classList.contains('left-0');

      // Toggle Menu Side
      mobileMenuItems.classList.toggle('-left-full', isOpen);
      mobileMenuItems.classList.toggle('left-0', !isOpen);

      // Toggle Overlay
      mobileMenuOverlay.classList.toggle('hidden', isOpen);

      // Lock/Unlock Body Scroll
      document.body.style.overflow = isOpen ? '' : 'hidden';
    };

    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });
    if (mobileMenuClose) mobileMenuClose.addEventListener('click', toggleMenu);

    document.addEventListener('click', (e) => {
      const isOpen = mobileMenuItems.classList.contains('left-0');
      if (isOpen && !mobileMenuItems.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        toggleMenu();
      }
    });

    // Close menu when a link inside is clicked
    const mobileLinks = mobileMenuItems.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mobileMenuItems.classList.contains('left-0')) {
          toggleMenu();
        }
      });
    });
  }
}

export function initMobileMenus() {
  const setupToggle = (toggleId, menuId, chevronId) => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    const chevron = document.getElementById(chevronId);

    if (toggle && menu && chevron) {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isHidden = menu.classList.contains('hidden');

        if (isHidden) {
          menu.classList.remove('hidden');
          menu.classList.add('flex');
          chevron.classList.add('rotate-180');
        } else {
          menu.classList.add('hidden');
          menu.classList.remove('flex');
          chevron.classList.remove('rotate-180');
        }
      });
    }
  };

  setupToggle('mobile-about-toggle', 'mobile-about-menu', 'mobile-about-chevron');
  setupToggle('mobile-whowehelp-toggle', 'mobile-whowehelp-menu', 'mobile-whowehelp-chevron');
  setupToggle('mobile-resources-toggle', 'mobile-resources-menu', 'mobile-resources-chevron');
}

export function initThirdPartyLibraries() {
  // Initialize AOS
  AOS.init({ once: true, offset: 50, duration: 800 });

  if (document.querySelector('.aboutSwiper')) {
    new Swiper('.aboutSwiper', {
      modules: [Pagination, Autoplay, Navigation],
      slidesPerView: 1,
      spaceBetween: 40,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.about-pagination',
        clickable: true,
        // This ensures the "Real Index" is used for the bullets
        bulletActiveClass: 'swiper-pagination-bullet-active',
      },

      navigation: {
        nextEl: '.about-next',
        prevEl: '.about-prev',
      },
      speed: 800,
    });
  }

  if (document.querySelector('.approachSwiper')) {
    new Swiper('.approachSwiper', {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }
    });
  }

  if (document.querySelector('.testimonialSwiper')) {
    new Swiper('.testimonialSwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      slideToClickedSlide: true,
      breakpoints: {
        640: { slidesPerView: 2, centeredSlides: false },
        1024: { slidesPerView: 3, centeredSlides: true }
      }
    });
  }
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

export function renderTabs() {
  const menuRoot = document.getElementById('tabs-menu');
  const contentRoot = document.getElementById('tabs-content-root');

  helperData.forEach((item, index) => {
    const isActive = index === 0; // The first item is active by default

    // 1. Generate the Button HTML
    const btnHtml = `
      <button class="tab-btn group ${isActive ? 'active bg-skin-primary text-white' : 'bg-white/50 text-slate-600'}" 
              data-target="${item.id}">
        ${item.title}
      </button>`;
    menuRoot.insertAdjacentHTML('beforeend', btnHtml);

    // 2. Generate the Content HTML (Using your specific design)
    const contentHtml = `
      <div id="${item.id}" class="tab-content ${isActive ? 'flex opacity-100' : 'hidden opacity-0'}">
        <h2>${item.heading} <span>${item.highlight}</span></h2>
        <ul>
          ${item.features.map(f => `<li>${f}</li>`).join('')} 
        </ul>
        <img src="${item.img}" />
      </div>`;
    contentRoot.insertAdjacentHTML('beforeend', contentHtml);
  });
}
renderTabs();


// Tab initialization will be handled by loadComponents in header&footer.js

export function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const duration = 2000; // 2 seconds
  let startTimestamp = null;

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);

    // Ease out quart easing formula for a smooth deceleration
    const easeProgress = 1 - Math.pow(1 - progress, 4);

    counter.innerText = Math.floor(easeProgress * target);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      counter.innerText = target;
    }
  };
  window.requestAnimationFrame(step);
}
