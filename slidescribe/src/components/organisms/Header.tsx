import Button from "./Buttons";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex items-center justify-between text-sm font-medium py-4 px-44">
      <div className="flex gap-3 items-center">
        <img src={logo}></img> <span>SclideScribe AI</span>
      </div>

      <ul className="flex gap-2">
        <li className="px-3 py-2 cursor-pointer">Home</li>
        <li className="px-3 py-2 cursor-pointer">About Us</li>
      </ul>

      <div className="flex gap-2">
        <Button type="tertiary">Login</Button>
        <Button type="secondary">Get started for free</Button>
      </div>
    </div>
  );
};

export default Header;
