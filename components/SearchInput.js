import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  TextField,
  Typography,
  Slider,
  Autocomplete,
  Chip,
} from "@mui/material";

const initialFormValues = {
  whisky: "",
  min: 1,
  max: 6,
  range: [1, 6],
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

const searchTags = [
  "full-body",
  "medium-body",
  "light-body",
  "sweet",
  "semi-sweet",
  "heavy smoke",
  "pronounced sherry",
  "fruity",
  "malty",
  "apertif-style",
  "medium smoke",
  "pungent",
  "honey",
  "medicinal",
  "floral",
  "spicy",
  "nutty",
  "notes of wine",
  "no smoke",
  "light smoke",
];

const check = (arr, target) => target.every((value) => arr.includes(value));

export default function SearchInput({
  searchValue,
  handleChangeValue,
  handleClose,
}) {
  const [values, setValues] = useState(initialFormValues);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(6);
  //   const handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     setValues({
  //       ...values,
  //       [name]: value,
  //     });
  //   };
  const handleDualChange = (event, newValue) => {
    setMin(newValue[0]);
    setMax(newValue[1]);
  };
  return (
    <>
      <form>
        <Grid container justifyContent={"center"} spacing={6}>
          <Grid item xs={9}>
            <Typography align="center" variant="h3" mt={2}>
              Whisky Search
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField
              variant="outlined"
              label="Whisky"
              name="whisky"
              value={searchValue.whisky}
              onChange={(event, newValue) => handleChangeValue(event, newValue)}
              //   onChange={props.handleSearch}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={9} md={4}>
            <Slider
              key="range"
              aria-label="Range slider for cost represented in dollar signs"
              name="range"
              value={[min, max]}
              //   onChange={handleDualChange}
              onChange={(event) => handleChangeValue(event)}
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
          <Grid item xs={9}>
            <Autocomplete
              multiple
              options={searchTags}
              //   value={searchValue.tags}
              onChange={(event, newValue) => handleChangeValue(event, newValue)}
              renderInput={(params) => <TextField label="Tags" {...params} />}
              width="100%"

              //   onClose={handleClose}
              //   ChipProps
              //   onChange={props.handleSearch}
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
}
