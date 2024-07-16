import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  // Fetch the now playing movies from the API and dispatch the action to add them to the store
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;