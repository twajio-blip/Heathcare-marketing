import {
    initProgressBar,
    initMobileMenus,
    initThirdPartyLibraries,
    initCounters
} from './main.js';
import { initWhoWeHelpTabs } from './js/WhoWeHelp.js';

// Component Loader
export async function loadComponents() {
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
        initMobileMenus();
        initThirdPartyLibraries();
        initCounters();
        initWhoWeHelpTabs();
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

        // 1. Basic Navbar State
        navbar.classList.toggle('fixed', isSticky);
        // navbar.classList.toggle('absolute', !isSticky);
        navbar.classList.toggle('bg-white', isSticky);
        // navbar.classList.toggle('bg-skin-background/70', !isSticky);
        navbar.classList.toggle('shadow-xl', isSticky);

        // 2. primary nav visibility
        if (navPrimary) {
            navPrimary.style.display = isSticky ? 'none' : '';
        }

        // 3. Components inside secondary nav
        if (navSecondaryContainer) {
            if (isSticky) {
                navSecondaryContainer.classList.remove('py-large', 'lg:py-large', 'md:py-huge');
                navSecondaryContainer.classList.add('py-small', 'lg:py-small', 'md:py-small');
            } else {
                navSecondaryContainer.classList.remove('py-small', 'lg:py-small', 'md:py-small');
                navSecondaryContainer.classList.add('py-large', 'lg:py-large', 'md:py-huge');
            }
        }

        if (navSecondaryBg) {
            const bgClasses = ['lg:w-[75%]', 'xl:w-[70%]'];
            bgClasses.forEach(cls => {
                if (isSticky) {
                    navSecondaryBg.classList.remove(cls);
                } else {
                    navSecondaryBg.classList.add(cls);
                }
            });
            navSecondaryBg.style.clipPath = isSticky ? 'none' : '';
        }

        if (navSecondaryLogo) {
            navSecondaryLogo.style.display = isSticky ? 'flex' : '';
        }

        if (secodaryBtn) {
            secodaryBtn.classList.toggle('lg:flex', isSticky);
        }
        // Handle wrapper margin for non-sticky layout
        if (navSecondaryWrapper) {
            navSecondaryWrapper.classList.toggle('lg:mt-25', !isSticky);

            // Slide-in animation: target navSecondaryWrapper (has real height, so -100% = off-screen above)
            // #navbar itself is 0-height when sticky, so translateY(-100%) on it = translateY(0) = no movement
            if (isSticky && !wasSticky) {
                navSecondaryWrapper.classList.remove('nav-wrapper-slide-in');
                void navSecondaryWrapper.offsetHeight; // force reflow to restart animation
                navSecondaryWrapper.classList.add('nav-wrapper-slide-in');
            } else if (!isSticky) {
                navSecondaryWrapper.classList.remove('nav-wrapper-slide-in');
            }
        }

        wasSticky = isSticky;
    });
}