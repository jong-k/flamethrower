import { createAsyncThunk } from "@reduxjs/toolkit";
import { type UserType } from "../../components/UsersListItem";

const USERS_URL = "http://localhost:3005/users";

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
