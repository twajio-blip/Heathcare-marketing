import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const servicesData = [
    {
        icon: "fa-bullseye",
        title: "Patient Acquisition <span class=\"text-skin-primary\">Campaigns</span>",
        description: "Scale your practice with high-intent lead generation. We deploy precision-targeted ads that turn searchers into scheduled appointments.",
        features: [
            "Hyper-targeted Google Ads",
            "Social Media Advertising",
            "Comprehensive ROI Tracking",
            "Hospital & Clinic Growth",
            "Lead Generation Systems",
            "Medical Content Writing"
        ],
        link: "./contact.html"
    },
    {
        icon: "fa-magnifying-glass-chart",
        title: "Medical SEO & <span class=\"text-skin-primary\">Local Search</span>",
        description: "Dominate local search results. We optimize your digital presence so patients find your clinic first when they need care the most.",
        features: [
            "Google Business Profile",
            "Technical Healthcare SEO",
            "Medical Backlink Building",
            "Local Search Dominance"
        ],
        link: "./contact.html"
    },
    {
        icon: "fa-code",
        title: "Healthcare <span class=\"text-skin-primary\">Web Design</span>",
        description: "Convert visitors into patients with a world-class digital experience. Fast, secure, and HIPAA-compliant websites built for growth.",
        features: [
            "Mobile-First Design",
            "HIPAA Compliance",
            "Conversion Optimization",
            "Patient Portals & Booking Systems"
        ],
        link: "./contact.html"
    },
    {
        icon: "fa-star",
        title: "Reputation & <span class=\"text-skin-primary\">Review Management</span>",
        description: "Build trust before the first visit. We automate your review collection and protect your practice's digital standing.",
        features: [
            "Google Review Generation",
            "Feedback Interception",
            "Communication Automation"
        ],
        link: "./contact.html"
    }
];

export function renderServices() {
    const wrapper = document.querySelector('#services-swiper-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = '';

    servicesData.forEach(service => {
        const slideHtml = `
      <div class="swiper-slide pt-huge pb-medium group">
        <div class="h-full min-h-[300px] w-full bg-skin-primary/5 border border-skin-primary/10 p-medium md:p-large rounded-[2.5rem] transition-all duration-500 relative flex flex-col items-center text-center hover:-translate-y-2 hover:bg-white hover:border-skin-primary/20 hover:shadow-2xl hover:shadow-skin-primary/10">
          
          <div class="absolute inset-0 bg-linear-to-tr from-skin-primary/5 via-transparent to-skin-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]"></div>

          <div class="absolute -top-8 left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-2xl bg-white shadow-lg text-skin-primary flex items-center justify-center group-hover:bg-skin-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500 border border-skin-primary/10">
            <i class="fa-solid ${service.icon} text-size-header"></i>
          </div>

          <div class="mt-10 relative z-10 flex flex-col items-center grow">
            <h2 class="text-size-header font-black text-skin-accent mb-4 tracking-tight">
              ${service.title}
            </h2>

            <p class="text-size-body text-slate-600 font-medium leading-relaxed px-2">
              ${service.description}
            </p>
          </div>

          <div class="mt-8 relative z-10 w-full">
            <a href="${service.link}" class="w-full h-14 bg-skin-accent text-white rounded-2xl font-bold text-size-body flex items-center justify-center gap-small transition-all duration-500 hover:bg-skin-primary hover:shadow-lg">
              Learn More
              <i class="fa-solid fa-chevron-right text-xs group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
    `;
        wrapper.insertAdjacentHTML('beforeend', slideHtml);
    });
}

export function initServicesSwiper() {
    const swiperEl = document.querySelector('.servicesSwiper');
    if (!swiperEl) return;

    new Swiper('.servicesSwiper', {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.services-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.services-next',
            prevEl: '.services-prev',
        },
        breakpoints: {
            540: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            720: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1140: {
                slidesPerView: 3,
            }
        }
    });
}

// Initialization Flow
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    initServicesSwiper();
});
