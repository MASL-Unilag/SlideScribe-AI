import LoginForm from "./LoginForm";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function LoginAuthPage() {
  return (
    <div className="bg-neutral-20 pt-16 pb-16 flex flex-col">
      <div className="flex flex-col gap-8 items-center pb-10">
        <div className="flex gap-3 items-center max-w-fit">
          <img src={logo}></img>
          <span className="text-sm font-medium text-neutral-900">
            SclideScribe AI
          </span>
        </div>

        <div className="text-center">
          <h5 className="text-lg font-semibold mb-2 text-neutral-900">
            Login Into Your Account
          </h5>
          <p className="text-sm font-medium text-neutral-700">
            Don't have an accout?
            <span className="underline cursor-pointer pl-1 text-neutral-900">
              <Link to="/signup" className="font-medium cursor-pointer hover:underline">
                    Sign Up
              </Link>
            </span>
          </p>
        </div>
      </div>

      <LoginForm />
    </div>
  );
}
