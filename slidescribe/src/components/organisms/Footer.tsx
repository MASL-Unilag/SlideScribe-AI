import logo from "../../assets/logo.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import {Link} from "react-router-dom";

function Links({title, links}: { title: string, links: string[] }) {
    return (
        <div className="flex flex-col min-w-full justify-start gap-4 text-body">
            <h3 className="font-700 text-neutral-900 mb-2">{title}</h3>
            {links.map((link, index) => (
                <Link key={index} className="font-500 text-neutral-700 text-none" to="https://google.com/">
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
                    <div className="flex items-center gap-3 font-500 text-body">
                        <img src={logo} alt="SlideScribe AI" className={imageClass}/>
                        <h3>SlideScribe AI</h3>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link to="https://instagram.com">
                            <img src={instagram} alt="SlideScribe AI instagram" className={imageClass}/>
                        </Link>
                        <Link to="https://twitter.com">
                            <img src={twitter} alt="SlideScribe AI twitter" className={imageClass}/>
                        </Link>
                    </div>
                </div>
                <Links title="Quick Links" links={["About Us", "Team"]}/>
                <Links title="Help & Support" links={["FAQs", "Terms", "Privacy"]}/>
                <p className="text-neutral-900 font-500 mt-10 text-body">
                    &copy; {new Date().getFullYear()} SlideScribe
                    AI. All rights reserved.
                </p>
            </div>
        </footer>
    )
}