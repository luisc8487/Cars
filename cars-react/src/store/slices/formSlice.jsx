import {createSlice} from "@reduxjs/toolkit";

const fromSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});

export const {changeName, changeCost} = fromSlice.actions;
export const formReducer = fromSlice.reducer;