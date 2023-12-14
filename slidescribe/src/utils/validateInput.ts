import { AuthUserData } from "../services/@types/authTypes";

interface ValidateError {
	firstName?: string;
	lastName?: string;
	email?: string;
	password?: string;
}

const validateInput = ({
	firstName,
	lastName,
	email,
	password,
}: AuthUserData) => {
	const errors: ValidateError = {};

	const userNameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

	if (firstName && !userNameRegex.test(firstName)) {
		errors.firstName =
			"First name must be alphanumeric with underscores or hyphens, 3-16 characters long.";
	}
	if (lastName && !userNameRegex.test(lastName)) {
		errors.lastName =
			"Last name must be alphanumeric with underscores or hyphens, 3-16 characters long.";
	}
	if (!email || !emailRegex.test(email)) {
		errors.email = "Please enter a valid email address";
	}
	if (!password || !passwordRegex.test(password)) {
		errors.password =
			"Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long.";
	}

	return errors;
};

export default validateInput;
