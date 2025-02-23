
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


const contactModal = document.querySelector('.contact-modal');
const contactModalBtn = document.querySelector('.contact-modal_open');
const contactModalClose = document.querySelector('.contact-modal_close');
const contactBodyFilter = document.querySelector('.contact-cont__body-filter');

contactModalBtn.onclick = () => {
    contactModal.style.transform = 'rotateX(0deg)';

    document.body.style.overflow = 'hidden';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    contactBodyFilter.style.display = 'block';
}

contactModalClose.onclick = () => {
    contactModal.style.transform = 'rotateX(180deg)';
    contactBodyFilter.style.display = 'none';
    document.body.style.overflow = 'auto';
}

contactBodyFilter.onclick = () => {
    contactModal.style.transform = 'rotateX(180deg)';
    contactBodyFilter.style.display = 'none';
    document.body.style.overflow = 'auto';
}


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

const modal = document.querySelectorAll('.modal');
const modalClose = document.querySelectorAll('.modal-close');
const bodyFilterB = document.querySelector('.for-body_filter');

function modalOpenBtn(el) {
    el.classList.add('active-modal');
    bodyFilterB.classList.add('for-body_filter-active');
    document.body.style.overflow = 'hidden';
}

function modalCloseBtn(el) {
    el.classList.remove('active-modal');
    bodyFilterB.classList.remove('for-body_filter-active');
    document.body.style.overflow = 'auto';
}

if (bodyFilterB) {
    bodyFilterB.onclick = () => {
        modal.forEach(el => {
            modalCloseBtn(el);
        });
    }
}

modalClose.forEach(el => {
    el.onclick = (event) => {
        modalCloseBtn(event.target.closest('.modal'));
    }
});
