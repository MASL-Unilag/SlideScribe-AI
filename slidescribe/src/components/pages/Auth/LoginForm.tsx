import InputField from "../../organisms/InputField";
import Button from "../../organisms/Buttons";
import { AuthUserData } from "../../../services/@types/authTypes";
import AuthService from "../../../services/authService";
import apiEndpoints from "../../../constants/apiEndpoints";
import useAuth from "../../../hooks/useAuth";
import { FormikHelpers, Formik } from "formik";
import { LogInSchema } from "../../../utils/validateInput";

export default function LoginForm() {
	const initialValues: AuthUserData = {
		email: "",
		password: "",
	};
	const authService = new AuthService(apiEndpoints.auth);
	const { saveToken } = useAuth();

	const handleLogin = async (
		values: AuthUserData,
		{ setSubmitting }: FormikHelpers<AuthUserData>
	) => {
		try {
			const res = await authService.login({
				email: values.email,
				password: values.password,
			});

			if (!res) {
				throw new Error("Invalid user credentials");
			}

			saveToken(res.tokens);
		} catch (err: any) {
			console.error("Login Error:", err.message);
		} finally {
			setSubmitting(false);
		}
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleLogin}
			validationSchema={LogInSchema}
		>
			{(formik) => (
				<form onSubmit={formik.handleSubmit}>
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
									value={formik.values.email}
									placeholder="email"
									str="email"
									onChange={formik.handleChange}
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
									value={formik.values.password}
									placeholder="password"
									str="password"
									onChange={formik.handleChange}
								/>
								{formik.touched.password &&
								formik.errors.password ? (
									<div className="text-red-500">
										{formik.errors.password}
									</div>
								) : null}
							</div>
						</div>

						<div className="flex flex-col gap-6">
							<Button variant="primary" type="submit">
								Log in
							</Button>
						</div>
					</div>
				</form>
			)}
		</Formik>
	);
}
