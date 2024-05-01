import { createPortal } from "react-dom";

import "./Modal.css";
import { useRef, useEffect } from "react";

interface Props {
  children: JSX.Element[];
  open: boolean;
}

export default function Modal({ ...props }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (props.open) {
      dialog?.current?.showModal();
    } else {
      dialog?.current?.close();
    }
  }, [props.open]);

  return createPortal(
    <dialog ref={dialog}>{props.children}</dialog>,
    document.getElementById("modal")!
  );
}
