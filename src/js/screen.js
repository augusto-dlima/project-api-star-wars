const sectionMovies = document.querySelector('.movies');
const movieImage = document.getElementsByClassName('image-film');
const moviesTitle = document.getElementsByClassName('title-film');
const characterImage = document.getElementsByClassName('image-character');
const characterTitle = document.getElementsByClassName('title-character');
const movieImageSimilar = document.getElementsByClassName('image-film-similar');
const moviesTitleSimilar = document.getElementsByClassName('title-film-similar');


console.log(movieImageSimilar);


const setMovieList = (movieList) => {


    const titleSimilar = movieList[5].similarMovies.results;


    console.log(titleSimilar);

    for (let index = 0; index < movieImage.length; index++) {

        movieImage[index].attributes[1].nodeValue = movieList[index].image;
        moviesTitle[index].innerHTML = movieList[index].title

    }

    for (let index = 0; index < characterImage.length; index++) {

        const urlImageCharacter = `https://image.tmdb.org/t/p/original${movieList[index].castList[index].profile_path}`;

        characterImage[index].attributes[1].nodeValue = urlImageCharacter;
        characterTitle[index].innerText = `${movieList[index].castList[index].original_name} (${movieList[index].castList[index].character})`

    }

    for (let index = 0; index < movieImageSimilar.length; index++) {


      


        let posterPath = titleSimilar[index].poster_path;


            const urlImage = `https://image.tmdb.org/t/p/original${posterPath}`;

            movieImageSimilar[index].attributes[1].nodeValue = urlImage;
            moviesTitleSimilar[index].innerHTML = titleSimilar[index].title
  


    }



}

export { setMovieList }