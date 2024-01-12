import Button from "../../organisms/Button.tsx";
import Overlays from "../../organisms/Overlays";
import close from "../../../assets/close.svg";
import caution from "../../../assets/caution.svg";
import note from "../../../assets/note.svg";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
const DashboardPage = (props: Props) => {
  return (
    <>
      <div className="top px-8 py-8">
        <div className="top-nav flex justify-between">
          <h1>Dashboard</h1>
          <Button
            variant="primary"
            styleHolder="w-max"
            onClick={() => props.setIsOpen(!props.isOpen)}
          >
            + New Slide
          </Button>
        </div>
      </div>
      <div className="content"></div>
      <div className="modal">
        <Overlays
          children={
            <>
              <div className="modal_content bg-neutral-0 w-[600px] h-[564px] rounded-md text-base">
                <div className="top_modal">
                  <div className="top_modal-nav flex justify-between items-center py-8 px-8">
                    <h1 className="text-neutral-900 font-medium">
                      Create new slide
                    </h1>
                    <button
                      className="close_modal"
                      onClick={() => props.setIsOpen(!props.isOpen)}
                      type="button"
                    >
                      <img src={close} alt="close" className="w-8" />
                    </button>
                  </div>
                  <hr className="text-neutral-50" />
                </div>
                <div className="flex items-start gap-3 mt-6 px-8">
                  <img src={caution} alt="caution" className="w-8" />
                  <p className="">
                    Single upload file should not be more than 10MB.{" "}
                    <b>PDF, DOC, TXT</b> file are supported.
                  </p>
                </div>
                <div className="single-note px-8 mx-8 rounded-md mt-10 border-2 border-dotted flex items-center justify-center bg-[#fafbfc] py-6">
                  <div className="flex items-center justify-center flex-col relative">
                    <div className="notes flex gap-0">
                      <img src={note} alt="" />
                      <img src={note} alt="" />
                      <img src={note} alt="" />
                    </div>
                    <p className="text-center mt-6">
                      Drag and drop your file here <br /> or <br /> <br />{" "}
                      <Button
                        variant="secondary"
                        styleHolder="w-max text-sm font-medium"
                        type="button"
                      >
                        + Select file to upload
                      </Button>
                      <label
                        htmlFor="fileUpload"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        {""}
                      </label>
                      <input
                        type="file"
                        name="fileUpload"
                        id="fileUpload"
                        className="opacity-0 absolute h-10 top-[125px] left-0 w-full cursor-pointer"
                      />
                    </p>
                  </div>
                </div>
                <div className="modal-footer mt-10">
                  <hr className="text-neutral-50" />
                  <div className="top_modal-nav flex justify-end gap-4 items-center py-8 px-8">
                    <Button
                      variant="quaternary"
                      type="button"
                      styleHolder="w-max text-sm font-medium"
                      onClick={() => props.setIsOpen(!props.isOpen)}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="secondary"
                      type="button"
                      styleHolder="w-max text-sm font-medium"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </>
          }
          isOpen={props.isOpen}
        />
      </div>
    </>
  );
};

export default DashboardPage;
