import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { navItems } from "../constants/siteContent";
import styles from "../styles/DrawerAppBar.module.css";
import Head from "next/head";

export default function DrawerAppBar(props) {
  const icon = "/whisky-still.webp";
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List className={styles.list}>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding className={styles.listItem}>
            <ListItemButton
              component={Link}
              to={item.href}
              className={styles.navLink}
            >
              <Typography variant={"h6"}>{item.title}</Typography>
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
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href={icon} />
      </Head>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav" position="fixed" className={styles.navBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              open={open}
              onClose={handleDrawerToggle}
              modalprops={{
                keepMounted: true,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant={"h6"}>{props.title}</Typography>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <SwipeableDrawer
            container={container}
            variant="temporary"
            open={open}
            onOpen={handleDrawerToggle}
            onClose={handleDrawerToggle}
            modalprops={{
              keepMounted: true,
            }}
            className={styles.drawer}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: { xs: "45%", sm: "30%", lg: "15%" },
                backgroundColor: "#fbf7f5",
              },
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Box>
      </Box>
      <Toolbar id="emptyToolbar" />
    </>
  );
}
