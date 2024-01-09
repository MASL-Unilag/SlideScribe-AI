import {CSSProperties} from "react";
import cpu from "../../../assets/cpu.svg";

export default function HomeWhatSection() {
    return (
        <section className="flex flex-col m-auto mt-16 md:mt-[8.25rem] w-full md:w-h px-0 md:px-h">
            <h1 className="text-heading font-medium mb-[3.81rem] decorated-text">What can you do with<br/>SlideScribe AI
                solution?</h1>
            <div className="grid gap-11 grid-cols-1 md:grid-cols-3">
                {items.map((item) => <Card key={item.index} {...item}/>)}
            </div>
        </section>
    );
}

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

    return (
        <div
            className="flex flex-col p-6 border-2 border-solid border-purple-400 rounded-[0.375rem]"
            style={borderStyle}
        >
            <img className="w-6 mb-4" src={cpu} alt={title}/>
            <h2 className="text-heading2 font-semibold decorated-text">{title}</h2>
            <p className="text-body text-neutral-700">{content}</p>
        </div>
    );
}

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
