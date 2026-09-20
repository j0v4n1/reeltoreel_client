import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favourite-slice.ts';
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
