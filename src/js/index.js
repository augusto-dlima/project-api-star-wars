import { themeToggler, btnMenuMobile, content, btnAddMovie } from "./variables.js";
import { togglerTheme, getThemeLocalStorage } from "./toggler-theme.js";
import { toggleMenuMobile, menuMobileOff} from "./toggler-menu-mobile.js";
import { getDataTmdb } from "./service.js";
import { setMoviesHome } from "./screen.js";


btnAddMovie[0].addEventListener('click',()=>{

    setMoviesHome();

})

getDataTmdb();

getThemeLocalStorage();

themeToggler.addEventListener('click', () => {togglerTheme();});



