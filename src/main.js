import '/src/css/style.css';

// Component Loader
async function loadComponents() {
  try {
    // Fetch and inject Header
    const headerRes = await fetch('/components/header.html');
    if (headerRes.ok) {
      const headerHTML = await headerRes.text();
      const headerContainer = document.getElementById('header-container');
      if (headerContainer) headerContainer.innerHTML = headerHTML;
    }

    // Fetch and inject Footer
    const footerRes = await fetch('/components/footer.html');
    if (footerRes.ok) {
      const footerHTML = await footerRes.text();
      const footerContainer = document.getElementById('footer-container');
      if (footerContainer) footerContainer.innerHTML = footerHTML;
    }

    // Initialize scripts that depend on the injected DOM
    initNavbarScroll();
    initProgressBar();
  } catch (err) {
    console.error('Failed to load components', err);
  }
}

// Add scroll listener for Navbar background
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const navPrimary = document.getElementById('nav-primary');
  const navSecondaryBg = document.getElementById('nav-secondary-bg');
  const navSecondaryLogo = document.getElementById('nav-secondary-logo');

  if (!navbar) return;

  // Track previous scroll value to determine scroll direction if needed, 
  // though for this specifically we just check an absolute offset.
  window.addEventListener('scroll', () => {
    // We wait until user scrolls down 150px to trigger the sticky nav
    if (window.scrollY > 150) {
      if (navbar.dataset.isSticky !== "true") {
        // Quickly snap out of view
        navbar.classList.add('-translate-y-full', 'duration-0');
        navbar.classList.remove('duration-300');

        // Force a reflow
        void navbar.offsetWidth;

        // Apply sticky styling
        if (navPrimary) {
          navPrimary.style.height = '0px';
          navPrimary.style.opacity = '0';
          navPrimary.style.overflow = 'hidden';
        }

        navbar.classList.add('fixed', 'bg-skin-secondary-3/90', 'backdrop-blur-xl', 'shadow-md');
        navbar.classList.remove('absolute');

        if (navSecondaryBg) {
          navSecondaryBg.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
          navSecondaryBg.classList.replace('w-[70%]', 'w-full');
        }

        if (navSecondaryLogo) {
          navSecondaryLogo.classList.remove('opacity-0', 'invisible');
          navSecondaryLogo.classList.add('opacity-100', 'visible');
        }

        // Animate in from top
        navbar.classList.add('duration-300', 'translate-y-0');
        navbar.classList.remove('duration-0', '-translate-y-full');

        navbar.dataset.isSticky = "true";
      }

    } else {
      // Revert when scrolling back top
      if (navbar.dataset.isSticky === "true") {
        if (navPrimary) {
          navPrimary.style.height = '';
          navPrimary.style.opacity = '1';
          navPrimary.style.overflow = '';
        }

        navbar.classList.add('absolute');
        navbar.classList.remove('fixed', 'bg-skin-secondary-3/90', 'backdrop-blur-xl', 'shadow-md');

        if (navSecondaryBg) {
          navSecondaryBg.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 35px 100%)';
          navSecondaryBg.classList.replace('w-full', 'w-[70%]');
        }

        if (navSecondaryLogo) {
          navSecondaryLogo.classList.add('opacity-0', 'invisible');
          navSecondaryLogo.classList.remove('opacity-100', 'visible');
        }

        navbar.dataset.isSticky = "false";
      }
    }
  });
}

// Run loader when DOM is ready
document.addEventListener('DOMContentLoaded', loadComponents);

// Optional: Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-8');
    }
  });
}, observerOptions);
function initProgressBar() {
  let scrollProgress = document.getElementById("progress");
  if (!scrollProgress) return;

  let calcScrollValue = () => {
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.style.background = `conic-gradient(#2e3092 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };

  window.addEventListener('scroll', calcScrollValue);
  calcScrollValue(); // Calculate initially

  scrollProgress.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}// Stats Counter Animation
const counters = document.querySelectorAll('.counter');
const duration = 2000; // Total duration in ms

const startCounters = () => {
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);

    // Ease-out quad: t * (2 - t)
    const easedProgress = progress * (2 - progress);

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      counter.innerText = Math.floor(easedProgress * target);
    });

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      // Final pass to ensure targets are exact
      counters.forEach(counter => {
        counter.innerText = counter.getAttribute('data-target');
      });
    }
  };

  window.requestAnimationFrame(step);
};
