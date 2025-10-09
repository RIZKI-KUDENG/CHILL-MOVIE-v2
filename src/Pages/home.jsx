import Hero from "../Components/Fragments/Hero";
import Content from "../Components/Fragments/Content";
import MovieSlider from "../Components/Fragments/MovieSlider";
import { topMovies, newMovies, trendingMovies } from "../Data/MovieDatas";

const Home = () => {
  return (
    <>
      <Hero />
      <Content />
      <MovieSlider
        title="Top Rating Film dan Series Hari ini"
        movies={topMovies}
      ></MovieSlider>
      <MovieSlider title="Film trending" movies={newMovies}></MovieSlider>
      <MovieSlider title="Rilis Baru" movies={trendingMovies}></MovieSlider>
    </>
  );
};
export default Home;
