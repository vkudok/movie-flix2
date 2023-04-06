import {GenreListType, MovieInfo, MovieListResult} from "../../interfaces/interfaces";

export const getMovieList = (moviesQuery: MovieListResult[], genreList: GenreListType[]) => {
    let movieListTmdbIds: MovieInfo = {
        movieInfo: []
    };
    moviesQuery.forEach((movie) => {
        let genreListLabels = '';
        movie.genre_ids.forEach((genre, index) => {
            let delimeter = '|';
            if (index ===  movie.genre_ids.length - 1) {
                delimeter = '';
            }
            const genreListLabelsArray = genreList.find((idItem) => idItem.id === genre);
            genreListLabels = genreListLabels + genreListLabelsArray?.name + delimeter;
        });
        movieListTmdbIds.movieInfo.push({
            name: movie.original_title,
            genre: genreListLabels,
            tmdbId: movie.id
        })
    });
    return movieListTmdbIds
}