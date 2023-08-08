const d = document;

export function project(id) {
    const $project = d.querySelector(id),
        $fragment = d.createDocumentFragment(),
        projectContent = [
            {
                img: "img/projects/segundoPortafolio.png",
                title: "Portafolio Actual",
                desc: "Segundo Portafolio Personal",
                date: "08-08-2023",
                language: ["img/technology/html.png","img/technology/css.png", "img/technology/javascript.png"],
                visit: "https://dev-mlopez.github.io/",
                code: "https://github.com/dev-mlopez/dev-mlopez.github.io",
            },
            {
                img: "img/projects/desafioComponenteCalificacion.png",
                title: "Interacción con una Calificación",
                desc: "Desafio de FrontEndMentor - Nivel Novato",
                date: "27-07-2023",
                language: ["img/technology/html.png","img/technology/css.png", "img/technology/javascript.png"],
                visit: "https://dev-mlopez.github.io/projects/desafioInteraccionCalificacion/",
                code: "https://github.com/dev-mlopez/dev-mlopez.github.io/tree/main/projects/desafioInteraccionCalificacion",
            },
            {
                img: "img/projects/desafioSeccionTestimonio.png",
                title: "Seccion de Testimonios",
                desc: "Desafio de FrontEndMentor - Nivel Junior",
                date: "26-05-2023",
                language: ["img/technology/html.png", "img/technology/css.png"],
                visit: "https://dev-mlopez.github.io/projects/desafioTestimoniosGrid/",
                code: "https://github.com/dev-mlopez/dev-mlopez.github.io/tree/main/projects/desafioTestimoniosGrid",
            },
            {
                img: "img/projects/desafioPaginaInicioBloques.png",
                title: "Página de Inicio por Bloques",
                desc: "Desafio de FrontEndMentor - Nivel Junior",
                date: "08-05-2023",
                language: ["img/technology/html.png", "img/technology/css.png"],
                visit: "https://dev-mlopez.github.io/projects/desafioPaginaInicioBloques/",
                code: "https://github.com/dev-mlopez/dev-mlopez.github.io/tree/main/projects/desafioPaginaInicioBloques",
            },
            {
                img: "img/projects/desafioComponenteVistaPreviaTarjeta.png",
                title: "Componente que muestra la vista previa de tarjetas",
                desc: "Desafio de FrontEndMentor - Nivel Novato",
                date: "21-04-2023",
                language: ["img/technology/html.png", "img/technology/css.png"],
                visit: "https://dev-mlopez.github.io/projects/desafioComponenteVistaPreviaTarjeta/",
                code: "https://github.com/dev-mlopez/dev-mlopez.github.io/tree/main/projects/desafioComponenteVistaPreviaTarjeta",
            },
            {
                img: "img/projects/desafioComponenteResumenResultado.png",
                title: "Componente que muestra el resumen de un resultado",
                desc: "Desafio de FrontEndMentor - Nivel Novato",
                date: "20-04-2023",
                language: ["img/technology/html.png", "img/technology/css.png"],
                visit: "https://dev-mlopez.github.io/projects/desafioComponenteResumenResultado/",
                code: "https://github.com/dev-mlopez/dev-mlopez.github.io/tree/main/projects/desafioComponenteResumenResultado",
            },
            {
                img: "img/projects/personalPortafolio.png",
                title: "Primer Portafolio",
                desc: "Primer Portafolio Personal",
                date: "19-04-2023",
                language: ["img/technology/html.png", "img/technology/css.png"],
                visit: "https://dev-mlopez.github.io/projects/primerPortafolio/",
                code: "https://github.com/dev-mlopez/dev-mlopez.github.io/tree/main/projects/primerPortafolio",
            }
        ];
    
    projectContent.forEach(e => {
        const projectContainer = d.createElement("div"),
            projectImgContainer = d.createElement("div"),
            projectImg = d.createElement("img"),
            projectTitle = d.createElement("h5"),
            projectDesc = d.createElement("p"),
            projectLanguageContainer = d.createElement("div"),
            projectDate = d.createElement("p"),
            projectBtn = d.createElement("div"),
            projectBtnSee = d.createElement("a"),
            projectBtnVisit = d.createElement("a");

        projectImg.setAttribute("src", e.img);
        projectImgContainer.appendChild(projectImg);
        projectImgContainer.classList.add("project__img");

        projectTitle.innerHTML = e.title;
        projectTitle.classList.add("project__title")

        projectDesc.innerHTML = e.desc;
        projectDesc.classList.add("project__desc");

        e.language.forEach(e => {
            const projectLanguageImg = d.createElement("img");
            projectLanguageImg.setAttribute("src", e);
            projectLanguageContainer.appendChild(projectLanguageImg);
        })
        
        projectLanguageContainer.classList.add("project__language");
        projectDate.innerHTML = e.date;
        projectDate.classList.add("project__date");

        projectBtnSee.innerHTML = "Ver Proyecto";
        projectBtnSee.setAttribute("href", e.code);
        projectBtnSee.setAttribute("target", "_blank");

        projectBtnVisit.setAttribute("href", e.visit);
        projectBtnVisit.setAttribute("target", "_blank");
        projectBtnVisit.innerHTML = "Visitar Página";
        projectBtn.classList.add("project__btn")
        projectBtn.appendChild(projectBtnSee);
        projectBtn.appendChild(projectBtnVisit);

        projectContainer.appendChild(projectImgContainer);
        projectContainer.appendChild(projectTitle);
        projectContainer.appendChild(projectDesc);
        projectContainer.appendChild(projectLanguageContainer);
        projectContainer.appendChild(projectDate);
        projectContainer.appendChild(projectBtn);
        projectContainer.classList.add("project")

        $fragment.appendChild(projectContainer)
    })

    $project.appendChild($fragment);
}