import close from "../../../assets/close.svg";
import check from "../../../assets/check.svg";
import note from "../../../assets/note.svg";
import Button from "../../organisms/Button.tsx";
import {useRef} from "react";
import {formatFileSize} from "../../../utils/formatters.ts";

export default function UploadFile({file, state, progress, onFileChange, onReUpload, onCancel}: {
    file: File | null,
    state: FileUploadState,
    progress: number,
    onFileChange: (file: File) => void,
    onReUpload: () => void,
    onCancel: () => void
}) {
    return (
        <div
            className="px-8 py-6 mx-8 mt-10 rounded-md border-2 border-dotted flex flex-1 justify-center items-center bg-[#fafbfc]"
        >
            {
                file ?
                    <ProgressFileUpload
                        file={file}
                        state={state}
                        progress={progress}
                        onReUpload={onReUpload}
                        onCancel={onCancel}
                    /> : <EmptyFileUpload onFileSelected={onFileChange}/>
            }
        </div>
    )
}


function EmptyFileUpload(
    {onFileSelected}: { onFileSelected: (file: File) => void }
) {
    const inputRef = useRef<HTMLInputElement>(null)
    const selectFile = () => {
        inputRef.current?.click()
    }

    const handleFileSelected = () => {
        const files = inputRef.current?.files
        if (files) {
            onFileSelected(files[0])
        }
    }

    return (
        <div className="flex items-center justify-center flex-col relative">
            <div className="notes flex gap-0">
                <img src={note} alt=""/>
                <img src={note} alt=""/>
                <img src={note} alt=""/>
            </div>
            <div className="text-center mt-6 text-caption text-neutral-700">
                Drag and drop your file here <br/> or <br/>
                <Button
                    variant="secondary"
                    styleHolder="w-max text-sm font-medium text-body"
                    type="button"
                    onClick={selectFile}
                >
                    + Select file to upload
                </Button>
                <label
                    htmlFor="file"
                    className="block text-gray-700 text-sm font-bold mb-2"
                />
                <input
                    className="opacity-0 absolute h-10 top-[125px] left-0 w-full cursor-pointer"
                    type="file"
                    name="file"
                    id="file"
                    accept=".pdf,.doc,.docx,.txt"
                    ref={inputRef}
                    onChange={handleFileSelected}
                />
            </div>
        </div>
    )
}

function ProgressFileUpload({file, state, progress, onReUpload, onCancel}: {
    file: File,
    state: FileUploadState,
    progress: number,
    onReUpload: () => void,
    onCancel: () => void
}) {
    const borderColor = {
        default: 'border-neutral-200',
        loading: 'border-neutral-200',
        error: 'border-red-500',
        success: 'border-green-300',
    }
    const progressColor = {
        default: 'bg-neutral-200',
        loading: 'bg-neutral-200',
        error: 'bg-red-500',
        success: 'bg-green-300',
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className={`p-2 rounded-md border border-solid ${borderColor[state]} w-full`}>

                {/* File Info */}
                <div className="flex items-start">
                    <div className="flex-1 text-body font-medium">
                        <p className="text-neutral-900">{file.name}</p>
                        <p className="text-neutral-400">{formatFileSize(file.size)}</p>
                    </div>

                    <button onClick={onCancel} type="button">
                        <img src={close} alt="close" className="w-4"/>
                    </button>
                </div>

                {/* Progress indicator */}
                <div className="mt-3 h-[0.375rem] bg-gray-85 rounded-[0.25rem]">
                    <div
                        className={`${progressColor[state]} rounded-[0.25rem] h-full`}
                        style={{width: `${progress}%`}}
                    />
                </div>
            </div>

            {
                // State indicator
                state !== 'default' && (
                    <div className="flex flex-col flex-1 gap-[1.13rem] items-center mt-8">
                        <p className="text-body font-medium text-neutral-900">
                            {state === 'error'
                                ? 'Upload failed ' : state === 'success'
                                    ? 'File uploaded successfully' : 'Uploading...'
                            }
                            {state === 'error' && (
                                <button
                                    onClick={onReUpload}
                                    type="button"
                                    className="text-neutral-200 underline"
                                >
                                    Re-upload
                                </button>
                            )}
                        </p>
                        {state === 'success' && (
                            <img src={check} alt={state}/>
                        )}
                    </div>
                )
            }
        </div>
    )
}

export type FileUploadState = 'default' | 'loading' | 'success' | 'error'