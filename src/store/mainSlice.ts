import { createSlice } from "@reduxjs/toolkit";
import { Main } from "../types/store";
import { fetchPosts } from "./services";

const initialState: Main = {
  isDarkMode: false,
  filterDropdown: null,
  filterInput: null,
  countries: [],
  isLoading: false,
  countriesFilterDropdown: [],
  countriesFilterInput: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    selectFilterByDropdown: (state, action) => {
      state.filterDropdown = action.payload.filter;
      if (!action.payload.filter) {
        state.countriesFilterDropdown = [];
        return;
      }
      const filterCountries = state.countries.filter(
        (country) => country.region === action.payload.filter.name
      );

      state.countriesFilterDropdown = filterCountries;
    },
    selectFilterByInput: (state, action) => {
      state.filterInput = action.payload.filter;
      if (!action.payload.filter) {
        state.countriesFilterInput = [];
        return;
      }
      const countriesData =
        state.countriesFilterDropdown.length > 0
          ? state.countriesFilterDropdown
          : state.countries;
      const filterCountries = countriesData.filter((country) =>
        country.name
          .toLowerCase()
          .includes(action.payload.filter.name.toLowerCase())
      );
      state.countriesFilterInput = filterCountries;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.countries = action.payload;
      });
  },
});

export const { toggleDarkMode, selectFilterByDropdown, selectFilterByInput } =
  mainSlice.actions;
export default mainSlice.reducer;
