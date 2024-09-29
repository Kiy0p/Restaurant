import Box from "@mui/material/Box";
import NavigationButton from "../library/NavigationButton.tsx";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <StyledHeader>
      <StyledToolbar>
        <StyledBox>
          <Typography variant="h5" color="black">
            {t("header.name")}
          </Typography>
        </StyledBox>
        <StyledBox>
          <NavigationButton link="menu" text={t("header.menu")} />
          <NavigationButton link="info" text={t("header.info")} />
          <NavigationButton link="info" text={t("header.order")} />
        </StyledBox>
      </StyledToolbar>
      <StyledWelcome>
        <Typography color="black" variant="h5">
          {t("header.discover")}
        </Typography>
        <Typography color="black" variant="h1">
          {t("header.welcome")}
        </Typography>
      </StyledWelcome>
    </StyledHeader>
  );
};

const StyledHeader = styled(Box)(({ theme }) => ({
  height: theme.spacing(30),
  display: "flex",
  flexDirection: "column",
}));

const StyledToolbar = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginLeft: theme.spacing(1),
}));

const StyledWelcome = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

export default Header;
