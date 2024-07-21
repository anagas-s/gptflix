import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  // Fetch the now playing movies from the API and dispatch the action to add them to the store
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://express-vercel-xajo.vercel.app/proxy/upcoming",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUpcomingMovies;
