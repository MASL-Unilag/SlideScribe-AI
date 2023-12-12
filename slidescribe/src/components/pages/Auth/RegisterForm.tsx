import InputField from "../../organisms/InputField";
import Button from "../../organisms/Buttons";
import { AuthUserData } from "../../../services/@types/authTypes";
import { useState } from "react";
import AuthService from "../../../services/authService";
import apiEndpoints from "../../../constants/apiEndpoints";

export default function RegisterForm() {
	const authService = new AuthService(apiEndpoints.auth);
	const [userData, setUserData] = useState<AuthUserData>({
		password: "",
		email: "",
		firstName: "",
		lastName: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData((prevUserData) => ({
			...prevUserData,
			[e.target.name]: e.target.value,
		}));
	};
	return (
		<div className="flex flex-col gap-10 max-w-xl p-16 m-auto border border-neutral-50 rounded-md bg-neutral-0 min-w-[534px]">
			<div className="flex flex-col gap-8">
				<div className="flex flex-col">
					<label
						htmlFor="firstName"
						className="mb-2 w-fit text-neutral-700 font-medium"
					>
						First Name
					</label>
					<InputField
						type="text"
						value={userData.firstName!}
						placeholder="First Name"
						str="firstName"
						onChange={handleInputChange}
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="lastName"
						className="mb-2 w-fit text-neutral-700 font-medium"
					>
						Last Name
					</label>
					<InputField
						type="text"
						value={userData.lastName!}
						placeholder="Last Name"
						str="lastName"
						onChange={handleInputChange}
					/>
				</div>
				<div className="flex flex-col">
					<label
						htmlFor="email"
						className="mb-2 w-fit text-neutral-700 font-medium"
					>
						Email address
					</label>
					<InputField
						type="email"
						value={userData.email}
						placeholder="email"
						str="email"
						onChange={handleInputChange}
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
						value={userData.password}
						placeholder="password"
						str="password"
						onChange={handleInputChange}
					/>
				</div>
			</div>

			<div className="flex flex-col gap-6">
				<span className="text-center font-medium text-neutral-400 cursor-pointer hover:underline hover:text-neutral-700">
					By signing up, you agree to our terms of use.
				</span>
				<Button type="primary">Sign up</Button>
			</div>
		</div>
	);
}
