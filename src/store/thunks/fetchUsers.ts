import { createAsyncThunk } from "@reduxjs/toolkit";
import { type UserType } from "../../components/UserList";
import { pause } from "../../utils/pause";

const USERS_URL = import.meta.env.VITE_JSON_SERVER_URL + "users";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await fetch(USERS_URL);
  await pause(1000); // TODO : loading skeleton 확인을 위한 의도적 지연
  return (await response.json()) as UserType[];
});
