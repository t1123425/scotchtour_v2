import React, { useState, forwardRef, useEffect } from "react";
import {
  Grid,
  TextField,
  Typography,
  Slider,
  Autocomplete,
  Chip,
  Box,
  Paper,
  Drawer,
  IconButton,
  ClickAwayListener,
  Button,
  Tooltip,
} from "@mui/material";
import {
  rangeValues,
  searchTags,
  costSliderTooltip,
} from "../constants/siteContent";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../styles/SearchInputScroll.module.css";

export default function SearchDrawer(props) {
  // state
  const [open, setOpen] = useState(false);

  // helpers
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  // handlers
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const searchPanel = (
    <Box className={styles.wrapper} onClickAway={handleDrawerToggle}>
      <Typography variant="h4" align={"center"}>
        Whisky Search
      </Typography>

      <Box className={styles.textInput}>
        <TextField
          variant="outlined"
          label="Whisky"
          name="whisky"
          value={props.searchValue.whisky}
          onChange={(event, newValue) =>
            props.handleChangeValue(event, newValue)
          }
          fullWidth
          placeholder="Search by brand and/or name of whisky"
        ></TextField>
      </Box>
      <Box className={styles.costSliderWrapper}>
        <Slider
          key="range"
          aria-label="Range slider for cost represented in dollar signs"
          name="range"
          value={[props.searchValue.min, props.searchValue.max]}
          onChange={(event) => props.handleChangeValue(event)}
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
        <Tooltip title={costSliderTooltip}>
          <Typography variant="subtitle1" className={styles.costSliderLabel}>
            Cost Range
          </Typography>
        </Tooltip>
      </Box>
      <Box className={styles.textInput}>
        <Autocomplete
          label="Tags"
          multiple
          // clearOnBlur={false}
          options={searchTags.map((obj) => obj.name)}
          onChange={(event, newValue) =>
            props.handleChangeValue(event, newValue)
          }
          id="tags"
          renderInput={(params) => (
            <TextField label="Tasting Notes/Attributes" {...params} />
          )}
          width="100%"
          value={props.searchValue.tags}
          sx={{
            ".MuiChip-root": {
              backgroundColor: "#d5ebff",
            },
          }}
        />
      </Box>
      <Box align={"center"}>
        <Button variant="contained" onClick={props.handleReset}>
          <Typography>Reset Search</Typography>
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <Grid
        className={styles.headerBox}
        sx={{ top: "64px" }}
        height={100}
        justifyContent="center"
        alignItems={"center"}
        container
      >
        <Typography variant="h4" className={styles.title} align={"center"}>
          Whisky Search
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          className={styles.icon}
          // sx={{ mr: 2, display: { sm: "none" } }}
        >
          <SearchIcon />
        </IconButton>
        <Drawer
          container={container}
          variant="temporary"
          anchor="top"
          open={open}
          onClose={handleDrawerToggle}
          modalprops={{
            keepMounted: true,
          }}
          className={styles.drawer}
          sx={{
            "& .MuiDrawer-paper": {
              borderRadius: "16px",
              margin: "16px",
            },
          }}
        >
          {searchPanel}
        </Drawer>
      </Grid>
    </>
  );
}
