import Button from "./Buttons";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between text-sm font-medium py-4 px-44 border-b border-b-neutral-40">
      <div className="flex gap-3 items-center">
        <img src={logo}></img> <span className="text-neutral-900">SclideScribe AI</span>
      </div>

      <ul className="flex gap-2">
        <li className="px-3 py-2 cursor-pointer border-b-2 border-purple-400 text-neutral-900">Home</li>
        <li className="px-3 py-2 cursor-pointer text-neutral-900">
          <Link to="/about">
            About Us
          </Link>
        </li>
      </ul>

      <div className="flex gap-2">
        <Button variant="tertiary">
            <Link to="/login">
                      Login
            </Link>
        </Button>
        <Button variant="secondary">
              <Link to="/signup">
              Get started for free
              </Link>
          </Button>
      </div>
    </div>
  );
};

export default Navigation;
