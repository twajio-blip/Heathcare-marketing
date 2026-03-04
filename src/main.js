import '/src/css/style.css';
import Swiper from 'swiper';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component Loader
async function loadComponents() {
  try {
    // Fetch and inject Header
    const headerRes = await fetch('./components/header.html');
    if (headerRes.ok) {
      const headerHTML = await headerRes.text();
      const headerContainer = document.getElementById('header-container');
      if (headerContainer) headerContainer.innerHTML = headerHTML;
    }

    // Fetch and inject Footer
    const footerRes = await fetch('./components/footer.html');
    if (footerRes.ok) {
      const footerHTML = await footerRes.text();
      const footerContainer = document.getElementById('footer-container');
      if (footerContainer) footerContainer.innerHTML = footerHTML;
    }

    // Initialize scripts that depend on the injected DOM
    initNavbarScroll();
    initProgressBar();
    initMobileServicesMenu();
    initThirdPartyLibraries();
  } catch (err) {
    console.error('Failed to load components', err);
  }
}

// Add scroll listener for Navbar background
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const navPrimary = document.getElementById('nav-primary');
  const navSecondaryContainer = document.getElementById('nav-secondary-container');
  const navSecondaryWrapper = document.getElementById('nav-secondary-wrapper');
  const navSecondaryBg = document.getElementById('nav-secondary-bg');
  const navSecondaryLogo = document.getElementById('nav-secondary-logo');
  const navSecondary = document.getElementById('nav-secondary');
  const secodaryBtn = document.getElementById('secodary-btn');

  if (!navbar || !navSecondary || !navSecondaryWrapper) return;

  let wasSticky = false;

  window.addEventListener('scroll', () => {
    const isSticky = window.scrollY > 250;

    navbar.classList.toggle('fixed', isSticky);
    // navbar.classList.toggle('bg-skin-primary', isSticky);
    navbar.classList.toggle('backdrop-blur-sm', !isSticky);
    // navPrimary display none on sticky
    navPrimary.style.display = isSticky ? 'none' : '';

    if (navSecondaryWrapper) {

      navSecondaryWrapper.classList.toggle('lg:mt-25', !isSticky);


      // Animate nav-secondary-wrapper sliding in from top on each sticky transition
      if (isSticky && !wasSticky) {
        navSecondaryWrapper.classList.remove('animate-slide-down');
        void navSecondaryWrapper.offsetWidth; // force reflow to reset animation
        navSecondaryWrapper.classList.add('animate-slide-down');
      } else if (!isSticky) {
        navSecondaryWrapper.classList.remove('animate-slide-down');
      }
    }

    if (navSecondaryBg) {
      ['lg:w-[75%]', 'xl:w-[65%]'].forEach(cls =>
        navSecondaryBg.classList.toggle(cls, !isSticky)
      );
      // Let CSS handle clip-path when not sticky (uses lg: responsive classes)
      if (isSticky) {
        // This removes the polygon completely
        navSecondaryBg.style.clipPath = 'none';
      } else {
        // This allows the Tailwind 'lg:[clip-path:...]' class to take over again
        navSecondaryBg.style.clipPath = '';
      }
    }

    if (navSecondaryLogo) {
      navSecondaryLogo.style.display = isSticky ? 'flex' : '';
    }
    secodaryBtn.classList.toggle('lg:flex', isSticky);

    wasSticky = isSticky;
  });
}

// Run loader when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);

function initProgressBar() {
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

    mobileMenuBtn.addEventListener('click', toggleMenu);
    if (mobileMenuClose) mobileMenuClose.addEventListener('click', toggleMenu);
    mobileMenuOverlay.addEventListener('click', toggleMenu);

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

function initMobileServicesMenu() {
  const toggle = document.getElementById('mobile-services-toggle');
  const menu = document.getElementById('mobile-services-menu');
  const chevron = document.getElementById('mobile-services-chevron');

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
}

function initThirdPartyLibraries() {
  // Initialize AOS
  AOS.init({ once: true, offset: 50, duration: 800 });

  // Initialize Swipers
  new Swiper('.aboutSwiper', {
    modules: [Pagination, Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.about-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.about-next',
      prevEl: '.about-prev',
    },
    speed: 800,
  });

  new Swiper('.approachSwiper', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }
  });

  new Swiper('.servicesSwiper', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.services-pagination',
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    }
  });

  new Swiper('.testimonialSwiper', {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: '.testimonial-pagination',
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
    }
  });
}

function initWhoWeHelpTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (!tabBtns.length || !tabContents.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all tabs
      tabBtns.forEach(b => {
        b.classList.remove('bg-skin-primary', 'text-white', 'border-skin-primary', 'shadow-md');
        b.classList.add('bg-white', 'text-skin-accent', 'border-skin-accent/20');
      });
      // Hide all content areas
      tabContents.forEach(c => {
        c.classList.add('hidden', 'opacity-0');
        c.classList.remove('flex', 'opacity-100', 'animate-fade-in-up');
      });

      // Add active state to clicked tab
      btn.classList.remove('bg-white', 'text-skin-accent', 'border-skin-accent/20');
      btn.classList.add('bg-skin-primary', 'text-white', 'border-skin-primary', 'shadow-md');

      // Show target content area
      const targetId = btn.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('flex');

        // Small delay to trigger CSS transition for opacity
        setTimeout(() => {
          targetContent.classList.remove('opacity-0');
          targetContent.classList.add('opacity-100', 'animate-fade-in-up');
        }, 50);
      }
    });
  });
}

// Initialize tabs when DOM is ready
document.addEventListener('DOMContentLoaded', initWhoWeHelpTabs);
