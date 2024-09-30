import { Size, useWindow } from "../../library/hooks/useWindow.ts";

import Box from "@mui/material/Box";
import Image from "../../library/Image.tsx";
import React from "react";
import { styled } from "@mui/system";

const Banner = () => {
  const imageSources = [
    "resources/menu/kebab.png",
    "resources/menu/salade_tomate.png",
    "resources/menu/salade.png",
  ];
  const windowSize = useWindow();

  const adaptImageSourcesToScreenSize = (): string[] => {
    switch (windowSize) {
      case Size.XSmall: {
        return imageSources.slice(0, imageSources.length - 1);
      }
      case Size.Small: {
        return imageSources.slice(0, imageSources.length - 1);
      }
      case Size.Medium: {
        return imageSources.slice(0, imageSources.length - 1);
      }
      case Size.Large: {
        return imageSources;
      }
      default: {
        return imageSources;
      }
    }
  };

  return (
    <StyledBox>
      {adaptImageSourcesToScreenSize().map((imageSrc) => (
        <Image
          src={imageSrc}
          width={"100%"}
          height={"100%"}
          sx={{ padding: "2px", overflow: "auto" }}
        ></Image>
      ))}
    </StyledBox>
  );
};

const StyledBox = styled(Box)(() => ({
  display: "flex",
  padding: "1px",
  backgroundColor: "black",
}));

export default Banner;
