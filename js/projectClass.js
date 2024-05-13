class Project {
    constructor(
        name,
        href,
        img,
        desc
    ){
        this.name = name,
        this.href = href,
        this.img = img,
        this.desc = desc
    }
    constructProject(section){
        const project = document.createElement("a");
        project.classList.add("project");
        project.setAttribute("target", "_blank");
        project.setAttribute("href", `${this.href}`);
        project.innerHTML = `
        <div class="proH">
            <h1>${this.name}</h1>
        </div>
        <div class="proB" style = "background-image: url(${this.img})">
            <div class="info">${this.desc}</div>
        </div>
        `;
        section.querySelector(".proContainer").append(project);
    }
}

export default Project;


// TEMPLATE:
/*
<form class="project" action = "" target = "_blank">
    <div class="proH">
        <h1>PROJECT-NAME</h1>
    </div>
    <div class="proB" style = "background-image: url(img/image-placeholder-M.jpg)">
        <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolores ex veritatis voluptatibus. Assumenda, similique. Nulla porro iure officiis libero laudantium dolorum adipisci unde ducimus aliquam, magnam fugit iusto velit.</div>
    </div>
</form> */