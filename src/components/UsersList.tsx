import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import { addUser, fetchUsers, useThunk } from "../store";
import styles from "../styles/UsersList.module.scss";
import Skeleton from "./Skeleton";
import Button from "./Button";
import UsersListItem from "./UsersListItem";

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
    <>
      <div className={styles.header}>
        <h1>Users</h1>
        {creatingUserError ? (
          <p>Error creating user...</p>
        ) : (
          <Button loading={isCreatingUser} onClick={handleUserAdd}>
            + Add User
          </Button>
        )}
      </div>
      {content}
    </>
  );
};

export default UsersList;
