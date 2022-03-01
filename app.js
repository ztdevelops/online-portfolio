const navigation = document.querySelector('.navigation');
const navigationToggle = document.querySelector('.navigation-toggle');

navigationToggle.addEventListener('click', () => {
    const expanded = navigation.getAttribute('mobile-expanded');
    const isExpanded = (expanded === "true");

    navigation.setAttribute('mobile-expanded', !isExpanded);
    navigationToggle.setAttribute('aria-expanded', !isExpanded);
})