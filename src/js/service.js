import { newMovie } from "./objects.js";
import { setMovieList, movieDetails } from "./screen.js";

let movies = [];


const urlMovies = 'https://api.themoviedb.org/3/collection/10?language=pt-BR';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWVhYzE0NTkzNTU2ODViMzkxNjBhY2QyZjM1MzBlYSIsIm5iZiI6MTczMjE0NTQ1OS44MzE5ODY0LCJzdWIiOiI2NzNlNmZlN2Y0MDI4MmViY2I5Yjc5YjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._FXLuAw7a55sAtR0TQVGII1II_ATyiRE5DPDlyTN9CI'
  }
};


async function getDataTmdb() {

  const movieList = JSON.parse(localStorage.getItem("movieList"));

  if (!movieList) {

    const response = await fetch(urlMovies, options);
    const json = await response.json();


    json.parts.map(async (movieElement) => {

      console.log(movieElement)

      const cast = await getCastTmdb(movieElement.id);
      const genres = await detailsMovie(movieElement.id);

      const movie = newMovie(movieElement, cast, genres);

      movies.push(movie);

      
      if(json.parts.length === movies.length ){
        
        const moviesChronologicalOrder = setChronologicalOrder(movies);

        console.log(moviesChronologicalOrder);
        
        localStorage.setItem("movieList", JSON.stringify(moviesChronologicalOrder));

        setMovieList(moviesChronologicalOrder);
      }


    })

  }

  else {

    setMovieList(movieList);

  }


}

async function getCastTmdb(movieId) {


  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=pt-BR`, options);
  const json = await response.json();

  return json.cast;

}

async function detailsMovie(movieId) {

  `https://api.themoviedb.org/3/movie/movie_id?language=pt-BR`



  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=pt-BR`, options);
  const json = await response.json();

  return json.genres;

}


function setChronologicalOrder(movieList) {

  const movieListValidation = movieList;

  let MoviesChronologicalOrder = [];
  
  movieList.map((movie) => {
    
    let indexList = 0;
    const yearRelease = new Date(movie.releaseData).getFullYear();


    for (let index = 0; index < movieList.length; index++) {

      const yearReleaseValidation = new Date(movieListValidation[index].releaseData).getFullYear();


      if (yearRelease > yearReleaseValidation) {

       indexList === 0 ? indexList = 1 : indexList++;

      }

    }

    let newMovie = {
      index: indexList,
      movie: movie
    }

    MoviesChronologicalOrder.push(newMovie);

  })

  console.log(MoviesChronologicalOrder);

  for(let index = 0; index<movieList.length; index++){

    const element = MoviesChronologicalOrder.filter((element) => element.index===index)

    movieList.splice(index,1,element[0].movie);
  }


  return movieList;


}

function selectFilms(){

  const movie = document.querySelectorAll('.movie');
    
  movie.forEach((Element)=>{
      Element.addEventListener('click',()=>{

          const titleFilm = Element.children[1].innerText;

          movieDetails(titleFilm);


      })
  })

}


export { getDataTmdb, selectFilms }
