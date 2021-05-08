import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import EditForm from "./EditForm";

export default function DataTable({ users, setUsers }) {
  console.log(users);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
      sortable: false,
      valueGetter: (params) => {
        return params.rowIndex + 1;
      },
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 300,
      sortable: false,
    },
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

        const deleteUser = () => {
          let tempUsers = [...users];
          var currentIndex = params.rowIndex;
          if (currentIndex > -1) {
            tempUsers.splice(currentIndex, 1);
          }
          tempUsers.forEach((element) => {
            element.id = tempUsers.indexOf(element) + 1;
          });
          localStorage.setItem("users", JSON.stringify(tempUsers));
          setUsers(tempUsers);
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h2>Update User</h2>
                </div>
                <div style={{ display: "flex" }}>
                  <EditForm
                    params={params}
                    users={users}
                    setUsers={setUsers}
                    handleClose={handleClose}
                  />
                </div>
              </div>
            </Modal>
            <Button style={{ backgroundColor: "red" }} onClick={deleteUser}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 275, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        page={0}
        disableColumnMenu
      />
    </div>
  );
}
