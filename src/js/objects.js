
let movie = {
    id: "",
    title: "",
    image: "",
    overView: "",
    releaseData: "",
    backdropPath: "",
    voteAverage:"",
    genre:[],
    castList: []
}
function newMovie(element,cast,genres) {

    const url =  `https://image.tmdb.org/t/p/original${element.poster_path}`

    movie = {
        id: element.id,
        title: element.title,
        image: url,
        overView: element.overview,
        releaseData: element.release_date,
        backdropPath: element.backdrop_path,
        voteAvarage: element.vote_average,
        genre:genres,
        castList: cast
    }

    return movie;

}

export { newMovie }