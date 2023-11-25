import InputField from "../../organisms/InputField";
import Button from "../../organisms/Buttons";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-10 max-w-xl p-16 m-auto border border-neutral-50 rounded-md bg-neutral-0 min-w-[534px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 w-fit text-neutral-700 font-medium"
          >
            Email address
          </label>
          <InputField
            type="email"
            value="email"
            placeholder="email"
            str="email"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="password"
            className="mb-2 w-fit text-neutral-700 font-medium"
          >
            Password
          </label>
          <InputField
            type="password"
            value="password"
            placeholder="password"
            str="password"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Button type="primary">Log in</Button>
      </div>
    </div>
  );
}
