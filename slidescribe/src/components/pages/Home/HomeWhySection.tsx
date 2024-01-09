export default function HomeWhySection() {
    return (
        <section
            className="flex flex-col justify-center items-center m-auto mt-16 md:mt-[9.25rem] w-full md:w-h px-0 md:px-h"
        >
            <h1 className="text-heading font-medium text-center mb-5 text-decorated">
                Why SlideScribe AI solution?
            </h1>

            <p className="text-body text-center w-full md:w-sh mb-12">
                We discovered interesting facts when we conducted our research and we’d like to share them,
                so you’d understand why we’re so passionate about this product.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-[1.88rem]">
                {items.map((item) => <Card key={item.index} {...item}/>)}
            </div>
        </section>
    )
}

function Card({content, index, align = 'right'}: { index: number, content: string, align: string }) {
    let columnStart = "col-start-1"
    if (align !== "left") {
        columnStart += " md:col-start-2"
    }

    return (
        <div
            className={`flex justify-center items-center gap-6 ${columnStart}`}
            style={{gridRow: index}}
        >
            {align === 'left' && <p className="text-body">{content}</p>}
            <p className="text-title font-medium text-decorated">{index}</p>
            {align === 'right' && <p className="text-body">{content}</p>}
        </div>
    )
}

const items = [
    'In-depth research conducted among educators and students have revealed a prevalent issue in the field of education: the persistent problem',
    'These materials suffer from a lack of engagement due to outdated content, a dearth of visual aids, inadequate explanations, and.',
    'This multifaceted challenge hampers the effectiveness of educational content delivery, impacting both lecturers and students."'
].map((content, index) => ({content: content, index: index + 1, align: index % 2 === 0 ? 'left' : 'right'}))