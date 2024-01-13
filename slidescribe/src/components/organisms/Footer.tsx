import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";

function Links({title, links}: { title: string, links: string[] }) {
    return (
        <div className="flex flex-col min-w-full justify-start gap-4 text-body">
            <h3 className="font-bold text-neutral-900 mb-2">{title}</h3>
            {links.map((link, index) => (
                <Link key={index} className="font-medium text-neutral-700 text-none" to="https://google.com/">
                    {link}
                </Link>
            ))}
        </div>
    )
}

export default function Footer() {
    const imageClass = "w-8 h-8";

    return (
        <footer className="border-t border-solid border-t-purple-75">
            <div
                className="py-14 px-h md:px-0 m-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 justify-center items-center w-full md:w-h"
            >
                <div className="flex flex-col justify-between min-h-full gap-4">
                    <div className="flex items-center gap-3 font-medium text-body">
                        <img src={logo} alt="SlideScribe AI" className={imageClass}/>
                        <h3>SlideScribe AI</h3>
                    </div>
                </div>
                <div className="flex flex-col min-w-full justify-start gap-4 text-body">
                    <h3 className="font-bold text-neutral-900 mb-2"> Quick Links</h3>
                        <Link to="/about">
                            About Us
                        </Link>
                        <Link to="/about">
                            Team
                        </Link>
                </div>
                <Links title="Help & Support" links={["FAQs", "Terms", "Privacy"]}/>
                <p className="text-neutral-900 font-medium mt-10 text-body">
                    &copy; {new Date().getFullYear()} SlideScribe
                    AI. All rights reserved.
                </p>
            </div>
        </footer>
    )
}