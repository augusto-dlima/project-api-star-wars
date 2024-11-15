import { themeToggler, btnMenuMobile, content } from "./variables.js";
import { togglerTheme, getThemeLocalStorage } from "./toggler-theme.js";
import { toggleMenuMobile, menuMobileOff} from "./toggler-menu-mobile.js";


getThemeLocalStorage();

themeToggler.addEventListener('click', () => {togglerTheme();});

btnMenuMobile.addEventListener('click', () => { toggleMenuMobile();});

content.addEventListener('click',()=>{menuMobileOff()});

