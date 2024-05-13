// CONSTRUCTION
import secArray from "./sections.js";
import jsProjects from "./jsProjects.js";
secArray.forEach((sec) => {
    sec.constructSection();
});
jsProjects.forEach((pro) => {
    pro.constructProject(document.querySelector(".js"));
})

// CONSTANTS
const navbar = document.querySelector(".navbar");
const navBtns = navbar.querySelectorAll("button");

const sections = document.querySelectorAll("section");
// LETS
let scrollId = 0;

// EVENT LISTENERS
sections.forEach((section) => {
    window.addEventListener("scroll", () => {
        if(document.documentElement.scrollTop >= section.offsetTop - 300){
            scrollId = Array.from(sections).indexOf(section);
            navBtns.forEach((button) => {button.id = ""});
            navBtns[scrollId].id = "selected";
        }
    });
});

navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const i = Array.from(navBtns).indexOf(btn);
        window.scrollTo({top: sections[i].offsetTop - 100});
    })
})

// LOAD CONTENT
// window.addEventListener("unload", () => {
//     window.scrollTo(0, 0);
// })