import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    common: {
      black: "#000",
      white: "#FFF",
    },
    background: {
      default: 'url("/images/homepagebg.png") center bottom fixed',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        *,
        ::after,
        ::before {
          box-sizing: border-box;
        }
      `,
    },
    MuiTypography: {
      h3: {
        fontSize: "1.2375rem",
        color: "#FFF",
      },
    },
    MuiLink: {
      root: {
        cursor: "pointer",
        textDecoration: "none",
        fontFamily: "Poppins, sans-serif",
      },
    },
    MuiList: {
      root: {
        listStyle: "none",
      },
    },
    MuiDrawer: {
      root: {
        transition: "all 0.35s ease-in-out",
        boxShadow: "0 0 35px 0 rgba(49, 57, 66, 0.5)",
        zIndex: "1111",
      },
    },
    MuiSidebarLink: {
      root: {
        padding: ".625rem 1.625rem",
        color: "#e9ecef",
        position: "relative",
        display: "block",
        fontSize: "1rem",
      },
      'data-bs-toggle="collapse"': {
        "&::after": {
          border: "solid",
          borderWidth: "0 .075rem .075rem 0",
          content: '""',
          display: "inline-block",
          padding: "2px",
          position: "absolute",
          right: "1.5rem",
          top: "1.4rem",
          transform: "rotate(-135deg)",
          transition: "all .2s ease-out",
        },
        "&.collapsed::after": {
          transform: "rotate(45deg)",
          transition: "all .2s ease-out",
        },
      },
    },
    MuiCardContent: {
      root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    MuiCard: {
      root: {
        marginTop: "5rem",
        backgroundColor: "darkgrey",
      },
    },
    MuiCardMedia: {
      root: {
        height: "400px",
        width: "400px",
      },
    },
  },
});

export default theme;
