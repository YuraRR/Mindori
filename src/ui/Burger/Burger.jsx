import styles from "./Burger.module.css";

export default function Burger({ openMenu, isActive }) {
  return (
    <>
      <button className={`${styles.burger_btn} ${isActive && styles.active}`} onClick={() => openMenu()}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
}
