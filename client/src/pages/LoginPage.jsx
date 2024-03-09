import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import loginTheme from "../themes/LoginPage";
import backgroundImage from "../assets/OpticCars.png"
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
      style={{ 
        color: "#ffffff",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "#333", // Add background color if needed
        // padding: "10px" // Add padding if needed
      }}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        RL Clips
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
      background: {
        paper: grey[850],
        default: grey[850],
      },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

export default function LoginPage() {
  const navigate = useNavigate();
  const outerTheme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    fetch("http://localhost:8000/api/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result === 200) {
          let path = "/home";
          navigate(path);   
        } else if (data.result === 400) {
          console.log('Password is incorrect.')
        } else if (data.result === 404) {
          console.log('User is not found.')
        }
      })
      
  };

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <CssBaseline />
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2px solid white",
              borderRadius: "30px",
              padding: "25px" 
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                InputLabelProps={{
                  style: { color: "#ffffff" }, // <-- Set label color
                }}
                InputProps={{
                  style: { color: "#ffffff" }, // <-- Set input text color
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{
                  style: { color: "#ffffff" }, // <-- Set label color
                }}
                InputProps={{
                  style: { color: "#ffffff" }, // <-- Set input text color
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    style={{ color: "#ffffff" }}
                  />
                }
                label="Remember me"
                style={{ color: "#ffffff" }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container spacing={0} >
                <Grid item xs={6}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs={6} style={{ color: "#ffffff" }}>
                  Dont have an <Link href="/register" variant="body2">account</Link>?
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    </ThemeProvider>
  );
}
