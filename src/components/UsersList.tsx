import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchUsers } from "../store";

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data, error } = useAppSelector((state) => {
    return state.users; // { data, [], isLoading: false, error: null }
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error != null) return <div>Error fetching data...</div>;

  return <div>{data.length}</div>;
};

export default UsersList;
