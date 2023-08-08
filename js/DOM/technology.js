const d = document, 
    $fragment = d.createDocumentFragment(),
    technologyMoreExpContent = [
        {
            img: "img/technology/html.png",
            alt: "HTML-logo",
            title: "HTML",
        },
        {
            img: "img/technology/css.png",
            alt: "CSS-logo",
            title: "CSS"
        },
        {
            img: "img/technology/bootstrap.png",
            alt: "Bootstrap-logo",
            title: "Bootstrap"
        },
        {
            img: "img/technology/sass.png",
            alt: "Sass-logo",
            title: "Sass"
        },
        {
            img: "img/technology/git.png",
            alt: "GIT-logo",
            title: "Git"
        },
        
    ],
    technologyLessExpContent = [
        {
            img: "img/technology/java.png",
            alt: "Java-logo",
            title: "Java",
        },
        {
            img: "img/technology/php.png",
            alt: "PHP-logo",
            title: "PHP",
        },
        {
            img: "img/technology/wordpress.png",
            alt: "WordPress-logo",
            title: "WordPress",
        }
        
    ],
    technologyLearningExpContent = [
        {
            img: "img/technology/javascript.png",
            alt: "JavaScript-logo",
            title: "JavaScript",
        },
        {
            img: "img/technology/react.png",
            alt: "React-logo",
            title: "React",
        }
        
    ];

export function moreExp (id) {
    const $technologyExp = d.querySelector(id);
    contentTechnology(technologyMoreExpContent)
    $technologyExp.appendChild($fragment);
}

export function lessExp(id) {
    const $technologyExp = d.querySelector(id);
    contentTechnology(technologyLessExpContent)
    $technologyExp.appendChild($fragment);
}

export function learningExp(id) {
    const $technologyExp = d.querySelector(id);
    contentTechnology(technologyLearningExpContent)
    $technologyExp.appendChild($fragment);
}

const contentTechnology = function (technologyContent) {
    technologyContent.forEach(e => {
        const technologyExpLanguage = d.createElement("div"),
            technologyHtmlImgContainer = d.createElement("div"),
            technologyHtmlImg = d.createElement("img"),
            technologyLanguage = d.createElement("p");

        technologyHtmlImgContainer.classList.add("technology__html_img");
        technologyExpLanguage.appendChild(technologyHtmlImgContainer);

        technologyLanguage.classList.add("technology__language");
        technologyLanguage.innerHTML = e.title;
        technologyExpLanguage.appendChild(technologyLanguage);

        technologyHtmlImg.setAttribute("src", e.img)
        technologyHtmlImg.setAttribute("alt", e.alt)
        technologyHtmlImgContainer.appendChild(technologyHtmlImg);

        technologyExpLanguage.classList.add("technology__exp_language");
        $fragment.appendChild(technologyExpLanguage)
    });
}