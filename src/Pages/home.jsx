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
        enableHover={true}
      ></MovieSlider>
      <MovieSlider title="Film trending" movies={newMovies} enableHover={true}></MovieSlider>
      <MovieSlider title="Rilis Baru" movies={trendingMovies} enableHover={true}></MovieSlider>
    </>
  );
};
export default Home;
