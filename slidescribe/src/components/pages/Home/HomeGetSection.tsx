import {CSSProperties} from "react";
import {Link} from "react-router-dom";
import Button from "../../organisms/Button.tsx";
import Styles from "../../../styles";
import useMediaQuery from "../../../styles/mediaQuery.ts";

export default function HomeGetSection() {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');

    const sectionStyle: CSSProperties = {
        padding: isSmallScreen ? "0 1.56rem " : "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "4rem 0"
    }

    const h1Style: CSSProperties = {
        fontSize: "1.75rem",
        fontWeight: "600",
        textAlign: "center",
        width: isSmallScreen ? "100%" : "47%",
        marginBottom: "1.5rem",
        ...Styles.textDecorated
    }

    const pStyle: CSSProperties = {
        fontSize: "0.875rem",
        textAlign: "center",
        width: isSmallScreen ? "100%" : "35%",
        marginBottom: "1.75rem"
    }

    return (
        <section style={sectionStyle}>
            <h1 style={h1Style}>
                Your notes, converted to a slide by our
                advanced and most powerful AI
            </h1>
            <p style={pStyle}>
                Upload your notes, and let our powerful AI do the conversion for you automatically.
                You will never have to worry about outdated material.
            </p>
            <div className="flex gap-6">
                <Link to="/signup">
                    <Button variant="quaternary">
                        View templates
                    </Button>
                </Link>
                <Link to="/login">
                    <Button variant="primary">
                        Get started for free
                    </Button>
                </Link>
            </div>
        </section>
    );
}