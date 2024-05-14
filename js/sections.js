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
            <div class="aboutP">
                <p>Hello, my name is Max Keller!  I'm an independent programmer currently dedicating my time learning about web design.  I believe that it's important to have a good work ethic where you always dedicate a minimum amount of time to working every day, which was why I was able to go from knowing very little about web design to making a clean and well-animated website like this in under three months.  While doing this, I'm also working a job at HyVee washing dishes, where I learned the importance of making sure that not only everything is in the right place, but also making sure that every dish is spotless.  </p>
                <p>I currently have an associates degree in Computer Science from Normandale Community College, which gave me some experience with using Python, C, and Java (although as of now I only have minimal knowlege on these).  Overall, I'm a hard worker looking for a job that could give me even more experience than what I already have.</p>
                <div class="resContainer">
                    <form action = "https://www.resume.com/resume/builder/b7f9fc62-c988-4ae7-aa4b-dfdb4236bfcc" target = "_blank"><button>RESUME</button></form>
                </div>
            </div>
            <div class="aboutImg">
                <img src="img/image-placeholder-M.jpg" alt="A placeholder image">
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
