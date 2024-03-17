import { ReactNode, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const WithTokenRedirect = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) {
      const timerId = setTimeout(() => {
        navigate("/login");
      }, 100);

      return () => clearTimeout(timerId);
    }
  }, [isAuthenticated, navigate]);

  return children;
};
