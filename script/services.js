const servicesTab = document.querySelectorAll('.services-tab');
const servicesBlock = document.querySelectorAll('.services-block');

servicesTab.forEach((btn, index) => {
    btn.onclick = () => {
        servicesTab.forEach(c => c.classList.remove('services-active_tab'));
        servicesBlock.forEach(c => c.classList.remove('services-block-active'));

        btn.classList.add('services-active_tab');   
        servicesBlock[index].classList.add('services-block-active');   
    }
})