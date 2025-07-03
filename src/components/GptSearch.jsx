import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import {BG_URL} from "../utils/constants"

const GptSearch = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_URL}
          alt="bg"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
