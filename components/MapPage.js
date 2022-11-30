import React, { useRef, useState, useEffect } from "react";
import { Typography, Container, Popover, Box } from "@mui/material";
import Image from "next/image";

export default function MapPage() {
  const ref = useRef();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
  }, []);

  console.log(width);
  console.log(height);
  console.log(ref);
  return (
    <Container>
      <Box align={"center"}>
        <img
          ref={ref}
          src="/scotch-regions.jpeg"
          alt="Scotch regions"
          height="100%"
          width="100%"
          style={{ maxWidth: "70vh" }}
        />
      </Box>
    </Container>
  );
}
