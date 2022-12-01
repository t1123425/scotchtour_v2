import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Typography,
  Grid,
  Box,
  Paper,
  Container,
  Popover,
} from "@mui/material";
import defaultdata from "../constants/defaultdata";
import Image from "next/image";

const cardVar = {
  initial: {
    elevation: 0,
  },
  hovered: {
    elevation: 6,
  },
};

function Card(props) {
  const [elevation, setElevation] = useState(1);
  const handleHover = (event) => {
    setElevation(elevation === 1 ? 6 : 1);
  };

  return (
    <Grid item xs={12} sm={6} md={3} lg={2} align={"center"}>
      <motion.div
        onHoverStart={handleHover}
        onHoverEnd={handleHover}
        onClick={props.handleClick}
        onClose={props.handleClose}
      >
        <Paper
          elevation={elevation}
          id={props.id}
          onClick={() => props.setActiveCard(props.id)}
        >
          <Box
            position={"relative"}
            height="300px"
            width="100%"
            maxWidth="300px"
          >
            <Image
              src="/talisker_logo.jpeg"
              alt="Talisker logo"
              fill
              objectFit="contain"
            />
          </Box>
        </Paper>
      </motion.div>
    </Grid>
  );
}

export default function CardPage() {
  const [popperOpen, setPopperOpen] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const handleClick = (event) => {
    setPopperOpen(event.currentTarget);
    console.log(activeCard);
    console.log(ref);
    console.log(popOffsetY);
    console.log(popOffsetX);
    console.log(ref.current);
  };
  const handleClose = () => {
    setPopperOpen(null);
  };
  const open = Boolean(popperOpen);
  const ref = useRef(1);
  const popOffsetY = ref.current.clientHeight / 2;
  const popOffsetX = ref.current.clientWidth / 2;

  return (
    <>
      <Container maxWidth={false} ref={ref}>
        <Grid container spacing={2} mt={1}>
          <Card
            id={1}
            setActiveCard={setActiveCard}
            handleClick={handleClick}
            handleClose={handleClose}
          />
          <Card
            id={2}
            setActiveCard={setActiveCard}
            handleClick={handleClick}
            handleClose={handleClose}
          />
          <Card
            id={3}
            setActiveCard={setActiveCard}
            handleClick={handleClick}
            handleClose={handleClose}
          />
          <Card
            id={4}
            setActiveCard={setActiveCard}
            handleClick={handleClick}
            handleClose={handleClose}
          />
          <Card
            id={5}
            setActiveCard={setActiveCard}
            handleClick={handleClick}
            handleClose={handleClose}
          />
          <Card
            id={6}
            setActiveCard={setActiveCard}
            handleClick={handleClick}
            handleClose={handleClose}
          />
          <Card
            id={7}
            setActiveCard={setActiveCard}
            handleClick={handleClick}
            handleClose={handleClose}
          />
          <Card
            id={8}
            setActiveCard={setActiveCard}
            handleClick={handleClick}
            handleClose={handleClose}
          />
          <Card
            id={9}
            setActiveCard={setActiveCard}
            handleClick={handleClick}
            handleClose={handleClose}
          />
          <Card
            id={10}
            setActiveCard={setActiveCard}
            handleClick={handleClick}
            handleClose={handleClose}
          />
          <Card
            id={11}
            setActiveCard={setActiveCard}
            handleClick={handleClick}
            handleClose={handleClose}
          />
          <Card
            id={12}
            setActiveCard={setActiveCard}
            handleClick={handleClick}
            handleClose={handleClose}
          />
        </Grid>
        <Popover
          open={open}
          anchorReference={"anchorPosition"}
          anchorPosition={{ left: popOffsetX, top: popOffsetY }}
          transformOrigin={{ vertical: "center", horizontal: "center" }}
          onClose={handleClose}
        >
          <Box height={400} width={600}>
            <Typography align="center">Test Popover {activeCard}</Typography>
          </Box>
        </Popover>
      </Container>
    </>
  );
}
