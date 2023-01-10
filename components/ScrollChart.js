import React from "react";
import { motion } from "framer-motion";
import { Typography, Grid, Box } from "@mui/material";
import styles from "../styles/ScrollChart.module.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Line as LineChart } from "react-chartjs-2";

const scrollChartVar = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.3,
      ease: "easeIn",
    },
    // filter: "blur(0)",
  },
  hidden: {
    opacity: 0,
    scale: 0,
    // filter: "blur(5px)"
  },
};

export default function ScrollChart(props) {
  const chartdata = {
    labels: props.data.map((obj) => obj.year),
    datasets: [
      {
        data: props.data.map((obj) => obj.cumulativecount),
        label: "# of Operating Distilleries",
        fill: true,
        yAxisID: "y0",
        borderColor: "lightblue",
      },
      {
        data: props.data.map((obj) => obj.opencount),
        label: "# of Distilleries Opened",
        yAxisID: "y1",
        backgroundColor: "lightgreen",
        borderColor: "lightgreen",
      },
      {
        data: props.data.map((obj) => obj.closedcount),
        label: "# of Distilleries Closed",
        yAxisID: "y1",
        backgroundColor: "red",
        borderColor: "pink",
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: false,
    },
    elements: {
      point: {
        pointStyle: false,
      },
    },
    scales: {
      y0: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <Grid
      item
      container
      sx={{
        scrollSnapAlign: "center",
      }}
      className={styles.blockWrapper}
    >
      <Grid item xs={12} sm={5} className={styles.titleBlock}>
        <Typography variant="h1" className={styles.title}>
          Scotch Today
        </Typography>
      </Grid>
      <Grid item xs={12} sm={7} className={styles.scrollWrapper}>
        <motion.div
          initial={scrollChartVar.hidden}
          whileInView={scrollChartVar.visible}
          viewport={{ once: true }}
        >
          <Box className={styles.paragraphBlock}>
            Today, scotch whisky is enjoyed almost every country around the
            world. There are over 150 scotch whisky distilleries active today.
            Every second, 44 bottles of scotch are shipped from Scotland across
            the globe - helping to support tens of thousands of jobs in Scotland
            and ensuring that millions of consumers can enjoy a dram. It's a
            global industry, 500 years in the making!
          </Box>
        </motion.div>
      </Grid>
      <Grid item xs={12} sm={7} className={styles.chartContainer}>
        <motion.div
          initial={scrollChartVar.hidden}
          whileInView={scrollChartVar.visible}
          viewport={{ once: true }}
        >
          <LineChart data={chartdata} options={options} />
        </motion.div>
      </Grid>
    </Grid>
  );
}
