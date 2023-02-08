import React from "react";
import CardPage from "../components/CardPage";
import { brandCards } from "../constants/siteContent";


export default function Brands(pageProps) {
  return (
    <CardPage content={brandCards} />
  );
}
