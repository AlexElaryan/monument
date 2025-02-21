document.addEventListener("DOMContentLoaded", function () {
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
        slidesPerView: 1.7,
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
const headnavLi = document.querySelectorAll('.head-filter li');
const headCont = document.querySelector('.head-cont');
const headFilterItems = document.querySelectorAll('.head-filter__block > div');
const bodyFilter = document.querySelector('.head-cont__body-filter');

bodyFilter.onclick = (event) => {
    closeHeadCont();
}


headnavLi.forEach((el, ind) => {
    el.onclick = () => {
        openHeadCont(ind); 
    }
});

function openHeadCont(index) {
    headFilterItems.forEach(item => item.style.display = 'none');
    headnavLi.forEach(item => item.classList.remove('active-filter'));

    document.body.style.paddingTop = '186px';
    bodyFilter.style.display = 'block';
    headFilterItems[index].style.display = 'flex';
    headnavLi[index].classList.add('active-filter');
    headCont.classList.add('head-cont__open');
}

function closeHeadCont() {
    headFilterItems.forEach(item => item.style.display = 'none');
    headnavLi.forEach(item => item.classList.remove('active-filter'));
    headCont.classList.remove('head-cont__open');
    bodyFilter.style.display = 'none';
    document.body.style.paddingTop = '0px';

}


const burgerMenuBtn = document.querySelector('.burgerMenu-btn');
const burgerMenuClose = document.querySelector('.burgerMenu-close');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenuBtn.onclick = () => {
    burgerMenu.style.display = 'flex';
    burgerMenuClose.style.display = 'block';
    burgerMenuBtn.style.display = 'none';
    document.body.style.overflow = 'hidden';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
}

burgerMenuClose.onclick = () => {
    burgerMenu.style.display = 'none';
    burgerMenuClose.style.display = 'none';
    burgerMenuBtn.style.display = 'block';
    document.body.style.overflow = 'auto';

}