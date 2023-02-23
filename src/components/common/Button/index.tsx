import { GoSync } from "react-icons/go";
import styles from "./index.module.scss";

interface PropType {
  children: string | JSX.Element;
  loading: boolean | undefined;
  onClick: () => void;
}

const Button = ({ children, loading, onClick }: PropType) => {
  return (
    <button onClick={onClick} disabled={loading} className={styles.button}>
      {loading ? <GoSync className={styles.spinner} /> : children}
    </button>
  );
};

export default Button;
