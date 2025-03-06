const tabs = document.querySelectorAll('.payment-location-tabs label');

tabs.forEach((tab, ind) => {
    tab.onclick = () => {
        tabs.forEach(c => c.classList.remove('active-loc-tab'));
        tab.classList.add('active-loc-tab');
    }
})