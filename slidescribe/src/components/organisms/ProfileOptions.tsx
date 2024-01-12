import SideBarButton from "./SideBarButton";
import { FiUser, FiSettings } from "react-icons/fi";

const ProfileOptions = ({ isVisible }: { isVisible: boolean }) => {
	return (
		<div
			className={`${
				isVisible ? "" : "hidden"
			} w-full border border-neutral-60 rounded-md p-4 shadow-md`}>
			<SideBarButton route="account" icon={FiUser}>
				Account
			</SideBarButton>
			<SideBarButton route="settings" icon={FiSettings}>
				Settings
			</SideBarButton>
		</div>
	);
};

export default ProfileOptions;
