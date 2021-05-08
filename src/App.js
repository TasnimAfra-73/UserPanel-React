import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Searchbar from "./components/SearchBar";
import UserTable from "./components/userTable";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AddForm from "./components/AddForm";

function App() {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    let tempUsers = JSON.parse(localStorage.getItem("users"));
    if (!tempUsers) {
      localStorage.setItem("users", JSON.stringify([]));
      tempUsers = JSON.parse(localStorage.getItem("users"));
    }
    setUsers(tempUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

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

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Searchbar />
        <Button style={{ backgroundColor: "green" }} onClick={handleOpen}>
          Add New
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
              <h2>Add User</h2>
            </div>
            <div style={{ display: "flex" }}>
              <AddForm
                users={users}
                setUsers={setUsers}
                handleClose={handleClose}
              />
            </div>
          </div>
        </Modal>
      </div>
      <UserTable users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
