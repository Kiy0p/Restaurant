import "./App.css";

import Body from "./components/Body.tsx";
import Box from "@mui/material/Box";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import React from "react";

const App = () => {
  return (
    <Box>
      <Header />
      <Body />
      <Footer />
    </Box>
  );
};

export default App;
