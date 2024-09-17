import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "Lalezar"],
    fontSize: 18
  },
  palette: {
    main: "#FDFFEF",
  },
});

export default responsiveFontSizes(theme);
