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
  const updateMovie = (updateMovie) => {
    const updateMovies = movies.map( movie => {
      return movie.id === updateMovie.id ? updateMovie : movie
    })
    saveMovies(updateMovies)
  }
  const deleteMovie = (id) => {
    const updateMovies = movies.filter(movie => movie.id !== id)
    saveMovies(updateMovies);
  }
  return { movies, addMovie, updateMovie, deleteMovie };
};
