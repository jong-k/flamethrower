import { GoTrashcan } from "react-icons/go";
import { removeUser, useThunk } from "../../store";
import Button from "../common/Button";
import Panel from "../common/Panel";
import AlbumsList from "../AlbumList";
import { type UserType } from "../UserList";

interface PropsType {
  user: UserType;
}

const UsersListItem = ({ user }: PropsType) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {error && <div>user를 삭제하는데 실패했습니다</div>}
      {user.name}
    </>
  );

  return (
    <Panel header={header}>
      <AlbumsList user={user} />
    </Panel>
  );
};

export default UsersListItem;
