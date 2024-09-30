import { Size, useWindow } from "./hooks/useWindow.ts";

import ImageList from "@mui/material/ImageList";
import React from "react";
import { useTheme } from "@mui/material/styles";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const ImageCatalog = ({ children }: Props) => {
  const theme = useTheme();
  const windowSize = useWindow();

  const ImageListCols = (): number => {
    switch (windowSize) {
      case Size.XSmall: {
        return 1;
      }
      case Size.Small: {
        return 2;
      }
      case Size.Medium: {
        return 3;
      }
      case Size.Large: {
        return 3;
      }
      default: {
        return 3;
      }
    }
  };

  const ImageListRows = (): number => {
    switch (windowSize) {
      case Size.XSmall: {
        return 350;
      }
      case Size.Small: {
        return 300;
      }
      case Size.Medium: {
        return 350;
      }
      case Size.Large: {
        return 500;
      }
      default: {
        return 400;
      }
    }
  };

  return (
    <ImageList
      cols={ImageListCols()}
      variant="masonry"
      rowHeight={ImageListRows()}
      sx={{ margin: theme.spacing(5) }}
      gap={4}
    >
      {React.Children.toArray(children)}
    </ImageList>
  );
};

export default ImageCatalog;
