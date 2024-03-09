import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                },
            },
        },
    },
    palette: {
        background: {
            default: "url('images/dominus.jpg')",
            size: 'cover',
            position: 'center',
        },
        primary: {
            main: 'rgba(255, 255, 255, 0.815)',
        },
        text: {
            primary: '#ffffff',
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    width: '420px',
                    background: 'transparent',
                    border: '2px solid rgba(255, 255, 255, 0.815)',
                    backdropFilter: 'blur(50px)',
                    color: 'white',
                    borderRadius: '10px',
                    padding: '30px 40px',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: '36px',
                    textAlign: 'center',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    width: '100%',
                    height: '100%',
                    background: 'transparent',
                    border: '2px solid rgba(255, 255, 255, .2)',
                    borderRadius: '40px',
                    fontSize: '16px',
                    color: '#ffffff',
                    padding: '20px 45px 20px 20px',
                },
                input: {
                    outline: 'none',
                },
                inputAdornedEnd: {
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '20px',
                },
                inputAdornedStart: {
                    position: 'absolute',
                    left: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                },
                inputMultiline: {
                    padding: '20px 20px',
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    fontSize: '14.5px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    width: '100%',
                    height: '45px',
                    backgroundColor: '#ffffff',
                    border: 'none',
                    outline: 'none',
                    borderRadius: '40px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    color: '#333333',
                    fontWeight: 600,
                },
            },
        },
    },
});

export default theme;