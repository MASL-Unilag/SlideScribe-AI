import {useRoutes} from "react-router-dom";
import HomePage from "./components/pages/Home/HomePage";
import AboutPage from "./components/pages/About/AboutPage";
import SignUpAuthPage from "./components/pages/Auth/SignUpAuthPage";
import LoginAuthPage from "./components/pages/Auth/LoginAuthPage";
import AccountPage from "./components/pages/Account/AccountPage";
import Sidebar from "./components/organisms/Sidebar";
import DashboardPage from "./components/pages/Dashboard/DashboardPage";
import {WithTokenRedirect} from "./utils/WithTokenRedirect";

const Routes = () => {
    return useRoutes([
        {path: "/", element: <HomePage/>},
        {
            path: "/dashboard",
            element: (
                <WithTokenRedirect>
                    <Sidebar/>
                </WithTokenRedirect>
            ),
            children: [
                {
                    path: "",
                    element: <DashboardPage/>,
                },
                {path: "account", element: <AccountPage/>},
                {path: "*", element: <div>404 not found</div>},
            ],
        },
        {path: "/about", element: <AboutPage/>},
        {path: "/signup", element: <SignUpAuthPage/>},
        {path: "/login", element: <LoginAuthPage/>},
        {path: "*", element: <div>Not Found</div>},
    ]);
};

export default Routes;
