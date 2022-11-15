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

  // Test on Close trigger
  const bigClose = () => {
    console.log("Everything closed!");
  };

  // V2 Search function w/ useReducer method
  const handleSearchV2 = (event, newValue) => {
    console.log(event);
    console.log(newValue);
    const { name, value, textContent } = event.target;
    name === "range"
      ? setFilterInput({ range: value, min: value[0], max: value[1] })
      : name
      ? setFilterInput({ [name]: value })
      : setFilterInput({ tags: newValue });
    const inputType = name ? name : "tags";
    console.log(newValue ? true : false);
    // Not getting updated filterInput until after block runs
    setFilterFn({
      fn: (items) => {
        return items.filter((item) => {
          return (
            item.whisky
              .toLowerCase()
              .includes(
                name === "whisky" ? value.toLowerCase() : filterInput.whisky
              ) &&
            // && newValue
            // ? newValue.every((v) => {
            //     return item.tags.includes(v);
            //   })
            // :
            item
          );
          // &&
          // (event.type == "click" || event.type == "keydown")
          // ? textContent
          //   ? [...filterInput.tags, textContent].every((value) => {
          //       return item.tags.includes(value);
          //     })
          //   : // textContent is blank
          //     false
          // : // event type isn't click
          //   false;
          //  [...filterInput.tags, textContent].every((value) => {
          //     return item.tags.includes(value);
          //   })
          // : textContent == "" && name === "whisky" && filterInput.tags !== []
          // ? [...filterInput.tags].every((value) => {
          //     return item.tags.includes(value);
          //   })
          // : false;
        });

        //     //   textContent
        //     //     ? [...filterInput.tags, textContent]
        //     //     : filterInput.tags
        //     // )
        //     // && record.cost <= filterInput.max
        //     // && record.cost >= filterInput.min
        //   },
        // });
      },
    });
  };
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
        handleClose={bigClose}
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
