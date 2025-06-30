import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  if (!movies) return;
  return (
    <div>
        <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies
              .filter((movie) => movie && movie.poster_path) // filter out undefined/null and missing poster_path
              .map((movie) => (
                <MovieCart key={movie.id} posterPath={movie.poster_path} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
