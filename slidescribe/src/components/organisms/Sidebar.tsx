import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import SideBarButton from "./SideBarButton";
import { FiGrid } from "react-icons/fi";
import ProfileInfo from "./ProfileInfo";

const Sidebar = () => {
	return (
		<div className="border-t-2 border-neutral-50 flex h-[100vh]">
			<div className="w-1/4 border-r border-neutral-50 p-4">
				<div className="p-4 gap-3 flex items-center border-b border-neutral-50 pt-0 mb-6">
					<img src={logo} alt="logo" />
					<h2 className="font-medium text-sm ">SlideScribe AI</h2>
				</div>
				<div className="flex flex-col justify-between h-[85%]">
					<SideBarButton icon={FiGrid} route="">
						Dashboard
					</SideBarButton>
					<ProfileInfo />
				</div>
			</div>
			<div className="w-full overflow-y-auto max-h-full px-8 py-2">
				<Outlet />
			</div>
		</div>
	);
};

export default Sidebar;
