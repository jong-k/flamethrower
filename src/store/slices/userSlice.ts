import { createSlice, type SerializedError } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";

interface InitialStateType {
  data: any[];
  isLoading: boolean;
  error: null | SerializedError;
}
const initialState: InitialStateType = {
  data: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
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
  },
});

// const 와 동시에 export 하지 않고 이렇게도 해보기
export default userSlice.reducer; // store 에서 usersReducer 로 import
