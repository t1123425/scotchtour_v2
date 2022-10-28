import React from "react";
import { Typography } from "@mui/material";
import ContainerBlock from "../components/ContainerBlock";

export default function Regions(pageProps) {
  const title = "Regions of Origin";
  return (
    <>
      <ContainerBlock title={title}>
        <Typography>{title}</Typography>
      </ContainerBlock>
    </>
  );
}
