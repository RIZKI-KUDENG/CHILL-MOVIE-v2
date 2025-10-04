const WelcomeText = (props) => {
    const {h3,p} = props
  return (
    <div className="text-center">
      <h3 className="text-2xl sm:text-3xl font-bold">{h3}</h3>
      <p className="text-sm sm:text-base text-gray-300 mt-1">
        {p}
      </p>
    </div>
  );
};
export default WelcomeText;