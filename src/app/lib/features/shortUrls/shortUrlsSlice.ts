import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

/**
 * Short Urls slice
 */
export const shortUrlsSlice = createSlice({
  name: "shortUrls",
  initialState,
  reducers: {
    addUrl: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
});

export const { addUrl } = shortUrlsSlice.actions;
export default shortUrlsSlice.reducer;
