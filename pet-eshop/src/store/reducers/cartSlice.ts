import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/IProduct";

type Product = IProduct

interface CartState{
    products: Product[]
    isLoading?: boolean
    error?: string
}

const initialState: CartState = {
    products: [],
    isLoading: false,
    error: ''
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        getProducts : (state, action: PayloadAction<CartState>) => {
            state = action.payload
        },
        addProductToCart: (state, action: PayloadAction<IProduct>) =>{
            state.products.push(action.payload)
        },
        deleteProductFromCart: (state, action: PayloadAction<IProduct>) =>{
            state.products = state.products.filter(product  => product.id != action.payload.id)
        },
    },
})

export const { getProducts, addProductToCart, deleteProductFromCart } = cartSlice.actions
export default cartSlice.reducer