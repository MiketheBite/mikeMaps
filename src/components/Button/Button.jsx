import styles from "./Button.module.css";

export default function Button({ children, onClick, type, tooltipText }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      <div className={styles.textTooltip}>{tooltipText}</div>
      {children}
    </button>
  );
}
