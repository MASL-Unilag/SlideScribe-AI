import { FiDownloadCloud } from "react-icons/fi";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";
import Button from "./Button";

const Banner = ({
	status,
	cancelPPTXGen,
	previewPPTX,
}: {
	status: string | null;
	cancelPPTXGen: () => void;
	previewPPTX: () => void;
}) => {
	const [message, setMessage] = useState<string | null>(null);
	const [btnVal, setBtnVal] = useState<string | null>(null);

	useEffect(() => {
		switch (status) {
			case "completed":
				setMessage("Your presentation has been successfully generated");
				setBtnVal("Preview");
				break;
			case "processing":
				setMessage("Please wait as your presentation is being generated");
				break;
			case "error":
				setMessage("There was an error while generating...  ");
				setBtnVal("Cancel");
				break;
			default:
				setMessage(null);
		}
	}, [status]);

	const bannerStyle = `${
		status === "error"
			? "bg-red-500"
			: status === "completed"
			? "bg-green-300"
			: status === "processing"
			? "bg-neutral-50"
			: "bg-neutral-0"
	}`;
	return (
		<div
			className={`${bannerStyle} rounded-md mb-2 p-4 flex justify-between text-neutral-0`}>
			<div className="flex items-center gap-2">
				{status == "error" && <MdErrorOutline className="text-2xl" />}
				{status == "processing" && (
					<AiOutlineLoading className="animate-spin text-2xl" />
				)}
				{status == "completed" && <FiDownloadCloud className="text-2xl" />}

				<p className="text-xs">{message}</p>
			</div>

			{status == "error" && (
				<Button
					variant="primary"
					onClick={cancelPPTXGen}
					styleHolder="bg-red-50 border-none text-red-500 hover:bg-red-75">
					{btnVal}
				</Button>
			)}
			{status == "completed" && (
				<div className="flex gap-2">
					<Button
						variant="primary"
						onClick={cancelPPTXGen}
						styleHolder="bg-red-50 border-none text-red-500 hover:bg-red-75 ">
						Cancel
					</Button>
					<Button
						variant="secondary"
						onClick={previewPPTX}
						styleHolder="!bg-green-50 hover:!bg-green-75 border-none !text-green-300">
						{btnVal}
					</Button>
				</div>
			)}
		</div>
	);
};

export default Banner;
