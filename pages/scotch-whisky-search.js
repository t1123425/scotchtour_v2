import React, { useState } from "react";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import SearchInput from "../components/SearchInput";
import ResultsTable from "../components/ResultsTable";
import { Chip, TableBody, TableCell, TableRow } from "@mui/material";
import { getWhiskyDb, whiskyDb } from "../constants/sampleWhiskyService";

const headers = [
  { id: "whisky", label: "Whisky" },
  { id: "type", label: "Type" },
  { id: "cost", label: "Cost" },
  { id: "tags", label: "Tags", disableSorting: true },
];

export default function ScotchDb(pageProps) {
  const title = "Scotch Whisky Search";
  const [records, setRecords] = useState(getWhiskyDb());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TableContainer, TableHeader, TablePages, recordsAfterPagingSorting } =
    ResultsTable(records, headers, filterFn);

  const handleSearch = (event) => {
    let target = event.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.whisky.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <>
      <DrawerAppBar title={navItems[6].title} />
      <SearchInput onChange={handleSearch} />
      <TableContainer>
        <TableHeader />
        <TableBody>
          {recordsAfterPagingSorting().map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.whisky}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>{item.cost}</TableCell>
              <TableCell>
                {item.tags.map((tag) => (
                  <Chip
                    variant="outlined"
                    key={item.id + "-" + item.tags.indexOf(tag)}
                    label={tag}
                    size="small"
                  />
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableContainer>
      <TablePages />
    </>
  );
}
