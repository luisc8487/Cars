import {createSlice, nanoid} from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumption:
      // action.payload === {name "ab", cost: 140}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      // Assumption
      // action.playload === id of the car we want to remove
      const updated = state.data.filter((car) => car.id !== action.payload);
      state.data = updated;
    },
  },
});

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
