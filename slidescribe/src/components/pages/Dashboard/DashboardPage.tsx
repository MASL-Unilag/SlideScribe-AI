import Button from "../../organisms/Button.tsx";
import UploadDialog from "./UploadDialog.tsx";

type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

const DashboardPage = (props: Props) => {
    return (
        <>
            <div className="top px-8 py-8">
                <div className="top-nav flex justify-between">
                    <h1>Dashboard</h1>
                    <Button
                        variant="primary"
                        styleHolder="w-max"
                        onClick={() => props.setIsOpen(!props.isOpen)}
                    >
                        + New Slide
                    </Button>
                </div>
            </div>
            <div className="content"></div>
            <UploadDialog
                isOpen={props.isOpen}
                setIsOpen={props.setIsOpen}
            />
        </>
    );
};

export default DashboardPage;
