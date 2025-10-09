import { useSlider } from "../../Hooks/useSlider";

const MovieSlider = (props) => {
  const { title, movies } = props;
  const { sliderref, move } = useSlider();
  return (
    <section className="mx-8 md:mx-14 mt-7 relative md:py-4">
      <div className=" mb-3 md:mb-3">
        <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      </div>
      <div className="absolute bottom-50 left-0 z-10 max-md:hidden">
        <img src="/src/assets/movieslider/leftbutton.png" alt="" onClick={() => move("kiri")} />
      </div>
      <div className="flex flex-nowrap overflow-x-scroll md:py-4" ref={sliderref}>
        <div className="flex gap-3">{movies.map((movie)=>{
          return(
            <img
            src={movie.image}
            alt=""
            className="max-sm:w-35 max-sm:h-35 w-xs h-xs rounded-xl"
            key={movie.id}
          />
          )
        })}</div>
      </div>
      <div className="absolute bottom-50 right-0 z-10 max-md:hidden">
        <img src="/src/assets/movieslider/rightbutton.png" alt="" onClick={() => move("kanan")} />
      </div>
    </section>
  );
};
 export default MovieSlider;