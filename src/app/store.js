import productSlice from '../features/Products/productSlice';
import cartSlice from '../features/Cart/cartSlice';
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice
    }
})

export default store;