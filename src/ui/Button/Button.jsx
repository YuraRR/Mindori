import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

export default function Button({ className, children, linkTo }) {
  const navigate = useNavigate();
  function navigation() {
    children == "Book now" && navigate("/booking");
    linkTo && navigate(linkTo);
  }

  className = !className ? "mainButton" : className;

  return (
    <button onClick={() => navigation()} className={styles[className]}>
      {children}
    </button>
  );
}
