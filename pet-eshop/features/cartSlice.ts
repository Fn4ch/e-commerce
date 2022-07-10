import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { IProduct } from "../types/IProduct";

type state = object
type SliceState = {state: 'empty'} | {state: ''}

const cartSlice = createSlice({
    name: 'cart',
    initialState: null,
    reducers: {
        products : (state, action: PayloadAction<IProduct[]>) => state + action.payload
    },

})

export cartSlice as Slice
