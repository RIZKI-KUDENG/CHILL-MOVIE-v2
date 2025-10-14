import { topMovies, newMovies, trendingMovies } from "../Data/MovieDatas";

export const MovieInitializer = () => {
  const existingMovies = localStorage.getItem("movies");

  if (!existingMovies) {
    console.log("tidak ada data");
    const allMoviesMap = new Map();
    [...topMovies, ...newMovies, ...trendingMovies].forEach((movie) => {
      allMoviesMap.set(movie.id, movie);
    });
    const allUniqueMovies = Array.from(allMoviesMap.values());
    localStorage.setItem("movies", JSON.stringify(allUniqueMovies));
  }
};
