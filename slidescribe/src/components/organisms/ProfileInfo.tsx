import avatar from "../../assets/Microsoft.svg";
import {IoMdMore} from "react-icons/io";
import {useEffect, useState} from "react";
import ProfileOptions from "./ProfileOptions";

interface UserData {
    lastname: string;
    firstname: string;
    email: string;
}

const ProfileInfo = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [userData, setUserData] = useState<UserData | null>(null);
    const handleToggle = () => {
        setIsVisible((prevState) => !prevState);
    };

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setUserData(JSON.parse(user));
        }
    }, []);

    return (
        <div>
            <ProfileOptions isVisible={isVisible}/>
            <div className="flex gap-2 justify-between items-center">
                <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full"/>
                <div className="flex-shrink-[1] min-w-0 overflow-hidden">
                    <p className="text-sm font-medium text-neutral-900">{userData?.firstname} {userData?.lastname}</p>
                    <p className="text-sm font-medium text-neutral-300">{userData?.email}</p>
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
