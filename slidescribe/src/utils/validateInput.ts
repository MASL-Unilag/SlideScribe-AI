import { object, string } from "yup";

export const SignUpSchema = object({
	firstname: string()
		.required()
		.min(3, "First name must be greater than two characters")
		.max(16, "First name must be less than 16 characters"),
	lastname: string()
		.required("Last name is required")
		.min(3, "Last name must be greater than two characters")
		.max(16, "Last name must be less than 16 characters"),
	email: string().email().required("Email is required"),
	password: string()
		.required("Password is required")
		.min(8, "Password must be greater than 8 characters")
		.matches(/^(?=.*\d)/, "Password must contain at least one digit")
		.matches(
			/^(?=.*[a-z])/,
			"Password must contain at least one lowercase letter"
		)
		.matches(
			/^(?=.*[A-Z])/,
			"Password must contain at least one uppercase letter"
		),
});

export const LogInSchema = object({
	email: string().email().required("Email is required"),
	password: string()
		.required("Password is required")
		.min(8, "Password must be greater than 8 characters")
		.matches(/^(?=.*\d)/, "Password must contain at least one digit")
		.matches(
			/^(?=.*[a-z])/,
			"Password must contain at least one lowercase letter"
		)
		.matches(
			/^(?=.*[A-Z])/,
			"Password must contain at least one uppercase letter"
		),
});
