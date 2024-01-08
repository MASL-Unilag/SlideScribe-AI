import {CSSProperties} from "react";

interface StylesProp {
    textDecorated: CSSProperties;
    neutralDark700: CSSProperties;
    neutralDark900: CSSProperties;
}

const Styles: StylesProp = {
    textDecorated: {
        background: "-webkit-linear-gradient(#1479FF, #8C33FF)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    },
    neutralDark700: {
        color: "#253858"
    },
    neutralDark900: {
        color: "#061938"
    }
}

export default Styles;