import { useState, useEffect } from "react";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const moviesFromStorage = localStorage.getItem("movies");//mengambil movie dari local storage
    if (moviesFromStorage) {
      setMovies(JSON.parse(moviesFromStorage)); //masukan ke state
    }
  }, []);
  const saveMovies = (newMovies) => {           //mempunyai parameter
    setMovies(newMovies);                       //masukan ke state
    localStorage.setItem("movies", JSON.stringify(newMovies)); //simpan ke local storage
  };
  const addMovie = (newMovieData) => {
    const movieToAdd = {            //masukan ke object
      ...newMovieData,                //tambahkan id
      id: Date.now(),
    };
    const updateMovies = [...movies, movieToAdd]; // push kedalam state
    saveMovies(updateMovies);                     //simpan ke local storage
    alert(`Movie ${movieToAdd.title} berhasil ditambahkan!`);
    console.log(`Movie ${movieToAdd.title} berhasil ditambahkan!`);
  };

  //me return dengan mengambil seluruh movie apakah id 
  //sama dengan id yang akan di update
  const updateMovie = (updateMovie) => {
    const updateMovies = movies.map( movie => {               
      return movie.id === updateMovie.id ? updateMovie : movie
    })
    saveMovies(updateMovies)
  }

  //menghapus movie dengan cara mengambil seluruh movie
  //apakah id nya tidak sama dengan id yang akan dihapus
  const deleteMovie = (id) => {
    const updateMovies = movies.filter(movie => movie.id !== id)
    saveMovies(updateMovies);
  }
  return { movies, addMovie, updateMovie, deleteMovie };
};
