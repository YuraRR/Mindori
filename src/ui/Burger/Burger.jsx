import styles from "./Burger.module.css";

export default function Burger({ menuActive, setActive }) {
  return (
    <>
      <button className={styles.burger_btn} onClick={() => setActive(!menuActive)}>
        <span></span>
      </button>
    </>
  );
}
