import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: "#1fafc8",
      main: "#0971ab",
      dark: "#015f6f",
      contrastText: "#fff",
    },
    background: {
      default: "#ffff",
    },
    secondary: {
      light: "#559fdd",
      main: "#f50057",
      dark: "#00467b",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f43648",
      dark: "#9A0036",
      contrastText: "#fff",
    },
    success: {
      light: "#81C784",
      main: "#4caf50",
      dark: "#388E3C",
      contrastText: "rgba(0,0,0,.87)",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "rgba(0,0,0,.87)",
    },
    divider: "rgba(0,0,0,.12)",
  },
});

export default theme;
