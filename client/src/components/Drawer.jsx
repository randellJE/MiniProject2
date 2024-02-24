import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ConstructionIcon from '@mui/icons-material/Construction';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(open);
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Messages', 'Favorites', 'Workshop Maps', 'Training Packs'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ConstructionIcon sx={{color: 'white'}}/>
              </ListItemIcon>
              <ListItemText primary={text}  style={{ color: '#ffffff'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Camera Settings', 'Controller Settings', 'Decals'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ConstructionIcon sx={{color: 'white'}}/>
              </ListItemIcon>
              <ListItemText primary={text} style={{ color: '#ffffff'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu" >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"  // You can adjust the anchor if needed
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list}
      </Drawer>
    </div>
  );
}
