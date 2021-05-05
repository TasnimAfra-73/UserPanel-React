import * as React from "react";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
const columns = [
  { field: "id", headerName: "ID", width: 60, sortable: false },
  { field: "firstName", headerName: "First name", width: 300, sortable: false },
  { field: "lastName", headerName: "Last name", width: 300, sortable: false },
  {
    field: "email",
    headerName: "Email",
    width: 400,
    sortable: false,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 180,
    renderCell: (params) => {
      const onClick = () => {};

      return (
        <div>
          <Button style={{ backgroundColor: "green" }} onClick={onClick}>
            Edit
          </Button>
          <Button style={{ backgroundColor: "red" }} onClick={onClick}>
            Delete
          </Button>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", email: "jon@gmail.com" },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    email: "1234@gmail.com",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    email: "jaime@gmail.com",
  },
  { id: 4, lastName: "Stark", firstName: "Arya", email: "arya12@gmail.com" },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    email: "targaryen@gmail.com",
  },
  { id: 6, lastName: "Melisandre", firstName: null, email: "mel123@gmail.com" },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    email: "ferrara@gmail.com",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 275, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        page={0}
        disableColumnMenu
      />
    </div>
  );
}
