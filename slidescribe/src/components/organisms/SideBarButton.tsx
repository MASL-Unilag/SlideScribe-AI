import { ReactNode } from "react";
import { IconType } from "react-icons";
import { useLocation, Link } from "react-router-dom";

interface SideBarButtonProp {
	children: ReactNode;
	icon: IconType;
	route: string;
}
const SideBarButton = ({ children, icon: Icon, route }: SideBarButtonProp) => {
	const currentRoute = useLocation().pathname.split("/")[2];
    const isActive = route === currentRoute || currentRoute === undefined && route == "";
	return (
		<Link to={route}>
			<div
				className={`${
					isActive ? "bg-neutral-20" : ""
				} p-3 rounded-md flex items-center gap-2 cursor-pointer`}>
				<Icon className="text-neutral-100 text-xl" />
				<p className="text-base font-medium">{children}</p>
			</div>
		</Link>
	);
};

export default SideBarButton;
