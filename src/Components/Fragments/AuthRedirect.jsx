const AuthRedirect = () => {
  return (
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
  );
};
export default AuthRedirect;