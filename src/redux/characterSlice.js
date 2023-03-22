import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCharacterData } from "../actions/characterAction";

export const fetchCharacterDetails = createAsyncThunk(
  "characters/fetchCharacterData",
  async (thunkAPI) => {
    try {
      return await fetchCharacterData();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const characterSlice = createSlice({
  name: "characters",
  initialState: {
    characterData: null,
  },
  reducers: {
    setCharacters: (state, action) => {
      state.characterData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacterDetails.pending, (state) => {
        console.log(state,'dasdasdas111111')
        state.loading = true;
      })
      .addCase(fetchCharacterDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.characterData = action.payload;
      })
      .addCase(fetchCharacterDetails.rejected, (state) => {
        state.loading = false;
        localStorage.clear();
        state.characterData = null;
      });
  },
});

export const { setCharacters } = characterSlice.actions;
