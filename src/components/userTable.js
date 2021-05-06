import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import EditForm from "./EditForm";


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

      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [open, setOpen] = useState(false);

      const useStyles = makeStyles((theme) => ({
        paper: {
          position: "absolute",
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: "2px solid #000",
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
        modal: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }));
    
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const classes = useStyles();
    
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      return (
        <div style={{ display: "flex" }}>
          <Button style={{ backgroundColor: "green" }} onClick={handleOpen}>
            Edit
          </Button>
          <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className={classes.paper}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Update User</h2>
              <a href="" style={{ justifyContent: "space-between" }}>
                x
              </a>
            </div>
            <div style={{ display: "flex" }}>
              <EditForm/>
            </div>
          </div>
        </Modal>
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
