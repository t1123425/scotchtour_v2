import React, { useRef, useState, useEffect } from "react";
import { Typography, Popover, Box, Button } from "@mui/material";
import styles from "../styles/PopoverChart.module.css";

export default function PopoverChart(props) {
  // state
  const [anchorEl, setAnchorEl] = useState(null);

  // helpers
  const open = Boolean(anchorEl);
  const popoverChart =
    props.chartStyle === "popoverChart" ? styles.visible : styles.hidden;
  const swipeableChart =
    props.chartStyle === "swipeableChart" ? styles.visible : styles.hidden;

  // handlers
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box className={popoverChart}>
        <Button
          variant="contained"
          className={styles.button}
          size="small"
          onClick={handleClick}
        >
          Breakdown by Region
        </Button>
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box className={styles.popoverBox}></Box>
      </Popover>
    </>
  );
}
