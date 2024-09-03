import "./App.css";

import Body from "./components/Body.tsx";
import Box from "@mui/material/Box";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import React from "react";
import { styled } from "@mui/system";

const App = () => {
  return (
    <StyledBox>
      <Header />
      <Body />
      <Footer />
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.main,
}));

export default App;
