import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function AddForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();    
    let users = JSON.parse(localStorage.getItem("users"));
    if(!users){
        localStorage.setItem("users", JSON.stringify([]));
        users = JSON.parse(localStorage.getItem("users"));
    }

    let userObject = { firstName: firstName, lastName: lastName, email: email };
    users.push(userObject);
    localStorage.setItem("users", JSON.stringify(users));
    event.target.reset();
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label>First Name</label>
        <TextField
          id="outlined-search"
          label="Enter first name"
          type="input"
          variant="outlined"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label>Last Name</label>

        <TextField
          id="outlined-search"
          label="Enter last name"
          type="input"
          variant="outlined"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label>E-mail</label>

        <TextField
          id="outlined-search"
          label="Enter email"
          type="input"
          variant="outlined"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "end" }}>
        <button style={{ backgroundColor: "green" }} type="submit">
          Save
        </button>
        <button style={{ backgroundColor: "red" }}>Close</button>
      </div>
    </form>
  );
}
