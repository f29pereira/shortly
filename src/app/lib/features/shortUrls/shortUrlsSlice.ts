import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UrlCardProps } from "@/app/components/types";

const initialState: UrlCardProps[] = [];

/**
 * Short Urls slice
 */
export const shortUrlsSlice = createSlice({
  name: "shortUrls",
  initialState,
  reducers: {
    addUrl: (state, action: PayloadAction<UrlCardProps>) => {
      state.push(action.payload);
    },
  },
});

export const { addUrl } = shortUrlsSlice.actions;
export default shortUrlsSlice.reducer;
