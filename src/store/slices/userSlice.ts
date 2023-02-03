import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  data: any[];
}
const initialState: InitialStateType = {
  data: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// const 와 동시에 export 하지 않고 이렇게도 해보기
export default userSlice.reducer; // store 에서 usersReducer 로 import
