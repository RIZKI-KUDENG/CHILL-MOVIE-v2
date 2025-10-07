import { useState } from "react";
import Navbar from "./Components/Fragments/Navbar";
import Hero from "./Components/Fragments/Hero";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="font-lato">
      <Navbar open={isOpen} handle={handleOpen} />
      <Hero/>
      
    </div>
  );
}

export default App;
