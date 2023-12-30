import avatar from "../../assets/Microsoft.svg";
import { IoMdMore } from "react-icons/io";
import { useState } from "react";
import ProfileOptions from "./ProfileOptions";

const ProfileInfo = () => {
	const [isVisible, setIsVisible] = useState(false);
	const handleToggle = () => {
		setIsVisible((prevState) => !prevState);
	};
	return (
		<div>
			<ProfileOptions isVisible={isVisible} />
			<div className="flex justify-between items-center">
				<img src={avatar} alt="avatar" className="w-12 h-12 rounded-full" />
				<div>
					<p className="text-sm font-medium text-neutral-900">John Snow</p>
					<p className="text-sm font-medium text-neutral-300">
						johnsnow@gmail.com
					</p>
				</div>
				<IoMdMore
					className="text-2xl cursor-pointer text-neutral-100"
					onClick={handleToggle}
				/>
			</div>
		</div>
	);
};

export default ProfileInfo;
