import { useState } from "react";
import Navbar from "../Fragments/Navbar";
import { Outlet } from "react-router-dom";
const HomeLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="font-lato bg-[#181A1C] text-white">
      <Navbar open={isOpen} handle={handleOpen} />
      <Outlet />
      {/* <Hero />
      <Content />
      <MovieSlider
        title="Top Rating Film dan Series Hari ini"
        movies={topMovies}
      ></MovieSlider>
      <MovieSlider title="Film trending" movies={newMovies}></MovieSlider>
      <MovieSlider title="Rilis Baru" movies={trendingMovies}></MovieSlider> */}
    </div>
  );
};
export default HomeLayout;
