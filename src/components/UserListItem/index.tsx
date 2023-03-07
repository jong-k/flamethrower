import { removeUser, editUserName, useThunk } from "../../store";
import Panel from "../common/Panel";
import AlbumsList from "../AlbumList";
import Header from "../common/Header";
import { type UserType } from "../UserList";

interface PropsType {
  user: UserType;
}

const UsersListItem = ({ user }: PropsType) => {
  const [doRemoveUser, isRemoveLoading, removeError] = useThunk(removeUser);
  const [doEditUserName, isEditLoading, editError] = useThunk(editUserName);

  const handleRemove = () => {
    doRemoveUser(user);
  };

  const handleEdit = () => {
    doEditUserName(user);
  };

  const header = (
    <Header
      heading={user.name}
      removeError={removeError}
      removeLoading={isRemoveLoading}
      onRemove={handleRemove}
      editError={editError}
      editLoading={isEditLoading}
      onEdit={handleEdit}
    />
  );

  return (
    <Panel header={header}>
      <AlbumsList user={user} />
    </Panel>
  );
};

export default UsersListItem;
