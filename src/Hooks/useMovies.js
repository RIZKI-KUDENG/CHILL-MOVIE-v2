import { useState, useEffect } from "react";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const moviesFromStorage = localStorage.getItem("movies");
    if (moviesFromStorage) {
      setMovies(JSON.parse(moviesFromStorage));
    }
  }, []);
  const saveMovies = (newMovies) => {
    setMovies(newMovies);
    localStorage.setItem("movies", JSON.stringify(newMovies));
  };
  const addMovie = (newMovieData) => {
    const movieToAdd = {
      ...newMovieData,
      id: Date.now(),
    };
    const updateMovies = [...movies, movieToAdd];
    saveMovies(updateMovies);
    alert(`Movie ${movieToAdd.title} berhasil ditambahkan!`);
    console.log(`Movie ${movieToAdd.title} berhasil ditambahkan!`);
  };
  return { movies, addMovie };
};
