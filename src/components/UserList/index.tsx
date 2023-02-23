import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import { addUser, fetchUsers, useThunk } from "../../store";
import styles from "./index.module.scss";
import Skeleton from "../common/Skeleton";
import Button from "../common/Button";
import UsersListItem from "../UserListItem";

export interface UserType {
  name: string;
  id: number;
}

const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useAppSelector((state) => {
    return state.users; // { data, [], isLoading: false, error: null }
  });

  useEffect(() => {
    doFetchUsers();
  }, []);

  const handleUserAdd = () => {
    doCreateUser();
  };

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user} />;
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Gallery Drive</h2>
        {creatingUserError ? (
          <p>Error creating user...</p>
        ) : (
          <Button loading={isCreatingUser} onClick={handleUserAdd}>
            + Add User
          </Button>
        )}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
