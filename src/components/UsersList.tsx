import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addUser, fetchUsers } from "../store";
import styles from "../styles/UsersList.module.scss";
import Skeleton from "./Skeleton";

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data, error } = useAppSelector((state) => {
    return state.users; // { data, [], isLoading: false, error: null }
  });

  // TODO: fetchUsers.ts 에서 createAsyncThunk 타입 정해주기 -> 공홈 참고
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  if (isLoading) return <Skeleton times={6} />;
  if (error != null) return <div>Error fetching data...</div>;

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
        <button className={styles.button} onClick={handleUserAdd}>
          + Add User
        </button>
      </div>
      {renderedUsers}
    </>
  );
};

export default UsersList;
