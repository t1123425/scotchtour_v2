import React, { useRef, useState, useEffect } from "react";
import {
  Typography,
  Container,
  Popover,
  Box,
  makeStyles,
  Button,
} from "@mui/material";
import Image from "next/image";

const regionButtons = [
  {
    name: "Islands",
    top: "30%",
    left: "12%",
    height: "3.59%",
    width: "10.35%",
  },
  {
    name: "Speyside",
    top: "40%",
    left: "66%",
    height: "3.59%",
    width: "11.43%",
  },
  {
    name: "Highlands",
    top: "53%",
    left: "58%",
    height: "3.59%",
    width: "13.77%",
  },
  {
    name: "Lowlands",
    top: "78%",
    left: "63%",
    height: "3.59%",
    width: "12.70%",
  },
  {
    name: "Islay",
    top: "62%",
    left: "43%",
    height: "3.59%",
    width: "7.03%",
  },
  {
    name: "Campbeltown",
    top: "85%",
    left: "52%",
    height: "3.59%",
    width: "17.58%",
  },
];

export default function MapPage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
        {regionButtons.map((region) => (
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
            <Typography align="center">Test Popover</Typography>
          </Box>
        </Popover>
      </Box>
    </Container>
  );
}
