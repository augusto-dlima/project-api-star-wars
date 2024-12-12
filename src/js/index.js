import { themeToggler, btnMenuMobile, content, btnAddMovie } from "./variables.js";
import { togglerTheme, getThemeLocalStorage } from "./toggler-theme.js";
import { toggleMenuMobile, menuMobileOff} from "./toggler-menu-mobile.js";
import { getDataTmdb } from "./service.js";
import { setMoviesHome,returnHome,showCastMovie, showMovieDetails } from "./screen.js";

const btnHome = document.getElementsByClassName('icon-home');
const btnLogo = document.getElementById('header-logo');
const btnCast = document.getElementsByClassName('icon-home')
const btnReturnMovieDetails = document.getElementsByClassName('btn-movie-details-back')[0];


console.log(btnReturnMovieDetails);

btnHome[0].addEventListener('click',()=>{returnHome();})
btnCast[1].addEventListener('click',()=>{showCastMovie()})
btnReturnMovieDetails.addEventListener('click',()=>{showMovieDetails()})
btnLogo.addEventListener('click',()=>{returnHome();});


btnAddMovie[0].addEventListener('click',()=>{

    setMoviesHome();

})

getDataTmdb();

getThemeLocalStorage();

themeToggler.addEventListener('click', () => {togglerTheme();});



