import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  // Fetch the now playing movies from the API and dispatch the action to add them to the store
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://express-vercel-xajo.vercel.app/proxy/popular",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    if (!popularMovies) {
      getPopularMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePopularMovies;
