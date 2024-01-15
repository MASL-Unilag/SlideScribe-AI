import {getTheme} from '../../../../tailwind.config.ts'

import {MdClose, MdInfoOutline} from "react-icons/md";
import {BsCheckCircleFill} from "react-icons/bs";
import Button from "../../organisms/Button.tsx";
import {CSSProperties, useRef} from "react";
import {formatFileSize} from "../../../utils/formatters.ts";
import {DocIcon, PdfIcon, TxtIcon} from "../../organisms/Icons.tsx";

export default function UploadFile({file, state, progress, status, onFileChange, onReUpload, onCancel}: {
    file: File | null,
    state: FileUploadState,
    progress: number,
    status?: string,
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
                        status={status}
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

    // @ts-expect-error Color neutral exists in the config
    const color = getTheme().colors.neutral["80"]
    const documentStyle: CSSProperties = {
        width: "1.5rem",
        height: "1.5rem",
    }

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
                <DocIcon style={{...documentStyle, transform: "rotate(-16deg)"}} color={color}/>
                <PdfIcon style={documentStyle} color={color}/>
                <TxtIcon style={{...documentStyle, transform: "rotate(16deg)"}} color={color}/>
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

function ProgressFileUpload({file, state, progress, status, onReUpload, onCancel}: {
    file: File,
    state: FileUploadState,
    progress: number,
    status?: string,
    onReUpload: () => void,
    onCancel: () => void
}) {
    const colors = getTheme().colors

    const borderColor = status === 'error' ? 'border-red-500' : status === 'success' ? 'border-green-300' : 'border-neutral-200'
    const progressColor = status === 'error' ? 'bg-red-500' : status === 'success' ? 'bg-green-300' : 'bg-neutral-200'
    const textColor = status === 'error' ? colors.red["500"] : status === 'success' ? colors.green["300"] : colors.neutral["200"]

    const extension = file.name.split('.').pop()
    const Icon = extension === 'pdf' ? PdfIcon : extension === 'txt' ? TxtIcon : DocIcon

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className={`p-2 rounded-md border border-solid ${borderColor} w-full flex gap-3`}>
                <Icon color={textColor} style={{width: "1rem", height: "1.25rem"}}/>
                <div className="flex-1">
                    {/* File Info */}
                    <div className="flex items-start">
                        <div className="flex-1 text-body font-medium">
                            <p className="text-neutral-900">{file.name}</p>
                            <p className="text-neutral-400">{formatFileSize(file.size)}</p>
                        </div>

                        <button onClick={onCancel} type="button">
                            <MdClose className="w-4 text-neutral-900"/>
                        </button>
                    </div>

                    {/* Progress indicator */}
                    <div className="mt-3 h-[0.375rem] bg-gray-85 rounded-[0.25rem]">
                        <div
                            className={`${progressColor} rounded-[0.25rem] h-full`}
                            style={{width: `${progress}%`}}
                        />
                    </div>
                </div>
            </div>

            {
                // State indicator
                state !== 'default' && (
                    <div className="flex flex-col flex-1 gap-[1.13rem] items-center mt-8">
                        <p className="text-body font-medium text-neutral-900">
                            {status}
                            {state === 'error' && (
                                <button
                                    onClick={onReUpload}
                                    type="button"
                                    className="ml-1 text-neutral-200 underline"
                                >
                                    Re-upload
                                </button>
                            )}
                        </p>
                        {state === 'success' && <BsCheckCircleFill className="w-6 text-green-300"/>}
                        {state === 'error' && <MdInfoOutline className="w-6 text-red-500"/>}
                    </div>
                )
            }
        </div>
    )
}

export type FileUploadState = 'default' | 'loading' | 'success' | 'error'