import React from "react";
import {
  Slider,
  Rating,
  Button,
  Grid,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import { LocalDrink } from "@mui/icons-material";

export default function Survey(props) {
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}`;
  }

  function getSliderLabel(interest) {
    return interest;
  }
  const [hover, setHover] = React.useState(-1);

  return (
    <>
      <Grid
        container
        height="100vh"
        justifyContent="center"
        alignItems="center"
        direction={"column"}
        spacing={4}
      >
        <Grid item>
          <Typography variant="h2">Visitor Survey</Typography>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <Grid item>
            <Typography>Question 1: How much do you like Scotch?</Typography>
          </Grid>
          <Grid item>
            <Rating
              key="hover-feedback"
              icon={<LocalDrink fontSize="inherit" />}
              name="hover-feedback"
              value={props.surveyValues["hover-feedback"]}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={props.handleChangeValue}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <LocalDrink style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </Grid>
          <Grid item height={40}>
            {
              props.ratingLabels[
                hover !== -1 ? hover : props.surveyValues["hover-feedback"]
              ]
            }
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <Grid item>
            <Typography>
              Question 2: How often do you choose Scotch whisky over other types
              of whiskey?
            </Typography>
          </Grid>
          <Grid item width={300}>
            <Slider
              key="interest-slider"
              aria-label="Interest in Scotch over other types of whiskey"
              name="interest-slider"
              value={props.surveyValues["interest-slider"]}
              onChange={props.handleChangeValue}
              getAriaValueText={getSliderLabel}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => {
                return props.interestLabels[value];
              }}
              step={1}
              marks
              min={1}
              max={5}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <Grid item>
            <Typography>
              Question 3: Which of these Scotch brands have you heard of before?
              (you may choose more than one)
            </Typography>
          </Grid>
          <Grid item width={300}>
            <Autocomplete
              multiple
              autoComplete
              options={props.exampleBrands}
              onChange={props.handleChangeScotchBrands}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <Grid item>
            <Typography>
              Question 4: What is your favorite Scotch whisky?
            </Typography>
          </Grid>
          <Grid item width={500}>
            <Autocomplete
              onChange={props.handleChangeFavoriteWhisky}
              autoComplete
              options={props.exampleScotch}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={props.handleSurveySubmit}>
            Submit Survey
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
