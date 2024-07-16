import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { NETFLIX_BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          className="absolute -z-10 opacity-80"
          alt="netflix-bg"
          src={NETFLIX_BG_URL}
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
