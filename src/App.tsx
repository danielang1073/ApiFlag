import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Home } from "./pages";
import { darkTheme, lightTheme } from "./theme";
import { useSelector } from "react-redux";
import { Store } from "./types/store";
import { Header } from "./components";
import GlobalStyles from "./GlobalStyles";
import DetailCountry from "./components/molecules/DetailCountry";

function App() {
  const { isDarkMode } = useSelector((state: Store) => state.main);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Header />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailcountry/:id" element={<DetailCountry />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
