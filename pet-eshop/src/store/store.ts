import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import cartReducer from './reducers/cartSlice';

const store = configureStore({
  reducer: {
    cartReducer
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

const setupStore = () => store;

export const wrapper = createWrapper(setupStore)