import Hero from "../Components/Fragments/Hero";
import Content from "../Components/Fragments/Content";
import MovieSlider from "../Components/Fragments/MovieSlider";
import { useMovies } from "../Hooks/useMovies";

const Home = () => {
  const { movies } = useMovies();
  const top = movies.filter((movie) => movie.kategori === "Top");
  const New = movies.filter((movie) => movie.kategori === "New");
  const trending = movies.filter((movie) => movie.kategori === "Trending");
  return (
    <>
      <Hero />
      <Content />
      <MovieSlider
        title="Top Rating Film dan Series Hari ini"
        movies={top}
      ></MovieSlider>
      <MovieSlider title="Film trending" movies={trending}></MovieSlider>
      <MovieSlider title="Rilis Baru" movies={New}></MovieSlider>
    </>
  );
};
export default Home;
