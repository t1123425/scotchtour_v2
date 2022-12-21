import React, { useReducer, useState } from "react";
import navItems from "../constants/navitems";
import DrawerAppBar from "../components/DrawerAppBar";
import SearchInput from "../components/SearchInput";
import ResultsTable from "../components/ResultsTable";
import {
  Chip,
  TableBody,
  TableCell,
  TableRow,
  useScrollTrigger,
  Slide,
  Toolbar,
} from "@mui/material";
import whiskyDbService from "../services/whiskyDbService";

// Remove pagination; use inifinite scroll

const headers = [
  { id: "whisky", label: "Whisky" },
  { id: "type", label: "Type" },
  { id: "cost", label: "Cost" },
  { id: "tags", label: "Tags", disableSorting: true },
];

export async function getStaticProps() {
  const whiskies = await whiskyDbService.getWhisky_db();

  return { props: { whiskies } };
}

export default function ScotchDb({ whiskies }) {
  const title = "Scotch Whisky Search";
  const [records, setRecords] = useState(whiskies);
  // const [records, setRecords] = useState(getWhiskyDb());
  console.log(records);
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
      min: 1,
      max: 6,
      range: [1, 6],
      tags: [],
    }
  );

  const { TableContainer, TableHeader, TablePages, recordsAfterPagingSorting } =
    ResultsTable(records, headers, filterFn);

  // V2 Search function w/ useReducer method
  const handleSearchV2 = (event, newValue) => {
    const { name, value, textContent } = event.target;
    name === "range"
      ? setFilterInput({ range: value, min: value[0], max: value[1] })
      : name
      ? setFilterInput({ [name]: value })
      : setFilterInput({ tags: newValue });
    setFilterFn({
      fn: (items) => {
        return items
          .filter((item) => {
            return item.whisky
              .toLowerCase()
              .includes(
                name === "whisky" ? value.toLowerCase() : filterInput.whisky
              );
          })
          .filter((item) => {
            let tempTags;
            name == "range"
              ? (tempTags = filterInput.tags)
              : (tempTags = newValue);
            return name == "range"
              ? tempTags.every((v) => {
                  return item.tags.includes(v);
                })
              : newValue !== undefined
              ? newValue.length > 0
                ? tempTags.every((v) => {
                    return item.tags.includes(v);
                  })
                : item
              : item;
          })
          .filter((item) => {
            let tempMin, tempMax;
            name === "range"
              ? (tempMin = value[0])
              : (tempMin = filterInput.min);
            name === "range"
              ? (tempMax = value[1])
              : (tempMax = filterInput.max);
            return item.cost.length <= tempMax && item.cost.length >= tempMin;
          });
      },
    });
  };

  return (
    <>
      <DrawerAppBar title={navItems[6].title} />
      <SearchInput
        handleChangeValue={handleSearchV2}
        searchValue={filterInput}
      />
      <TablePages />
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
    </>
  );
}
