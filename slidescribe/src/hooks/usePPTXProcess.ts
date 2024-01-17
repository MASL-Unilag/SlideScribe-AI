import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export type PPTXStatus = "error" | "completed" | "processing" | "idle";

const usePPTXProcess = (
	id: string | null
): [PPTXStatus, string | null, Dispatch<SetStateAction<PPTXStatus>>] => {
	const [pptxStatus, setPPTXStatus] = useState<PPTXStatus>("idle");
	const [pptxUrl, setPPtxUrl] = useState<string | null>(null);
	const timerId = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const checkPPTX = async () => {
			setPPTXStatus("processing");
			try {
				const res = await axios.get(`demo_string/${id}`);
				setPPTXStatus(res.data.status);
				if (res.data.status === "completed") {
					setPPTXStatus("completed");
					setPPtxUrl(res.data.PPtxUrl);
				} else if (res.data.status === "processing") {
					setPPTXStatus("processing");
				}
			} catch (error) {
				console.error("Error:", error);
				setPPTXStatus("error");
				clearInterval(timerId.current!);
			}
		};

		if (id) {
			checkPPTX();
			timerId.current = setInterval(checkPPTX, 5000);
			return () => {
				clearInterval(timerId.current!);
			};
		}
	}, [id]);

	return [pptxStatus, pptxUrl, setPPTXStatus];
};

export default usePPTXProcess;
