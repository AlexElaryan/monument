document.addEventListener("DOMContentLoaded", function () {
    // Инициализация для intro-swiper
    if (document.querySelector('.intro-swiper')) {
        new Swiper(".intro-swiper", {
            loop: true,
            navigation: {
                nextEl: ".intro-swiper-next",
                prevEl: ".intro-swiper-prev",
            },
            pagination: {
                el: ".intro-swiper-pagination",
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: 15,
            breakpoints: {
                720: {
                    slidesPerView: 1,
                    spaceBetween: 5
                },
                1420: {
                    slidesPerView: 1.3,
                    spaceBetween: 15
                },
            }
        });
    }

    // Инициализация для product-swiper
    if (document.querySelectorAll(".product-swiper").length > 0) {
        document.querySelectorAll(".product-swiper").forEach((swiperEl, index) => {
            new Swiper(swiperEl, {
                loop: true,
                navigation: {
                    nextEl: `.product-swiper-next-${index}`,
                    prevEl: `.product-swiper-prev-${index}`,
                },
                pagination: {
                    el: `.swiper-pagination-${index}`,
                    clickable: true,
                },
                slidesPerView: 2,
                spaceBetween: 20,
                breakpoints: {
                    720: {
                        slidesPerView: 4,
                        spaceBetween: 8,
                    },
                    1420: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }
            });
        });
    }
});

// Аккордеон для вопросов
document.querySelectorAll('.plus').forEach(btn => {
    btn.addEventListener('click', () => {
        const questionItem = btn.closest('.question-item');
        questionItem.classList.toggle('question-active');
    });
});
