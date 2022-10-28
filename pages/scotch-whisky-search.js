import React from "react";
import { Typography } from "@mui/material";
import ContainerBlock from "../components/ContainerBlock";

export default function ScotchDb(pageProps) {
  const title = "Scotch Whisky Search";
  return (
    <>
      <ContainerBlock title={title}>
        <Typography>{title}</Typography>
      </ContainerBlock>
    </>
  );
}
