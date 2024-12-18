import { btnAddMovie, sectionMovieDetails, movieImage, moviesTitle, characterImage, characterTitle, sectionHome, sectionLoading, setMovies } from "./variables.js";
import { selectFilms } from "./service.js";

const movieList = JSON.parse(localStorage.getItem("movieList"));


const setHome = (movieList) => {

    const content = document.querySelector('.container');

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

    }, 2000)



}

function movieDetails(titleMovie) {

    
    sectionHome.home.style.display = 'none';
    sectionLoading[0].style.display = 'flex';
    
    const elementsMovie = document.getElementById('elements-movie');
    const title = document.getElementById('movie-details-title-film');
    const backgroundMovieDetails = document.getElementById('movie-details-background-movie');
    const imageMovie = document.getElementById('movie-details-image');
    const overView = document.getElementById('movie-details-over-view');
    const genres = document.getElementById('movie-details-genres');
    const voteAvarage = document.getElementById('movie-details-average');


    const movie = movieList.filter((movie) => movie.title === titleMovie);

    let genresMovie = "";
    let average = Math.round(movie[0].voteAvarage);

    movie[0].genre.forEach((element, index) => {


        if (index === movie[0].genre.length - 1) {

            genresMovie += `${element.name}.`;

        }

        else {

            genresMovie += `${element.name}, `;

        }


    });

    let dataFormatada = new Date(movie[0].releaseData).getFullYear();

    title.innerHTML = `${titleMovie} - ${dataFormatada} `
    imageMovie.src = `${movie[0].image} `
    overView.innerHTML = `${movie[0].overView} `
    backgroundMovieDetails.style.cssText = `
    background-image:url(https://image.tmdb.org/t/p/original${movie[0].backdropPath})`
    genres.innerText = `${genresMovie}`;
    voteAvarage.innerText = `${average} / 10`


    setTimeout(() => {

        sectionMovieDetails[0].style.display = 'block';
        sectionLoading[0].style.display = 'none';
        elementsMovie.style.display='flex';

    }, 2000)


}

function returnHome() {

    const elementsCast = document.getElementById('elements-cast');

    elementsCast.style.display = 'none';
    sectionMovieDetails[0].style.display = 'none';
    sectionLoading[0].style.display = 'flex';

    setTimeout(() => {

        sectionLoading[0].style.display = 'none';
        sectionHome.home.style.display = 'block';

    }, 2000)


}

function showCastMovie() {

    const content = document.querySelector('.container');
    const elementsMovie = document.getElementById('elements-movie');
    const elementLoading = document.getElementById('loading-movie');
    const elementsCast = document.getElementById('elements-cast');
    const imageCast = document.getElementsByClassName('image-cast-movie-details');
    const nameCast = document.getElementsByClassName('name-character-movie-details');
    const sectionMovieDetails = document.getElementById('details-elements');

    console.log(sectionMovieDetails);


    const movieImage = document.getElementById('movie-details-image');

    const movie = movieList.filter((movie) => movie.image === movieImage.src);

    console.log(movie);


    for (let index = 0; index < imageCast.length; index++) {

        const url = `https://image.tmdb.org/t/p/original${movie[0].castList[index].profile_path}`

        imageCast[index].attributes[1].nodeValue = url;

        nameCast[index].innerText = `${movie[0].castList[index].original_name} (${movie[0].castList[index].character})`

    }

    elementsMovie.style.display = 'none';
    elementLoading.style.display = 'flex';

    setTimeout(() => {

        elementLoading.style.display = 'none';
        elementsCast.style.display = 'flex';

    }, 2000)


}

function showMovieDetails() {

    const elementsMovie = document.getElementById('elements-movie');
    const elementLoading = document.getElementById('loading-movie');
    const elementsCast = document.getElementById('elements-cast');
    const sectionMovieDetails = document.getElementById('section-details');

    elementsCast.style.display = 'none';
    elementLoading.style.display = 'flex';

    setTimeout(() => {

        elementLoading.style.display = 'none';
        sectionMovieDetails.style.transition = '1s ease-in-out';
        elementsMovie.style.display = 'flex';

    }, 2000)


}

function setMoviesHome() {

    const content = document.querySelector('.container');


    let contentMovies = setMovies[0];
    let index = movieImage.length;



    if (btnAddMovie[0].classList.contains('btn-rotate')) {


        sectionHome.home.style.display = 'none';
        sectionLoading[0].style.display = 'flex';
        // content.style.height = '100%'

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

        setHome(movieList);



    }

    else {

        sectionHome.home.style.display = 'none';
        sectionLoading[0].style.display = 'flex';
        // content.style.height = '100vh'


        for (index; index < movieList.length; index++) {


            contentMovies.innerHTML = contentMovies.innerHTML + `  <div div class= "movie" >
    
            <div class="image">
    
    
                <img class="image-film" src="https://placehold.co/150x200" alt="">
    
            </div>
    
            <p class="title-film">titulo 3</p>
    
        </div > `


        }

        btnAddMovie[0].classList.toggle('btn-rotate')

        setHome(movieList);


    }


}


export { setHome, setMoviesHome, movieDetails, returnHome, showCastMovie, showMovieDetails }