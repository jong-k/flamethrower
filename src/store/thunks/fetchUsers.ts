import { createAsyncThunk } from "@reduxjs/toolkit";

const USERS_URL = "http://localhost:3005/users";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await fetch(USERS_URL);
  await pause(1000); // TODO - 끝나면 지우기!
  return await response.json();
});

// fetching 의도적으로 늦추는 함수 -> test용
const pause = async (duration: number) => {
  return await new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

/*
RTK의 createAsyncThunk를 사용하면 다음 action type이 자동으로 추가된다

fetchUsers.pending === "users/fetch/pending"
fetchUsers.fulfilled === "users/fetch/fulfilled"
fetchUsers.rejected === "users/fetch/rejected"
 */
