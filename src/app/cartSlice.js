import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: null,
  totalCartValue: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    itemAdded: (state, action) => {
      // itemAdded action
      state.cart = action.payload;
    },
  },
});

export default CartSlice.reducer;
export const { itemAdded } = CartSlice.actions;
