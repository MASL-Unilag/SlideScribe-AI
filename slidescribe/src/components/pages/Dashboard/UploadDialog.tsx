import React, { MouseEventHandler, useEffect, useState } from "react";
import Overlays from "../../organisms/Overlays.tsx";
import { MdInfoOutline } from "react-icons/md";
import Button from "../../organisms/Button.tsx";
import UploadFile, { maxFileSize } from "./UploadFile.tsx";
import UploadData, { uploadDataFormId } from "./UploadData.tsx";
import axios, { AxiosRequestConfig } from "axios";
import usePptxProcess from "../../../hooks/usePptxProcess.ts";
import apiEndpoints from "../../../constants/apiEndpoints.ts";
import { UploadDialogPage } from "./Dashboard.element.ts";
import { CloseButton } from "../../organisms/CloseButton.tsx";
import { PresentationPreview } from "../../organisms/PresentationPreview.tsx";

export default function UploadDialog({ isOpen, setIsOpen }: UploadDialogProps) {
  const [progress, setProgress] = useState<number>(0);
  const [file, setFile] = useState<File | null>(null);
  const [page, setPage] = useState<UploadDialogPage>(
    UploadDialogPage.selectFile
  );
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const [pptxState, pptxUrl, setPptxState] = usePptxProcess(trackingId);
  const [uploadMessage, setUploadMessage] = useState<string>();
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [includePictures, setIncludePictures] = useState(false);
  // const [documentStyle, setDocumentStyle] = useState("bullet-points");
  const [incomingDocumentCategory, setIncomingDocumentCategory] =
    useState("Text format");
  const [outputLanguage, setOutputLanguage] = useState("english");

  const [nextButton, setNextButton] = useState({
    text: "Continue",
    disabled: true,
    submit: false,
  });
  const [previousButton, setPreviousButton] = useState("Cancel");

  useEffect(() => {
    setNextButton({
      text:
        page === UploadDialogPage.inputData
          ? "Create slide"
          : pptxState === "success"
          ? "Preview"
          : "Continue",
      disabled:
        file === null || pptxState === "error" || pptxState === "loading",
      submit: page === UploadDialogPage.inputData,
    });
  }, [pptxState, file, page]);

  useEffect(() => {
    setPreviousButton(page === UploadDialogPage.selectFile ? "Cancel" : "Back");
  }, [page]);

  useEffect(() => {
    switch (pptxState) {
      case "success":
        setUploadMessage("Your presentation has been successfully generated");
        break;
      case "loading":
        setUploadMessage("Please wait as your presentation is being generated");
        break;
      case "error":
        setUploadMessage("There was an error while generating...  ");
        break;
      default:
        setUploadMessage(undefined);
    }
  }, [pptxState]);

  const toggleOpen = () => {
    if (isOpen) {
      cancelUpload();
    }
    setIsOpen(!isOpen);
  };

  const upload = async () => {
    //Send file and info to the backend for pptx generation
    try {
      setProgress(0);

      const convDocuCat = (format: string) => {
        if (format == "Text format") return "PLAIN";
        return "OCR";
      };

      const formData = new FormData();
      formData.append("file", file!);
      formData.append("topic", topic);
      formData.append("includeImages", "false");
      formData.append("noOfPages", "12");
      formData.append("outputLanguage", outputLanguage);
      formData.append("outputStyle", "bullet-points");
      formData.append("context", subject);
      formData.append(
        "incomingDocumentCategory",
        convDocuCat(incomingDocumentCategory)
      );

      const accessToken = JSON.parse(
        localStorage.getItem("token")!
      ).accessToken;
      const config: AxiosRequestConfig = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${apiEndpoints.slide}/generate`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          // ...formData.getHeaders(),
          "Content-Type": "multipart/form-data",
        },
        data: formData,
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / (progressEvent.total ?? 0)
          );
          setProgress(percentCompleted);
        },
      };

      setPptxState("loading");

      const res = await axios.request(config);
      setTrackingId(res.data.body.slideId);
    } catch (err) {
      console.error("Error: ", err);
      setPptxState("error");
    }
  };

  const cancelUpload = () => {
    setTrackingId(null);
    setPptxState("default");
    setFile(null);
    setUploadMessage(undefined);
    setProgress(0);
    setPage(UploadDialogPage.selectFile);
  };

  const onFileChange = (file: File) => {
    setFile(file);
    setPage(UploadDialogPage.inputData);
  };

  const onNext = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!file) {
      return;
    } else if (page === UploadDialogPage.inputData) {
      const form = document.getElementById(uploadDataFormId) as HTMLFormElement;
      if (!form?.reportValidity()) {
        return;
      }
    }

    setPage(page + 1);

    if (page === UploadDialogPage.inputData) {
      await upload();
    }
  };

  const onPrevious = () => {
    switch (page) {
      case UploadDialogPage.selectFile:
        toggleOpen();
        return;
      case UploadDialogPage.upload:
        setPptxState("default");
        break;
    }
    setPage(page - 1);
  };

  return (
    <div className="modal">
      <Overlays
        children={
          <>
            <div className="modal_content flex flex-col bg-neutral-0 max-h-[80vh] rounded-md text-base">
              {page === UploadDialogPage.preview ? (
                <></>
              ) : (
                <Header close={toggleOpen} />
              )}
              <UploadFile
                file={file}
                state={pptxState}
                page={page}
                progress={progress}
                message={uploadMessage}
                onFileChange={onFileChange}
                onReUpload={upload}
                onCancel={cancelUpload}
              />
              {page === UploadDialogPage.inputData && (
                <UploadData
                  topic={topic}
                  setTopic={setTopic}
                  subject={subject}
                  setSubject={setSubject}
                  numberOfPages={numberOfPages}
                  setNumberOfPages={setNumberOfPages}
                  includePictures={includePictures}
                  setIncludePictures={setIncludePictures}
                  // documentStyle={documentStyle}
                  // setDocumentStyle={setDocumentStyle}
                  incomingDocumentCategory={incomingDocumentCategory}
                  setIncomingDocumentCategory={setIncomingDocumentCategory}
                  outputLanguage={outputLanguage}
                  setOutputLanguage={setOutputLanguage}
                  fileName={file!.name}
                />
              )}
              {page === UploadDialogPage.preview ? (
                <PresentationPreview url={pptxUrl!} close={toggleOpen} />
              ) : (
                <Footer
                  onBack={onPrevious}
                  onNext={onNext}
                  nextText={nextButton.text}
                  previousText={previousButton}
                  nextDisabled={nextButton.disabled}
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

function Header({ close }: { close: () => void }) {
  return (
    <>
      <div className="top_modal">
        <div className="top_modal-nav flex justify-between items-center py-4 px-6">
          <h1 className="text-body text-neutral-900 font-medium">
            Create new slide
          </h1>
          <CloseButton close={close} />
        </div>
        <hr className="text-neutral-50" />
      </div>
      <div className="flex items-center gap-2 mt-6 px-8">
        <MdInfoOutline className="w-4 text-neutral-200" />
        <p className="text-caption text-neutral-500">
          Single upload file should not be more than {maxFileSize}MB.{" "}
          <b>PDF, DOC, MP3, TXT</b> files are supported.
        </p>
      </div>
    </>
  );
}

function Footer({
  onBack,
  nextText,
  previousText,
  nextDisabled,
  onNext,
}: FooterProps) {
  return (
    <div className="modal-footer mt-10">
      <hr className="text-neutral-50" />
      <div className="top_modal-nav flex justify-end gap-4 items-center py-2 px-8">
        <Button
          variant="quaternary"
          styleHolder="w-max text-sm font-medium"
          onClick={onBack}
        >
          {previousText}
        </Button>
        <Button
          variant="primary"
          type="submit"
          styleHolder="w-max text-sm font-medium"
          disabled={nextDisabled}
          onClick={onNext}
          form={uploadDataFormId}
        >
          {nextText}
        </Button>
      </div>
    </div>
  );
}

type UploadDialogProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type FooterProps = {
  nextText: string;
  nextDisabled: boolean;
  previousText: string;
  onBack: () => void;
  onNext: MouseEventHandler<HTMLButtonElement>;
};
