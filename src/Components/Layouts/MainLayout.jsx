import { useState } from "react";
import Navbar from "../Fragments/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Fragments/Footer";

const HomeLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="font-lato bg-[#181A1C] text-white">
      <Navbar open={isOpen} handle={handleOpen} />
      <Outlet />
      <Footer
        onclick={() => setIsGenreOpen(!isGenreOpen)}
        dropdown={isGenreOpen}
        onclickHelp={() => setIsHelpOpen(!isHelpOpen)}
        dropdownHelp={isHelpOpen}
      />
    </div>
  );
};
export default HomeLayout;
