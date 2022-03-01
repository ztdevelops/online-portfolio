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

window.onscroll = () => {
    var current = "";

    sections.forEach((s) => {
        const sTop = s.offsetTop;
        if (scrollY >= sTop - (s.clientHeight * 0.5)) {
            current = s.getAttribute('id');
        }
    })

    navigationItems.forEach((i) => {
        i.classList.remove("active");
        if (i.getAttribute('value') === current) {
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