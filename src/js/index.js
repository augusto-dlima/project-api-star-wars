import { themeToggler, btnMenuMobile, menuMobile, theme } from "./variables.js";
import { togglerTheme, toggleMenuMobile } from "./toggler.js";



themeToggler.addEventListener('click', () => {
    togglerTheme();
})

btnMenuMobile.addEventListener('click', () => { toggleMenuMobile()

    // menuMobile.style.backgroundColor = '#ffffff';

    // menuMobile.classList.toggle('background-menu-mobile')

})

