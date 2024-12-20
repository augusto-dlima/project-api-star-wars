import { themeToggler, btnAddMovie, btnHome,btnCast,btnReturnMovieDetails,btnLogo } from "./variables.js";
import { togglerTheme, getThemeLocalStorage } from "./toggler-theme.js";
import { getDataTmdb } from "./service.js";
import { setMoviesHome,returnHome,showCastMovie, showMovieDetails, addAllCast,castReturnHome } from "./screen.js";

const btnAllCast = document.getElementById('btn-all-cast');
const btnReturnHome = document.getElementById('btn-return-home');

btnHome[0].addEventListener('click',()=>{returnHome();});
btnCast[1].addEventListener('click',()=>{showCastMovie();});
btnReturnMovieDetails.addEventListener('click',()=>{showMovieDetails();});
btnLogo.addEventListener('click',()=>{returnHome();});
btnAddMovie[0].addEventListener('click',()=>{setMoviesHome();});
btnAllCast.addEventListener('click',()=>{addAllCast()});
btnReturnHome.addEventListener('click',()=>castReturnHome());

getDataTmdb();

getThemeLocalStorage();

themeToggler.addEventListener('click', () => {togglerTheme();});



