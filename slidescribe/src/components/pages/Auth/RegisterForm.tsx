import InputField from "../../organisms/InputField";
import Button from "../../organisms/Button.tsx";
import { AuthUserData } from "../../../services/@types/authTypes";
import AuthService from "../../../services/authService";
import apiEndpoints from "../../../constants/apiEndpoints";
import { SignUpSchema } from "../../../utils/validateInput";
import { Formik, FormikHelpers } from "formik";

const initialValues: AuthUserData = {
	password: "",
	email: "",
	firstName: "",
	lastName: "",
};

export default function RegisterForm() {
	const authService = new AuthService(apiEndpoints.auth);

	const handleSignUp = async (
		values: AuthUserData,
		{ setSubmitting }: FormikHelpers<AuthUserData>
	) => {
		console.log(values);
		try {
			const res = await authService.signup(values);
			console.log(res.json());
		} catch (err: any) {
			console.error(err.message);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSignUp}
			validationSchema={SignUpSchema}
		>
			{(formik) => {
				return (
					<form onSubmit={formik.handleSubmit}>
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
										value={formik.values.firstName!}
										placeholder="First Name"
										str="firstName"
										onChange={formik.handleChange}
									/>
									{formik.touched.firstName &&
									formik.errors.firstName ? (
										<div className="text-red-500">
											{formik.errors.firstName}
										</div>
									) : null}
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
										value={formik.values.lastName!}
										placeholder="Last Name"
										str="lastName"
										onChange={formik.handleChange}
									/>
									{formik.touched.lastName &&
									formik.errors.lastName ? (
										<div className="">
											{formik.errors.lastName}
										</div>
									) : null}
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
										value={formik.values.email}
										placeholder="email"
										str="email"
										onChange={formik.handleChange}
									/>
									{formik.touched.email &&
									formik.errors.email ? (
										<div className="text-red-500">
											{formik.errors.email}
										</div>
									) : null}
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
								<span className="text-center font-medium text-neutral-400 cursor-pointer hover:underline hover:text-neutral-700">
									By signing up, you agree to our terms of
									use.
								</span>
								<Button
									variant="primary"
									type="submit"
									disabled={formik.isSubmitting}
								>
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
