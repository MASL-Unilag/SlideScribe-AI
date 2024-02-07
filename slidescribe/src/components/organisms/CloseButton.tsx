import {MdClose} from "react-icons/md";

export function CloseButton(
    {
        close
    }: CloseButtonProps
) {
    return (
        <button
            className="border border-solid border-neutral-50 rounded-md p-1"
            onClick={close}
            type="button">
            <MdClose className="w-4 text-neutral-900"/>
        </button>
    )
}

type CloseButtonProps = {
    close: () => void
}