import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovieResults, gptMovieName } = gpt;

  if (!gptMovieResults) {
    return null;
  }
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      <div>
        {gptMovieName.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={gptMovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
