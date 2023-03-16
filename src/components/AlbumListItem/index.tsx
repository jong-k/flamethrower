import { GoTrashcan, GoSync } from "react-icons/go";
import Button from "../common/Button";
import Panel from "../common/Panel";
import { useRemoveAlbumMutation, useEditAlbumNameMutation } from "../../store";
import PhotosList from "../PhotoList";
import { type AlbumType } from "../AlbumList";
import { BUTTON_TYPE } from "../../enums";
import styles from "./index.module.scss";

interface PropType {
  album: AlbumType;
}

const AlbumsListItem = ({ album }: PropType) => {
  const [removeAlbum, removeResults] = useRemoveAlbumMutation();
  const [editAlbumName, editResults] = useEditAlbumNameMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const handleEditAlbumName = () => {
    editAlbumName(album);
  };

  const header = (
    <>
      {album.title}
      <div className={styles.btnBox}>
        <Button
          type={BUTTON_TYPE.EDIT}
          loading={editResults.isLoading}
          onClick={handleEditAlbumName}
        >
          <GoSync />
        </Button>
        <Button
          type={BUTTON_TYPE.DELETE}
          loading={removeResults.isLoading}
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
