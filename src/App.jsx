import { Button } from "./Components/Elements/Button";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="font-lato">
      <header className="w-full flex justify-between  items-center bg-[#181A1C] p-4 gap-5 font-lato text-white">
        <div className="flex-none flex justify-center items-center md:ml-8">
          <img src="/src/assets/image/logo.png" alt="" className=" w-7 h-7" />
          <h1 className="font-londrina md:text-4xl max-md:hidden ">CHILL</h1>
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
          <div className={`relative z-10 ${isOpen ? "block" : "hidden"}`}>
            <ul className="absolute top-3 right-0 bg-[#181A1C] w-35 md:w-35 md:h-35 flex flex-col gap-3 md:gap-6">
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
              <li className="flex items-center text-sm md:text-lg">
                <img
                  src="/src/assets/homeimage/logout.png"
                  alt=""
                  className="w-3 md:w-4 h-3 md:h-4"
                />
                <a href="#">Keluar</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="relative">
            <img
              src="/src/assets/heroimage/herobg.png"
              alt=""
              className="w-full h-full md:h-[80vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent"></div>
            <div className="absolute inset-1 flex flex-col justify-center text-white mt-10">
              <div className="w-1/2 ml-8 flex flex-col md:gap-3">
                <h1 className="text-base sm:text-3xl md:text-6xl font-bold">
                  Duty After School
                </h1>
                <p className="max-md:line-clamp-2 max-sm:text-[12px] text-lg">
                  Sebuah benda tak dikenal mengambil alih dunia. Dalam
                  keputusasaan, Departemen Pertahanan mulai merekrut lebih
                  banyak tentara, termasuk siswa sekolah menengah. Mereka pun
                  segera menjadi pejuang garis depan dalam perang.
                </p>
              </div>
              <div className="flex items-center justify-between gap-2 mt-4 ml-8">
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
