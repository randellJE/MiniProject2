import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CardHeader } from "@mui/material";
import CardFiller from "../assets/CardFiller.png";
import ResponsiveAppBar from "../components/AppBar";
import { grey } from "@mui/material/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState, useEffect } from "react";
import axios from "axios";
import CustomCard from "../components/CustomCard";
import PermanentDrawerLeft from "../components/Drawer2";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      style={{ color: "#ffffff" }}
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

const cards = [1, 2, 3, 4, 5, 6, 7];
// const card = useState([]);

// const fetchData = (post) => {};

const theme = createTheme({
  palette: {
    background: {
      paper: grey[850],
      default: grey[850],
    },
  },
});

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data)
        setPosts(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, []);
  // Function to handle deleting a post
  const handleDelete = async (postId) => {
    const response = await fetch(`http://localhost:8000/api/posts/${postId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setPosts(posts.filter((post) => post._id !== postId));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <PermanentDrawerLeft />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              style={{ color: "#ffffff" }}
            >
              Feed
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              style={{ color: "#ffffff" }}
            >
              View some of the top clips hit this week!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" endIcon={<ArrowDropDownIcon />}>
                Categories
              </Button>
              <Button variant="contained" endIcon={<ArrowDropDownIcon />}>
                Filters
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={6}>
                <CustomCard
                  title={post.title}
                  imageURL={post.imageURL}
                  username={post.username}
                  description={post.description}
                  id={post._id} // is this the correct syntax
                  key={post._id}
                  onDelete={handleDelete}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box
        sx={{ bgcolor: "background.paper", p: 6 }}
        component="footer"
        style={{ color: "#ffffff" }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          style={{ color: "#ffffff" }}
        >
          Some stuff here for stuff
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
