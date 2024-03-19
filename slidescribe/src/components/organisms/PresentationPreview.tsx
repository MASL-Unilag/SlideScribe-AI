import { CloseButton } from "./CloseButton.tsx";

export function PresentationPreview({ url, close }: PresentationPreviewProps) {
  return (
    <div>
      <div className="flex justify-between items-center py-4 px-6">
        <h1 className="text-body font-medium">Presentation Preview</h1>
        <CloseButton close={close} />
      </div>
      <hr className="text-neutral-50" />
      <iframe
        src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}`}
        className="w-[70vw] h-[70vh]"
      />
    </div>
  );
}

type PresentationPreviewProps = {
  url: string;
  close: () => void;
};
