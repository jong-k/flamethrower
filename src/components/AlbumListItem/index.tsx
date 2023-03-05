import { GoTrashcan } from "react-icons/go";
import Button from "../common/Button";
import Panel from "../common/Panel";
import { useRemoveAlbumMutation } from "../../store";
import PhotosList from "../PhotoList";
import { type AlbumType } from "../AlbumList";
import { BUTTON_TYPE } from "../../enums";

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
      <Button
        type={BUTTON_TYPE.DELETE}
        loading={results.isLoading}
        onClick={handleRemoveAlbum}
      >
        <GoTrashcan />
      </Button>
    </>
  );
  return (
    <Panel key={album.id} header={header}>
      <PhotosList album={album} />
    </Panel>
  );
};

export default AlbumsListItem;
