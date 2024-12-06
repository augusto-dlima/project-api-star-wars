const sectionMovies = document.querySelector('.movies');
const movieImage = document.getElementsByClassName('image-film');
const moviesTitle = document.getElementsByClassName('title-film');
const characterImage = document.getElementsByClassName('image-character');
const characterTitle = document.getElementsByClassName('title-character');
const movieImageSimilar = document.getElementsByClassName('image-film-similar');
const moviesTitleSimilar = document.getElementsByClassName('title-film-similar');


console.log(movieImageSimilar);


const setMovieList = (movieList) => {


    for (let index = 0; index < movieImage.length; index++) {

        movieImage[index].attributes[1].nodeValue = movieList[index].image;
        moviesTitle[index].innerHTML = movieList[index].title

    }

    for (let index = 0; index < characterImage.length; index++) {

        const urlImageCharacter = `https://image.tmdb.org/t/p/original${movieList[index].castList[index].profile_path}`;

        characterImage[index].attributes[1].nodeValue = urlImageCharacter;
        characterTitle[index].innerText = `${movieList[index].castList[index].original_name} (${movieList[index].castList[index].character})`

    }


}

export { setMovieList }