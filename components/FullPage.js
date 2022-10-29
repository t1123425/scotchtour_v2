import { Typography, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function FullPage(props) {
  return (
    <>
      <Grid item>
        <Typography color="black" variant="h2">
          {props.defaultdata.header}
        </Typography>
      </Grid>
      <Grid item>
        <Image src={props.defaultdata.imageUrl} width={600} height={400} />
      </Grid>
      <Grid item>
        <Typography color="black">{props.defaultdata.text}</Typography>
      </Grid>
    </>
  );
}
