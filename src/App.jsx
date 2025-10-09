import { useState, useRef } from "react";
import Navbar from "./Components/Fragments/Navbar";
import Hero from "./Components/Fragments/Hero";
import Content from "./Components/Fragments/Content";
import  MovieSlider  from "./Components/Fragments/MovieSlider";
import { topMovies, newMovies, trendingMovies } from "./Data/MovieDatas";
MovieSlider
function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  const sliderRef = useRef(null);
  const move = (arah) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo =
        arah === "kiri" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <div className="font-lato bg-[#181A1C] text-white">
      <Navbar open={isOpen} handle={handleOpen} />
      <Hero />
      <section className="mx-8 md:mx-14 relative">
        <div className="">
          <h1 className="text-xl md:text-4xl font-bold md:py-4">
            Melanjutkan Tonton Film
          </h1>
        </div>
        <div className="absolute bottom-18 left-0 z-10 max-md:hidden">
          <img
            src="/src/assets/movieslider/leftbutton.png"
            alt=""
            onClick={() => move("kiri")}
          />
        </div>
        <div
          className=" flex flex-nowrap mt-3 overflow-x-scroll "
          ref={sliderRef}
        >
          <Content />
        </div>
        <div className="absolute bottom-18 right-0 z-10 max-md:hidden">
          <img
            src="/src/assets/movieslider/rightbutton.png"
            alt=""
            onClick={() => move("kanan")}
          />
        </div>
      </section>
      <MovieSlider title="Top Rating Film dan Series Hari ini" movies={topMovies}></MovieSlider>
      <MovieSlider title="Film trending" movies={newMovies}></MovieSlider>
      <MovieSlider title="Rilis Baru" movies={trendingMovies}></MovieSlider>
    </div>
  );
}

export default App;
