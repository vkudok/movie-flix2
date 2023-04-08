import {useState} from "react";
import MovieList from "../../components/MovieList/MovieList";
import Header from "../../components/Header/Header";
import {useQuery} from "react-query";
import * as S from "./styles";
import {fetchMovies, findMovieIdByTmdbId, getGenreListById} from "../../services/servicesConst";
import {MovieInfo} from "../../interfaces/interfaces";
import {getMovieList} from "./service";
import Loading from "../../components/Loading/Loading";

export default function Home() {
    const [loading, setLoading] = useState(true);

    const moviesEndpoint = "movie/popular";

    const [page, setPage] = useState<number>(1);
    const moviesQueryResult = useQuery(["movie", moviesEndpoint, page], () =>
            fetchMovies(moviesEndpoint, page),
        {
            onSuccess: () => {
                setLoading(true)
            },
            onError: () => {
                setLoading(false)
            }
        }
    );
    const genreListByIdResult = useQuery(["genreLis"], () =>
        getGenreListById()
    );
    let movieListTmdbIds: MovieInfo = {
        movieInfo: []
    };
    if (moviesQueryResult && moviesQueryResult.data && genreListByIdResult && genreListByIdResult.data) {
        movieListTmdbIds = getMovieList(moviesQueryResult.data.results, genreListByIdResult.data.genres);
    }
    const setNewFilmsEndpoint = '/setNewFilms'
    useQuery(["setNewFilms", movieListTmdbIds, setNewFilmsEndpoint], () =>
            findMovieIdByTmdbId(movieListTmdbIds, setNewFilmsEndpoint),
        {
            onSuccess: () => {
                setLoading(false)
            },
            onError: () => {
                setLoading(true)
            },
            enabled: movieListTmdbIds.movieInfo.length > 0
        }
    );
    return (
        <>
            <Header></Header>
            <Loading loading={loading}/>
            {
                !loading &&
                <>
                    {(moviesQueryResult && moviesQueryResult.data) &&
                    <MovieList movies={moviesQueryResult.data.results}></MovieList>
                    }
                    <S.Navigation>
                        <S.NavigationButton
                            onClick={() => setPage((prevPage) => prevPage - 1)}
                            disabled={page === 1 ? true : false}
                        >
                            Prev Page
                        </S.NavigationButton>
                        <S.NavigationButton
                            onClick={() => setPage((prevPage) => prevPage + 1)}
                            disabled={false}
                        >
                            Next Page
                        </S.NavigationButton>
                    </S.Navigation>
                </>
            }
        </>
    );
}
