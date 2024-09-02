import BorderBottomIcon from "@mui/icons-material/BorderBottom";
import Box from "@mui/material/Box";
import Image from "../library/Image.tsx";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Menu from "./body/Menu.tsx";
import React from "react";
import Title from "../library/Title.tsx";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const Body = () => {
  const { t } = useTranslation();
  const theme = useTheme();
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

      <Box id="info">
        <Title>{t("info.title")}</Title>
        <StyledInfo>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {t("info.openingHours")}
          </Typography>
          <Box>
            <Typography sx={{ whiteSpace: "pre-line" }}>
              {t("info.address")}
            </Typography>
            <Image
              src={"resources/map.png"}
              width={theme.spacing(50)}
              height={theme.spacing(50)}
              sx={{ padding: "2px" }}
            ></Image>
          </Box>
        </StyledInfo>
      </Box>
    </Box>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "2px",
  backgroundColor: "black",
}));

const StyledInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
}));

export default Body;
