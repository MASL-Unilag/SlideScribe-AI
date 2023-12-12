import { AuthUserData } from "./@types/authTypes";

class AuthService {
	private apiUrl: string;
	constructor(apiUrl: string) {
		this.apiUrl = apiUrl;
	}

	async login(userData: AuthUserData) {
		try {
			const response = await fetch(`${this.apiUrl}/sign-in`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			if (!response.ok) {
				throw new Error("Login Failed");
			}

			const data = await response.json();
			return data; //Returns token authorization
		} catch (err) {
			throw new Error("Login Failed");
		}
	}

	async signup(userData: AuthUserData) {
		try {
			const response = await fetch(`${this.apiUrl}/sign-up`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(userData),
			});

			if (!response.ok) {
				throw new Error("Signup Failed");
			}

			const data = await response.json();
			return data; //Returns token for authorization
		} catch (err) {
			throw new Error("Signup Failed");
		}
	}

	async logout(token: string) {
		try {
			const response = await fetch(`${this.apiUrl}/sign-out`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ token }),
			});

			if (!response.ok) {
				throw new Error("Logout Failed");
			}

			return response.ok;
		} catch (err) {
			throw new Error("Logout Failed");
		}
	}
}

export default AuthService;
