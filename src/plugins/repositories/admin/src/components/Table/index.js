import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, description, html_url) {
  return { name, description, html_url };
}

const rows = [
  createData("Landing page", "landing page that shows ..", "www.nolink.com"),
  createData(
    "links-estudo",
    "links interessante sobre tudo abordado no curso",
    "https://github.com/React-Avancado/links-estudo"
  ),
  createData(
    "boilerplate",
    "boilereplate to use in our React Avancado Course",
    "https://github.com/React-Avancado/boilerplate"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">html_url(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.html_url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
