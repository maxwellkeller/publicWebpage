class Section {
    constructor(
        secClass,
        secContent,
        navName,
        index
    ){
        this.secClass = secClass;
        this.secContent = secContent;
        this.navName = navName;
        this.index = index;
    }
    constructSection(){
        const section = document.createElement("section");
        section.classList.add(`${this.secClass}`);
        section.innerHTML = `${this.secContent}`;
        document.querySelector("main").append(section);

        const navSection = document.createElement("button");
        this.index == 0 ? navSection.id = "selected" : navSection.id = "";
        navSection.innerText = `${this.navName}`;
        document.querySelector(".navbar").append(navSection);
    }
}

const secArray = [
    new Section(
        "head",
        `<div class="headContainer">
            <h2>Freelance Programmer</h2>
            <hr>
            <h1>MAX KELLER</h1>
        </div>`,
        "HEAD",
        0
    ),
    new Section(
        "aboutMe",
        `<div class="title aboutHeader"><h1>ABOUT ME</h1></div>
        <div class="aboutBody content">
            <div class="aboutP"><p>
                Hello, my name is Max Keller!  I'm an Ambitious and career-focused job seeker anxious to obtain an entry-level position for a company related to web design to help me launch my career while achieving company goals. I'm a recent college graduate with excellent research, technical and problem-solving skills. I'm also very detail-oriented and am able to learn new concepts quickly.
            </p>
                <div class="resContainer">
                    <form action = "professionalResume.pdf" target = "_blank"><button>RESUME</button></form>
                </div>
            </div>
            <div class="aboutImg">
                <img src="img/logo.png" alt="A placeholder image">
            </div>
        </div>`,
        "ABOUT ME",
        1
    ),
    new Section(
        "js",
        `<div class="proHead title"><h1>JAVASCRIPT WORK</h1></div>
        <div class="proContainer">
        </div>`,
        "JAVASCRIPT WORK",
        2
    )
]

export default secArray;
