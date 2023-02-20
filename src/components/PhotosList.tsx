import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import styles from "../styles/PhotosList.module.scss";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";

const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={4} />;
  } else if (error != null) {
    content = <div>Error fetching photos...</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <>
      <div className={styles.inner}>
        <h3 className={styles.header}>Photos In {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <div>{content}</div>
    </>
  );
};

export default PhotosList;
