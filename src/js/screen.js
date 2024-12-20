import { btnAddMovie, sectionMovieDetails, movieImage, moviesTitle, characterImage, characterTitle, sectionHome, sectionLoading, setMovies } from "./variables.js";

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
        elementsMovie.style.display = 'flex';

    }, 2000)


}

function returnHome() {

    const elementsCast = document.getElementById('elements-cast');
    const sectionAllCast = document.getElementById('cast-details');

    elementsCast.style.display = 'none';
    sectionAllCast.style.display = 'none';
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







function addAllCast() {

    setMovieList();
    castSelectFilm();

    const sectionAllCast = document.getElementById('cast-details');


    sectionHome.home.style.display = 'none';
    sectionLoading[0].style.display = 'flex';

    setTimeout(() => {


        sectionLoading[0].style.display = 'none';
        sectionAllCast.style.display = 'flex';

    }, 2000)

}

function setMovieList() {

    const castMovieList = document.getElementById('cast-details-movie-list');

    let itemMovie = "";


    movieList.forEach((movie) => {

        itemMovie += ` <li class="item-movie style-item">${movie.title}</li>`

    })

    castMovieList.innerHTML = itemMovie;

}

function castReturnHome() {

    const sectionAllCast = document.getElementById('cast-details');

    sectionAllCast.style.display = 'none';
    sectionLoading[0].style.display = 'flex';

    setTimeout(() => {


        sectionLoading[0].style.display = 'none';
        sectionHome.home.style.display = 'block';

    }, 2000)



}

function selectFilms() {

    const movie = document.querySelectorAll('.movie');


    movie.forEach((Element) => {
        Element.addEventListener('click', () => {
            const titleFilm = Element.children[1].innerText;

            movieDetails(titleFilm);


        })
    })

}

function castSelectFilm() {

    resetCastDetails();

    const castMovieList = document.querySelectorAll('.movie-list');

    castMovieList.forEach(element => {
        element.addEventListener('click', (event) => { setCastMovie(event.target.innerHTML) })

    })

}


function setCastMovie(titleMovie) {

    const castMovieList = document.querySelectorAll('.item-movie');

    castMovieList.forEach(movie => {

        movie.innerText === titleMovie ? movie.classList.add("item-select") : movie.classList.remove("item-select")

    })


    castMovieList.forEach((movie) => {

        movie.classList.contains('item-select') ? setCast(movie.innerHTML) : ""

    })


}

function setCast(titleMovie) {

    const castSection = document.getElementById('cast');
    const movie = movieList.filter(movie => movie.title === titleMovie);
    let characters = "";

    console.log(`O filme escolhido foi ${movie[0].title}`);
    console.log(movie);

    movie[0].castList.map((character) => {


        const url = `https://image.tmdb.org/t/p/original${character.profile_path}`;

        console.log(`https://image.tmdb.org/t/p/original${character.profile_path}`)

        if (url != 'https://image.tmdb.org/t/p/originalnull') {

            characters += `<div class="character">
    
                        <div class="image">
                            <img class="cast-image" src="https://image.tmdb.org/t/p/original${character.profile_path}" alt="Sem Imagem">
                        </div>
                        <p class="cast-name"> ${character.name} (${character.character}) </p>
    
                    </div>`


        }


    })

    castSection.innerHTML = characters;



}

function resetCastDetails() {

    const castMovieList = document.querySelectorAll('.item-movie');
    const castSection = document.getElementById('cast');

    castSection.innerHTML = `<section id="loading-movie" class="loading cast-details-loading">

                    <i class="fab fa-old-republic icon"></i>

                </section>`

    castMovieList.forEach(movie => {
        movie.classList.remove("item-select")
    })


}


export { setHome, setMoviesHome, movieDetails, returnHome, showCastMovie, showMovieDetails, addAllCast, castReturnHome }