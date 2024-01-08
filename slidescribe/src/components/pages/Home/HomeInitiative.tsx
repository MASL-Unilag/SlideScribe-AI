import {CSSProperties} from "react";
import Microsoft from "../../../assets/Microsoft.svg";
import ADC from "../../../assets/ADC.svg";
import useMediaQuery from "../../../styles/mediaQuery.ts";

function Company({name, logo}: { logo: string, name: string }) {
    const companyStyle: CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
    }

    return (
        <div style={companyStyle}>
            <img src={logo} alt={name}/>
            {name}
        </div>
    );
}

export default function HomeInitiative() {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');

    const sectionStyle: CSSProperties = {
        padding: "1.56rem 0",
        background: "#FFF",
        width: isSmallScreen ? "100%" : "80%",
        margin: "auto",
    }

    const h2Style: CSSProperties = {
        fontSize: "1.125rem",
        fontWeight: "600",
        textAlign: "center",
        marginBottom: "1.13rem",
    }

    return (
        <section
            className="container flex flex-col justify-center items-center"
            style={sectionStyle}
        >
            <h2 style={h2Style}>An initiative of</h2>
            <div className="flex gap-6">
                <Company name="Microsoft" logo={Microsoft}/>
                <Company name="Microsoft ADC" logo={ADC}/>
            </div>
        </section>
    )
}