document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".intro-swiper", {
        loop: true,
        navigation: {
            nextEl: ".intro-swiper-next",
            prevEl: ".intro-swiper-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1.7,
        spaceBetween: 15,
        breakpoints: {
            1200: {
                slidesPerView: 1.3,
                spaceBetween: 15
            },
        }
    });
    document.querySelectorAll(".product-swiper").forEach((swiperEl, index) => {
        new Swiper(swiperEl, {
            loop: true,
            navigation: {
                nextEl: `.product-swiper-next-${index}`,
                // prevEl: `.product-swiper-prev-${index}`,
            },
            pagination: {
                el: `.swiper-pagination-${index}`,
                clickable: true,
            },
            slidesPerView: 2,
            spaceBetween: 20,
            breakpoints: {
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
            }
        });
    });
});


const plus = document.querySelectorAll('.plus');
const questionItem = document.querySelectorAll('.question-item');

plus.forEach((btn, ind) => {
    btn.onclick = () => {
        if (!questionItem[ind].classList.contains('question-active')) {
            questionItem[ind].classList.add('question-active');
        } else {
            questionItem[ind].classList.remove('question-active');
        }
    }
})

