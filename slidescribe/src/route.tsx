import { useRoutes } from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import AboutPage from "./components/pages/About/AboutPage";
import SignUpAuthPage from "./components/pages/Auth/SignUpAuthPage";
import LoginAuthPage from "./components/pages/Auth/LoginAuthPage";
import AccountPage from "./components/pages/Account/AccountPage";
import Sidebar from "./components/organisms/Sidebar";
import DashboardPage from "./components/pages/Dashboard/DashboardPage";
import { useState } from "react";

const Routes = () => {
	const [isOpen, setIsOpen] = useState(false);

	const element = useRoutes([
		{ path: "/", element: <HomePage /> },
		{
			path: "/dashboard",
			element: <Sidebar />,
			children: [
				{
					path: "",
					element: <DashboardPage isOpen={isOpen} setIsOpen={setIsOpen} />,
				},
				{ path: "account", element: <AccountPage /> },
				{ path: "*", element: <div>404 not found</div> },
			],
		},
		{ path: "/about", element: <AboutPage /> },
		{ path: "/signup", element: <SignUpAuthPage /> },
		{ path: "/login", element: <LoginAuthPage /> },
		{ path: "*", element: <div>Not Found</div> },
	]);

	return element;
};

export default Routes;
