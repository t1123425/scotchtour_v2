import React, { useReducer, useState } from "react";
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

  // NEW useReducer method instead of useState
  const [filterInput, setFilterInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      whisky: "",
      min: "",
      max: "",
      range: [],
      tags: [],
    }
  );

  const { TableContainer, TableHeader, TablePages, recordsAfterPagingSorting } =
    ResultsTable(records, headers, filterFn);

  // V2 Search function w/ useReducer method
  const handleSearchV2 = (event) => {
    console.log(typeof event.value);
    const { name, value, textContent } = event.target;
    console.log(records[0].tags.includes(textContent));
    console.log(textContent ? true : false);
    name === "range"
      ? setFilterInput({ range: value, min: value[0], max: value[1] })
      : name
      ? setFilterInput({ [name]: value })
      : textContent == ""
      ? setFilterInput({ tags: [] })
      : setFilterInput({ tags: [...filterInput.tags, textContent] });
    console.log(filterInput);

    // Not getting updated filterInput until after block runs
    setFilterFn({
      fn: (items) => {
        return items.filter((item) => {
          return item.whisky
            .toLowerCase()
            .includes(
              name === "whisky" ? value.toLowerCase() : filterInput.whisky
            );
          //   && item.tags.includes(
          //   textContent
          //     ? [...filterInput.tags, textContent]
          //     : filterInput.tags
          // )
          // && record.cost <= filterInput.max
          // && record.cost >= filterInput.min
        });
      },
    });
  };
  // Separate handler for setFunction
  // const handleSearchFn = (event) => {
  //   const target= event.target;
  //   setFilterFn({
  //     fn: (items) => {
  //       return items.filter((item) => {
  //         return item.whisky
  //           .toLowerCase()
  //           .includes(ta.whisky.toLowerCase());
  //         // && record.tags.includes(filterInput.tags) &&
  //         // record.cost <= filterInput.max &&
  //         // record.cost >= filterInput.min
  //       });
  //     },
  //   });
  // }

  console.log(
    records.filter((item) =>
      item.whisky.toLowerCase().includes(filterInput.whisky.toLowerCase())
    )
  );
  console.log(filterFn.fn(records));
  console.log(recordsAfterPagingSorting());
  console.log(filterInput);
  return (
    <>
      <DrawerAppBar title={navItems[6].title} />
      <SearchInput
        handleChangeValue={handleSearchV2}
        searchValue={filterInput}
        // handleSearch={handleSearch}
      />
      <TableContainer>
        <TableHeader />
        <TableBody>
          {console.log(filterInput)}
          {console.log(filterFn.fn(records))}
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
