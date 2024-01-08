import {CSSProperties} from "react";
import {Link} from "react-router-dom";
import Button from "../../organisms/Button.tsx";
import Styles from "../../../styles";
import useMediaQuery from "../../../styles/mediaQuery.ts";

export default function HomeWhatNextSection() {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');

    const sectionStyle: CSSProperties = {
        padding: isSmallScreen ? "0 1.56rem " : "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10rem 0"
    }

    const h1Style: CSSProperties = {
        fontSize: "1.625rem",
        fontWeight: "500",
        textAlign: "center",
        ...Styles.textDecorated
    }

    const pStyle: CSSProperties = {
        fontSize: "0.875rem",
        textAlign: "center",
        width: isSmallScreen ? "100%" : "35%",
        marginTop: "1.25rem",
        marginBottom: "2.5rem"
    }

    return (
        <section style={sectionStyle}>
            <h1 style={h1Style}>What next?</h1>
            <p style={pStyle}>
                If you are like us, that have once faced these problems that we just unraveled and
                our solutions seems interesting to you, this is the time to give a shot.
            </p>
            <div className="flex gap-6">
                <Link to="/signup">
                    <Button variant="quaternary">
                        View templates
                    </Button>
                </Link>
                <Link to="/login">
                    <Button variant="secondary">
                        Get started for free
                    </Button>
                </Link>
            </div>
        </section>
    );
}