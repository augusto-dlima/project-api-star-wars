import { content, btnAddMovie } from "./variables.js";

const sectionMovies = document.querySelector('.movies');
const movieImage = document.getElementsByClassName('image-film');
const moviesTitle = document.getElementsByClassName('title-film');
const characterImage = document.getElementsByClassName('image-character');
const characterTitle = document.getElementsByClassName('title-character');
const sectionHome = document.getElementsByClassName('home');
const sectionLoading = document.getElementsByClassName('loading');
const setMovies = document.getElementsByClassName('container-content');


const setMovieList = (movieList) => {


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

function setMoviesHome() {
    
    
    const movieList = JSON.parse(localStorage.getItem("movieList"));
    let contentMovies = setMovies[0];
    let index = movieImage.length;

    console.log(btnAddMovie[0].classList.contains('btn-rotae'));

    if (btnAddMovie[0].classList.contains('btn-rotate')) {


        sectionHome.home.style.display = 'none';
        sectionLoading[0].style.display = 'flex';
        content.style.height = '100vh'

        contentMovies.innerHTML = "";

        for (index = 0; index < 3; index++) {
    
    
            contentMovies.innerHTML = contentMovies.innerHTML + `  <div class="movie">
    
            <div class="image">
    
    
                <img class="image-film" src="https://placehold.co/150x200" alt="">
    
            </div>
    
            <p class="title-film">titulo 3</p>
    
        </div> `
    
    
        }

        btnAddMovie[0].classList.toggle('btn-rotate')
    
        setMovieList(movieList);



    }

    else {

        sectionHome.home.style.display = 'none';
        sectionLoading[0].style.display = 'flex';
        content.style.height = '100vh'
    
    
        for (index; index < movieList.length; index++) {
    
    
            contentMovies.innerHTML = contentMovies.innerHTML + `  <div class="movie">
    
            <div class="image">
    
    
                <img class="image-film" src="https://placehold.co/150x200" alt="">
    
            </div>
    
            <p class="title-film">titulo 3</p>
    
        </div> `
    
    
        }
    
        btnAddMovie[0].classList.toggle('btn-rotate')
    
        setMovieList(movieList);


    }




}


export { setMovieList, setMoviesHome }