import Box from "@mui/material/Box";
import Image from "./Image.tsx";
import Link from "@mui/material/Link";
import React from "react";
import { useTheme } from "@mui/material/styles";

interface Props {
  url: string;
  src: string;
}

const OrderLink = ({ url, src }: Props) => {
  const theme = useTheme();
  return (
    <Box>
      <Link target="_blank" href={url} underline="none" rel="noopener">
        <Image src={src} height={theme.spacing(6)} width={theme.spacing(6)} />
      </Link>
    </Box>
  );
};

export default OrderLink;
