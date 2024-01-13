import Button from "./Button.tsx";
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

export default function Navigation({currentScreen}: { currentScreen?: string }) {
    // State to manage the navbar visibility
    const [nav, setNav] = useState(false)

    // Toggle function to handle the navbar display
    const toggleNav = () => {
        setNav(!nav);
    }

    const getScreens = (classes: string) => {
        return screens.map((screen, index) => (
            <Link
                key={index}
                className={`${classes} px-3 py-2 cursor-pointer  text-neutral-900 ${screen.name === currentScreen && "border-b-2 border-purple-400"}`}
                to={screen.link}
            >
                {screen.name}
            </Link>
        ))
    }

    const buttons = [
        <Button variant="tertiary">
            <Link to="/login">
                Login
            </Link>
        </Button>,
        <Button variant="secondary">
            <Link to="/signup">
                Get started for free
            </Link>
        </Button>
    ]

    return (
        <nav className="border-b border-b-neutral-40">
            <div className="flex items-center justify-between text-sm font-medium py-4 md:w-h m-auto px-h md:px-0">

                {/* Mobile Navigation Icon */}
                <div onClick={toggleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                {/* Logo */}
                <div className="flex gap-3 items-center">
                    <img src={logo} alt="SlideScribe AI"/>
                    <span className="text-neutral-900">
                      <Link to="/">
                      SlideScribe AI
                      </Link>
                      </span>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-2">
                    {getScreens('')}
                </ul>

                <div className="hidden md:flex gap-2">
                    {buttons}
                </div>

                <span className="block md:hidden"/>
            </div>


            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'block md:hidden border-r border-r-gray-900 ease-in-out duration-1000 p-h'
                        : 'ease-in-out hidden duration-1000'
                }
            >
                {getScreens('block py-4 text-center')}
                <div className="flex gap-6 justify-center mt-6">
                    {buttons}
                </div>
            </ul>
        </nav>
    )
}

const screens = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About Us",
        link: "/about"
    },
]