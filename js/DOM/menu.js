const d = document;

export function menu(menuBtn, menu, main, menuLink) {
    d.addEventListener("click", e => {
        if(e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)){
            d.querySelector(menu).classList.toggle("is-active");
        }

        if(e.target.matches(main) || e.target.matches(`${main} *`) || e.target.matches(menuLink) || e.target.matches(`${menuLink} *`)) {
            d.querySelector(menu).classList.remove("is-active");
        }
    })
}