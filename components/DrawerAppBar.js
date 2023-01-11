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
  Typography,
} from "@mui/material";
import Head from "next/head";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { navItems } from "../constants/siteContent";
import styles from "../styles/DrawerAppBar.module.css";

function DrawerAppBar(props, ref) {
  const icon = "/whisky-still.png";
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  // const ref = React.useRef();
  // React.useEffect(() => {
  //   const localref = navRef.current;
  //   console.log(localref);
  // });

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <Link href={item.href} className={styles.navLink}>
                <Typography>{item.title}</Typography>
              </Link>
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri&family=Ballet:opsz@16..72&family=Bellefair&family=Bona+Nova&family=Buda&family=Caudex&family=Charm&family=Cinzel&family=Cinzel+Decorative&family=Cormorant+Garamond&family=Cormorant+Unicase&family=Della+Respira&family=Felipa&family=Fondamento&family=Gilda+Display&family=Goudy+Bookletter+1911&family=Habibi&family=IM+Fell+English&family=Jim+Nightshade&family=Joan&family=Josefin+Slab&family=Kings&family=Macondo&family=Noto+Serif+JP&family=Nova+Cut&family=Quintessential&family=Shippori+Mincho&family=Simonetta&family=Spectral&family=Vesper+Libre&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav" position="fixed" ref={ref}>
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
              // sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography>{props.title}</Typography>
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
            modalprops={{
              keepMounted: true,
            }}
            sx={{
              // display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: { xs: "45%", sm: "30%", lg: "15%" },
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Toolbar id="emptyToolbar" />
    </>
  );
}

export default React.forwardRef(DrawerAppBar);
