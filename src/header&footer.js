import {
    initProgressBar,
    initMobileMenus,
    initThirdPartyLibraries,
    initCounters
} from './main.js';

// Component Loader
export async function loadComponents() {
    try {
        // Fetch and inject Header
        const headerRes = await fetch('./src/components/header.html');
        if (headerRes.ok) {
            const headerHTML = await headerRes.text();
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) headerContainer.innerHTML = headerHTML;
        }

        // Fetch and inject Footer
        const footerRes = await fetch('./src/components/footer.html');
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

        // Handle wrapper margin for non-sticky layout
        if (navSecondaryWrapper) {
            if (isSticky) {
                // When scrolling down
                navSecondaryWrapper.classList.replace('h-20', 'h-16');
                navSecondaryWrapper.classList.replace('lg:-mt-7', 'lg:mt-0');
            } else {
                // When at the top
                navSecondaryWrapper.classList.replace('h-16', 'h-20');
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