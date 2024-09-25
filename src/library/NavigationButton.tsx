import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import { styled } from "@mui/system";

interface Props {
  link: string;
  content: string;
}

const NavigationButton = ({ link, content }: Props) => {
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
        <StyledButton onClick={() => scrollToSection(link)} sx={{zIndex: 3}}>{content}</StyledButton>
        <Box
            component="svg"
            sx={{
              position: "absolute",
              top: "0%",
              left: "0%",
              transform: "translate(0%, 0%)"
            }}
            height="100%"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 0 14 C 0 41 54 41 54 14 C 54 -4 9 -4 9 14 C 9 32 45 32 45 14 C 45 5 18 5 18 14 C 18 23 36 23 36 14"
                fill="none" stroke="#2ad658" stroke-width="2"/>
        </Box>
      </Box>
  );
};

const StyledButton = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: "transparent",
  fontWeight: "bold",
  fontSize: theme.spacing(2),
  marginLeft: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#fff",
    color: "#3c52b2",
  },
}));

export default NavigationButton;
