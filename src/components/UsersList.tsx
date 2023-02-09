import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import { addUser, fetchUsers, useThunk } from "../store";
import styles from "../styles/UsersList.module.scss";
import Skeleton from "./Skeleton";

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

  if (isLoadingUsers) return <Skeleton times={6} />;
  if (loadingUsersError != null) return <div>Error fetching data...</div>;

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className={styles.outer}>
        <div className={styles.inner}>{user.name}</div>
      </div>
    );
  });
  return (
    <>
      <div className={styles.header}>
        <h1>Users</h1>
        {isCreatingUser ? (
          <p>로딩 스피너</p>
        ) : creatingUserError ? (
          <p>Error creating user...</p>
        ) : (
          <button className={styles.button} onClick={handleUserAdd}>
            + Add User
          </button>
        )}
      </div>
      {renderedUsers}
    </>
  );
};

export default UsersList;
