import { createAsyncThunk } from "@reduxjs/toolkit";
import { type UserType } from "../../components/UserList";

const USERS_URL = import.meta.env.VITE_JSON_SERVER_URL + "users";

export const removeUser = createAsyncThunk(
  "users/remove",
  async (user: UserType) => {
    const response = await fetch(USERS_URL + `/${user.id}`, {
      method: "DELETE",
    });
    // delete 요청 시에는 별도의 응답이 없으므로 user만 리턴해주면 됨
    return user;
  },
);
