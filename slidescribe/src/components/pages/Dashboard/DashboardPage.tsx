import Button from "../../organisms/Button.tsx";
import UploadDialog from "./UploadDialog.tsx";
import {useState} from "react";
import {useSidebar} from "./Dashboard.element.ts";

export default function DashboardPage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const {navigationButton} = useSidebar()

    return (
        <>
            <div className="top px-8 py-8">
                <div className="top-nav flex items-center justify-between">
                    {navigationButton}
                    <h1>Dashboard</h1>
                    <Button
                        variant="primary"
                        styleHolder="w-max"
                        onClick={() => setIsDialogOpen(!isDialogOpen)}
                    >
                        + New Slide
                    </Button>
                </div>
            </div>
            <div className="content"></div>
            <UploadDialog
                isOpen={isDialogOpen}
                setIsOpen={setIsDialogOpen}
            />
        </>
    );
}
