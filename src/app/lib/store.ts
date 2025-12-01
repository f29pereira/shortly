import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shortUrlsReducer from "./features/shortUrls/shortUrlsSlice";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  shortUrls: shortUrlsReducer,
});

/**
 * Redux store
 */
export const makeStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
