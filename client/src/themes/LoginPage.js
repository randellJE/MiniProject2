import { createTheme } from '@mui/material/styles';

const loginTheme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '*': {
  //         margin: 0,
  //         padding: 0,
  //         boxSizing: 'border-box',
  //       },
  //     },
  //   },
  // },
  // components: {
  //   MuiBody: {
  //     styleOverrides: {
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       minHeight: '100vh',
  //       background: 'url("images/rloctane.webp")',
  //       backgroundSize: 'cover',
  //       backgroundPosition: 'center',
  //     },
  //   },
  //   MuiPaper: {
  //     styleOverrides: {
  //       width: '420px',
  //       background: 'transparent',
  //       border: '2px solid rgba(255, 255, 255, 0.815)',
  //       backdropFilter: 'blur(8px)',
  //       color: 'white',
  //       borderRadius: '10px',
  //       padding: '30px 40px',
  //     },
  //   },
  //   MuiTypography: {
  //     styleOverrides: {
  //       h1: {
  //         fontSize: '36px',
  //         textAlign: 'center',
  //       },
  //     },
  //   },
  //   MuiInputBase: {
  //     styleOverrides: {
  //       root: {
  //         position: 'relative',
  //         width: '100%',
  //         height: '50px',
  //         margin: '30px 0',
  //       },
  //       input: {
  //         width: '100%',
  //         height: '100%',
  //         background: 'transparent',
  //         border: 'none',
  //         outline: 'none',
  //         border: '2px solid rgba(255, 255, 255, .2)',
  //         borderRadius: '40px',
  //         fontSize: '16px',
  //         color: '#ffffff',
  //         padding: '20px 45px 20px 20px',
  //       },
  //       placeholder: {
  //         color: '#ffffff',
  //       },
  //     },
  //   },
  //   MuiSvgIcon: {
  //     styleOverrides: {
  //       root: {
  //         position: 'absolute',
  //         right: '20px',
  //         top: '50%',
  //         transform: 'translateY(-50%)',
  //         fontSize: '20px',
  //       },
  //     },
  //   },
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         width: '100%',
  //         height: '45px',
  //         backgroundColor: '#ffffff',
  //         border: 'none',
  //         outline: 'none',
  //         borderRadius: '40px',
  //         bottom: '0 0 10px rgba(0, 0, 0, .1)',
  //         cursor: 'pointer',
  //         fontSize: '16px',
  //         color: '#333333',
  //         fontWeight: '600',
  //       },
  //     },
  //   },
  // },
});

export default loginTheme;