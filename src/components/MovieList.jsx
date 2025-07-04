import { useRef } from "react";
import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300, // adjust as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300, // adjust as needed
      behavior: "smooth",
    });
  };
  if (!movies) return;
  return (
    <div>
      <h1 className="text-lg md:text-2xl font-bold">{title}</h1>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 
               bg-black bg-opacity-50 hover:bg-opacity-80 
               text-white p-2 rounded-full z-10"
        >
          {"<"}
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 
               bg-gray-500 bg-opacity-50 hover:bg-opacity-80 
               text-white p-2 rounded-full z-10"
        >
          {">"}
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll scrollbar-hide"
        >
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
    </div>
  );
};

export default MovieList;
