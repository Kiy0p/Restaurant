import Banner from "./body/Banner.tsx";
import Box from "@mui/material/Box";
import Info from "./body/Info.tsx";
import Menu from "./body/Menu.tsx";
import React from "react";

const Body = () => {
  return (
    <Box>
      <Banner />
      <Menu />
      <Info />
    </Box>
  );
};

export default Body;
