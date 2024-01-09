import {CSSProperties} from "react";
import useMediaQuery from "../../styles/mediaQuery.ts";
import logo from "../../assets/logo.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import {Link} from "react-router-dom";
import Styles from "../../styles";

function Links({title, links}: { title: string, links: string[] }) {
    const linksStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        justifyContent: "start",
        gap: "1rem",
        fontSize: "0.875rem",
    }

    const headingStyle: CSSProperties = {
        fontWeight: "700",
        marginBottom: "0.5rem",
        ...Styles.neutralDark900,
    }

    const linkStyle: CSSProperties = {
        textDecoration: "none",
        fontWeight: "500",
        ...Styles.neutralDark700,
    }

    return (
        <div style={linksStyle}>
            <h3 style={headingStyle}>{title}</h3>
            {links.map((link, index) => (
                <Link key={index} style={linkStyle} to="https://google.com/">{link}</Link>
            ))}
        </div>
    );

}

export default function Footer() {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');

    const imageStyle: CSSProperties = {
        width: "2rem",
        height: "2rem"
    }

    const footerStyle: CSSProperties = {
        borderTop: "1px solid #C0B6F2",
    }

    const contentStyle: CSSProperties = {
        padding: isSmallScreen ? "3.5rem 1.56rem" : "3.5rem 0",
        margin: "auto",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        width: isSmallScreen ? "100%" : "71%",
        gridTemplateColumns: isSmallScreen ? "1fr" : "2fr 1fr 1fr",
        gap: "2rem"
    }

    const leadStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100%",
        gap: "1rem",
    }

    const logoStyle: CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        fontSize: "0.875rem",
        fontWeight: "500",
    }

    const socialLinksStyle: CSSProperties = {
        display: "flex",
        alignItems: "center",
        gap: "1.5rem",
    }

    const copyrightStyle: CSSProperties = {
        fontSize: "0.875rem",
        fontWeight: "500",
        marginTop: "2.5rem",
        ...Styles.neutralDark900,
    }

    return (
        <footer style={footerStyle}>
            <div style={contentStyle}>
                <div style={leadStyle}>
                    <div style={logoStyle}>
                        <img src={logo} alt="SlideScribe AI" style={imageStyle}/>
                        <h3>SlideScribe AI</h3>
                    </div>
                    <div style={socialLinksStyle}>
                        <Link to="https://instagram.com">
                            <img src={instagram} alt="SlideScribe AI instagram" style={imageStyle}/>
                        </Link>
                        <Link to="https://twitter.com">
                            <img src={twitter} alt="SlideScribe AI twitter" style={imageStyle}/>
                        </Link>
                    </div>
                </div>
                <Links title="Quick Links" links={["About Us", "Team"]}/>
                <Links title="Help & Support" links={["FAQs", "Terms", "Privacy"]}/>
                <p style={copyrightStyle}>&copy; {new Date().getFullYear()} SlideScribe AI. All rights reserved.</p>
            </div>
        </footer>
    )
}