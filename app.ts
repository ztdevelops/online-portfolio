// Declaration of elements
const navigation: Element = document.querySelector('.navigation');
const navigationToggle: Element = document.querySelector('.navigation-toggle');
const sections: NodeListOf<HTMLElement> = document.querySelectorAll('section');
const navigationItems: NodeListOf<HTMLElement> = document.querySelectorAll('header nav ul li')

// Onload event, to set active nav item and to animate the first segment.
window.onload = () => {
    animateAndHighlight();
}

// Onscroll event, to set active nav item and to animate the segments based on user's scrolling.
window.onscroll = () => {
    animateAndHighlight();
}

// Adding an onclick event to the navbar toggle button. (toggle only available < 53.2rem)
navigationToggle.addEventListener('click', () => {
    let expanded: string = navigation.getAttribute('mobile-expanded');
    let isExpanded: boolean = (expanded === "true");
    let isExpandedUpdateTo: string = String(!isExpanded);

    navigation.setAttribute('mobile-expanded', isExpandedUpdateTo);
    navigationToggle.setAttribute('aria-expanded', isExpandedUpdateTo);
})

// Function to animate segments and highlight active nav item.
function animateAndHighlight() {
    let currentScrollItem: string = "";

    sections.forEach((s) => {
        // Matching user's scroll progress against each section's top.
        // If it matches, the segment will be animated. 
        if (scrollY >= s.offsetTop - (s.clientHeight * 0.5)) {
            // Assigning active segment to the currentScrollItem variable.
            currentScrollItem = "nav-" + s.getAttribute('id');
            s.classList.add("segment-animate");
        }
    })

    // Highlighting of active nav item.
    navigationItems.forEach((i) => {
        i.classList.remove("nav-active");
        if (i.getAttribute('id') === currentScrollItem) {
            i.classList.add("nav-active");
        }
    })
}

// Function to scroll to selected segment.
function scrollToSection(e: HTMLElement) {
    let target: HTMLElement;
    let targetId: string = e.getAttribute('aria-controls');

    if (targetId === null) return console.error('targetId is null; no such attribute "aria-controls".');

    // Checking which segment to scroll to based on targetId.
    for (let i = 0; i < sections.length; i++) {
        if (sections.item(i).getAttribute('id') === targetId) {
            target = sections.item(i);
            break;
        }
    }

    // Scrolling to selected segment based on target's offsetTop value.
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

// Function to display work experience content based on active tab.
function displayContent(e: HTMLElement) {
    let targetButtonId: string = e.getAttribute('id');
    let targetContentId: string = e.getAttribute('aria-controls');
    let tabs = document.querySelector('.tabs').children;
    let contents = document.querySelector('.content').children;

    // Highlighting active tab.
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute('aria-selected', 'false');
        if (tabs[i].getAttribute('id') === targetButtonId) {
            tabs[i].setAttribute('aria-selected', 'true');
        }
    }

    // Displaying active content.
    for (let i = 0; i < contents.length; i++) {
        contents[i].setAttribute('aria-current', 'false');
        if (contents[i].getAttribute('id') === targetContentId) {
            contents[i].setAttribute('aria-current', 'true');
        }
    }
}