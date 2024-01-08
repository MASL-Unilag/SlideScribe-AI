import {CSSProperties} from "react";

interface StylesProp {
    textDecorated: CSSProperties;
    neutralDark: CSSProperties;
}

const Styles: StylesProp = {
    textDecorated: {
        background: "-webkit-linear-gradient(#1479FF, #8C33FF)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    },
    neutralDark: {
        color: "#253858"
    }
}

export default Styles;