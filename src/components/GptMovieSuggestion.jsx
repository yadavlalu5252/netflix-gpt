import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-6 m-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl text-white bg-opacity-80">
      <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center tracking-wide drop-shadow-lg">
        🎬 Movie Recommendations For You
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {movieNames.map((movieName, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-70 rounded-xl shadow-lg p-4 hover:scale-[1.03] transition-transform duration-200"
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-300">{movieName.trim()}</h3>
            <MovieList title="" movies={movieResults[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;