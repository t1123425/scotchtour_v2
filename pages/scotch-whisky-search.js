import React from "react";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import SearchInput from "../components/SearchInput";
import ResultsTable from "../components/ResultsTable";
import { TableBody } from "@mui/material";

export default function ScotchDb(pageProps) {
  const title = "Scotch Whisky Search";

  const { TableContainer } = ResultsTable();

  return (
    <>
      <DrawerAppBar title={navItems[6].title} />
      <SearchInput />
      <TableContainer>
        <TableBody />
      </TableContainer>
    </>
  );
}
