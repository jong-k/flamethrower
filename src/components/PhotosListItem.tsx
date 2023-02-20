import { GoTrashcan } from "react-icons/go";
import styles from "../styles/PhotosListItem.module.scss";
import { useRemovePhotoMutation } from "../store";

const PhotosListItem = ({ photo }) => {
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

export default PhotosListItem;
