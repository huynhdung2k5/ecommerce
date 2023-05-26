import { configureStore } from "@reduxjs/toolkit";
import cartSLiceReducer from './slices/cartSlice';

export const store = configureStore({
    reducer: {
        carts: cartSLiceReducer,
    }
})
