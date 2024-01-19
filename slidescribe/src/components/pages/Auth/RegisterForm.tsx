import InputField from "../../organisms/InputField";
import Button from "../../organisms/Button.tsx";
import { AuthUserData } from "../../../services/@types/authTypes";
import AuthService from "../../../services/authService";
import apiEndpoints from "../../../constants/apiEndpoints";
import { SignUpSchema } from "../../../utils/validateInput";
import { Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const initialValues: AuthUserData = {
	password: "",
	email: "",
	firstname: "",
	lastname: "",
};

export default function RegisterForm() {
	const authService = new AuthService(apiEndpoints.auth);
	const navigate = useNavigate();

	const handleSignUp = async (
		values: AuthUserData,
		{ setSubmitting }: FormikHelpers<AuthUserData>
	) => {
		Swal.fire({
			title: "Signing up",
			icon: "info",
			showConfirmButton: false,
		});
		try {
			const res = await authService.signup(values);
			if (res.data.user_id) {
				Swal.fire({
					title: "You've successfully signed up",
					icon: "success",
				});
				navigate("/login");
			}
		} catch (err: unknown) {
			if (err instanceof Error) {
				console.error("Login Error:", err.message);
			} else {
				console.error("An unknown error occurred during login");
			}
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSignUp}
			validationSchema={SignUpSchema}>
			{(formik) => {
				return (
					<form onSubmit={formik.handleSubmit}>
						<div className="flex flex-col gap-10 max-w-xl p-16 m-auto border border-neutral-50 rounded-md bg-neutral-0 min-w-[534px]">
							<div className="flex flex-col gap-8">
								<div className="flex flex-col">
									<label
										htmlFor="firstname"
										className="mb-2 w-fit text-neutral-700 font-medium">
										First Name
									</label>
									<InputField
										type="text"
										value={formik.values.firstname!}
										placeholder="First Name"
										str="firstname"
										onChange={formik.handleChange}
									/>
									{formik.touched.firstname && formik.errors.firstname ? (
										<div className="text-red-500">
											{formik.errors.firstname}
										</div>
									) : null}
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="lastname"
										className="mb-2 w-fit text-neutral-700 font-medium">
										Last Name
									</label>
									<InputField
										type="text"
										value={formik.values.lastname!}
										placeholder="Last Name"
										str="lastname"
										onChange={formik.handleChange}
									/>
									{formik.touched.lastname && formik.errors.lastname ? (
										<div className="">{formik.errors.lastname}</div>
									) : null}
								</div>
								<div className="flex flex-col">
									<label
										htmlFor="email"
										className="mb-2 w-fit text-neutral-700 font-medium">
										Email address
									</label>
									<InputField
										type="email"
										value={formik.values.email}
										placeholder="email"
										str="email"
										onChange={formik.handleChange}
									/>
									{formik.touched.email && formik.errors.email ? (
										<div className="text-red-500">{formik.errors.email}</div>
									) : null}
								</div>

								<div className="flex flex-col w-full">
									<label
										htmlFor="password"
										className="mb-2 w-fit text-neutral-700 font-medium">
										Password
									</label>
									<InputField
										type="password"
										value={formik.values.password}
										placeholder="password"
										str="password"
										onChange={formik.handleChange}
									/>
									{formik.touched.password && formik.errors.password ? (
										<div className="text-red-500">{formik.errors.password}</div>
									) : null}
								</div>
							</div>

							<div className="flex flex-col gap-6">
								<span className="text-center font-medium text-neutral-400 cursor-pointer hover:underline hover:text-neutral-700">
									By signing up, you agree to our terms of use.
								</span>
								<Button
									variant="primary"
									type="submit"
									disabled={formik.isSubmitting}>
									Sign up
								</Button>
							</div>
						</div>
					</form>
				);
			}}
		</Formik>
	);
}
