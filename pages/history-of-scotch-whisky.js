import React from "react";
import { Typography } from "@mui/material";
import ContainerBlock from "../components/ContainerBlock";

export default function History(pageProps) {
  const title = "History of Scotch Whisky?";
  return (
    <>
      <ContainerBlock title={title}>
        <Typography>{title}</Typography>
      </ContainerBlock>
    </>
  );
}
