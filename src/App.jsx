import "./index.css";

function App() {
  return (
    <main className="bg-[url('./assets/image/bglogin.jpg')] h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center ">
      <div className="h-auto lg:h-3/4 w-1/3 mx-auto bg-[#181A1CD6]">
        <div className="flex justify-center items-center">
          <img src="/src/assets/image/logo.png" alt="" className="w-[50px] h-[44px]" />
          <h5 className="text-center text-6xl text-white font-londrina ">
            CHILL
          </h5>
        </div>
      </div>
    </main>
  );
}

export default App;
