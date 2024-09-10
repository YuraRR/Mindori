// Button.jsx
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";
import useIsDatesCorrect from "../../hooks/useIsDatesCorrect";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Button({
  className,
  children,
  linkTo,
  type,
  setValidate,
  onClick,
  checkDates,
  loading,
  toastText,
}) {
  const navigate = useNavigate();
  const isDatesCorrect = useIsDatesCorrect();

  function navigation() {
    if (checkDates) {
      setValidate(isDatesCorrect);
      isDatesCorrect.start && isDatesCorrect.end && navigate(linkTo);
    } else {
      navigate(linkTo);
    }
  }

  function clickAction() {
    if (loading) return;
    onClick && onClick();
    toastText && toast.success(toastText);
  }

  className = !className ? "mainButton" : className;

  return (
    <button type={type} onClick={() => (linkTo ? navigation() : clickAction())} className={styles[className]}>
      {loading ? <div className="w-8 h-8 mb-2 border-4 rounded-full animate-spin-smooth"></div> : children}
    </button>
  );
}
