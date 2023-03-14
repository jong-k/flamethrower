import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import { type UserType } from "../../components/UserList";

const USERS_URL = "http://localhost:3005/users";

export const editUserName = createAsyncThunk(
  "users/edit",
  async (user: UserType) => {
    const response = await fetch(USERS_URL + `/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: faker.name.fullName(),
      }),
    });
    return await response.json();
  },
);
