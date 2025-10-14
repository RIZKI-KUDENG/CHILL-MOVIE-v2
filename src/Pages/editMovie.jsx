import MovieSlider from "../Components/Fragments/MovieSlider";
import { topMovies, newMovies, trendingMovies } from "../Data/MovieDatas";


const EditMovie = () => {
  return (
    <div>
      <MovieSlider
        title="Top Rating Film dan Series Hari ini"
        movies={topMovies}
        enableHover={false}
      ></MovieSlider>
        <MovieSlider title="Film trending" movies={newMovies} enableHover={false}></MovieSlider>
      <MovieSlider title="Rilis Baru" movies={trendingMovies} enableHover={false}></MovieSlider>
    </div>
  );
};
export default EditMovie;
