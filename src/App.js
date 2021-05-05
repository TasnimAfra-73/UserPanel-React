import React from "react";
import Button from "@material-ui/core/Button";
import Searchbar from "./components/SearchBar";
import UserTable from "./components/UserTable";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

function App() {
  const [open, setOpen] = React.useState(false);

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
  // getModalStyle is not a pure function, we roll the style only on the first render

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
          {/* <div className={classes.paper}>hiiiiiiii</div> */}
          <div className={classes.paper}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>Add User</h2>
              <a>X</a>
            </div>
            <div style={{ display: "flex" }}>
              <form noValidate autoComplete="off">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label>First Name</label>
                  <TextField
                    id="outlined-search"
                    label="Enter first name"
                    type="search"
                    variant="outlined"
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label>Last Name</label>

                  <TextField
                    id="outlined-search"
                    label="Enter user name or email"
                    type="search"
                    variant="outlined"
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label>E-mail</label>

                  <TextField
                    id="outlined-search"
                    label="Enter user name or email"
                    type="search"
                    variant="outlined"
                  />
                </div>
                <div style={{ display: "flex", alignItems:"end" }}>
                <button style={{ backgroundColor: "green" }} type="submit">
                  Save
                </button>
                <button style={{ backgroundColor: "red" }} onClick={handleOpen}>
                  Close
                </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
      <UserTable />
    </div>
  );
}

export default App;
