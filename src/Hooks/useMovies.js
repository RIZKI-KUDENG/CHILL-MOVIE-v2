import { useState, useEffect } from "react";

export const useMovies = ()=> {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const moviesFromStorage = localStorage.getItem("movies");
        if(moviesFromStorage){
            setMovies(JSON.parse(moviesFromStorage));
        }
    },[])
    return {movies}
}