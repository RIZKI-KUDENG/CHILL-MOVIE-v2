import HeroActions from "../Elements/HeroActions";
import HeroDesc from "../Elements/HeroDesc";
const Hero = () => {
  return (
    <section>
      <div className="relative">
        <img
          src="/src/assets/heroimage/herobg.png"
          alt=""
          className="w-full h-full md:h-[80vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent"></div>
        <div className="absolute inset-1 flex flex-col justify-center text-white mt-10">
          <HeroDesc />
          <HeroActions />
        </div>
      </div>
    </section>
  );
};
export default Hero;