import React from "react";
import { Grid, Skeleton } from "@mui/material";

// Placeholder Skeleton for SurveyCharts page as I wasn't sure how fast it would serve in prod

export default function Loading_SurveyCharts(props) {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Skeleton variant="rectangular" height={350} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" height={350} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" height={350} />
        </Grid>
        <Grid item xs={12} md={12} lg={3}>
          <Skeleton variant="rectangular" height={400} />
        </Grid>
        <Grid item xs={12} md={6} lg={4.5}>
          <Skeleton variant="rectangular" height={400} />
        </Grid>
        <Grid item xs={12} md={6} lg={4.5}>
          <Skeleton variant="rectangular" height={400} />
        </Grid>
        <Grid item xs={12}>
          <Skeleton variant="rectangular" height={400} />
        </Grid>
      </Grid>
    </>
  );
}
