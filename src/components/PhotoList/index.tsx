import { useAddPhotoMutation, useFetchPhotosQuery } from "../../store";
import styles from "./index.module.scss";
import Button from "../common/Button";
import Skeleton from "../common/Skeleton";
import PhotoListItem from "../PhotoListItem";
import { type AlbumType } from "../AlbumList";
import { BUTTON_TYPE } from "../../enums";

export interface PhotoType {
  albumId: number;
  url: string;
  id: number;
}

interface PropType {
  album: AlbumType;
}

const PhotosList = ({ album }: PropType) => {
  const { data, error, isLoading } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={4} />;
  } else if (error != null) {
    content = <div>Error fetching photos...</div>;
  } else {
    content = data.map((photo: PhotoType) => {
      return <PhotoListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <>
      <div className={styles.inner}>
        <h3 className={styles.header}>Photos In {album.title}</h3>
        <Button
          type={BUTTON_TYPE.ADD}
          loading={addPhotoResults.isLoading}
          onClick={handleAddPhoto}
        >
          + Add Photo
        </Button>
      </div>
      <div className={styles.content}>{content}</div>
    </>
  );
};

export default PhotosList;
