import RegisterForm from "./RegisterForm";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../../organisms/HomeNavBar";


export default function SignUpAuthPage() {
  return (
    <>
    <Navigation />
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
            Create Your Free Account
          </h5>
          <p className="text-sm font-medium text-neutral-700">
            Already have an accout?
            <span className="underline cursor-pointer pl-1 text-neutral-900">
              <Link to="/login" className="font-medium cursor-pointer hover:underline">
                  Login
              </Link>
            </span>
          </p>
        </div>
      </div>

      <RegisterForm />
    </div>
   </>
  );
}
