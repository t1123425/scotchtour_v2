import * as React from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from "@mui/material";
import { MenuIcon } from "@mui/icons-material";

const drawerWidth = 240;
const navItems = ["Test 1", "Test 2", "Test 3"];
// const navItems = [
//   {
//     title: "Home",
//     href: "/",
//   },
//   {
//     title: "What is Scotch Whisky?",
//     href: "/what-is-scotch-whisky",
//   },
//   {
//     title: "History of Scotch Whisky",
//     href: "/history-of-scotch-whisky",
//   },
//   {
//     title: "How Scotch is Made",
//     href: "/how-scotch-is-made",
//   },
//   {
//     title: "Regions of Origin",
//     href: "/regions",
//   },
//   {
//     title: "Famous Scotch Whisky Brands",
//     href: "/famous-scotch-brands",
//   },
//   {
//     title: "Scotch Database",
//     href: "/scotch-whisky-search",
//   },
//   {
//     title: "Visitor Survey",
//     href: "/visitor-survey",
//   },
//   {
//     title: "About Me",
//     href: "/about-me",
//   },
// ];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
