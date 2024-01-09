import {Link} from "react-router-dom";
import Button from "../../organisms/Button.tsx";

export default function HomeWhatNextSection() {
    return (
        <section className="px-h md:px-0 my-40 flex flex-col justify-center items-center">
            <h1 className="text-heading font-medium text-center text-decorated">What next?</h1>
            <p className="text-body text-center w-full md:w-sh mt-5 mb-10">
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