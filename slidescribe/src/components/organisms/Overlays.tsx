import { createPortal } from "react-dom";
import Modal from "./Modal";
import React from "react";

const mountElement = document.getElementById("overlays");

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
};

const Overlays = (props: Props) => {
  return createPortal(
    <div
      className={`${
        props.isOpen
          ? "fixed inset-0 z-50 flex items-center justify-center bg-[#000] bg-opacity-40"
          : ""
      }`}
    >
      {props.isOpen && (
        <div>
          <Modal>{props.children}</Modal>
        </div>
      )}
    </div>,
    mountElement as HTMLElement
  );
};

export default Overlays;
