import React from "react";
import { Typography } from "@mui/material";
import ContainerBlock from "../components/ContainerBlock";

export default function AboutMe(pageProps) {
  const title = "About the Author";
  return (
    <>
      <ContainerBlock title={title}>
        <Typography>{title}</Typography>
      </ContainerBlock>
    </>
  );
}
