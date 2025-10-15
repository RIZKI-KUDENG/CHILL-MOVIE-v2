import { Link } from "react-router-dom";
const AvatarDropdown = (props) => {
  const { open, handle } = props;
  return (
    <div className=" flex-1 flex gap-2 items-center justify-end">
      <img
        src="/src/assets/homeimage/avatar.png"
        className="h-7 w-7 rounded-full"
        alt=""
      />
      <img
        src="/src/assets/homeimage/toggleavatar.png"
        className="h-5 w-5 cursor-pointer"
        alt=""
        onClick={handle}
      />
      <div className={`relative z-10 ${open ? "block" : "hidden"}`}>
        <ul className="absolute top-3 right-0 bg-[#181A1C] w-35 md:w-35 md:h-50 flex flex-col gap-3 md:gap-6">
          <li className="flex items-center text-sm md:text-lg text-[#3254FF]">
            <img
              src="/src/assets/homeimage/akun.png"
              alt=""
              className="w-3 md:w-4 h-3 md:h-4"
            />
            <a href="#">Profil Saya</a>
          </li>
          <li className="flex items-center text-sm md:text-lg">
            <img
              src="/src/assets/homeimage/star.png"
              alt=""
              className="w-3 md:w-4 h-3 md:h-4"
            />
            <a href="#">Ubah premium</a>
          </li>
          <li className="text-sm md:text-lg">
            <Link to="/editmovie">Edit Movie</Link>
          </li>
          <li className="flex items-center text-sm md:text-lg">
            <img
              src="/src/assets/homeimage/logout.png"
              alt=""
              className="w-3 md:w-4 h-3 md:h-4"
            />
            <Link to="/login">Keluar</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AvatarDropdown;
