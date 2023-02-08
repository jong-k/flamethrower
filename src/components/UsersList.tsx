import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addUser, fetchUsers } from "../store";
import styles from "../styles/UsersList.module.scss";
import Skeleton from "./Skeleton";

const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [isCreatingUsers, setIsCreatingUsers] = useState(false);
  const [creatingUsersError, setCreatingUsersError] = useState(null);
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => {
    return state.users; // { data, [], isLoading: false, error: null }
  });

  // TODO: fetchUsers.ts 에서 createAsyncThunk 타입 정해주기 -> 공홈 참고
  useEffect(() => {
    setIsLoadingUsers(true);
    // dispatch가 반환하는 fullfilled 된 promise를 에러처리 하려면
    // unwrap 프로퍼티를 사용
    dispatch(fetchUsers())
      .unwrap()
      .then(() => {
        console.log("SUCCESS!");
      })
      .catch(() => {
        console.log("FAIL!");
      });
  }, []);

  const handleUserAdd = () => {
    dispatch(addUser());
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
        <button className={styles.button} onClick={handleUserAdd}>
          + Add User
        </button>
      </div>
      {renderedUsers}
    </>
  );
};

export default UsersList;
