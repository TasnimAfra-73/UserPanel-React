import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function EditForm({params, users, setUsers, handleClose}) {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let tempUsers = [...users];
    tempUsers[params.rowIndex].firstName = newFirstName;
    tempUsers[params.rowIndex].lastName = newLastName;
    tempUsers[params.rowIndex].email = newEmail;
    localStorage.setItem("users", JSON.stringify(tempUsers));
    setUsers(tempUsers);
    event.target.reset();
  };
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label>First Name</label>
        <TextField
          id="outlined-search"
          label="Enter first name"
          type="search"
          variant="outlined"
          onChange={(event) => {
            setNewFirstName(event.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label>Last Name</label>

        <TextField
          id="outlined-search"
          label="Enter last name"
          type="search"
          variant="outlined"
          onChange={(event) => {
            setNewLastName(event.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label>E-mail</label>

        <TextField
          id="outlined-search"
          label="Enter email"
          type="search"
          variant="outlined"
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "end" }}>
        <button style={{ backgroundColor: "green" }} type="submit">
          Update
        </button>
        <button style={{ backgroundColor: "red" }} onClick={handleClose}>
          Close
        </button>
      </div>
    </form>
  );
}
