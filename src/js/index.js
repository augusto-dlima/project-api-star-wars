import { themeToggler, btnMenuMobile, content, btnAddMovie } from "./variables.js";
import { togglerTheme, getThemeLocalStorage } from "./toggler-theme.js";
import { toggleMenuMobile, menuMobileOff} from "./toggler-menu-mobile.js";
import { getDataTmdb } from "./service.js";
import { addMoviesHome } from "./screen.js";

console.log(btnAddMovie);


btnAddMovie[0].addEventListener('click',()=>{


    addMoviesHome();

})

getDataTmdb();

getThemeLocalStorage();

themeToggler.addEventListener('click', () => {togglerTheme();});



