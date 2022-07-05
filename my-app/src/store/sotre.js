import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./characters/slice/charactersSlice";

const rootReducer = (state, action) => ({
  characters: charactersSlice.reducer(state?.characters, action),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
