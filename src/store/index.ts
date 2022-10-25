import { combineReducers, configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./hooks";

export const rootReducer = combineReducers({
  articlesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
