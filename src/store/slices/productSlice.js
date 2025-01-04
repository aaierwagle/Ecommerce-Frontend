import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    category: "",
    minPrice: 0,
    maxPrice: 0,
    isFilterApplied: false,
  },

  reducers: {
    setFilter: (state, action) => {
      state.category = action.payload.category;
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
      state.isFilterApplied = true;
    },

    clearFilter: (state) => {
      state.category = "";
      state.minPrice = 0;
      state.maxPrice = 0;
      state.isFilterApplied = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilter, clearFilter } = productSlice.actions;

export default productSlice.reducer;
