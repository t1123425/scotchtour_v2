import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "../styles/SurveyCharts.module.css";
import { Chart as ChartJS } from "chart.js/auto";
import {
  Radar as RadarChart,
  Bar as BarChart,
  Doughnut as DonutChart,
} from "react-chartjs-2";
import { interestLabels, ratingLabels } from "../constants/siteContent";
import { WordCloudController, WordElement } from "chartjs-chart-wordcloud";

ChartJS.register(WordCloudController, WordElement);

export default function SurveyCharts(props) {
  // Unused WordCloud Component - was taxing to load; may revisit in the future
  // useEffect(() => {
  //   const wordcloud = new ChartJS(
  //     document
  //       .getElementById("wordcloud")
  //       .getContext("2d", { willReadFrequently: true }),
  //     {
  //       type: "wordCloud",
  //       data: {
  //         labels: chartdata.whiskynotedata.map((el) => el.key),
  //         datasets: [
  //           {
  //             label: "",
  //             data: chartdata.whiskynotedata.map((el) => el.value * 5),
  //             color: [
  //               "rgb(1,87,155)",
  //               "#bba22b",
  //               "#abb173",
  //               "#818b59",
  //               "#a58459",
  //               "#819ca5",
  //               "#7d627e",
  //             ],
  //           },
  //         ],
  //       },
  //       options: {
  //         // maintainAspectRatio: true,
  //         responsive: true,
  //         plugins: {
  //           legend: {
  //             display: false,
  //           },
  //         },
  //       },
  //     }
  //   );

  //   return () => {
  //     wordcloud.destroy();
  //   };
  // }, []);

  const splitLabel = (label) => {
    if (/\s/.test(label)) {
      return label.split(" ");
    } else {
      return label;
    }
  };

  const chartdata = {
    popularregiondata: {
      labels: props.popularregiondata.map((obj) => obj.name),
      datasets: [
        {
          label: "# of Distilleries",
          data: props.popularregiondata.map((obj) => obj.count),
          borderColor: "#01579b",
          backgroundColor: "rgba(1,87,155, 0.4)",
          borderWidth: 0,
        },
      ],
    },
    comparedtodata: {
      labels: props.comparedtodata.map((obj) =>
        splitLabel(interestLabels[obj.rating])
      ),
      datasets: [
        {
          label: "Responses",
          data: props.comparedtodata.map((obj) => obj.count),
          backgroundColor: [
            "rgba(204, 232, 255, 0.7)",
            "rgba(103, 187, 254, 0.7)",
            "rgba(2, 142, 253, 0.7)",
            "rgba(1, 100, 177, 0.7)",
            "rgba(1, 87, 155, 0.7)",
          ],
        },
      ],
    },
    hoverdata: {
      labels: props.hoverdata.map((obj) => ratingLabels[obj.rating]),
      datasets: [
        {
          label: "% of Responses",
          data: props.hoverdata.map((obj) => obj.percent),
          backgroundColor: [
            "rgba(234, 246, 255, 1)",
            "rgba(192, 227, 255, 1)",
            "rgba(149, 208, 254, 1)",
            "rgba(107, 189, 254, 1)",
            "rgba(65, 170, 254, 1)",
            "rgba(23, 152, 253, 1)",
            "rgba(2, 130, 232, 1)",
            "rgba(1, 107, 190, 1)",
            "rgba(1, 83, 148, 1)",
            "rgba(1, 59, 106, 1)",
          ],
        },
      ],
    },
    whiskynotedata: props.whiskynotedata.map((obj) => ({
      key: obj.flavor,
      value: obj.count,
    })),
  };

  const chartoptions = {
    responsive: {
      maintainAspectRatio: true,
      responsive: true,
    },
    comparedtooptions: {
      maintainAspectRatio: true,
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            title: (context) => {
              return context[0].label.replaceAll(",", " ");
            },
          },
        },
      },
    },
    hoveroptions: {
      maintainAspectRatio: true,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            title: function (context) {
              let label = context[0].label;
              if (label.length <= 30) {
                return label;
              } else {
                return label.match(/.{1,30}(?:\s|$)/g);
              }
            },
          },
        },
      },
      circumference: 180,
      rotation: -90,
    },
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={4} className={styles.totalCountStyle}>
          <Typography variant="h6">Total Survey Responses</Typography>
          <Typography variant="h1">{props.totalcount}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={styles.recognizedDataStyle}>
          <Typography variant="h6">Most Recognized Brands</Typography>
          <ol>
            {props.recognizeddata.map((el) => (
              <li key={el.name}>{el.name}</li>
            ))}
          </ol>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={styles.belovedDataStyle}>
          <Typography variant="h6">Most Beloved Scotch Whiskies</Typography>
          <ol>
            {props.beloveddata.map((el) => (
              <li key={el.name}>{el.name}</li>
            ))}
          </ol>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={3}
          className={styles.popularRegionDataStyle}
        >
          <Typography variant="h6">Most Popular Regions</Typography>
          <RadarChart
            data={chartdata.popularregiondata}
            options={chartoptions.responsive}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4.5}
          className={styles.comparedToDataStyle}
        >
          <Typography variant="h6">Scotch vs. Other Types of Whisky</Typography>
          <BarChart
            data={chartdata.comparedtodata}
            options={chartoptions.comparedtooptions}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4.5} className={styles.hoverDataStyle}>
          <Typography variant="h6">How People Feel About Scotch</Typography>
          <DonutChart
            data={chartdata.hoverdata}
            options={chartoptions.hoveroptions}
          />
        </Grid>
        {/* <Grid item xs={12} className={styles.whiskyNoteDataStyle}>
          <Typography variant="h6">Best Whisky Notes</Typography>
          <canvas id="wordcloud" className={styles.wordcloud}></canvas>
        </Grid> */}
      </Grid>
    </>
  );
}
