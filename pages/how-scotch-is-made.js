import React from "react";
import { Typography } from "@mui/material";
import ContainerBlock from "../components/ContainerBlock";

export default function Process(pageProps) {
  const title = "How Scotch is Made";
  return (
    <>
      <ContainerBlock title={title}>
        <Typography>{title}</Typography>
      </ContainerBlock>
    </>
  );
}
