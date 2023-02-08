import React from "react";
import ScrollPage from "../components/ScrollPage";
import { whatIsContent } from "../constants/siteContent";

export default function WhatIs(pageProps) {
  return (
    <ScrollPage content={whatIsContent} />
  );
}
