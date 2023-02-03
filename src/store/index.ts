import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// store에서 모든 것을 export 해주기 위해서
// fetchUsers.ts 에서 export 해주는것 + 여기서 export 하는것 까지 export
export * from "./thunks/fetchUsers";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
