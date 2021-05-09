import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function EditForm({ params, users, setUsers, handleClose }) {
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
      <div className="inputSpace">
        <label className="labelSpace"> First Name</label>
        <TextField
          style={{ marginTop: "5px" }}
          className="formInput"
          id="outlined-search"
          label="Enter first name"
          type="search"
          variant="outlined"
          onChange={(event) => {
            setNewFirstName(event.target.value);
          }}
        />
      </div>
      <div className="inputSpace">
        <label className="labelSpace">Last Name</label>
        <TextField
          style={{ marginTop: "5px" }}
          className="formInput"
          id="outlined-search"
          label="Enter last name"
          type="search"
          variant="outlined"
          onChange={(event) => {
            setNewLastName(event.target.value);
          }}
        />
      </div>
      <div className="inputSpace">
        <label className="labelSpace">E-mail</label>
        <TextField
          style={{ marginTop: "5px" }}
          className="formInput"
          id="outlined-search"
          label="Enter email"
          type="search"
          variant="outlined"
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
        />
      </div>
      <div className="formBtnPos">
        <button
          style={{ backgroundColor: "green", marginRight: "5px" }}
          type="submit"
        >
          Update
        </button>
        <button style={{ backgroundColor: "red" }} onClick={handleClose}>
          Close
        </button>
      </div>
    </form>
  );
}
