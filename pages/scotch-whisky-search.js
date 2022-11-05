import React from "react";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import SearchInput from "../components/SearchInput";

export default function ScotchDb(pageProps) {
  const title = "Scotch Whisky Search";
  return (
    <>
      <DrawerAppBar title={navItems[6].title} />
      <SearchInput />
    </>
  );
}
