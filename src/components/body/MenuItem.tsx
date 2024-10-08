import Image from "../../library/Image.tsx";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import React from "react";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import theme from "../../theme.js";

interface Props {
  src: string;
  title: string;
  subtitle: string;
  vegan?: boolean;
}

const MenuItem = ({ src, title, subtitle, vegan = false }: Props) => {
  return (
    <ImageListItem>
      <Image
        src={src}
        width={"100%"}
        height={"100%"}
        sx={{ overflow: "hidden" }}
      ></Image>
      <ImageListItemBar
        title={title}
        subtitle={subtitle}
        position="bottom"
        actionIcon={
          vegan && (
            <SpaRoundedIcon
              style={{
                color: theme.palette.success.light,
                height: theme.spacing(4),
                width: theme.spacing(4),
              }}
              sx={{
                paddingRight: theme.spacing(2),
                paddingTop: theme.spacing(1),
              }}
            />
          )
        }
      ></ImageListItemBar>
    </ImageListItem>
  );
};

export default MenuItem;
