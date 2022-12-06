import React, { useRef, useState, useEffect } from "react";
import {
  Typography,
  Container,
  Popover,
  Box,
  makeStyles,
  Button,
} from "@mui/material";

export default function MapPage(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeBtn, setActiveBtn] = useState(null);
  const popName = activeBtn ? props.regionContent[activeBtn].name : "sample";
  const popDesc = activeBtn
    ? props.regionContent[activeBtn].description
    : "sample";
  const popBrands = activeBtn
    ? props.regionContent[activeBtn].distilleries
    : "sample";
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setActiveBtn(event.currentTarget.id);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Container>
      <Box
        align={"center"}
        position="absolute"
        left="50%"
        sx={{ transform: "translate(-50%, 0%)" }}
      >
        <img
          src="/scotch-regions.png"
          alt="Scotch regions"
          //   height="100%"
          //   width="100%"
          style={{ maxWidth: "60vh" }}
        />
        {props.regionButtons.map((region) => (
          <Button
            variant="contained"
            id={region.name.toLowerCase()}
            sx={{
              position: "absolute",
              top: region.top,
              left: region.left,
            }}
            size="small"
            onClick={handleClick}
          >
            {region.name}
          </Button>
        ))}
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box height={200} width={400}>
            <Typography align="center" variant="h5">
              {popName}
            </Typography>
            <Typography align="center">{popDesc}</Typography>
            <Typography align="center">
              {`Notable Brands: ${popBrands}`}
            </Typography>
          </Box>
        </Popover>
      </Box>
    </Container>
  );
}
