import { content, btnAddMovie } from "./variables.js";
import { selectFilms } from "./service.js";

const sectionMovies = document.querySelector('.movies');
const movieImage = document.getElementsByClassName('image-film');
const moviesTitle = document.getElementsByClassName('title-film');
const characterImage = document.getElementsByClassName('image-character');
const characterTitle = document.getElementsByClassName('title-character');
const sectionHome = document.getElementsByClassName('home');
const sectionLoading = document.getElementsByClassName('loading');
const setMovies = document.getElementsByClassName('container-content');

const movieList = JSON.parse(localStorage.getItem("movieList"));


const setMovieList = (movieList) => {

    selectFilms();


    for (let index = 0; index < movieImage.length; index++) {

        movieImage[index].attributes[1].nodeValue = movieList[index].image;
        moviesTitle[index].innerHTML = movieList[index].title

    }

    for (let index = 0; index < characterImage.length; index++) {

        const urlImageCharacter = `https://image.tmdb.org/t/p/original${movieList[0].castList[index].profile_path}`;

        characterImage[index].attributes[1].nodeValue = urlImageCharacter;
        characterTitle[index].innerText = `${movieList[0].castList[index].original_name} (${movieList[0].castList[index].character})`

    }

    setTimeout(() => {

        sectionHome.home.style.display = 'block';
        sectionLoading[0].style.display = 'none';
        content.style.height = '100%'

    }, 3000)



}

function setMovieDetails(titleMovie) {


    const movieList = JSON.parse(localStorage.getItem("movieList"));

    
    
    const sectionMovieDetails = document.getElementsByClassName('movie-details');
    const title = document.getElementById('movie-details-title-film');
    const backgroundMovieDetails = document.getElementById('movie-details-background-movie');
    const imageMovie = document.getElementById('movie-details-image');
    const overView = document.getElementById('movie-details-over-view');
    const genres = document.getElementById('movie-details-genres');
    const voteAvarage = document.getElementById('movie-details-average');
    
    
    const movie = movieList.filter((movie) => movie.title === titleMovie);
    
    let genresMovie = "";
    let average = Math.round(movie[0].voteAvarage);
    
    console.log(average)
    
    movie[0].genre.forEach((element, index) => {
        
        
        if (index === movie[0].genre.length - 1) {
            
            genresMovie += `${element.name}.`;
            
        }
        
        else {
            
            genresMovie += `${element.name}, `;
            
        }
        
    
    });
    
    console.log(movie);
    
    let dataFormatada = new Date(movie[0].releaseData).getFullYear();

    title.innerHTML = `${titleMovie} - ${dataFormatada} `
    imageMovie.src = `${movie[0].image} `
    overView.innerHTML = `${movie[0].overView} `
    backgroundMovieDetails.style.cssText = `
    background-image: url(https://image.tmdb.org/t/p/original${movie[0].backdropPath})`
    genres.innerText = `${genresMovie}`;
    voteAvarage.innerText = `${average} / 10`

    setTimeout(() => {

        sectionMovieDetails[0].style.display = 'block';
        sectionLoading[0].style.display = 'none';
        content.style.height = '100%'

    }, 3000)


}

function movieDetails(titleMovie) {

    sectionHome.home.style.display = 'none';
    sectionLoading[0].style.display = 'flex';
    content.style.height = '100vh'

    setMovieDetails(titleMovie);


}

function returnHome() {

    const sectionMovieDetails = document.getElementsByClassName('movie-details');

    sectionMovieDetails[0].style.display = 'none';
    content.style.height = '100vh'
    sectionLoading[0].style.display = 'flex';

    setTimeout(() => {

        sectionLoading[0].style.display = 'none';
        content.style.height = '100%'
        sectionHome.home.style.display = 'block';

    }, 3000)


}

function showCastMovie() {

    const elementsMovie = document.getElementById('elements-movie');
    const elementLoading = document.getElementById('loading-movie');
    const elementsCast = document.getElementById('elements-cast');

    console.log(elementsMovie)
    
    elementsMovie.style.display='none';
    elementLoading.style.display='flex';

    setTimeout(() => {

        elementLoading.style.display='none';
        elementsCast.style.display='flex';

    }, 2000)


}

function showMovieDetails() {

    const elementsMovie = document.getElementById('elements-movie');
    const elementLoading = document.getElementById('loading-movie');
    const elementsCast = document.getElementById('elements-cast');

    console.log(elementsMovie)
    
    elementsCast.style.display='none';
    elementLoading.style.display='flex';

    setTimeout(() => {

        elementLoading.style.display='none';
        elementsMovie.style.display='flex';

    }, 2000)


}

function setMoviesHome() {

    const movieList = JSON.parse(localStorage.getItem("movieList"));


    let contentMovies = setMovies[0];
    let index = movieImage.length;



    if (btnAddMovie[0].classList.contains('btn-rotate')) {


        sectionHome.home.style.display = 'none';
        sectionLoading[0].style.display = 'flex';
        content.style.height = '100vh'

        contentMovies.innerHTML = "";

        for (index = 0; index < 3; index++) {


            contentMovies.innerHTML = contentMovies.innerHTML + `  <div div class= "movie" >
    
            <div class="image">
    
    
                <img class="image-film" src="https://placehold.co/150x200" alt="">
    
            </div>
    
            <p class="title-film">titulo 3</p>
    
        </div > `


        }

        btnAddMovie[0].classList.toggle('btn-rotate')

        setMovieList(movieList);



    }

    else {

        sectionHome.home.style.display = 'none';
        sectionLoading[0].style.display = 'flex';
        content.style.height = '100vh'


        for (index; index < movieList.length; index++) {


            contentMovies.innerHTML = contentMovies.innerHTML + `  <div div class= "movie" >
    
            <div class="image">
    
    
                <img class="image-film" src="https://placehold.co/150x200" alt="">
    
            </div>
    
            <p class="title-film">titulo 3</p>
    
        </div > `


        }

        btnAddMovie[0].classList.toggle('btn-rotate')

        setMovieList(movieList);


    }




}


export { setMovieList, setMoviesHome, movieDetails, returnHome, showCastMovie, showMovieDetails }