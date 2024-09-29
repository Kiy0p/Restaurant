import React, { useEffect, useRef, useState } from "react";

import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const Title = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  const pathRef = useRef<SVGPathElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const createObserver = (): IntersectionObserver => {
    return new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // When the element is in view, mark it as visible
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );
  }

  useEffect(() => {
    const observer = createObserver();
    const svgElementRef = pathRef.current;

    if (svgElementRef) {
      observer.observe(svgElementRef); // Start observing the path
    }

    return () => {
      if (svgElementRef) {
        observer.unobserve(svgElementRef); // Clean up the observer
      }
    };
  }, []);

  return (
    <Box>
      <StyledTypography variant="h1" align="center">
        {children}
      </StyledTypography>
      <StyledBox sx={{ marginTop: theme.spacing(-4) }}>
        <Box
          component="svg"
          height="20%"
          width="30%"
          viewBox="0 0 65 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <StyledPath
            d="M 0 0 C 21.3333 0 64 0 64 2 C 64 6 6 0 6 3 C 6 6 52 3 52 6 C 52 8 14 5 14 7 C 14 9 32 6 32 10"
            ref={pathRef}
            isVisible={isVisible}
          />
        </Box>
      </StyledBox>
    </Box>
  );
};

interface StyledPathProps {
  isVisible: boolean;
}

const StyledPath = styled("path")<StyledPathProps>(({ isVisible }) => ({
  fill: "none",
  stroke: "#2ad658",
  strokeWidth: "0.5",
  strokeDasharray: "227",
  strokeDashoffset: isVisible ? "0" : "227",
  transition: "stroke-dashoffset 1.25s ease",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginTop: theme.spacing(8),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export default Title;
