import {CSSProperties} from "react";
import {Link} from "react-router-dom";
import Button from "../../organisms/Button.tsx";
import Styles from "../../../styles";

export default function HomeGetSection() {
    const sectionStyle: CSSProperties = {
        "@media (maxWidth: 900px)": {
            padding: "0 1rem",
        }
    }

    const h1Style: CSSProperties = {
        fontSize: "1.75rem",
        fontWeight: "600",
        textAlign: "center",
        width: "47%",
        "@media (maxWidth: 900px)": {
            width: "100%",
        },
        ...Styles.textDecorated
    }

    const pStyle: CSSProperties = {
        fontSize: "0.875rem",
        textAlign: "center",
        width: "35%",
        "@media (maxWidth: 900px)": {
            width: "100%",
        }
    }

    return (
        <section
            className="container flex flex-col justify-center items-center my-16"
            style={sectionStyle}
        >
            <h1 className="mb-6" style={h1Style}>
                Your notes, converted to a slide by our
                advanced and most powerful AI
            </h1>
            <p className="mb-7" style={pStyle}>
                Upload your notes, and let our powerful AI do the conversion for you automatically.
                You will never have to worry about outdated material.
            </p>
            <div className="flex gap-6">
                <Link to="/signup" className="btn btn--primary">
                    <Button variant="quaternary">
                        View template
                    </Button>
                </Link>
                <Link to="/login" className="btn btn--secondary">
                    <Button variant="primary">
                        Get started for free
                    </Button>
                </Link>
            </div>
        </section>
    );
}