import { Typography, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function FullPage(props) {
  return (
    <Grid
      container
      alignItems="center"
      rowSpacing={4}
      justifyContent="center"
      textAlign={"center"}
      sx={{ minHeight: { xs: "100vh", md: "" } }}
    >
      <Grid item xs={12}>
        <Typography color="black" variant="h2">
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <img src={props.hero} height="25%" width="25%" />
      </Grid>
      {props.mainText.map((p) => (
        <Grid item xs={12}>
          <Typography color="black">{p}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}
