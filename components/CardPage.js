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
import styles from "../styles/CardPage.module.css";
import { theme } from "../styles/theme";

function Card(props) {
  // state
  const [elevation, setElevation] = useState(1);

  // handlers
  const handleHover = (event) => {
    setElevation(elevation === 1 ? 6 : 1);
  };

  return (
    <Grid item align={"center"} xs={12} sm={6} md={4} lg={3}>
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
          className={styles.wrapper}
        >
          <img src={props.imageUrl} className={styles.image} />
        </Paper>
      </motion.div>
    </Grid>
  );
}

export default function CardPage(props) {
  // state
  const [popperOpen, setPopperOpen] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  // helpers
  const open = Boolean(popperOpen);
  const ref = useRef(1);
  const popOffsetY = ref.current.clientHeight / 2;
  const popOffsetX = ref.current.clientWidth / 2;
  const activeData = props.content.filter((card) => card.id === activeCard);

  // handlers
  const handleClick = (event) => {
    setPopperOpen(event.currentTarget);
    // console.log(activeCard);
    // console.log(ref);
    // console.log(popOffsetY);
    // console.log(popOffsetX);
    // console.log(ref.current);
  };
  const handleClose = () => {
    setPopperOpen(null);
  };

  return (
    <>
      <Container maxWidth={false} ref={ref}>
        <Grid container>
          {props.content.map((card) => (
            <Card
              id={card.id}
              imageUrl={card.imageUrl}
              setActiveCard={setActiveCard}
              handleClick={handleClick}
              handleClose={handleClose}
            />
          ))}
        </Grid>
        <Popover
          open={open}
          anchorReference={"anchorPosition"}
          anchorPosition={{ left: popOffsetX, top: popOffsetY }}
          transformOrigin={{ vertical: "center", horizontal: "center" }}
          onClose={handleClose}
        >
          <Box className={styles.popWrapper}>
            <Typography variant="h5" className={styles.popTitle}>
              {activeData[0] ? activeData[0].name : "sample"}
            </Typography>
            <Typography className={styles.popSpan}>
              <strong
                className={styles.subDetails}
                style={{
                  backgroundColor: theme.palette.secondary.main,
                }}
              >
                Region:{" "}
              </strong>
              <span
                className={styles.regionPill}
                style={{
                  backgroundColor: activeData[0]
                    ? theme.palette[activeData[0].region.toLowerCase()].main
                    : "white",
                }}
              >
                {activeData[0] ? activeData[0].region : "sample"}
              </span>
            </Typography>
            <Typography className={styles.popSpan}>
              <strong
                className={styles.subDetails}
                style={{
                  backgroundColor: theme.palette.secondary.main,
                }}
              >
                Founded:{" "}
              </strong>
              {activeData[0] ? activeData[0].founded : "sample"}
            </Typography>
            <Box className={styles.popBlock}>
              {activeData[0] ? activeData[0].desc.map((p) => p) : ""}
            </Box>
            <Typography className={styles.popFact}>
              <strong
                className={styles.interestingFact}
                style={{
                  backgroundColor: theme.palette.secondary.main,
                }}
              >
                Interesting Fact:{" "}
              </strong>
              {activeData[0] ? activeData[0].interestingFact : "sample"}
            </Typography>
          </Box>
        </Popover>
      </Container>
    </>
  );
}
