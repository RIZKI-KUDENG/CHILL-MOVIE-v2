const AuthRedirect = (props) => {
const {style,a, ask} = props
  return (
    <div className="flex justify-between items-center text-sm gap-2 sm:gap-4 mt-2">
      <p className="text-[#C1C2C4]">
        {ask}{" "}
        <a href="#" className="font-bold text-white hover:underline">
         {a}
        </a>
      </p>
      <a href="#" className={style}>
        Lupa kata sandi?
      </a>
    </div>
  );
};
export default AuthRedirect;