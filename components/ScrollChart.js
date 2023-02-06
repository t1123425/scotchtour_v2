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
  },
  hidden: {
    opacity: 0,
    scale: 0,
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
        borderColor: "#01579b",
        backgroundColor: "rgba(1,87,155, 0.4)",
        borderWidth: 2.5,
      },
      {
        data: props.data.map((obj) => obj.opencount),
        label: "# of Distilleries Opened",
        yAxisID: "y1",
        borderColor: "#3e8231",
        backgroundColor: "#6eb25d",
        borderWidth: 1.25,
      },
      {
        data: props.data.map((obj) => obj.closedcount),
        label: "# of Distilleries Closed",
        yAxisID: "y1",
        borderColor: "#a83230",
        backgroundColor: "#df625a",
        borderWidth: 1.25,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    responsive: true,
    labels: {
      font: {
        family: "Helvetica",
      },
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
            world.{" "}
            <strong>
              There are over 150 scotch whisky distilleries active today.
            </strong>{" "}
            Every second, 44 bottles of scotch are shipped from Scotland across
            the globe - helping to support tens of thousands of jobs in Scotland
            and ensuring that millions of consumers can enjoy a dram. It's a
            global industry, 500 years in the making!
          </Box>
        </motion.div>
      </Grid>
      <Grid item xs={12} className={styles.chartContainer}>
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
