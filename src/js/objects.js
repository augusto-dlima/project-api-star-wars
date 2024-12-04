
let movie = {
    id: "",
    title: "",
    image: "",
    overView: "",
    castList: [],
    similarMovies:[]
}


function newMovie(element,cast,similar) {

    const url =  `https://image.tmdb.org/t/p/original${element.poster_path}`

    movie = {
        id: element.id,
        title: element.title,
        image: url,
        overView: element.overview,
        castList: cast,
        similarMovies:similar
    }

    return movie;

}

export { newMovie }