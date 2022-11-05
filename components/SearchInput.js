import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  TextField,
  Typography,
  Slider,
} from "@mui/material";

const initialFormValues = {
  name: "",
  min: "",
  max: "",
  range: [],
  tags: [],
};

const rangeValues = {
  1: "$",
  2: "$$",
  3: "$$$",
  4: "$$$$",
  5: "$$$$$",
  6: "$$$$$+",
};

const check = (arr, target) => target.every((value) => arr.includes(value));

export default function SearchInput() {
  const [values, setValues] = useState(initialFormValues);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(6);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleDualChange = (event, newValue) => {
    setMin(newValue[0]);
    setMax(newValue[1]);
  };
  return (
    <>
      <form>
        <Grid container justifyContent={"center"} xs={12}>
          <Grid item xs={9}>
            <Typography align="center" variant="h3">
              Whisky Search
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Whisky"
              name="whisky"
              value={values.name}
              onChange={handleInputChange}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={6}>
            <Slider
              key="cost-range"
              aria-label="Range slider for cost represented in dollar signs"
              name="cost-range"
              value={[min, max]}
              onChange={handleDualChange}
              valueLabelDisplay="auto"
              valueLabelFormat={(value) => {
                return rangeValues[value];
              }}
              step={1}
              marks
              min={1}
              max={6}
            />
            <Typography align="center" variant="subtitle1" fontStyle={"italic"}>
              Cost Range
            </Typography>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
