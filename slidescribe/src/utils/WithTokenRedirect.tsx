import { ReactNode, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const WithTokenRedirect = ({ children }: { children: ReactNode }) => {
	const navigate = useNavigate();
	const { isAuthenticated } = useAuth();
	useEffect(() => {
		if (!isAuthenticated) {
			navigate("/login");
		}
	}, [isAuthenticated, navigate]);

	return children;
};
