import { GoTrashcan } from "react-icons/go";
import styles from "./index.module.scss";
import Button from "../Button";
import { BUTTON_TYPE } from "../../../enums";

interface PropType {
  heading: string;
  error: any;
  loading: any;
  onClick: () => void;
}

const Header = ({ heading, error, loading, onClick }: PropType) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.heading}>{heading}</h2>
      {error && <h2>삭제 실패</h2>}
      <Button loading={loading} onClick={onClick} type={BUTTON_TYPE.DELETE}>
        <GoTrashcan />
      </Button>
    </div>
  );
};

export default Header;
