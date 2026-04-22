import { loadComponents } from './header&footer.js';
import './css/style.css';
import Swiper from 'swiper';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';



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

}


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
