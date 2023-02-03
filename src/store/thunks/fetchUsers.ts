import { createAsyncThunk } from "@reduxjs/toolkit";

const USERS_URL = "http://localhost:3005/users";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await fetch(USERS_URL);
  return await response.json();
});

/*
RTK의 createAsyncThunk를 사용하면 다음 action type이 자동으로 추가된다

fetchUsers.pending === "users/fetch/pending"
fetchUsers.fulfilled === "users/fetch/fulfilled"
fetchUsers.rejected === "users/fetch/rejected"
 */
