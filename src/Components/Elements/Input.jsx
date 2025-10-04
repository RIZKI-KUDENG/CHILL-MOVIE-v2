const Input = (props) => {
    const {id, type, placeholder} = props
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full p-3 rounded-full border border-[#E7E3FC3B] bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
    />
  );
};
export default Input;