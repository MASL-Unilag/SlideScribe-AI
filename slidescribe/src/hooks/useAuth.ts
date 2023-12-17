import { useState, useEffect } from "react";

interface token {
	refreshToken: string;
	accessToken: string;
}

interface useAuthInterface {
	isAuthenticated: boolean;
	authToken: token | null;
	clearToken: () => void;
	saveToken: (token: token) => void;
}

const useAuth = (): useAuthInterface => {
	const [authToken, setAuthToken] =
		useState<useAuthInterface["authToken"]>(null);
	useEffect(() => {
		const tokens = localStorage.getItem("token");
		if (tokens) {
			const parsedTokens = JSON.parse(tokens);
			setAuthToken(parsedTokens);
		} else {
			setAuthToken(null);
		}
	}, []);

	const clearToken = () => {
		localStorage.removeItem("token");
		setAuthToken(null);
	};

	const saveToken: useAuthInterface["saveToken"] = (token) => {
		localStorage.setItem("token", JSON.stringify(token));
		setAuthToken(token);
	};
	return { isAuthenticated: !!authToken, authToken, clearToken, saveToken };
};

export default useAuth;
