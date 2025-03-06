const swiper = document.querySelector('.ourWorks');
const footer = document.querySelector('footer');

const basketCont = document.querySelector('.basket-cont');

if (basketCont.classList.contains('basketCont-not-empty')) {
    swiper.style.display = 'none';
    footer.style.display = 'none';
    document.body.style.backgroundColor = 'rgba(245, 246, 248, 1)';
}


const basketProdServices = document.querySelectorAll('.basket-content-services-item');
const basketProdServicesToggle = document.querySelectorAll('.switch');

basketProdServicesToggle.forEach((toggle, ind) => {
    toggle.onchange = () => {
        basketProdServices[ind].classList.toggle('basket-content-services-switched');
    }
});