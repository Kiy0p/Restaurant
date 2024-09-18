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
    <Box>
        <StyledButton onClick={() => scrollToSection(link)}>{content}</StyledButton>
        <svg height="50" width="80" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 0 C 0 36 72 36 72 0 C 72 -24 12 -24 12 0 C 12 24 60 24 60 0 C 60 -12 24 -12 24 0 C 24 12 48 12 48 0"
            fill="none" stroke="#2ad658" stroke-width="2" transform="translate(0, 20)" />
        </svg>
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
