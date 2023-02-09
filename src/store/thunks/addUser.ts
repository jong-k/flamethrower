import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

export interface UserType {
  name: string;
  id: number;
}

const USERS_URL = "http://localhost:3005/users";

export const addUser = createAsyncThunk("users/add", async () => {
  const response = await fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: faker.name.fullName(),
    }),
  });
  return (await response.json()) as UserType;
});
