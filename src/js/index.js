import { themeToggler, content, btnAddMovie, btnHome,btnCast,btnReturnMovieDetails,btnLogo } from "./variables.js";
import { togglerTheme, getThemeLocalStorage } from "./toggler-theme.js";
import { getDataTmdb } from "./service.js";
import { setMoviesHome,returnHome,showCastMovie, showMovieDetails } from "./screen.js";


console.log(btnReturnMovieDetails);

btnHome[0].addEventListener('click',()=>{returnHome();});
btnCast[1].addEventListener('click',()=>{showCastMovie();});
btnReturnMovieDetails.addEventListener('click',()=>{showMovieDetails();});
btnLogo.addEventListener('click',()=>{returnHome();});
btnAddMovie[0].addEventListener('click',()=>{setMoviesHome();})

getDataTmdb();

getThemeLocalStorage();

themeToggler.addEventListener('click', () => {togglerTheme();});



