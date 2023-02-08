import React from "react";
import ScrollPage from "../components/ScrollPage";
import { processContent } from "../constants/siteContent";

export default function Process(pageProps) {
  return (
    <ScrollPage content={processContent} />
  );
}
