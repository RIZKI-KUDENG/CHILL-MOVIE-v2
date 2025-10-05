import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="w-full flex justify-between  items-center bg-[#181A1C] p-4 gap-5 font-lato text-white">
      <div className="flex-none flex justify-center items-center md:ml-8">
        <img src="/src/assets/image/logo.png" alt="" className=" w-7 h-7" />
        <h1 className="font-londrina lg:text-4xl max-sm:hidden ">CHILL</h1>
      </div>
      <nav>
        <ul className="flex-none flex gap-4 md:gap-8 lg:text-md md:ml-8">
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#">Film</a>
          </li>
          <li>
            <a href="#">Daftar Saya</a>
          </li>
        </ul>
      </nav>
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
          onClick={handleOpen}
        />
        <div className={`relative ${isOpen ? "block" : "hidden"}`}>
          <ul className="absolute top-3 right-0 bg-[#181A1C] w-32 flex flex-col gap-3">
            <li className="flex items-center text-sm text-[#3254FF]">
              <img
                src="/src/assets/homeimage/akun.png"
                alt=""
                className="w-3 h-3"
              />
              <a href="#">Profil Saya</a>
            </li>
            <li className="flex items-center text-sm">
              <img
                src="/src/assets/homeimage/star.png"
                alt=""
                className="w-3 h-3"
              />
              <a href="#">Ubah premium</a>
            </li>
            <li className="flex items-center text-sm">
              <img
                src="/src/assets/homeimage/logout.png"
                alt=""
                className="w-3 h-3"
              />
              <a href="#">Keluar</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default App;
