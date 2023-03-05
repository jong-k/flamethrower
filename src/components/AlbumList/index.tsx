import { useFetchAlbumsQuery, useAddAlbumMutation } from "../../store";
import Skeleton from "../common/Skeleton";
import Button from "../common/Button";
import AlbumsListItem from "../AlbumListItem";
import styles from "./index.module.scss";
import { type UserType } from "../UserList";
import { BUTTON_TYPE } from "../../enums";

interface PropType {
  user: UserType;
}

export interface AlbumType {
  userId: number;
  title: string;
  id: number;
}

const AlbumsList = ({ user }: PropType) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error != null) {
    content = <div>album을 로딩하는데 실패했습니다</div>;
  } else {
    content = data.map((album: AlbumType) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.description}>Albums for {user.name}</h2>
        <Button
          type={BUTTON_TYPE.ADD}
          loading={results.isLoading}
          onClick={handleAddAlbum}
        >
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </>
  );
};

export default AlbumsList;
