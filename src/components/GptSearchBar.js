import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { model } from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const searchText = useRef(null);
  const language = useSelector((store) => store.language.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = () => {
    console.log(searchText.current.value);
    async function run() {
      const gptQuery =
        "Act as a movie recommendation system and suggest some movies for the query ";
      const prompt =
        gptQuery +
        searchText.current.value +
        " only give me the name of 5 movies , comma separated like the example  result . Example : The Godfather, The Dark Knight, Pulp Fiction, The Shawshank Redemption, Fight Club";

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const textArray = text.split(",");
      const movies = textArray.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(movies);

      dispatch(
        addGptMovieResults({
          gptMovieName: textArray,
          gptMovieResults: tmdbResults,
        })
      );
    }

    run();
  };

  return (
    <div className="pt-[10%] flex items-center justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
          className="px-4 mx-4 my-4  py-3 rounded-lg col-span-9"
        />
        <button
          className="col-span-3 py-2 px-3 m-4 bg-red-500 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
