import React, { useState } from "react";

import { AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import NavigationButton from "../library/NavigationButton.tsx";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const { t } = useTranslation();

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <StyledHeader>
      <StyledAppBar isAtTop={isAtTop} elevation={isAtTop ? 0 : 8}>
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
      </StyledAppBar>
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

interface appBarProps {
  isAtTop: boolean;
}

const StyledAppBar = styled(AppBar)((props: appBarProps) => ({
  backgroundColor: props.isAtTop ? "transparent" : "rgb(253,255,239)",
}));

const StyledHeader = styled(Box)(({ theme }) => ({
  height: theme.spacing(30),
  paddingTop: theme.spacing(2),
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
