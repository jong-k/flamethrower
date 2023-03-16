import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker/locale/ko";
import { type UserType } from "../../components/UserList";

const USERS_URL = import.meta.env.VITE_JSON_SERVER_URL + "users";

export const editUserName = createAsyncThunk(
  "users/edit",
  async (user: UserType) => {
    const response = await fetch(USERS_URL + `/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: faker.name.lastName() + faker.name.firstName(),
      }),
    });
    return await response.json();
  },
);
