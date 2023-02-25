import { GoTrashcan } from "react-icons/go";
import { removeUser, useThunk } from "../../store";
import Button from "../common/Button";
import Panel from "../common/Panel";
import AlbumsList from "../AlbumList";
import Header from "../common/Header";
import { type UserType } from "../UserList";
import { BUTTON_TYPE } from "../../enums";

interface PropsType {
  user: UserType;
}

const UsersListItem = ({ user }: PropsType) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <Header
      heading={user.name}
      error={error}
      loading={isLoading}
      onClick={handleClick}
    />
  );

  return (
    <Panel header={header}>
      <AlbumsList user={user} />
    </Panel>
  );
};

export default UsersListItem;
