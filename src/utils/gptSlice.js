import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovieResults: null,
    gptMovieName: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { gptMovieName, gptMovieResults } = action.payload;
      state.gptMovieResults = gptMovieResults;
      state.gptMovieName = gptMovieName;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
