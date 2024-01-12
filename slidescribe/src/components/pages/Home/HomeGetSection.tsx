import {Link} from "react-router-dom";
import Button from "../../organisms/Button.tsx";

export default function HomeGetSection() {
    return (
        <section className="px-h md:px-0 flex flex-col justify-center items-center my-16">
            <h1 className="text-title font-semibold text-center w-full md:w-[47%] mb-6 text-decorated">
                Your notes, converted to a slide by our
                advanced and most powerful AI
            </h1>
            <p className="text-body text-center w-full md:w-sh mb-[1.75rem]">
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
    )
}