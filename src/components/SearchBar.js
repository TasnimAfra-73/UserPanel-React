import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "80vw",
    },
  },
}));

export default function SearchBar({ users, setUsers }) {
  const [searchInput, setSearchInput] = useState("");
  const classes = useStyles();
  const searchArray = JSON.parse(localStorage.getItem("users"));

  const getUsers = () => {
    let tempUsers = JSON.parse(localStorage.getItem("users"));
    if (!tempUsers) {
      localStorage.setItem("users", JSON.stringify([]));
      tempUsers = JSON.parse(localStorage.getItem("users"));
    }
    setUsers(tempUsers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempUsers = [];
    if (searchInput === "") {
      getUsers();
    }

    searchArray.forEach((element) => {
      var firstName = element.firstName;
      var lastName = element.lastName;
      var email = element.email;
      if (
        firstName.includes(searchInput) ||
        lastName.includes(searchInput) ||
        email.includes(searchInput)
      ) {
        tempUsers.push(element);
        setUsers(tempUsers);
      }
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <Button style={{ backgroundColor: "green" }}>Search</Button>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          size="small"
          id="outlined-search"
          label="Search by user name or email"
          type="search"
          variant="outlined"
          onChange={(event) => {
            setSearchInput(event.target.value);
          }}
        />
      </form>
    </div>
  );
}
