import { useSelector } from "react-redux";
import lang from "../utils/languageContstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <form className="flex w-full max-w-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg p-6 gap-4">
        <input
          type="text"
          className="flex-1 px-4 py-3 text-lg text-white bg-gray-700 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-200 placeholder-gray-300"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button className="bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 text-white font-semibold rounded-r-xl px-6 py-3 text-lg shadow-md transition-all duration-200">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
