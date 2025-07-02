import { useSelector } from "react-redux";
import lang from "../utils/languageContstants";
import { useRef, useState } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [loading, setLoading] = useState(false);

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=true&language=en-US&page=1"+ API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchText.current.value) return;
    setLoading(true);
    try {
      const gptSearchQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". Only give me names of 5 movies and separated by comma(,) like the example given ahead. Example are: hum aapke hai kon, sultan, dangal, raid, mirzapur";
      const gptSearchResult = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "developer", content: searchText.current.value },
          { role: "user", content: gptSearchQuery },
        ],
      });

      console.log(gptSearchResult.choices[0]?.message.content);// Article 15, Raat Akeli Hai, Bulbbul, Andhadhun, Ludo
      const gptMovies = gptSearchResult.choices[0]?.message.content.split(","); // split will convert it into array
      console.log(gptMovies);

      const tmdbPromiseArray = gptMovies.map((movie)=> searchMoviesTMDB(movie)); // it returns 5 Promise
      // [Promise, Promise, Promise, Promise, Promise]
      const tmdbResult = await Promise.all(tmdbPromiseArray); 
      console.log(tmdbResult);





    } catch (error) {
      alert("Error: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <form
        className="flex w-full max-w-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg p-6 gap-4"
        onSubmit={handleGptSearchSubmit}
      >
        <input
          ref={searchText}
          type="text"
          className="flex-1 px-4 py-3 text-lg text-white bg-gray-700 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200 placeholder-gray-300"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button
          className="bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 text-white font-semibold rounded-r-xl px-6 py-3 text-lg shadow-md transition-all duration-200 disabled:opacity-60"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
