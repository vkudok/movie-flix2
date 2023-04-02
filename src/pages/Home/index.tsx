import {createContext} from "react";
import MovieList from "../../components/MovieList";
import Header from "../../components/Header";
import {useQuery} from "react-query";
import {fetchMovies} from "../../movies/api";

export const MoviesContext = createContext({});

export default function Home() {
    const page = 1;
    const endpoint = "movie/popular";

    const moviesQuery = useQuery(["movie", endpoint, page], () =>
        fetchMovies(endpoint, page)
    );
    // const [movies, setMovies] = useState(moviesQuery.data);

    return (
        // <MoviesContext.Provider value={{movies, setMovies}}>
        <>
            <Header></Header>
            {/*<S.Container>*/}
            {/*    {(movies && movies.results) && <Genres movies={movies?.results}></Genres>}*/}
            {/*</S.Container>*/}
            {(moviesQuery && moviesQuery.data) && <MovieList movies={moviesQuery.data.results}></MovieList>}
        </>
        // </MoviesContext.Provider>
    );
}
