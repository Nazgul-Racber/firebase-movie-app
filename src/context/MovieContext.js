import React, { createContext } from "react";

export const MovieContext = createContext();

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({ children }) => {
  return <MovieContext.Provider value={null}>{children}</MovieContext.Provider>;
};

export default MovieContextProvider;
