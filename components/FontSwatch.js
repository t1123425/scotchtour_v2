import React from "react";
import { Grid, Typography } from "@mui/material";

export default function FontSwatch(props) {
  const fontList = [
    // Regular
    { fontFamily: "Amiri" },
    { fontFamily: "Bellefair" },
    { fontFamily: "Bona Nova" },
    { fontFamily: "Buda" },
    { fontFamily: "Caudex" },
    { fontFamily: "Cinzel" },
    { fontFamily: "Cormorant Garamond" },
    { fontFamily: "Cormorant Unicase" },
    { fontFamily: "Della Respira" },
    { fontFamily: "Gilda Display" },
    { fontFamily: "Goudy Bookletter 1911" },
    { fontFamily: "Habibi" },
    { fontFamily: "IM Fell English" },
    { fontFamily: "Joan" },
    { fontFamily: "Josefin Slab" },
    { fontFamily: "Macondo" },
    { fontFamily: "Noto Serif JP" },
    { fontFamily: "Shippori Mincho" },
    { fontFamily: "Simonetta" },
    { fontFamily: "Spectral" },
    { fontFamily: "Vesper Libre" },
  ];

  const titleList = [
    // Titles
    { fontFamily: "Ballet" },
    { fontFamily: "Charm" },
    { fontFamily: "Cinzel Decorative" },
    { fontFamily: "Cormorant Unicase" },
    { fontFamily: "Quintessential" },
    { fontFamily: "Fondamento" },
    { fontFamily: "Felipa" },
    { fontFamily: "Jim Nightshade" },
    { fontFamily: "Kings" },
    { fontFamily: "Cormorant Unicase" },
    { fontFamily: "Nova Cut" },
  ];

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" py={3}>
            Typography Fonts
          </Typography>
        </Grid>
        {fontList.map((obj) => (
          <Grid item xs={12} md={3}>
            <Typography variant="h4" align="center" sx={obj}>
              {obj.fontFamily}
            </Typography>
            <Typography sx={obj} p={2}>
              Greetings! Welcome to my website celebrating the storied history
              and art that is scotch whisky. As an avid enthusiast of whisky, I
              (like many others) found myself overwhelmed by the vast landscape
              of scotch. I built this website in an effort to expand my
              knowledge of this exquisite drink, as well as demonstrate my
              continued learnings in web development.
            </Typography>
            <Typography sx={obj} p={2}>
              In this website you'll find some neat (no pun intended) resources
              on the history, production, and types of scotch whisky. The Scotch
              Database can be used to filter hundreds of scotch whiskies based
              on name, price, and flavor profile. You can also provide some
              feedback in our Visitor Survey.
            </Typography>
            <Typography sx={obj} p={2}>
              I hope you find this website fun and informative. Cheers!
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1" align="center" py={3}>
            Header Fonts
          </Typography>
        </Grid>
        {titleList.map((obj) => (
          <Grid item xs={12} md={6}>
            <Typography variant="h2" align="center" sx={obj}>
              {obj.fontFamily}
            </Typography>
            <Typography variant="h3" sx={obj} p={2}>
              The Art of Scotch Whisky
            </Typography>
            <Typography variant="h3" sx={obj} p={2}>
              How Scotch Whisky Is Made
            </Typography>
            <Typography variant="h3" sx={obj} p={2}>
              17th-18th Century
            </Typography>
            <Typography variant="h3" sx={obj} p={2}>
              Packaging & Labeling
            </Typography>
            <Typography variant="h3" sx={obj} p={2}>
              About the Author
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
