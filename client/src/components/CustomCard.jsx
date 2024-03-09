import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, CardHeader, IconButton, ThemeProvider, createTheme } from "@mui/material";
import CardFiller from "../assets/CardFiller.png"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CustomCard({ title, imageURL, username, description }) {
  return (
      <Card variant="outlined" sx={{ maxWidth: 400, borderColor: '#ffffff', pt: 1, pb: 1 }}>
        <CardHeader 
          title={<Typography variant="h5" sx={{ color: '#ffffff' }}>{title}</Typography>}
          subheader={<Typography variant="subtitle1" sx={{ color: '#ffffff' }}>{username}</Typography>}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          sx={{
            pt: "15px",
          }}
          height={300}
          alt="Octane Car Body"
          image={imageURL || CardFiller}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="body2" sx={{ color: '#ffffff' }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to likes">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton aria-label="add to bookmarks">
            <BookmarkBorderIcon />
          </IconButton>
          <IconButton aria-label="go to comment section">
            <CommentIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
  );
}
