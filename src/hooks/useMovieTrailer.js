import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://express-vercel-xajo.vercel.app/proxy/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    if (!trailerVideo) {
      getMovieVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useMovieTrailer;
