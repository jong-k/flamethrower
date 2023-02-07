import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchUsers } from "../store";
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

  if (isLoading) return <Skeleton times={6} />;
  if (error != null) return <div>Error fetching data...</div>;

  return <div>{data.length}</div>;
};

export default UsersList;
