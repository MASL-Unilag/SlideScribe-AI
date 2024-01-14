import {useEffect, useState} from "react";
import Overlays from "../../organisms/Overlays.tsx";
import close from "../../../assets/close.svg";
import caution from "../../../assets/caution.svg";
import Button from "../../organisms/Button.tsx";
import UploadFile, {FileUploadState} from "./UploadFile.tsx";

export default function UploadDialog({isOpen, setIsOpen}: {
    isOpen: boolean; setIsOpen: (isOpen: boolean) => void
}) {
    const [uploadState, setUploadState] = useState<FileUploadState>('default')
    const [progress, setProgress] = useState<number>(0)
    const [file, setFile] = useState<File | null>(null)
    const [page, setPage] = useState<number>(0)

    const [button, setButton] = useState({
        text: 'Continue',
        disabled: true
    })

    useEffect(() => {
        setButton({
            text: page === 1 ? 'Create slide' : 'Continue',
            disabled: file === null
        })
    }, [uploadState, file, page])

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    const uploadFile = () => {

    }

    const uploadData = () => {

    }

    const cancelFileUpload = () => {
        setUploadState('default')
        setFile(null)
        setProgress(0)
        setPage(0)
    }

    const onNext = () => {
        if (!file) {
            return
        }
        switch (page) {
            case 0:
                // if file upload has not begun, start it
                setUploadState('loading')
                uploadFile()
                setPage(1)
                return
            case 1:
                uploadData()
                return
        }
    }

    return (
        <div className="modal">
            <Overlays
                children={
                    <>
                        <div
                            className="modal_content flex flex-col bg-neutral-0 h-[73%] rounded-md text-base"
                        >
                            <Header toggleOpen={toggleOpen}/>
                            <UploadFile
                                file={file}
                                state={uploadState}
                                progress={progress}
                                onFileChange={setFile}
                                onReUpload={uploadFile}
                                onCancel={cancelFileUpload}
                            />
                            <Footer
                                toggleOpen={toggleOpen}
                                onNext={onNext}
                                buttonText={button.text}
                                buttonDisabled={button.disabled}
                            />
                        </div>
                    </>
                }
                isOpen={isOpen}
            />
        </div>
    )
}

function Header({toggleOpen}: { toggleOpen: () => void }) {
    return (
        <>
            <div className="top_modal">
                <div className="top_modal-nav flex justify-between items-center py-4 px-6">
                    <h1 className="text-body text-neutral-900 font-medium">Create new slide</h1>
                    <button className="border border-solid border-neutral-50 rounded-md p-1" onClick={toggleOpen} type="button">
                        <img src={close} alt="close" className="w-4"/>
                    </button>
                </div>
                <hr className="text-neutral-50"/>
            </div>
            <div className="flex items-center gap-2 mt-6 px-8">
                <img src={caution} alt="caution" className="w-4"/>
                <p className="text-caption text-neutral-500">
                    Single upload file should not be more than 10MB.{" "}
                    <b>PDF, DOC, TXT</b> file are supported.
                </p>
            </div>
        </>
    )
}

function Footer({toggleOpen, buttonText, buttonDisabled, onNext}: {
    toggleOpen: () => void,
    buttonText: string,
    buttonDisabled: boolean,
    onNext: () => void
}) {
    return (
        <div className="modal-footer mt-10">
            <hr className="text-neutral-50"/>
            <div className="top_modal-nav flex justify-end gap-4 items-center py-2 px-8">
                <Button
                    variant="quaternary"
                    type="button"
                    styleHolder="w-max text-sm font-medium"
                    onClick={toggleOpen}
                >
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    type="button"
                    styleHolder="w-max text-sm font-medium"
                    disabled={buttonDisabled}
                    onClick={onNext}
                >
                    {buttonText}
                </Button>
            </div>
        </div>
    )
}