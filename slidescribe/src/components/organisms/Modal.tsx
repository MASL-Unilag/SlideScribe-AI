type Props = {
  children: React.ReactNode;
};

const Modal = (props: Props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
