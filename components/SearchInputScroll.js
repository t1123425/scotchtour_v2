import React, { useState, forwardRef, useCallback } from "react";
import {
  Grid,
  TextField,
  Typography,
  Slider,
  Autocomplete,
  Slide,
  useScrollTrigger,
  Chip,
  Box,
  Paper,
} from "@mui/material";
import { rangeValues, searchTags } from "../constants/siteContent";
import styles from "../styles/SearchInputScroll.module.css";

// Fix this
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}

function SearchInputScroll(
  { searchValue, handleChangeValue, setSearchHeight },
  ref
) {
  // state
  const [expanded, setExpanded] = React.useState(true);

  // helpers
  const trigger = useScrollTrigger();
  const updateSearchHeight = () => {
    setSearchHeight(ref.current.clientHeight);
  };

  // handlers
  const handleChange = (newValue) => {
    setExpanded(newValue, updateSearchHeight());
  };

  return (
    <>
      <HideOnScroll ref={ref}>
        <Paper sx={{ top: "64px" }} className={styles.wrapper} elevation={6}>
          <Typography variant="h4" className={styles.title}>
            Whisky Search
          </Typography>
          <Box className={styles.textInput}>
            <TextField
              variant="outlined"
              label="Whisky"
              name="whisky"
              value={searchValue.whisky}
              onChange={(event, newValue) => handleChangeValue(event, newValue)}
              fullWidth
            ></TextField>
          </Box>
          <Box className={styles.costSliderWrapper}>
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
              className={styles.costSlider}
            />
            <Typography variant="subtitle1" className={styles.costSliderLabel}>
              Cost Range
            </Typography>
          </Box>
          <Box className={styles.textInput}>
            <Autocomplete
              multiple
              options={searchTags.map((obj) => obj.name)}
              onChange={(event, newValue) => handleChangeValue(event, newValue)}
              id="tags"
              renderInput={(params) => <TextField label="Tags" {...params} />}
              width="100%"
            />
          </Box>
        </Paper>
      </HideOnScroll>
    </>
  );
}

export default forwardRef(SearchInputScroll);
