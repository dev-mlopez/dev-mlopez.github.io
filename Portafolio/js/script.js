import aboutMe from "./DOM/about_me.js";
import changeSubtitle from "./DOM/home.js";
import { menu } from "./DOM/menu.js";
import { project } from "./DOM/project.js";
import { menuHeader, menuResponsive, rrss } from "./DOM/rrss.js";
import { lessExp, moreExp, learningExp } from "./DOM/technology.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    changeSubtitle("home__title_span");

    aboutMe(".aboutMe__container");

    moreExp(".technology__moreExp_container");
    lessExp(".technology__lessExp_container");
    learningExp(".technology__learningExp_container");

    project(".projects__container");

    rrss(".rrss");
    menuHeader(".header__nav");
    menuResponsive(".menu");

    menu(".header__menu_btn", ".menu", ".main", ".menu__nav_ul_li a");
})