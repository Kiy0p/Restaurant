import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

interface Props {
  link: string;
  text: string;
}

const NavigationButton = ({ link, text }: Props) => {
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
    <Box sx={{ position: "relative", display: "inline-block" }}>
      <StyledButton onClick={() => scrollToSection(link)} sx={{ zIndex: 3 }}>
        <Typography>{text}</Typography>
        <Box
          component="svg"
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
          }}
          height="100%"
          width="100%"
          viewBox="0 0 54 41"
          xmlns="http://www.w3.org/2000/svg"
          zIndex="-1"
        >
          <StyledPath d="M 0 14 C 0 41 54 41 54 14 C 54 -4 9 -4 9 14 C 9 32 45 32 45 14 C 45 5 18 5 18 14 C 18 23 36 23 36 14" />
        </Box>
      </StyledButton>
    </Box>
  );
};

const StyledPath = styled("path")({
  fill: "none",
  stroke: "#2ad658",
  strokeWidth: "2",
  strokeDasharray: "250",
  strokeDashoffset: "250",
  transition: "stroke-dashoffset 1s ease",
});

const StyledButton = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: "transparent",
  fontWeight: "bold",
  fontSize: theme.spacing(2),
  marginLeft: theme.spacing(1),

  "&:hover path": {
    strokeDashoffset: "0",
  },
}));

export default NavigationButton;
