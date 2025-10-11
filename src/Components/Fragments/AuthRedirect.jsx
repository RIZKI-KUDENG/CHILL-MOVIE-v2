const AuthRedirect = (props) => {
const {style,a, ask} = props
  return (
    <div className="flex justify-between items-center text-sm gap-2 sm:gap-4 mt-2">
      <p className="text-[#C1C2C4]">
        {ask}{" "}
        <span className="font-bold text-white hover:underline">
         {a}
        </span>
      </p>
      <p  className={style}>
        Lupa kata sandi?
      </p>
    </div>
  );
};
export default AuthRedirect;