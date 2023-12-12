const d = document;

export default function aboutMe(id) {
    const $aboutMe = d.querySelector(id),
        $fragment = d.createDocumentFragment(),
        aboutMeContent = [
            {
                text: "En este sitio podrás encontrar los diversos proyectos que realizo en mi camino de desarrollador, además de conseguir información acerca de mi y distintos contenidos que voy añadiendo durante el tiempo.",
                class: "aboutMe__content_title",
            },
            {
                text: `Titulado de Ingeniería en Informática. Capacitado para enfrentar proyectos en el ámbito de la gestión, diseño y desarrollo de software, como también la adaptación de nuevas tecnologías de información y comunicaciones, calidad, seguridad y análisis de datos.</br> Actualmente aprendiendo programación FrontEnd con espectativas de transformarme en FullStack.`,
                class: "aboutMe__content_text",
            }
        ];

    aboutMeContent.forEach(e => {
        const aboutMeText = d.createElement("p");

        aboutMeText.classList.add(e.class);
        aboutMeText.innerHTML = e.text;
        $fragment.appendChild(aboutMeText)
    });

    $aboutMe.appendChild($fragment)
}