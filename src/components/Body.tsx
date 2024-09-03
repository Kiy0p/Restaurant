import Box from "@mui/material/Box";
import Image from "../library/Image.tsx";
import Info from "./body/Info.tsx";
import Menu from "./body/Menu.tsx";
import React from "react";
import { styled } from "@mui/system";

const Body = () => {
  const imageSources = [
    "resources/menu/salade_tomate.png",
    "resources/menu/salade.png",
    "resources/menu/kebab.png",
  ];

  return (
    <Box>
      <StyledBox>
        {imageSources.map((imageSrc) => (
          <Image
            src={imageSrc}
            width={"100%"}
            height={"100%"}
            sx={{ padding: "2px" }}
          ></Image>
        ))}
      </StyledBox>
      <Menu />
      <Info />
    </Box>
  );
};

const StyledBox = styled(Box)(() => ({
  display: "flex",
  padding: "1px",
  backgroundColor: "black",
}));

export default Body;
