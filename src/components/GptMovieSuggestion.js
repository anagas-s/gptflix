import React from "react";
import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovieResults, gptMovieName } = gpt;

  if (!gptMovieResults) {
    return null;
  }
  return <div className="p-4 m-4 bg-black text-white">{gptMovieName}</div>;
};

export default GptMovieSuggestion;
