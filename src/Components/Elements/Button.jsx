const Button = (props) => {
  const { btn } = props;
  return (
    <button
      className={`py-3 rounded-full bg-[#E7E3FC3B] w-full hover:bg-slate-400 transition-colors font-normal`}
    >
      {btn}
    </button>
  );
};

const ButtonSso = () => {
  return (
    <button className="py-3 rounded-full bg-transparent border border-[#E7E3FC3B] w-full hover:bg-[#E7E3FC3B] hover:bg-opacity-20 transition-colors font-normal flex items-center justify-center gap-2">
      <img src="/src/assets/image/google.png" className="w-5 h-5" alt="" />
      <p className="font-normal">Masuk dengan Google</p>
    </button>
  );
};

export { Button, ButtonSso };
