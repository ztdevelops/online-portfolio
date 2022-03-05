const navigation = document.querySelector('.navigation');
const navigationToggle = document.querySelector('.navigation-toggle');
const sections = document.querySelectorAll('section');
const navigationItems = document.querySelectorAll('header nav ul li')

navigationToggle.addEventListener('click', () => {
    const expanded = navigation.getAttribute('mobile-expanded');
    const isExpanded = (expanded === "true");

    navigation.setAttribute('mobile-expanded', !isExpanded);
    navigationToggle.setAttribute('aria-expanded', !isExpanded);
})

window.onload = () => {
    animateAndHighlight();
}

window.onscroll = () => {
    animateAndHighlight();
}

function animateAndHighlight() {
    let currentScrollItem = "";

    sections.forEach((s) => {
        if (scrollY >= s.offsetTop - (s.clientHeight * 0.5)) {
            currentScrollItem = "nav-" + s.getAttribute('id');
            s.classList.add("segment-animate");
        }
    })

    navigationItems.forEach((i) => {
        i.classList.remove("nav-active");
        if (i.getAttribute('id') === currentScrollItem) {
            i.classList.add("nav-active");
        }
    })
}

function scrollToSection(e) {
    let target;
    let targetId = e.getAttribute('aria-controls');

    if (targetId === null) return console.error('targetId is null; no such attribute "aria-controls".');

    for (let i = 0; i < sections.length; i++) {
        if (sections.item(i).getAttribute('id') === targetId) {
            target = sections.item(i);
            break;
        }
    }

    try {
        window.scrollTo({
            top: target.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    } catch (err) {
        console.error(err);
    }
}

function displayContent(e) {
    let targetButton = e.getAttribute('id');
    let targetContent = e.getAttribute('aria-controls');
    let tabs = document.querySelector('.tabs').children;
    let contents = document.querySelector('.content').children;

    for (let tab of tabs) {
        tab.setAttribute('aria-selected', 'false');
        if (tab.getAttribute('id') === targetButton) {
            tab.setAttribute('aria-selected', 'true');
        }
    }

    for (let content of contents) {
        content.setAttribute('aria-current', 'false');
        if (content.getAttribute('id') === targetContent) {
            content.setAttribute('aria-current', 'true');
        }
    }
}