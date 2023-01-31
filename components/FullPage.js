import { Typography, Grid } from "@mui/material";
import React from "react";
import styles from "../styles/FullPage.module.css";
import Image from "next/image";

export default function FullPage(props) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h1" className={styles.header}>
          {props.title}
        </Typography>
      </Grid>
      <Grid item lg={5}>
        <div className={styles.imageWrapper}>
          <Image
            src={props.hero}
            alt={props.alt}
            className={styles.image}
            fill
            priority="true"
            sizes="(max-width: 1200px) calc(100vw - 30px),
            41.6vw"
            // placeholder="blur"
            // height={props.imgHeight}
            // width={props.imgWidth}
          />
        </div>
      </Grid>
      <Grid item xs={12} lg={5} className={styles.paragraphBlock}>
        {props.mainText.map((p) => p)}
      </Grid>
    </Grid>
  );
}
