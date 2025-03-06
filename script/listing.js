// swiper start

new Swiper(".listing-top_swiper", {
    loop: true,
    navigation: {
        nextEl: ".listing-swiper-next",
    },
    slidesPerView: "auto",
    spaceBetween: 8,
    breakpoints: {
        1001: {
            slidesPerView: 6,
        },
        1420: {
            slidesPerView: 7.6,
            spaceBetween: 15,
        }
    }
});

new Swiper(".listing-content-swiper", {
    loop: true,
    navigation: {
        nextEl: ".listing-content-swiper-next",
    },
    slidesPerView: 2.3,
    spaceBetween: 8,
    breakpoints: {
        720: {
            slidesPerView: 5.4,
        },
        1001: {
            slidesPerView: 4,
        },
        1420: {
            slidesPerView: 5,
            spaceBetween: 12
        },
    }
});

new Swiper(".product-swiper", {
    loop: true,
    navigation: {
        nextEl: ".product-swiper-next-5",
    },
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
        720: {
            slidesPerView: 4,
        },
        1420: {
            slidesPerView: 5,
            spaceBetween: 15
        },
    }
});

new Swiper(".to_basket-left-swiper", {
    loop: true,
    navigation: {
        nextEl: ".to_basket-swiper-next",
        prevEl: ".to_basket-swiper-prev",
    },
    pagination: {
        el: ".to_basket-left-swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 8,
});


// swiper end

const colorItem = document.querySelectorAll('.color-item');

colorItem.forEach(color => {
    color.onclick = () => {
        colorItem.forEach(c => c.classList.remove('color-item-active'));
        color.classList.add('color-item-active');
    }
})

const basket_button = document.querySelectorAll('.basket_button');
const modalToBasket = document.querySelector('.to_basket-modal');

basket_button.forEach(btn => {
    btn.onclick = () => {
        console.log(modalToBasket);
        
        modalOpenBtn(modalToBasket);
    }
})