import { useState, useEffect } from "react";

interface useAuthInterface {
	isAuthenticated: boolean;
	authToken: string | null;
	clearToken: () => void;
	saveToken: (token: string) => void;
}

const useAuth = (): useAuthInterface => {
	const [authToken, setAuthToken] = useState<useAuthInterface["authToken"]>(null);
	useEffect(() => {
		setAuthToken(localStorage.getItem("token"));
	}, []);
	const clearToken = () => {
		localStorage.removeItem("token");
		setAuthToken(null);
	};
	const saveToken: useAuthInterface["saveToken"] = (token) => {
		localStorage.setItem("token", token);
		setAuthToken(token);
	};
	return { isAuthenticated: !!authToken, authToken, clearToken, saveToken };
};

export default useAuth;
