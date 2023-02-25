import { GoSync } from "react-icons/go";
import styles from "./index.module.scss";

interface PropType {
  children: string | JSX.Element;
  loading: any;
  onClick: () => void;
  type: string;
}

const Button = ({ children, loading, onClick, type }: PropType) => {
  return (
    <button onClick={onClick} disabled={loading} className={styles[type]}>
      {loading ? <GoSync className={styles.spinner} /> : children}
    </button>
  );
};

export default Button;
