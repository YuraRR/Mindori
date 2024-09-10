import { createPortal } from "react-dom";
import "./Modal.css";
import Animated from "../Animated";
import { useEffect } from "react";
export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    if (isOpen) {
      const scrollPosition = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.classList.add("modal-open");
    } else {
      const scrollPosition = parseInt(document.body.style.top || "0") * -1;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.classList.remove("modal-open");
      window.scrollTo(0, scrollPosition);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    e.target.id === "modal-overlay" && onClose();
  };

  return createPortal(
    <div id="modal-overlay" className="modal-overlay" onClick={handleOutsideClick}>
      <Animated initialY={0}>
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>

          {children}
        </div>
      </Animated>
    </div>,
    document.getElementById("modal-root")
  );
}
