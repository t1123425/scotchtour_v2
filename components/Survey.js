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

const ratingLabels = {
  0.5: `My father was murdered by a glass of Scotch! How dare you!!`,
  1: `I'd rather drink sewer runoff rung from a used diaper.`,
  1.5: `I'd rather drink a bottle of hot sauce.`,
  2: `It's not my bag and I give anyone who likes it a weird look.`,
  2.5: `I don't hate it.`,
  3: `I tried some once and it was good.`,
  3.5: `I tried some once and all of a sudden I'm a "Scotch enthusiast."`,
  4: `Call me 'T9F293048 GLOBAL INDUSTRIAL 96" 6 SPEED 17018 CFM' because I'm a big fan!`,
  4.5: `Scotch whisky is the earth's milk and only the strong willed can receive her bounty!!`,
  5: `A CANNY BELIEVE MA MAW DREESED ME UP AS A BOX A GRAVY FUR MA HALLOWEEN DISCO WHEN I WAS BUT A WEE LADDAE!!`,
};

const interestLabels = {
  1: `Rarely`,
  2: `Sometimes`,
  3: `About half the time`,
  4: `Often`,
  5: `Almost always`,
};

const initialFormValues = {
  "hover-feedback": "",
  "interest-slider": 3,
};

const exampleBrands = [
  "Cardhu",
  "Dalwhinnie",
  "Erdradour",
  "Glenfarclas",
  "Glenmorangie",
];

const exampleScotch = [
  "Macallan 10yo Full Proof 57% 1980",
  "Ledaig 42yo Dusgadh",
  "Laphroaig 27yo 57.4% 1980-2007",
  "Glenfarclas 40yo",
];

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${ratingLabels[value]}`;
}

function getSliderLabel(interest) {
  return interest;
}

export default function Survey() {
  const [values, setValues] = React.useState(initialFormValues);
  const [hover, setHover] = React.useState(-1);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

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
              value={values["hover-feedback"]}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={handleInputChange}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <LocalDrink style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </Grid>
          <Grid item height={40}>
            {ratingLabels[hover !== -1 ? hover : values["hover-feedback"]]}
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
              value={values["interest-slider"]}
              onChange={handleInputChange}
              getAriaValueText={getSliderLabel}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => {
                return interestLabels[value];
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
              options={exampleBrands}
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
              autoComplete
              options={exampleScotch}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained">Submit Survey</Button>
        </Grid>
      </Grid>
    </>
  );
}
