import React, { ReactElement } from "react";

import Box from "@mui/material/Box";

interface Props extends React.PropsWithChildren {
  src: string;
  height: number | string;
  width: number | string;
  sx?: any;
  children?: ReactElement;
}

const BackgroundImage = (props: Props) => {
  return (
    <Box
      height={props.height}
      width={props.width}
      sx={{
        backgroundImage: `url(${props.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        {props.children}
      </Box>
    </Box>
  );
};

/*

<Box sx={props.sx}>
  <Box component="img" src={props.src} height={props.height} width={props.width}/>
  {props.children}
</Box>

*/

export default BackgroundImage;
