import React, { useState } from "react";
import { Popover, Box, Button } from "@mui/material";
import styles from "../styles/PopoverChart.module.css";
import { Radar as RadarChart } from "react-chartjs-2";

export default function PopoverChart(props) {
  // state
  const [anchorEl, setAnchorEl] = useState(null);

  // helpers
  const open = Boolean(anchorEl);
  const popperStyle =
    props.chartPopperStyle === "top" ? styles.topPopper : styles.bottomPopper;
  const chartdata = {
    labels: props.data.map((obj) => obj.region),
    datasets: [
      {
        label: "# of Active Distilleries",
        data: props.data.map((obj) => obj.count),
        borderColor: "#01579b",
        backgroundColor: "rgba(1,87,155, 0.4)",
        borderWidth: 0,
      },
    ],
  };
  const chartoptions = {
    maintainAspectRatio: true,
    responsive: true,
  };

  // handlers
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        className={popperStyle}
        size="small"
        onClick={handleClick}
      >
        Breakdown by Region
      </Button>
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
        <Box className={styles.popoverBox}>
          <RadarChart data={chartdata} options={chartoptions} />
        </Box>
      </Popover>
    </>
  );
}
