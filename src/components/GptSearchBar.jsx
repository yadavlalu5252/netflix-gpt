import lang from "../utils/languageContstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[12%] w-1/2 justify-center">
      <form className="p-5 bg-black">
        <input
          type="text"
          className="p-2 m-2 w-1/2 text-white bg-gray-600 rounded-sm"
          placeholder={lang.hindi.searchPlaceholder}
        />
        <button className="bg-purple-700 text-white rounded-lg p-2">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
