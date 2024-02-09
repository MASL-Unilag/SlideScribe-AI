import {useOutletContext} from "react-router-dom";
import {SidebarOutlet} from "../../organisms/Sidebar.tsx";

export enum UploadDialogPage {
    selectFile,
    inputData,
    upload,
    preview
}

export function useSidebar() {
    return useOutletContext<SidebarOutlet>()
}