import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import apiEndpoints from "../constants/apiEndpoints";

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
				const accessToken = process.env.REACT_APP_BEARER_ACCESS_TOKEN;
				const config = {
					method: "get",
					url: `${apiEndpoints.slide}/${id}`,
					headers: {
						Authorization: `Bearer ${accessToken}`,
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
					},
				};
				const res = await axios.request(config);
				setPPTXStatus(res.data.data.status);
				if (res.data.data.status === "COMPLETED") {
					setPPTXStatus("completed");
					setPPtxUrl(res.data.data.file);
				} else if (res.data.data.status === "PROCESSING") {
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
