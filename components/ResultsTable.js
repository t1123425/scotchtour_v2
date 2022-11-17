import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./ResultsTable.module.css";

export default function ResultsTable(records, headers, filterFn, filterInput) {
  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();

  const TableContainer = (props) => (
    <Table className={styles.tableContainer}>{props.children}</Table>
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
            >
              {header.disableSorting ? (
                header.label
              ) : (
                <TableSortLabel
                  active={orderBy === header.id}
                  direction={orderBy === header.id ? order : "asc"}
                  onClick={() => {
                    handleSortRequest(header.id);
                  }}
                >
                  {header.label}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const TablePages = () => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={filterFn.fn(records).length}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );

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

  const recordsAfterPagingSorting = () => {
    return objectSort(
      filterFn.fn(records),
      getComparisonType(order, orderBy)
    ).slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  return {
    TableContainer,
    TableHeader,
    TablePages,
    recordsAfterPagingSorting,
  };
}
