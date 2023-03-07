import styles from "./index.module.scss";
import { useAppDispatch } from "../../../store/hooks";
import { type ChangeEvent } from "react";
import { changeUserName } from "../../../store";

interface PropType {
  prevName: string;
  onEdit: () => void;
  openModal: any;
  closeModal: any;
}

const Modal = ({ prevName, onEdit, openModal, closeModal }: PropType) => {
  const dispatch = useAppDispatch();
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeUserName(e.target.value));
  };
  const handleConfirm = () => {
    onEdit();
    closeModal();
  };

  return (
    <>
      <div className={styles.modal}>
        <h2>Change name?</h2>
        <div className={styles.contents}>
          <input
            type="text"
            placeholder={prevName}
            onChange={handleNameChange}
          />
          <div className={styles.btnBox}>
            <button className={styles.confirm} onClick={handleConfirm}>
              Confirm
            </button>
            <button onClick={closeModal} className={styles.cancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={closeModal}></div>
    </>
  );
};

export default Modal;
