import BrandLogo from "../Elements/BrandLogo";
import Navlinks from "../Elements/Navlinks";
import AvatarDropdown from "../Elements/AvatarDropdown";
const Navbar = (props) => {
  const { open, handle } = props;
  return (
    <header className="w-full flex justify-between  items-center bg-[#181A1C] p-4 gap-5 font-lato text-white">
      <BrandLogo></BrandLogo>
      <Navlinks></Navlinks>
      <AvatarDropdown open={open} handle={handle} />
    </header>
  );
};
export default Navbar;
