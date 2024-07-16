import React from "react";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex items-center justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang.hindi.gptSearchPlaceholder}
          className="px-4 mx-4 my-4  py-3 rounded-lg col-span-9"
        />
        <button className="col-span-3 py-2 px-3 m-4 bg-red-500 text-white rounded-lg">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
