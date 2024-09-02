import Box from "@mui/material/Box";
import Image from "../library/Image.tsx";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledBox>
      <Image
        src="./resources/logo.jpeg"
        height={theme.spacing(10)}
        width={theme.spacing(10)}
      />
      <Box mt={theme.spacing(2)}>
        <Typography color="white">{t("copyright")}</Typography>
      </Box>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  height: theme.spacing(25),
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export default Footer;
