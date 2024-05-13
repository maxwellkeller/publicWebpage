// CONSTANTS
const js = document.querySelector(".js");
const jsItems = js.querySelectorAll(".project");

// HEAD ANIMATION
let headTL = gsap.timeline();

const headAnimation = headTL.from(".headContainer", {
    opacity: 0,
    duration: 2,
}).from(".headContainer h2", {
    y: -100,
    duration: 1
}, "<").from(".headContainer h1", {
    y: 100,
    duration: 1
}, "<");


// ABOUT ME ANIMATION
let aboutTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".aboutBody",
        scrub: false,
        start: "10% center",
        end: "bottom center",
        // markers: true,
        onEnter: () => aboutAnimation.play(),
        onLeaveBack: () => aboutAnimation.reverse()
    }
});

const aboutAnimation = aboutTL.from(".aboutHeader", {
    opacity: 0,
    y: -100,
    duration: 0.5
}).from(".aboutBody", {
    opacity: 0,
    x: -800,
    duration: 0.5
}, "<").from(".aboutP", {
    y: -1000,
    duration: 0.5
}, "-=0.25").from(".aboutImg", {
    scale: 0,
    duration: 0.25
});


// PROJECTS ANIMATION
let jsTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".js",
        scrub: false,
        start: "10% center",
        end: "bottom center",
        // markers: true,
        onEnter: () => jsAnimation.play(),
        onLeaveBack: () => jsAnimation.reverse()
    }
});
jsTL.set(".info", {yPercent: 100})


const jsAnimation = jsTL.from(".proHead", {
    scale: 0,
    duration: 0.5
});
jsItems.forEach((project) => {
    jsAnimation.from(project, {
        autoAlpha: 0,
        y: -50,
        duration: 0.1
    });
    const info = project.querySelector(".info");
    const itemHover = gsap.to(info, {
        yPercent: 0,
        duration: 0.25,
        paused: true
    });
    project.addEventListener("mouseenter", () => {itemHover.play();});
    project.addEventListener("mouseleave", () => {itemHover.reverse();});
})