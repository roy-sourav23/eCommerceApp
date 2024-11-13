import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../app/loginSlice";
import CartReducer from "../app/cartSlice";
const store = configureStore({
  reducer: {
    login: LoginReducer,
    cart: CartReducer,
  },
});

export default store;
