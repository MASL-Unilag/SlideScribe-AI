import thumbnail from "../../assets/images/pptxthumb.png";
import { useState } from "react";
import Overlays from "./Overlays";
import { PresentationPreview } from "./PresentationPreview";

export default function Slide() {
  const istring = "Introduction to health and safety maintenance";
  const idate = "2024-01-16T15:25:50.823Z";
  const url =
    "https://scribeslides.blob.core.windows.net/scribecontainer/Adobe%20Photoshop%20Tutorial.pptx";
  const [openPreview, setOpenPreview] = useState<boolean>(false);

  const formatStr = (str: string): string => {
    if (str.length > 20) {
      return str.slice(0, 20) + "...";
    }
    return str;
  };

  const formatDate = (date: string): string => {
    const tmp_date = new Date(date);

    return `${tmp_date.getDate()}/${
      tmp_date.getMonth() + 1
    }/${tmp_date.getFullYear()}`;
  };

  const toggleClose = () => {
    if (openPreview) {
      setOpenPreview(false);
      console.log(openPreview);
    }
  };

  return (
    <>
      <div
        onClick={() => setOpenPreview(true)}
        className="shadow-xl border-neutral-50 border w-52 hover:cursor-pointer hover:scale-[1.05] active:scale-[0.95] transition-all rounded-lg"
      >
        <div className="p-4 border-b-2 border-neutral-50">
          <img src={thumbnail} alt="slides" className="w-full" />
        </div>
        <div className="p-4 text-sm text-neutral-400">
          <p className="font-medium">{formatStr(istring)}</p>
          <p className="text-xs mt-2">{formatDate(idate)}</p>
        </div>
      </div>
      <Overlays
        children={<PresentationPreview url={url} close={toggleClose} />}
        isOpen={openPreview}
      />
    </>
  );
}
