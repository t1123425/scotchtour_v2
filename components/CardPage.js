import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography, Grid, Box, Paper, Container } from "@mui/material";
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
      <motion.div onHoverStart={handleHover} onHoverEnd={handleHover}>
        <Paper elevation={elevation}>
          <Image
            src="/talisker_logo.jpeg"
            width={302}
            height={302}
            alt="Talisker logo"
          />
        </Paper>
      </motion.div>
    </Grid>
  );
}

export default function CardPage() {
  return (
    <>
      <Container maxWidth={false}>
        <Grid container spacing={2} mt={1}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Container>
    </>
  );
}
