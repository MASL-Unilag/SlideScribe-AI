import RegisterForm from "./RegisterForm";
import logo from "../../../assets/logo.svg";

export default function SignUpAuthPage() {
  return (
    <div className="bg-[#FAFBFC] pt-16 pb-16 flex flex-col">
      <div className="flex flex-col gap-8 items-center pb-10">
        <div className="flex gap-3 items-center max-w-fit">
          <img src={logo}></img>
          <span className="text-sm font-medium text-[#061938]">
            SclideScribe AI
          </span>
        </div>

        <div className="text-center">
          <h5 className="text-lg font-semibold mb-2 text-[#061938]">
            Create Your Free Account
          </h5>
          <p className="text-sm font-medium text-[#253858]">
            Already have an accout?
            <span className="underline cursor-pointer pl-1 text-[#061938]">
              Login
            </span>
          </p>
        </div>
      </div>

      <RegisterForm />
    </div>
  );
}
