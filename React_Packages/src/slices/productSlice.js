import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../utils/axios";

const initialState = {
  products: [],
  total: 0,
  currentPage: 1,
  limit: 10,
  loading: false,
  error: "",
};

export const productList = createAsyncThunk(
  "product/listProducts",
  async ({ limit, page = 1 }) => {
    const skip = (page - 1) * limit;
    const res = await axiosInstance(`products?limit=${limit}&skip=${skip}`);
    return res.data;
    //TODO Error handling
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  //browser manipulation
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimit: (state, action) => {
      state.currentPage = 1;
      state.limit = action.payload;
    },
  },
  //api manipulation
  extraReducers: (builder) => {
    builder
      .addCase(productList.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action?.payload?.products;
        state.total = action?.payload?.total;
      })
      .addCase(productList.pending, (state) => {
        state.loading = true;
        state.products = [];
        state.total = 0;
      })
      .addCase(productList.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        state.total = 0;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, setLimit } = productSlice.actions;
export default productSlice.reducer;
