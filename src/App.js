import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Searchbar from "./components/SearchBar";
import UserTable from "./components/userTable";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AddForm from "./components/AddForm";
import "./App.css";
import "./index.css";

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

  const useStyles = makeStyles(() => ({
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
      <div className="searchBarDiv">
        <Searchbar users={users} setUsers={setUsers} />
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
          <div className= "paper">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Add User</h2>
            </div>
            <div style={{padding:"10px"}}>
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
