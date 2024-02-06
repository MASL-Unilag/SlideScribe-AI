import axios from "axios";
import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import apiEndpoints from "../constants/apiEndpoints";
import {FileUploadState} from "../components/pages/Dashboard/UploadFile.tsx";

const usePptxProcess = (
    id: string | null
): [FileUploadState, string | null, Dispatch<SetStateAction<FileUploadState>>] => {
    const [pptxStatus, setPptxStatus] = useState<FileUploadState>("default");
    const [pptxUrl, setPptxUrl] = useState<string | null>(null);
    const timerId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const checkPPTX = async () => {
            setPptxStatus("loading");
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
                // setPptxStatus(res.data.data.status);
                if (res.data.data.status === "COMPLETED") {
                    setPptxStatus("success");
                    setPptxUrl(res.data.data.file);
                    clearInterval(timerId.current!);
                } else if (res.data.data.status === "PROCESSING") {
                    setPptxStatus("loading");
                }
            } catch (error) {
                console.error(error);
                setPptxStatus("error");
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

    return [pptxStatus, pptxUrl, setPptxStatus];
};

export default usePptxProcess;
