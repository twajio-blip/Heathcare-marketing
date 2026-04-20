import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonialData = [
    {
        name: "Dr. Sarah Jenkins",
        role: "Founder, Jenkins Primary Care",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
        quote: "Since partnering with this agency, our patient volume has tripled. Their understanding of HIPAA compliance paired with aggressive digital growth strategies has made them an invaluable partner.",
        rating: 5
    },
    {
        name: "Dr. Michael Chen",
        role: "CEO, Elite Orthopedics",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80",
        quote: "Their SEO and content marketing approach completely shifted our trajectory. We went from being invisible online to dominating the top spots for every search query in our entire region.",
        rating: 5
    },
    {
        name: "Mia Song",
        role: "CTO, HealthBridge Tech",
        image: "https://images.unsplash.com/photo-1594824432258-1be21941656c?auto=format&fit=crop&w=200&q=80",
        quote: "Custom digital funnels have added a layer of interactivity that keeps patients engaged step after step. We were amazed at how quickly their team adapted to our unique industry jargon.",
        rating: 4.5
    },
    {
        name: "Dr. James Wilson",
        role: "Director, Vitality Health",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        quote: "The results speak for themselves. We've seen a massive influx of new patients and our revenue has never been higher since partnering with this talented team.",
        rating: 5
    },
    {
        name: "Elena Rodriguez",
        role: "Marketing VP, CarePlus",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
        quote: "Their expertise in healthcare marketing is unmatched. We struggled with our online presence for years before they came in and completely turned things around.",
        rating: 5
    }
];

export function renderTestimonials() {
    const wrapper = document.querySelector('#testimonial-swiper-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = '';

    testimonialData.forEach(item => {
        const fullStars = Math.floor(item.rating);
        const hasHalfStar = item.rating % 1 !== 0;

        let starsHtml = '';
        for (let i = 0; i < fullStars; i++) {
            starsHtml += '<i class="fa-solid fa-star text-xs"></i>';
        }
        if (hasHalfStar) {
            starsHtml += '<i class="fa-solid fa-star-half-stroke text-xs"></i>';
        }

        const slideHtml = `
            <div class="swiper-slide h-auto rounded-[2.5rem]">
                <div class="bg-white p-huge border rounded-[2.5rem] border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col h-full">
                    <div class="flex justify-between items-start mb-large">
                        <div class="flex gap-1 text-amber-400">
                            ${starsHtml}
                        </div>
                        <i class="fa-solid fa-quote-left text-4xl text-slate-100"></i>
                    </div>

                    <p class="text-size-body text-skin-accent-2 font-medium leading-relaxed mb-huge grow italic">
                        "${item.quote}"
                    </p>

                    <div class="flex items-center gap-medium pt-large border-t border-slate-50">
                        <div class="w-14 h-14 rounded-2xl overflow-hidden shadow-lg shadow-slate-200">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 class="text-size-sub-header font-black text-skin-accent">${item.name}</h4>
                            <p class="text-size-body font-bold text-skin-primary uppercase tracking-wider mt-1">${item.role}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        wrapper.insertAdjacentHTML('beforeend', slideHtml);
    });
}

export function initTestimonialSwiper() {
    const swiperEl = document.querySelector('.testimonialSwiper');
    if (!swiperEl) return;

    new Swiper('.testimonialSwiper', {
        modules: [Pagination, Navigation, Autoplay],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 40000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.testimonial-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                centeredSlides: false
            },
            1024: {
                slidesPerView: 3,
                centeredSlides: true
            }
        }
    });
}

// Initialization Flow
document.addEventListener('DOMContentLoaded', () => {
    renderTestimonials();
    initTestimonialSwiper();
});
