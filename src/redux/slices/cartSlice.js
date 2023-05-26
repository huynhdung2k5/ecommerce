import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCart: false,
}

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        setCartSlice: (state,action) => {
            state.isCart = action.payload;
        }
    }
});

export const { setCartSlice } = cartSlice.actions;
export default cartSlice.reducer;