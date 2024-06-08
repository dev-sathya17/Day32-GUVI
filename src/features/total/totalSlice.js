import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const totalAmount = () => {
  let total = products.reduce((acc, product) => acc + product.price, 0);
  return total;
};

export const totalSlice = createSlice({
  name: "total",
  initialState: {
    value: totalAmount(),
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default totalSlice.reducer;

export const { change } = totalSlice.actions;

export const totalValue = (state) => state.total.value;
