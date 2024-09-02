import { PropsWithChildren } from "react";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const Title = ({ children }: PropsWithChildren) => {
  return <StyledTypography variant="h1">{children}</StyledTypography>;
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

export default Title;
