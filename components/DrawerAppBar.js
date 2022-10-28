import * as React from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const drawerWidth = 240;
const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "What is Scotch Whisky?",
    href: "/what-is-scotch-whisky",
  },
  {
    title: "History of Scotch Whisky",
    href: "/history-of-scotch-whisky",
  },
  {
    title: "How Scotch is Made",
    href: "/how-scotch-is-made",
  },
  {
    title: "Regions of Origin",
    href: "/regions",
  },
  {
    title: "Famous Scotch Whisky Brands",
    href: "/famous-scotch-brands",
  },
  {
    title: "Scotch Database",
    href: "/scotch-whisky-search",
  },
  {
    title: "Visitor Survey",
    href: "/visitor-survey",
  },
  {
    title: "About Me",
    href: "/about-me",
  },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={item.href}>{item.title}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              open={open}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              // sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                <Link href={item.href}>
                    <Button key={item.title} sx={{ color: "#fff" }}>
                    {item.title}
                    </Button>
                </Link>
                ))}
            </Box> */}
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={open}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              // display: { xs: "block", sm: "none" },
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
    </>
  );
}

export default DrawerAppBar;
