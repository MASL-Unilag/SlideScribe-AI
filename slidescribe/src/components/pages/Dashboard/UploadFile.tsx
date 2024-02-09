import {Colors} from '../../../../tailwind.config.ts'

import {MdClose, MdErrorOutline} from "react-icons/md";
import {TbFileMusic} from "react-icons/tb";
import {BsCheckCircleFill} from "react-icons/bs";
import Button from "../../organisms/Button.tsx";
import {CSSProperties, useRef} from "react";
import {formatFileSize} from "../../../utils/formatters.ts";
import {DocIcon, PdfIcon, TxtIcon} from "../../organisms/Icons.tsx";
import {UploadDialogPage} from "./Dashboard.element.ts";
import {AiOutlineLoading} from "react-icons/ai";

export default function UploadFile(
    {
        file,
        state,
        page,
        progress,
        message,
        onFileChange,
        onReUpload,
        onCancel
    }: UploadFileProps
) {
    const content = page === UploadDialogPage.selectFile ? (
        <EmptyFileUpload onFileSelected={onFileChange}/>
    ) : page === UploadDialogPage.upload && file ? (
        <ProgressFileUpload
            file={file}
            state={state}
            progress={progress}
            message={message}
            onReUpload={onReUpload}
            onCancel={onCancel}
        />
    ) : null

    return (
        content && (
            <div
                className="px-8 py-6 mx-8 mt-10 rounded-md max-h-full border-2 border-dotted flex flex-1 justify-center items-center bg-[#fafbfc]">
                {content}
            </div>
        )
    )
}


function EmptyFileUpload({onFileSelected}: { onFileSelected: (file: File) => void }) {
    const inputRef = useRef<HTMLInputElement>(null)

    const color = Colors.neutral["80"]
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
            const file = files[0]
            // if file greater than maxFileSize, show error
            if (file.size > maxFileSize * 1024 * 1024) {
                alert(`File size should not be greater than ${maxFileSize}MB`)
                return
            }
            onFileSelected(file)
        }
    }

    return (
        <div className="flex items-center justify-center flex-col relative">
            <div className="notes flex gap-0">
                <DocIcon style={{...documentStyle, transform: "rotate(-16deg)"}} color={color}/>
                <PdfIcon style={documentStyle} color={color}/>
                <TbFileMusic color={color} size={documentStyle.width}/>
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
                    accept=".pdf,.doc,.docx,.txt,audio/*"
                    ref={inputRef}
                    onChange={handleFileSelected}
                />
            </div>
        </div>
    )
}

function ProgressFileUpload({file, state, progress, message, onReUpload, onCancel}: ProgressFileUploadProps) {
    const borderColor = state === 'error' ? 'border-red-500' : state === 'success' ? 'border-green-300' : 'border-neutral-200'
    const progressColor = state === 'error' ? 'bg-red-500' : state === 'success' ? 'bg-green-300' : 'bg-neutral-200'
    const textColor = state === 'error' ? Colors.red['300'] : state === 'success' ? Colors.green['300'] : Colors.neutral['200']

    const extension = file.name.split('.').pop()
    const Icon = extension === 'pdf' ? PdfIcon
        : extension === 'txt' ? TxtIcon :
            extension?.startsWith('doc') ? DocIcon :
                TbFileMusic

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
                            {message}
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
                        {state === 'loading' && <AiOutlineLoading className="w-6 animate-spin text-neutral-200"/>}
                        {state === 'success' && <BsCheckCircleFill className="w-6 text-green-300"/>}
                        {state === 'error' && <MdErrorOutline className="w-6 text-red-500"/>}
                    </div>
                )
            }
        </div>
    )
}

export const maxFileSize = 10

export type FileUploadState = 'default' | 'loading' | 'success' | 'error'

type UploadFileProps = {
    file: File | null,
    page: UploadDialogPage,
    state: FileUploadState,
    progress: number,
    message?: string,
    onFileChange: (file: File) => void,
    onReUpload: () => void,
    onCancel: () => void
}

type ProgressFileUploadProps = {
    file: File,
    state: FileUploadState,
    progress: number,
    message?: string,
    onReUpload: () => void,
    onCancel: () => void
}