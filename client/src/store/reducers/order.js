import { createSlice } from "@reduxjs/toolkit";



const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderId: null
  },
  reducers: {
    getorderId:(state,action)=>{state.orderId = action.payload.orderId},
  },
});


export const { getorderId } = orderSlice.actions;

const orderReducer = orderSlice.reducer;

export default orderReducer;