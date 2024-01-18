import { useEffect, useState } from "react";
import Overlays from "../../organisms/Overlays.tsx";
import { MdClose, MdInfoOutline } from "react-icons/md";
import Button from "../../organisms/Button.tsx";
import UploadFile, { FileUploadState } from "./UploadFile.tsx";
import UploadData from "./UploadData.tsx";
import axios from "axios";
import usePPTXProcess from "../../../hooks/usePPTXProcess.ts";
import Banner from "../../organisms/Banner.tsx";
import apiEndpoints from "../../../constants/apiEndpoints.ts";

export default function UploadDialog({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}) {
	const [state, setState] = useState<FileUploadState>("default");
	const [progress, setProgress] = useState<number>(0);
	const [file, setFile] = useState<File | null>(null);
	const [page, setPage] = useState<number>(0);
	const [status, setStatus] = useState<string>();
	const [trackingId, setTrackingId] = useState<string | null>(null);
	const [pptxStatus, pptxUrl, setPPTXStatus] = usePPTXProcess(trackingId);
	const [topic, setTopic] = useState("");
	const [subject, setSubject] = useState("");
	const [numberOfPages, setNumberOfPages] = useState(1);
	const [includePictures, setIncludePictures] = useState(false);
	const [documentStyle, setDocumentStyle] = useState("bullet-points");

	const [button, setButton] = useState({
		text: "Continue",
		disabled: true,
	});

	useEffect(() => {
		setButton({
			text: page === 1 ? "Create slide" : "Continue",
			disabled: file === null,
		});
	}, [state, file, page]);

	useEffect(() => {
		if (pptxStatus === "completed") {
			setButton({ ...button, text: "Preview" });
		}
	}, [pptxStatus, button]);

	const toggleOpen = () => {
		if (isOpen) {
			cancelFileUpload();
			cancelPPTXGen();
		}
		setIsOpen(!isOpen);
	};

	const uploadFile = () => {};

	const uploadData = async () => {
		//Send file and info to the backend for pptx generation
		try {
			const formData = new FormData();
			formData.append("file", file!);
			formData.append("topic", topic);
			formData.append("includeImages", includePictures.toString());
			formData.append("noOfPages", numberOfPages.toString());
			formData.append("outputStyle", documentStyle);
			formData.append("context", subject);

			const accessToken = process.env.REACT_APP_BEARER_ACCESS_TOKEN;
			const config = {
				method: "post",
				maxBodyLength: Infinity,
				url: `${apiEndpoints.slide}/generate`,
				headers: {
					Authorization: `Bearer ${accessToken}`,
					// ...formData.getHeaders(),
					"Content-Type": "multipart/form-data",
				},
				data: formData,
			};

			setPPTXStatus("processing");
			const res = await axios.request(config);
			setTrackingId(res.data.body.slideId);
		} catch (err) {
			console.error("Error: ", err);
			setPPTXStatus("error");
		}
	};

	const cancelFileUpload = () => {
		setState("default");
		setFile(null);
		setStatus(undefined);
		setProgress(0);
		setPage(0);
	};

	const cancelPPTXGen = () => {
		setTrackingId(null);
		setPPTXStatus("idle");
		cancelFileUpload();
	};

	const previewPPTX = () => {
		setPage(2);
	};

	const onNext = () => {
		if (!file) {
			return;
		}
		switch (page) {
			case 0:
				// if file upload has not begun, start it
				setState("error");
				setStatus("Uploading...");
				uploadFile();
				setPage(1);
				return;
			case 1:
				uploadData();
				return;
		}
	};

	return (
		<div className="modal">
			<Overlays
				children={
					<>
						{pptxStatus !== "idle" && (
							<Banner
								status={pptxStatus}
								cancelPPTXGen={cancelPPTXGen}
								previewPPTX={previewPPTX}
							/>
						)}
						<div className="modal_content flex flex-col bg-neutral-0 max-h-[80vh] rounded-md text-base">
							{page === 2 ? <></> : <Header toggleOpen={toggleOpen} />}
							{page === 0 && (
								<UploadFile
									file={file}
									state={state}
									progress={progress}
									status={status}
									onFileChange={setFile}
									onReUpload={uploadFile}
									onCancel={cancelFileUpload}
								/>
							)}
							{page === 1 && (
								<UploadData
									topic={topic}
									setTopic={setTopic}
									subject={subject}
									setSubject={setSubject}
									numberOfPages={numberOfPages}
									setNumberOfPages={setNumberOfPages}
									includePictures={includePictures}
									setIncludePictures={setIncludePictures}
									documentStyle={documentStyle}
									setDocumentStyle={setDocumentStyle}
									fileName={file!.name}
								/>
							)}
							{page === 2 && (
								<iframe
									src={`https://view.officeapps.live.com/op/embed.aspx?src=${pptxUrl!}`}
									className="w-[90vw] h-[90vh]"></iframe>
							)}
							{page === 2 ? (
								<></>
							) : (
								<Footer
									toggleOpen={toggleOpen}
									onNext={onNext}
									buttonText={button.text}
									buttonDisabled={button.disabled}
								/>
							)}
						</div>
					</>
				}
				isOpen={isOpen}
			/>
		</div>
	);
}

function Header({ toggleOpen }: { toggleOpen: () => void }) {
	return (
		<>
			<div className="top_modal">
				<div className="top_modal-nav flex justify-between items-center py-4 px-6">
					<h1 className="text-body text-neutral-900 font-medium">
						Create new slide
					</h1>
					<button
						className="border border-solid border-neutral-50 rounded-md p-1"
						onClick={toggleOpen}
						type="button">
						<MdClose className="w-4 text-neutral-900" />
					</button>
				</div>
				<hr className="text-neutral-50" />
			</div>
			<div className="flex items-center gap-2 mt-6 px-8">
				<MdInfoOutline className="w-4 text-neutral-200" />
				<p className="text-caption text-neutral-500">
					Single upload file should not be more than 10MB. <b>PDF, DOC, TXT</b>{" "}
					file are supported.
				</p>
			</div>
		</>
	);
}

function Footer({
	toggleOpen,
	buttonText,
	buttonDisabled,
	onNext,
}: {
	toggleOpen: () => void;
	buttonText: string;
	buttonDisabled: boolean;
	onNext: () => void;
}) {
	return (
		<div className="modal-footer mt-10">
			<hr className="text-neutral-50" />
			<div className="top_modal-nav flex justify-end gap-4 items-center py-2 px-8">
				<Button
					variant="quaternary"
					type="button"
					styleHolder="w-max text-sm font-medium"
					onClick={toggleOpen}>
					Cancel
				</Button>
				<Button
					variant="primary"
					type="button"
					styleHolder="w-max text-sm font-medium"
					disabled={buttonDisabled}
					onClick={onNext}>
					{buttonText}
				</Button>
			</div>
		</div>
	);
}
