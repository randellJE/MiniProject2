import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardHeader } from '@mui/material';
import CardFiller from '../assets/CardFiller.png'
import ResponsiveAppBar from '../components/AppBar';
import { grey } from '@mui/material/colors';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" style={{ color: '#ffffff'}}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        RL Clips
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const theme = createTheme({
  palette: {
    background: {
      paper: grey[850],
      default: grey[850]
    },
  },
});

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm" >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              style={{ color: '#ffffff'}}
            >
              Feed
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph style={{ color: '#ffffff'}}>
              View some of the top clips hit this week!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" endIcon={<ArrowDropDownIcon />}>Categories</Button>
              <Button variant="contained" endIcon={<ArrowDropDownIcon />}>Filters</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card
                className='white-border-card'
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <Typography component="h1">Title</Typography>
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={CardFiller}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Player Name
                    </Typography>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt sit.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Comments</Button>
                    <Button size="small">Links</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer" style={{ color: '#ffffff'}}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          style={{ color: '#ffffff'}}
        >
          Some stuff here for stuff
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}