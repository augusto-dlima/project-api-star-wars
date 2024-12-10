
let movie = {
    id: "",
    title: "",
    image: "",
    overView: "",
    releaseData: "",
    castList: []
}


function newMovie(element,cast) {

    const url =  `https://image.tmdb.org/t/p/original${element.poster_path}`

    movie = {
        id: element.id,
        title: element.title,
        image: url,
        overView: element.overview,
        releaseData: element.release_date,
        castList: cast
    }

    return movie;

}

export { newMovie }