import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (videoId) => {
  const dispatch = useDispatch();
  const trailerVideos = useSelector((store) => store.movies.trailerVideos);

  const getMovieData = async () => {
    const data = await fetch(
      // videoId is hardcoded here but need to add dynamically
      "https://api.themoviedb.org/3/movie/574475/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    // console.log(filterData);
    const trailor = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideos(trailor));
  };

  useEffect(() => {
    // if (!movieId) return;
    !trailerVideos && getMovieData();
  }, []);
};

export default useMovieTrailer;
