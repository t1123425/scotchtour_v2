import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../styles/ResultsTable.module.css";

export default function ResultsTable(records, headers, filterFn, filterInput) {
  // state
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  // helpers
  const TableContainer = (props) => (
    <Table stickyHeader className={styles.tableContainer}>
      {props.children}
    </Table>
  );
  const TableHeader = (props) => {
    const handleSortRequest = (cellId) => {
      const isAsc = orderBy === cellId && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(cellId);
    };
    return (
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell
              key={header.id}
              sortDirection={orderBy === header.id ? order : false}
              className={styles.topRow}
              sx={{ top: 164 }}
            >
              {header.disableSorting ? (
                <Typography
                  variant={"h4"}
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      md: "1.3rem",
                    },
                  }}
                >
                  {header.label}
                </Typography>
              ) : (
                <TableSortLabel
                  active={orderBy === header.id}
                  direction={orderBy === header.id ? order : "asc"}
                  onClick={() => {
                    handleSortRequest(header.id);
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        md: "1.3rem",
                      },
                    }}
                  >
                    {header.label === "Whisky"
                      ? `${header.label} (of ${filterFn.fn(records).length})`
                      : header.label}
                  </Typography>
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  function objectSort(array, comparisonType) {
    const indexedArray = array.map((record, index) => [record, index]);
    indexedArray.sort((a, b) => {
      const order = comparisonType(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return indexedArray.map((record) => record[0]);
  }

  function getComparisonType(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparison(a, b, orderBy)
      : (a, b) => -descendingComparison(a, b, orderBy);
  }

  function descendingComparison(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] < a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const recordsAfterSorting = () => {
    return objectSort(filterFn.fn(records), getComparisonType(order, orderBy));
  };

  return {
    TableContainer,
    TableHeader,
    recordsAfterSorting,
  };
}
