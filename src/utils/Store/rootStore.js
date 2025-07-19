import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Slices/cart-slice'

const rootStore=configureStore({
reducer:{
    cart:cartSlice
}
})
export default rootStore