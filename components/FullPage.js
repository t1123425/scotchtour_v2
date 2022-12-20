import { Typography, Grid } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

// Uses SCSS - type as CSS, create micro-components in styles file 'FullPage.styles.js'
const HeaderFullPage = styled(Typography)`
  color: black;
  padding: 15px 0px 10px;
  font-size: 3rem;
  margin: 0 auto;
  max-width: 680px;
`;

const ImageFullPage = styled.img`
  //   display: ${(props) => (props.show ? `inline-block` : `none`)};
  max-width: 680px;
  width: calc(100% - 30px);
  margin: 0 15px;
`;

const ParagraphGridFullPage = styled(Grid)`
  p {
    padding: 15px 15px 0;
    max-width: 680px;
    text-align: left;
    margin: 0 auto;
  }
`;

export default function FullPage(props) {
  return (
    <Grid
      container
      alignItems="center"
      //   rowSpacing={4}
      justifyContent="center"
      //   textAlign={"center"}
    >
      <Grid item xs={12}>
        <HeaderFullPage variant="h1">{props.title}</HeaderFullPage>
      </Grid>
      <Grid item>
        <ImageFullPage show src={props.hero} />
      </Grid>
      <ParagraphGridFullPage item xs={12}>
        {props.mainText.map((p) => p)}
      </ParagraphGridFullPage>
      {/* <Grid item xs={12}>
        {props.mainText.map((p) => p)}
      </Grid> */}
    </Grid>
  );
}
