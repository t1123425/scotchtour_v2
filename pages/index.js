import React from "react";
import { Typography } from "@mui/material";
import ContainerBlock from "../components/ContainerBlock";
import FullPage from "../components/FullPage";
import defaultdata from "../constants/defaultdata";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";

export default function Home(props) {
  return (
    <>
      <DrawerAppBar title={navItems[0].title} />
      <ContainerBlock>
        <FullPage defaultdata={defaultdata} />
      </ContainerBlock>
    </>
  );
}
