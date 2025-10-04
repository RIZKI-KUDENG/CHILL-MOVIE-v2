import { Button, ButtonSso } from "./Components/Elements/Button";
import Input from "./Components/Elements/Input";
import Label from "./Components/Elements/Label";
import InputField from "./Components/Fragments/InputField";
function App() {
  return (
    <main className="h-screen w-full bg-[url(/src/assets/image/bglogin.jpg)] bg-cover bg-no-repeat bg-center flex justify-center items-center font-lato text-white p-4">
      {/* Kontainer form login */}
      <div className="w-full max-w-md bg-[#181A1CD6] flex flex-col rounded-2xl p-6 sm:p-8 space-y-6">
        {/* Header dengan Logo dan Judul */}
        <div className="flex justify-center items-center gap-2">
          <img
            src="/src/assets/image/logo.png"
            alt="Logo Chill"
            className="w-10 h-9 sm:w-12 sm:h-11"
          />
          <h5 className="text-center text-4xl sm:text-5xl text-white font-londrina">
            CHILL
          </h5>
        </div>

        {/* Judul Form */}
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">MASUK</h3>
          <p className="text-sm sm:text-base text-gray-300 mt-1">
            Selamat Datang Kembali!
          </p>
        </div>

        {/* Form Input */}
        <form action="#" className="flex flex-col space-y-4">
          {/* Input Username */}
          <InputField name="username" text="Username" type="text" placeholder="Masukan username"/>

          {/* Input Password */}
          <InputField name="username" text="Password" type="password" placeholder="Masukan password"/>
          

          {/* Opsi Tambahan */}
          <div className="flex justify-between items-center text-sm gap-2 sm:gap-4 mt-2">
            <p className="text-[#C1C2C4]">
              Belum Punya Akun?{" "}
              <a href="#" className="font-bold text-white hover:underline">
                Daftar
              </a>
            </p>
            <a href="#" className="hover:underline ">
              Lupa kata sandi?
            </a>
          </div>
        </form>

        {/* Tombol Aksi */}
        <div className="flex flex-col gap-3">
          <Button children="MASUK" background="bg-[#E7E3FC3B]" />
          <div className="flex items-center justify-center gap-2">
            <p className="text-center text-sm text-[#C1C2C4]">Atau</p>
          </div>
          <ButtonSso />
        </div>
      </div>
    </main>
  );
}

export default App;
