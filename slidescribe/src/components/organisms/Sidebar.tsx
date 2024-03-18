import {Link, Outlet} from "react-router-dom";
import logo from "../../assets/logo.svg";
import SideBarButton from "./SideBarButton";
import {FiGrid} from "react-icons/fi";
import ProfileInfo from "./ProfileInfo";
import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

export default function Sidebar() {
    const [visible, setVisible] = useState(false)

    const navigationButton = (
        <div onClick={() => setVisible(!visible)} className='block md:hidden p-4'>
            {visible ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
    )

    return (
        <div className="flex border-t-2 border-neutral-50 h-[100vh]">
            <div
                className={
                    `
                        absolute md:relative md:w-1/4 bg-neutral-0 h-full overflow-hidden
                        border-r border-neutral-50 
                        ease-in-out duration-1000
                        flex flex-col gap-6
                        ${visible ? "w-full p-4" : "w-0"}
                    `
                }
            >
                <div className="w-full p-4 flex items-center justify-between border-b border-neutral-50">
                    <div className="flex-1 flex gap-3 items-center">
                        <img src={logo} alt="SlydeGen AI Logo"/>
                        <h2 className="font-medium text-sm">
                            <Link to="/">SlydeGen AI</Link>
                        </h2>
                    </div>
                    {navigationButton}
                </div>
                <div className="flex flex-col justify-between flex-1">
                    <SideBarButton icon={FiGrid} route="">Dashboard</SideBarButton>
                    <ProfileInfo/>
                </div>
            </div>
            <div className="w-full overflow-y-auto max-h-full">
                <Outlet context={{navigationButton} satisfies SidebarOutlet}/>
            </div>
        </div>
    );
}

export type SidebarOutlet = {
    navigationButton?: React.ReactNode;
}