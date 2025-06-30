import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((state) => state.movies);
    return (
        <div>
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
    )
};

export default SecondaryContainer;