import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <img 
          src={BG_URL}
          alt="bg"
          className="md:w-full md:h-full h-screen object-cover brightness-50"
        />
      </div>
      <div className="pt-[25%] md:p-10">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
