import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "../styles/SurveyCharts.module.css";

export default function SurveyCharts(props) {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={4} className={styles.totalCountStyle}>
          <Typography variant="h6">Total Survey Responses</Typography>
          <Typography variant="h1">{props.totalcount}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={styles.recognizedDataStyle}>
          <Typography variant="h6">Most Recognized Brands</Typography>
          <Typography>
            <ol>
              {props.recognizeddata.map((el) => (
                <li>{el.name}</li>
              ))}
            </ol>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={styles.belovedDataStyle}>
          <Typography variant="h6">Most Beloved Scotch Whiskies</Typography>
          <Typography>
            <ol>
              {props.beloveddata.map((el) => (
                <li>{el.name}</li>
              ))}
            </ol>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={3}
          className={styles.popularRegionDataStyle}
        >
          Most Popular Regions
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4.5}
          className={styles.comparedToDataStyle}
        >
          Scotch vs. Other Types of Whisky
        </Grid>
        <Grid item xs={12} md={6} lg={4.5} className={styles.hoverDataStyle}>
          How People Feel About Scotch
        </Grid>
        <Grid item xs={12} className={styles.whiskyNoteDataStyle}>
          Best Whisky Notes
        </Grid>
      </Grid>
    </>
  );
}
