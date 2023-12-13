import InputField from "../../organisms/InputField";
import Button from "../../organisms/Buttons";
import { AuthUserData } from "../../../services/@types/authTypes";
import { useState } from "react";
import AuthService from "../../../services/authService";
import apiEndpoints from "../../../constants/apiEndpoints";
import useAuth from "../../../hooks/useAuth";

export default function LoginForm() {
	const authService = new AuthService(apiEndpoints.auth);
	const [userData, setUserData] = useState<AuthUserData>({
		password: "",
		email: "",
	});
	const { saveToken } = useAuth();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData((prevUserData) => ({
			...prevUserData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleLogin = async () => {
		try {
			const res = await authService.login({
				email: userData.email,
				password: userData.password,
			});

			if (!res) {
				throw new Error("Invalid user credentials");
			}

			saveToken(res.tokens);
		} catch (err: any) {
			console.error("Login Error:", err.message);
		}
	};
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
				<Button type="primary" onClick={handleLogin}>
					Log in
				</Button>
			</div>
		</div>
	);
}
