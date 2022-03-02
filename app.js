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
    var currentScrollItem = "";

    sections.forEach((s) => {
        if (scrollY >= s.offsetTop - (s.clientHeight * 0.5)) {
            currentScrollItem = "navbar-" + s.getAttribute('id');
            s.classList.add("segment-animate");
        }
    })

    navigationItems.forEach((i) => {
        i.classList.remove("active");
        if (i.getAttribute('id') === currentScrollItem) {
            i.classList.add("active");
        }
    })
}

function openLink(type) {
    var targetLink = "";
    if (type == "i") {
        targetLink = "https://www.instagram.com/yzhengting_/?hl=en";
    } else if (type == "t") {
        targetLink = "https://twitter.com/yzhengting_";
    } else if (type == "g") {
        targetLink = "https://github.com/ztdevelops";
    }
    window.open(targetLink, "_blank");
}

function scrollToSection(targetID) {
    var target;

    for (var i = 0; i < sections.length; i++) {
        if (sections.item(i).getAttribute('id') === targetID.slice(7)) {
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
    } catch (e) {
        console.error(e);
    }
}