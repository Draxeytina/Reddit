import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];
const URL = 'https://tradestie.com/api/v1/apps/reddit';

const getStocks = createAsyncThunk(
  'FETCH',
  async () => {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  },
);

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStocks.fulfilled, (state, action) => (action.payload));
  },
});

export default stocksSlice.reducer;
export { getStocks };
