import React from "react";
import { Box, Rating, Button, Grid, Typography } from "@mui/material";
import { LocalDrink } from "@mui/icons-material";

const labels = {
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

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export default function Survey() {
  const [value, setValue] = React.useState(0);
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
              icon={<LocalDrink fontSize="inherit" />}
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <LocalDrink style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
          </Grid>

          {value !== null && (
            <Grid item>{labels[hover !== -1 ? hover : value]}</Grid>
          )}
        </Grid>
        <Grid item>
          <Button variant="contained">Submit Survey</Button>
        </Grid>
      </Grid>
    </>
  );
}
