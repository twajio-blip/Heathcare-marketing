import headerHTML from './components/header.html?raw';
import footerHTML from './components/footer.html?raw';

import {
    initProgressBar,
    initMobileMenus,
    initThirdPartyLibraries,
    initCounters
} from './main.js';

// Component Loader
export async function loadComponents() {
    try {
        // Inject Header
        const headerContainer = document.getElementById('header-container');
        if (headerContainer) headerContainer.innerHTML = headerHTML;

        // Inject Footer
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) footerContainer.innerHTML = footerHTML;

        // Initialize scripts that depend on the injected DOM
        initNavbarScroll();
        initProgressBar();
        initMobileMenus();
        initThirdPartyLibraries();
        initCounters();
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

    let lastScrollY = window.scrollY;
    let wasSticky = false;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const isSticky = currentScrollY > 350;

        // 1. Basic Navbar State
        ['fixed', 'nav-wrapper-fade-in'].forEach(cls => {
            navbar.classList.toggle(cls, isSticky);
        });
        // 3. Primary nav visibility
        if (navPrimary) {
            ['hidden'].forEach(cls => {
                navPrimary.classList.toggle(cls, isSticky);
            });
        }

        // Configuration
        const delayTime = 200; // 200ms delay between margin move and height shrink

        if (navSecondaryWrapper) {
            if (isSticky) {
                // 1. Immediate Action: Fix the margin
                navSecondaryWrapper.classList.replace('lg:-mt-7', 'lg:mt-0');

                // 2. Delayed Action: Shrink the height
                setTimeout(() => {
                    if (window.scrollY > 50) { // Safety check to ensure user is still scrolling
                        navSecondaryWrapper.classList.replace('lg:h-20', 'lg:h-16');
                    }
                }, delayTime);

            } else {
                // 1. Immediate Action: Grow the height back
                navSecondaryWrapper.classList.replace('lg:h-16', 'lg:h-20');

                // 2. Immediate Action: Restore the margin (usually looks better without delay when going UP)
                navSecondaryWrapper.classList.replace('lg:mt-0', 'lg:-mt-7');
            }
        }

        if (navSecondaryLogo) {
            ['lg:visible'].forEach(cls => {
                navSecondaryLogo.classList.toggle(cls, isSticky);
            });
        }
        if (navSecondaryBg) {
            ['lg:w-full', 'xl:w-full'].forEach(cls => {
                navSecondaryBg.classList.toggle(cls, isSticky);
            });

            if (isSticky) {
                navSecondaryBg.classList.remove('lg:w-[75%]', 'xl:w-[70%]', 'lg:[clip-path:polygon(0_0,100%_0,100%_100%,35px_100%)]');
            } else {
                navSecondaryBg.classList.add('lg:w-[75%]', 'xl:w-[70%]', 'lg:[clip-path:polygon(0_0,100%_0,100%_100%,35px_100%)]');
            }
        }

        if (secodaryBtn) {
            ['lg:flex'].forEach(cls => {
                secodaryBtn.classList.toggle(cls, isSticky);
            });
        }
        wasSticky = isSticky;
        lastScrollY = currentScrollY;
    });
}