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
  reducers: {},
});

export default totalSlice.reducer;

export const totalValue = (state) => state.total.value;
