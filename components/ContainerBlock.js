import React from "react";
import { Grid } from "@mui/material";

export default function ContainerBlock({ children }, props) {
  const icon = "/whisky-still.png";
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems={"center"}
        rowSpacing={4}
        justifyContent="center"
        textAlign={"center"}
        sx={{ minHeight: { xs: "100vh", md: "" } }}
      >
        {children}
      </Grid>
    </>
  );
}
