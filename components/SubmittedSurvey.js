import React from "react";
import { Grid, Typography } from "@mui/material";

export default function SubmittedSurvey(props) {
  return (
    <>
      <Grid
        container
        height="100vh"
        justifyContent="center"
        alignItems="center"
        direction={"column"}
        align={"center"}
        spacing={4}
        display={props.showSurvey}
      >
        <Grid item>
          <Typography variant="h2" display={props.showSubmitted}>
            Thank you for taking the Survey!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
