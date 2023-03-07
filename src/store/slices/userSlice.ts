import { createSlice, type SerializedError } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";
import { editUserName } from "../thunks/editUserName";
import { type UserType } from "../../components/UserList";

interface InitialStateType {
  newUserName: string;
  data: any[];
  isLoading: boolean;
  error: null | SerializedError;
}

const initialState: InitialStateType = {
  newUserName: "",
  data: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    changeUserName(state, action) {
      state.newUserName = action.payload;
    },
  },
  extraReducers(builder) {
    // reducer 함수 내부에서 return 사용하지 않아도 되는 이유
    // RTK 자체적으로 immer 라이브러리를 쓰고 있어서

    // fetchUsers
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // addUsers
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // removeUser
    builder.addCase(removeUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((user) => {
        // removeUser 의 영향으로
        // action.payload === user
        return user.id !== action.payload.id;
      });
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // editUserName
    builder.addCase(editUserName.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(editUserName.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.map((user: UserType) => {
        return user.id === action.payload.id ? action.payload : user;
      });
    });
    builder.addCase(editUserName.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

// const 와 동시에 export 하지 않고 이렇게도 해보기
export default userSlice.reducer; // store 에서 usersReducer 로 import
export const { changeUserName } = userSlice.actions;
