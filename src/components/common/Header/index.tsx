import { useState } from "react";
import { GoTrashcan, GoPencil } from "react-icons/go";
import styles from "./index.module.scss";
import Button from "../Button";
import Modal from "../Modal";
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
  const [isModalOn, setIsModalOn] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOn(true);
  };

  const closeModal = () => {
    setIsModalOn(false);
  };

  return (
    <div className={styles.header}>
      <h2 className={styles.heading}>{heading}</h2>
      {(removeError || editError) && <h2>삭제 실패</h2>}
      <Button loading={editLoading} onClick={openModal} type={BUTTON_TYPE.EDIT}>
        <GoPencil />
      </Button>
      <Button
        loading={removeLoading}
        onClick={onRemove}
        type={BUTTON_TYPE.DELETE}
      >
        <GoTrashcan />
      </Button>
      {isModalOn && (
        <Modal prevName={heading} onEdit={onEdit} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Header;
