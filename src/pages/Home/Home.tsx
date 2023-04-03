import {createContext, useState} from "react";
import MovieList from "../../components/MovieList/MovieList";
import Header from "../../components/Header/Header";
import {useQuery} from "react-query";
import * as S from "./styles";
import {fetchMovies} from "../../services/servicesConst";

export const MoviesContext = createContext({});

export default function Home() {
    const endpoint = "movie/popular";

    const [page, setPage] = useState<number>(1);
    const moviesQuery = useQuery(["movie", endpoint, page], () =>
        fetchMovies(endpoint, page)
    );

    return (
        <>
            <Header></Header>
            {(moviesQuery && moviesQuery.data) &&
                <MovieList movies={moviesQuery.data.results}></MovieList>
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
    );
}
