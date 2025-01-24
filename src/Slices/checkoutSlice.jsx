import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increment: function (state){
            state.value+1;
        },
        decrement: function(state){
            state.value-1;
        }
        
    }
})

export const {increment, decrement}  = checkoutSlice.actions;
export default checkoutSlice.reducer;