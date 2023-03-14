import { GoPencil, GoTrashcan } from "react-icons/go";
import Button from "../common/Button";
import Panel from "../common/Panel";
import { useRemoveAlbumMutation } from "../../store";
import PhotosList from "../PhotoList";
import { type AlbumType } from "../AlbumList";
import { BUTTON_TYPE } from "../../enums";
import styles from "./index.module.scss";

interface PropType {
  album: AlbumType;
}

const AlbumsListItem = ({ album }: PropType) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      {album.title}
      <div className={styles.btnBox}>
        <Button
          type={BUTTON_TYPE.EDIT}
          loading={results.isLoading}
          onClick={handleRemoveAlbum}
        >
          <GoPencil />
        </Button>
        <Button
          type={BUTTON_TYPE.DELETE}
          loading={results.isLoading}
          onClick={handleRemoveAlbum}
        >
          <GoTrashcan />
        </Button>
      </div>
    </>
  );
  return (
    <Panel key={album.id} header={header}>
      <PhotosList album={album} />
    </Panel>
  );
};

export default AlbumsListItem;
