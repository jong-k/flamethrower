import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import usersReducer from "./slices/userSlice";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    albums: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

// store에서 모든 것을 export 해주기 위해서
// fetchUsers.ts 에서 export 해주는것 + 여기서 export 하는것 까지 export
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/useThunk";
export * from "./thunks/removeUser";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { useFetchAlbumsQuery, useAddAlbumMutation } from "./apis/albumsApi";
