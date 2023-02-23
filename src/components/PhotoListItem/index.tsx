import { GoTrashcan } from "react-icons/go";
import styles from "./index.module.scss";
import { useRemovePhotoMutation } from "../../store";
import { type PhotoType } from "../PhotoList";

interface PropType {
  photo: PhotoType;
}

const PhotoListItem = ({ photo }: PropType) => {
  const [removePhoto, results] = useRemovePhotoMutation();
  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div className={styles.container}>
      <img className={styles.img} src={photo.url} alt="random picture" />
      <div className={styles.delete}>
        <GoTrashcan className={styles.icon} onClick={handleRemovePhoto} />
      </div>
    </div>
  );
};

export default PhotoListItem;
