import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const servicesData = [
    {
        icon: "fa-bullseye",
        title: "Patient Acquisition <span class=\"text-skin-primary\">Campaigns</span>",
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
      <div class="swiper-slide py-medium group">
        <div class="h-full min-h-[480px] w-auto items-center xs:items-start bg-skin-primary/10 border border-skin-primary/10 p-medium md:p-huge rounded-[2.5rem] transition-all duration-500 relative flex flex-col hover:-translate-y-2 hover:bg-white hover:border-skin-primary/20 hover:shadow-2xl hover:shadow-skin-primary/10 overflow-hidden">
          <div class="absolute inset-0 bg-linear-to-tr from-skin-primary/10 via-transparent to-skin-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div class="hidden md:flex relative z-10 w-16 h-16 rounded-2xl bg-white shadow-sm text-skin-primary items-center justify-center mb-huge group-hover:bg-skin-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500">
            <i class="fa-solid ${service.icon} text-size-badge"></i>
          </div>

          <h2 class="text-size-header relative z-10 font-black text-skin-accent mb-medium tracking-tight">
            ${service.title}
          </h2>

          <ul class="relative z-10 space-y-4 grow">
            ${service.features.map(feature => `
              <li class="flex items-start gap-medium text-skin-accent-1 font-semibold group/item transition-colors hover:text-skin-accent">
                <div class="w-1.5 h-1.5 rounded-full bg-skin-primary shrink-0 group-hover/item:scale-150 transition-transform mt-2"></div>
                <span class="text-size-body">${feature}</span>
              </li>
            `).join('')}
          </ul>

          <div class="mt-medium relative z-10 overflow-hidden h-14 w-full opacity-0 translate-y-full transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0">
            <a href="${service.link}" class="w-full h-full bg-skin-accent text-white rounded-2xl font-bold text-size-body flex items-center justify-center gap-small p-small transition-all duration-500 ease-out hover:bg-skin-primary">
              Learn More
              <i class="hidden md:block fa-solid fa-chevron-right text-size-xsmall group-hover:translate-x-1 transition-transform"></i>
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
