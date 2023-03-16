import { GoTrashcan, GoSync } from "react-icons/go";
import styles from "./index.module.scss";
import Button from "../Button";
import { BUTTON_TYPE } from "../../../enums";

interface PropType {
  heading: string;
  removeError: any;
  removeLoading: any;
  onRemove: () => void;
  editError: any;
  editLoading: any;
  onEdit: () => void;
}

const Header = ({
  heading,
  removeError,
  removeLoading,
  onRemove,
  editError,
  editLoading,
  onEdit,
}: PropType) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.heading}>{heading}</h2>
      {(removeError || editError) && <h2>요청을 수행하는데 실패했습니다</h2>}
      <div className={styles.btnBox}>
        <Button loading={editLoading} onClick={onEdit} type={BUTTON_TYPE.EDIT}>
          <GoSync />
        </Button>
        <Button
          loading={removeLoading}
          onClick={onRemove}
          type={BUTTON_TYPE.DELETE}
        >
          <GoTrashcan />
        </Button>
      </div>
    </div>
  );
};

export default Header;
