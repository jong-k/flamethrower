import { GoSync } from "react-icons/go";
import styles from "../styles/Button.module.scss";

const Button = ({ children, loading, onClick }) => {
  return (
    <button onClick={onClick} disabled={loading} className={styles.button}>
      {loading ? <GoSync className={styles.spinner} /> : children}
    </button>
  );
};

export default Button;
