const themeToggler = document.querySelector('.toggler-theme');
const theme = document.querySelector('.body');
const logoImage = document.querySelector('.image-logo');
const LogoDefault = './src/images/logo-default.png';
const logoYoda = './src/images/logo-yoda.png';
const LogoDarth = './src/images/darth-logo.png';
const menuMobileBackgroundDefault = '../images/background-default.png';
const btnMenuMobile = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.menu-mobile');
const itemsMenuMobile = document.querySelector('.navegation');
const content = document.querySelector('.container');
const btnAddMovie = document.getElementsByClassName('btn-movie');
const btnHome = document.getElementsByClassName('icon-home');
const btnLogo = document.getElementById('header-logo');
const btnCast = document.getElementsByClassName('icon-home')
const btnReturnMovieDetails = document.getElementsByClassName('btn-movie-details-back')[0];

const sectionMovies = document.querySelector('.movies');
const movieImage = document.getElementsByClassName('image-film');
const moviesTitle = document.getElementsByClassName('title-film');
const characterImage = document.getElementsByClassName('image-character');
const characterTitle = document.getElementsByClassName('title-character');
const sectionHome = document.getElementsByClassName('home');
const sectionLoading = document.getElementsByClassName('loading');
const setMovies = document.getElementsByClassName('container-content');
const sectionMovieDetails = document.getElementsByClassName('movie-details');




export {themeToggler,theme, logoImage,LogoDefault,logoYoda,LogoDarth,btnMenuMobile,menuMobile,menuMobileBackgroundDefault,itemsMenuMobile, content, btnAddMovie, btnHome, btnLogo, btnCast, btnReturnMovieDetails, sectionMovies,movieImage,moviesTitle,characterImage,characterTitle,sectionHome,sectionLoading,setMovies, sectionMovieDetails}