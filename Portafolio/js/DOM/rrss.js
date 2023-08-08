const d = document,
    $fragment = d.createDocumentFragment(),
    $menuNav = d.createElement("nav"),
    rrssContent = [
        {
            id: "rrss__linkedin",
            title: "Linkedin",
            img: "img/rrss/linkedin.png",
            href: "https://www.linkedin.com/in/mauriciolopezl/",
        },
        {
            id: "rrss__github",
            title: "GitHub",
            img: "img/rrss/github.png",
            href: "https://github.com/dev-mlopez",

        },
        {
            id: "rrss__instagram",
            title: "Instagram",
            img: "img/rrss/instagram.png",
            href: "https://www.instagram.com/deseo.inciert0/",
        },
        {
            id: "rrss__email",
            title: "Correo",
            img: "img/rrss/email.png",
            href: "mailto:maurihlopez@gmail.com",
        },
        {
            id: "rrss__cv",
            title: "Curriculum",
            img: "img/rrss/cv.png",
            href: "doc/CVMauricioLopez.pdf",
        },
    ],
    optionContent = [
        {
            title: "Inicio",
            href: "#home",
            icon: "home",
        }, 
        {
            title: "Sobre Mí", 
            href: "#aboutMe",
            icon: "badge",
        },
        {
            title: "Tecnologías",
            href: "#technology",
            icon: "code",
        },
        { 
            title: "Proyectos",
            href: "#projects",
            icon: "description",
        },
    ];

export function rrss(id) {
    const $rrss = d.querySelector(id);
    
    const rrssUl = d.createElement("ul");
    rrssContent.forEach(e => {
        const rrssLi = d.createElement("li"),
            rrssContainer = d.createElement("a"),
            rrssImg = d.createElement("img"),
            rrssText = d.createElement("p");

        rrssImg.setAttribute("src", e.img);

        rrssText.innerHTML = e.title;
        
        rrssContainer.setAttribute("target", "_blank")
        rrssContainer.setAttribute("id", e.id);
        rrssContainer.setAttribute("href", e.href);
        rrssContainer.appendChild(rrssText);
        rrssContainer.appendChild(rrssImg);


        rrssLi.classList.add("rrss__li");
        rrssLi.appendChild(rrssContainer);

        rrssUl.appendChild(rrssLi);
        rrssUl.classList.add("rrss__ul");
        $fragment.appendChild(rrssUl);
    })
    $rrss.appendChild($fragment);
}

export function menuHeader(id) {
    const $menuHeader = d.querySelector(id);
    menuHeaderNav();
    $menuHeader.appendChild($fragment);
}

export function menuResponsive(id) {
    const $menuResponsive = d.querySelector(id);
    menuResponsiveNav();
    menuResponsiveRRSS();
    $menuResponsive.appendChild($fragment);
}

const menuHeaderNav = () => {
    const $menuUl = d.createElement("ul");
    optionContent.forEach(e => {
        const $menuLi = d.createElement("li"),
            $menuLink = d.createElement("a");


        $menuLink.innerHTML = e.title;
        $menuLink.setAttribute("href", e.href);

        $menuLi.appendChild($menuLink);
        $menuLi.classList.add("header__nav_ul_section");

        $menuUl.appendChild($menuLi);
        $menuUl.classList.add("header__nav_ul");
        
        $fragment.appendChild($menuUl);
    })
}

const menuResponsiveNav = () => {
    const $menuNavUl = d.createElement("ul");
    optionContent.forEach(e => {
        const $menuNavLi = d.createElement("li"),
            $menuLink = d.createElement("a"),
            $menuIcon = d.createElement("span"),
            $menuText = d.createElement("span");

        $menuText.innerHTML = e.title;
        $menuIcon.innerHTML = e.icon;

        $menuLink.setAttribute("href", e.href);
        $menuIcon.classList.add("material-symbols-outlined")
        $menuLink.appendChild($menuIcon);
        $menuLink.appendChild($menuText);

        $menuNavLi.classList.add("menu__nav_ul_li");
        $menuNavLi.appendChild($menuLink);

        $menuNavUl.classList.add("menu__nav_ul")
        $menuNavUl.appendChild($menuNavLi);

        $menuNav.classList.add("menu__nav");
        $menuNav.appendChild($menuNavUl);

        $fragment.appendChild($menuNav);
    })
}

const menuResponsiveRRSS = () => {
    const $menuSection = d.createElement("section");
    
    const rrssUl = d.createElement("ul");
    rrssContent.forEach(e => {
        const rrssLi = d.createElement("li"),
            rrssContainer = d.createElement("a"),
            rrssImg = d.createElement("img");

        rrssImg.setAttribute("src", e.img);
        
        rrssContainer.setAttribute("target", "_blank")
        rrssContainer.setAttribute("href", e.href);
        rrssContainer.appendChild(rrssImg);


        rrssLi.classList.add("menu__rrss_ul_li");
        rrssLi.appendChild(rrssContainer);

        rrssUl.appendChild(rrssLi);
        rrssUl.classList.add("menu__rrss_ul");

        $menuSection.classList.add("menu__rrss");
        $menuSection.appendChild(rrssUl);

        $fragment.appendChild($menuSection);
    })
}