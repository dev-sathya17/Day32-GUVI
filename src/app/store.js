import { configureStore } from "@reduxjs/toolkit";
import totalReducer from "../features/total/totalSlice";
export default configureStore({
  reducer: {
    total: totalReducer,
  },
});
