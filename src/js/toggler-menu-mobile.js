import { themeToggler, menuMobile, itemsMenuMobile } from "./variables.js";
let displayMobileMenu = false;


function toggleMenuMobile() {


    menuMobile.classList.toggle('background-menu-mobile');

    if (displayMobileMenu === false) {

        itemsMenuMobile.style.cssText = "display:flex;"
        themeToggler.style.cssText = "display:flex;"

        displayMobileMenu = true;

    }

    else {

        itemsMenuMobile.style.display = 'none';
        themeToggler.style.display = 'none';
        displayMobileMenu = false;


    }


}

function menuMobileOff() {


    if(itemsMenuMobile.style.display==='flex'){

        menuMobile.classList.remove('background-menu-mobile');
        itemsMenuMobile.style.display = 'none';
        themeToggler.style.display = 'none';
        displayMobileMenu = false;

    }



}

export { toggleMenuMobile, menuMobileOff }