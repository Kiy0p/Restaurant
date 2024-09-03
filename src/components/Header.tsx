import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <StyledHeader>
      <StyledToolbar>
        <StyledBox>
          <Typography variant="h5" color="black">
            {t("name")}
          </Typography>
        </StyledBox>
        <StyledBox>
          <StyledButton onClick={() => scrollToSection("menu")}>
            Menu
          </StyledButton>
          <StyledButton onClick={() => scrollToSection("info")}>
            Info
          </StyledButton>
        </StyledBox>
      </StyledToolbar>
      <StyledWelcome>
        <Typography color="black">Découvrez notre cuisine</Typography>
        <Typography color="black" variant="h1">
          Bienvenue
        </Typography>
      </StyledWelcome>
    </StyledHeader>
  );
};

const StyledHeader = styled(Box)(({ theme }) => ({
  height: theme.spacing(30),
  backgroundColor: theme.palette.main,
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

const StyledButton = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: "transparent",
  fontWeight: "bold",
  fontSize: theme.spacing(2),
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
