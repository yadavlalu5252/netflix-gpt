import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
    console.log(movies);
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
          <MovieCart posterPath={movies[0].poster_path} />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
