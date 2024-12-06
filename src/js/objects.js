
let movie = {
    id: "",
    title: "",
    image: "",
    overView: "",
    castList: []
}


function newMovie(element,cast) {

    const url =  `https://image.tmdb.org/t/p/original${element.poster_path}`

    movie = {
        id: element.id,
        title: element.title,
        image: url,
        overView: element.overview,
        castList: cast
    }

    return movie;

}

export { newMovie }