import { newMovie } from "./objects.js";
import { setMovieList } from "./screen.js";

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

  const movieList =  JSON.parse(localStorage.getItem("movieList"));

  if(!movieList){

    const response = await fetch(urlMovies, options);
    const json = await response.json();
  
  
    json.parts.map(async (movieElement) => {
  
      const cast = await getCastTmdb(movieElement.id);
  
      const movie = newMovie(movieElement, cast);
  
  
      movies.push(movie);

      localStorage.setItem("movieList", JSON.stringify(movies));
  
      json.parts.length === movies.length ? setMovieList(movies) : "";
  
  
    })

  }

  else{

    setMovieList(movieList);

  }


}

async function getCastTmdb(movieId) {


  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=pt-BR`, options);
  const json = await response.json();

  return json.cast;

}


export { getDataTmdb }
