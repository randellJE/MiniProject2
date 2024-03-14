import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 360;

const WhiteDivider = () => {
    return <Divider sx={{ bgcolor: 'white' }} />;
  };

// const theme = createTheme({
//     components: {
//       MuiListItemText: {
//         styleOverrides: {
//           primary: {
//             color: 'white',
//           },
//         },
//       },
//     },
//   });

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderColor: 'white'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography sx={{ color: 'white'}}>Training</Typography>
        </Toolbar>
        <WhiteDivider />
        <List sx={{ color: 'white'}}>
          {[
            "Workshop Maps",
            "Training Packs",
            "Freeplay Excersises",
            "Variance Training",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon  sx={{ color: 'white'}}/> : <MailIcon  sx={{ color: 'white'}}/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <WhiteDivider />
        <Toolbar>
          <Typography sx={{ color: 'white'}}>Player Settings</Typography>
        </Toolbar>
        <WhiteDivider />
        <List sx={{ color: 'white'}}>
          {[
            "Controller Settings",
            "Controller Keybinds",
            "Camera Settings",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon  sx={{ color: 'white'}}/> : <MailIcon  sx={{ color: 'white'}}/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider />
        <Toolbar>
          <Typography sx={{ color: 'white'}}>Decals</Typography>
        </Toolbar>
        <Divider /> */}
        {/* <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon />
              <ListItemText primary={"Octane"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon />
              <ListItemText primary={"Dominus"} />
            </ListItemButton>
          </ListItem>
        </List> */}
      </Drawer>
    </Box>
  );
}
