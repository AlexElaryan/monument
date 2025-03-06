
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

const searchBlock = document.querySelector('.cta__search');
const search = document.querySelector('.cta__search > input');
const searchClear = document.querySelector('.search-clear');

const searchBtn = document.querySelector('.search-btn');


function openSearchCont() {
    headCont.classList.add('head-cont__open-search');
    document.body.classList.add('forBodyPT');
    searchBlock.classList.add('cta__search-active');
    bodyFilter.style.display = 'block';
}

function closeSearchCont() {
    headCont.classList.remove('head-cont__open-search');
    searchBlock.classList.remove('cta__search-active');
    document.body.classList.remove('forBodyPT');
    bodyFilter.style.display = 'none';
}

function openSearchContMob() {
    headCont.classList.add('head-cont__open-search-mob');
    document.body.classList.add('forBodyPT-mob');
    searchBlock.classList.add('cta__search-active-mob');
    bodyFilter.style.display = 'block';
}

searchBtn.onclick = () => {
    openSearchContMob();
}

function handleSearchInput() {
    if (search && window.innerWidth >= 1001) {
        search.oninput = openSearchCont;
    } else if (search) {
        search.oninput = null;
    }
}

handleSearchInput();
window.addEventListener("resize", handleSearchInput);

if (searchClear && window.innerWidth >= 1001) {
    searchClear.onclick = () => {
        search.value = '';
        closeSearchCont();
    };
} else {
    searchClear.onclick = () => {
        search.value = '';
        headCont.classList.remove('head-cont__open-search-mob');
        document.body.classList.remove('forBodyPT-mob');
        searchBlock.classList.remove('cta__search-active-mob');
        bodyFilter.style.display = 'none';
    };
}

// Закрытие при клике вне поиска
document.addEventListener('click', (event) => {
    if (!searchBlock.contains(event.target) && !search.contains(event.target) && !document.body.classList.contains('forBodyPT')) {
        closeSearchCont();
    }
});

if (bodyFilter) {
    bodyFilter.addEventListener("click", closeHeadCont);
    bodyFilter.addEventListener("click", closeSearchCont);
}

if (headnavLi.length && headFilterItems.length) {
    headnavLi.forEach((el, ind) => {
        el.onclick = () => openHeadCont(ind);
    });
}

function openHeadCont(index) {
    if (!bodyFilter) return;

    headFilterItems.forEach(item => (item.style.display = 'none'));
    headnavLi.forEach(item => item.classList.remove('active-filter'));

    bodyFilter.style.display = 'block';
    headFilterItems[index].style.display = 'flex';
    headnavLi[index].classList.add('active-filter');
    document.body.classList.add('forBodyPT');
    headCont.classList.add('head-cont__open');    
}

function closeHeadCont() {
    if (!bodyFilter) return;

    headFilterItems.forEach(item => (item.style.display = 'none'));
    headnavLi.forEach(item => item.classList.remove('active-filter'));

    headCont.classList.remove('head-cont__open');
    bodyFilter.style.display = 'none';
    document.body.classList.remove('forBodyPT');
}

// modal start

const modals = document.querySelectorAll('.modal');
const modalCloses = document.querySelectorAll('.modal-close');
const modalCloseType2 = document.querySelectorAll('.modal-close-type2');
const bodyFilterB = document.querySelector('.for-body_filter');

function modalOpenBtn(el) {
    el.classList.add('active-modal');
    bodyFilterB?.classList.add('for-body_filter-active');
    lockScroll();
}

function modal2OpenBtn(el) {
    el.classList.add('modal-type2-active');
    el.firstElementChild?.classList.add('active-modal');
    lockScroll();
}

function modalCloseBtn(el) {
    el.classList.remove('active-modal');
    checkModals();
}

function modal2CloseBtn(el) {
    el.classList.remove('modal-type2-active');
    el.firstElementChild?.classList.remove('active-modal');
    checkModals();
}

function lockScroll() {
    document.body.style.overflow = 'hidden';
}

function unlockScroll() {
    document.body.style.overflow = 'auto';
}

function checkModals() {
    const anyModalOpen = [...modals].some(modal => modal.classList.contains('active-modal') || modal.classList.contains('modal-type2-active'));
    if (!anyModalOpen) {
        bodyFilterB?.classList.remove('for-body_filter-active');
        unlockScroll();
    }
}

// Закрытие по клику на затемнение
if (bodyFilterB) {
    bodyFilterB.onclick = () => {
        modals.forEach(modal => modalCloseBtn(modal));
    };
}

// Обработчики закрытия модалок
modalCloses.forEach(btn => {
    btn.onclick = (event) => {
        modalCloseBtn(event.target.closest('.modal'));
    };
});

modalCloseType2.forEach(btn => {
    btn.onclick = (event) => {
        modal2CloseBtn(event.target.closest('.modal-type2'));
    };
});
