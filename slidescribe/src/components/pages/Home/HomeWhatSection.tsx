import {CSSProperties} from "react";
import Styles from "../../../styles";
import useMediaQuery from "../../../styles/mediaQuery.ts";
import cpu from "../../../assets/cpu.svg";

const items = [
    {
        title: 'Predictive Text AI',
        content: 'Providing references and updated references to the notes being converted.',
    },
    {
        title: 'User-Friendly Interface',
        content: 'An excellent user interface ensures ease of use and a positive user experience.',
    },
    {
        title: 'Collaboration Potential',
        content: 'The software can foster collaborative learning, a feature not commonly found similar solution.',
    },
    {
        title: 'Language Text Ai translator',
        content: 'Multilingual language translator to support indigenous Language to support local languages.',
    },
    {
        title: 'Export Formats',
        content: 'The ability to export to both PDF and PowerPoint formats provides flexibility for users.',
    },
    {
        title: 'AI-Powered Generation',
        content: 'The AI-driven content generation ensures that materials are engaging and informative, saving time.',
    },
].map((item, index) => ({...item, index: index + 1}));

function Card({index, title, content}: { index: number, title: string, content: string }) {

    const borderStyle: CSSProperties = index % 2 === 0 ? {
        borderBottom: "none",
    } : index % 3 === 0 ? {
        borderLeft: "none",
        borderTop: "none",
    } : {
        borderBottom: "none",
        borderTop: "none",
    }

    const cardStyle: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem",
        borderRadius: "0.375rem",
        border: "2px solid #5243AA",
        ...borderStyle,
    }

    const h1Style: CSSProperties = {
        fontSize: "1.125rem",
        fontWeight: "600",
        ...Styles.textDecorated,
    }

    const imageStyle: CSSProperties = {
        width: "1.5rem",
        marginBottom: "1rem"
    }

    const contentStyle: CSSProperties = {
        fontSize: "0.875rem",
        ...Styles.neutralDark700,
    }

    return (
        <div style={cardStyle}>
            <img src={cpu} style={imageStyle} alt={title}/>
            <h1 style={h1Style}>{title}</h1>
            <p style={contentStyle}>{content}</p>
        </div>
    );
}

export default function HomeWhatSection() {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');

    const sectionStyle: CSSProperties = {
        margin: isSmallScreen ? "4rem auto 0" : "8.25rem auto 0",
        width: isSmallScreen ? "100%" : "71%",
        padding: isSmallScreen ? "0 1.56rem " : "0",
    }

    const h1Style: CSSProperties = {
        fontSize: "1.625rem",
        fontWeight: "500",
        marginBottom: "3.81rem",
        ...Styles.textDecorated
    }

    const itemStyle: CSSProperties = {
        display: "grid",
        gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr 1fr",
        gap: "2.75rem",
    }

    return (
        <section
            className="container flex flex-col"
            style={sectionStyle}
        >
            <h1 style={h1Style}>What can you do with<br/>SlideScribe AI solution?</h1>

            <div style={itemStyle}>
                {items.map((item) => <Card key={item.index} {...item}/>)}
            </div>
        </section>
    );
}