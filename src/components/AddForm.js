import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function AddForm({ users, setUsers, handleClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName === "" || lastName === "" || email === "") {
      alert("Fields cannot be empty");
    } else {
      let tempUsers = [...users];
      let userObject = {
        id: users.length + 1,
        lastName: lastName,
        firstName: firstName,
        email: email,
      };
      tempUsers.push(userObject);
      localStorage.setItem("users", JSON.stringify(tempUsers));
      setUsers(tempUsers);
      event.target.reset();
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div className="inputSpace">
        <label className="labelSpace">First Name</label>
        <TextField
          style={{ marginTop: "5px" }}
          className="formInput"
          id="outlined-search"
          label="Enter first name"
          type="input"
          variant="outlined"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
      </div>
      <div className="inputSpace">
        <label className="labelSpace"> Last Name</label>

        <TextField
          style={{ marginTop: "5px" }}
          className="formInput"
          id="outlined-search"
          label="Enter last name"
          type="input"
          variant="outlined"
          onChange={(event) => {
            setLastName(event.target.value);
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
          type="input"
          variant="outlined"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="formBtnPos">
        <button
          style={{ backgroundColor: "green", marginRight: "5px" }}
          type="submit"
        >
          Save
        </button>
        <button style={{ backgroundColor: "red" }} onClick={handleClose}>
          Close
        </button>
      </div>
    </form>
  );
}
