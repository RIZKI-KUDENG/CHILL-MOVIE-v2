import { Button } from "./Button";

const HeroActions = () => {
  return (
    <div className="flex items-center justify-between gap-2 mt-4 ml-8 md:ml-14">
      <div className="flex gap-2">
        <Button
          clas="text-[10px] md:text-base px-3 md:w-30 bg-[#3254FF] rounded-full font-bold"
          btn="Masuk"
        />
        <Button
          clas="flex px-1 md:px-3 gap-1 items-center bg-[#22282A] rounded-full text-[10px] md:text-base font-bold"
          btn="&#9432; Selengkapnya"
        />
        <img
          src="/src/assets/heroimage/18.png"
          alt=""
          className="ml-3 w-5 h-5 md:w-10 md:h-10"
        />
      </div>
      <div>
        <img
          src="/src/assets/heroimage/volume.png"
          alt=""
          className="w-5 h-5 md:w-12 md:h-12 mr-5"
        />
      </div>
    </div>
  );
};
export default HeroActions;