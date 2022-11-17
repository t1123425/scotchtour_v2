import React, { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  Slider,
  Autocomplete,
  Slide,
  useScrollTrigger,
  AppBar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function SearchInput({ searchValue, handleChangeValue }) {
  const [expanded, setExpanded] = React.useState(true);
  const handleChange = () => (event, isExpanded) => {
    console.log(event);
    console.log(isExpanded);
    setExpanded(isExpanded ? true : false);
  };
  const trigger = useScrollTrigger();
  return (
    <>
      <Accordion
        expanded={expanded}
        onChange={handleChange()}
        // onScroll={handleChange()}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4">Whisky Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container justifyContent={"center"} spacing={4}>
            <Grid item xs={9}>
              <TextField
                variant="outlined"
                label="Whisky"
                name="whisky"
                value={searchValue.whisky}
                onChange={(event, newValue) =>
                  handleChangeValue(event, newValue)
                }
                fullWidth
              ></TextField>
            </Grid>
            <Grid item xs={9} md={4}>
              <Slider
                key="range"
                aria-label="Range slider for cost represented in dollar signs"
                name="range"
                value={[searchValue.min, searchValue.max]}
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
              <Typography
                align="center"
                variant="subtitle1"
                fontStyle={"italic"}
              >
                Cost Range
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Autocomplete
                multiple
                options={searchTags}
                onChange={(event, newValue) =>
                  handleChangeValue(event, newValue)
                }
                renderInput={(params) => <TextField label="Tags" {...params} />}
                width="100%"
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
