import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null };

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
});

//export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;
//TODO: expamle of dispatch
