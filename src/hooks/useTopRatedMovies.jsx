import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMoives } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
const dispatch = useDispatch();

  const topRatedMovies = useSelector((store)=> store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-IN&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMoives(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;