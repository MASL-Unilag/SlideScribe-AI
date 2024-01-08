import {CSSProperties} from "react";
import Styles from "../../../styles";
import useMediaQuery from "../../../styles/mediaQuery.ts";

function Card({content, index, align = 'right'}: { index: number, content: string, align: string }) {
    const isSmallScreen = useMediaQuery('(max-width: 900px)')
    const span = isSmallScreen ? 1 : 2;

    const cardStyle: CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
        gridRow: `${index}`,
        gridColumn: align === 'left' ? '1 / 1' : `${span} / ${span}`,
    }

    const contentStyle: CSSProperties = {
        fontSize: "0.875rem",
    }

    const indexStyle: CSSProperties = {
        fontSize: "1.75rem",
        fontWeight: "500",
        ...Styles.textDecorated,
    }

    return (
        <div style={cardStyle}>
            {align === 'left' && <p style={contentStyle}>{content}</p>}
            <p style={indexStyle}>{index}</p>
            {align === 'right' && <p style={contentStyle}>{content}</p>}
        </div>
    );
}

export default function HomeWhySection() {
    const isSmallScreen = useMediaQuery('(max-width: 900px)');

    const sectionStyle: CSSProperties = {
        margin: isSmallScreen ? "4rem auto 0" : "9.25rem auto 0",
        width: isSmallScreen ? "100%" : "71%",
        padding: isSmallScreen ? "0 1.56rem " : "0",
    }

    const h1Style: CSSProperties = {
        fontSize: "1.625rem",
        fontWeight: "600",
        textAlign: "center",
        marginBottom: "1.25rem",
        ...Styles.textDecorated
    }

    const pStyle: CSSProperties = {
        fontSize: "0.875rem",
        textAlign: "center",
        width: isSmallScreen ? "100%" : "35%",
        marginBottom: "3rem",
    }

    const itemStyle: CSSProperties = {
        display: "grid",
        gridTemplateColumns: isSmallScreen ? "1fr" : "1fr 1fr",
        gap: "1.88rem 1.5rem",
    }

    const items = [
        'In-depth research conducted among educators and students have revealed a prevalent issue in the field of education: the persistent problem',
        'These materials suffer from a lack of engagement due to outdated content, a dearth of visual aids, inadequate explanations, and.',
        'This multifaceted challenge hampers the effectiveness of educational content delivery, impacting both lecturers and students."'
    ].map((content, index) => ({content: content, index: index + 1, align: index % 2 === 0 ? 'left' : 'right'}));

    return (
        <section
            className="container flex flex-col justify-center items-center"
            style={sectionStyle}
        >
            <h1 style={h1Style}>Why SlideScribe AI solution?</h1>

            <p style={pStyle}>
                We discovered interesting facts when we conducted our research and we’d like to share them,
                so you’d understand why we’re so passionate about this product.
            </p>

            <div style={itemStyle}>
                {items.map((item) => <Card key={item.index} {...item}/>)}
            </div>

        </section>
    );
}