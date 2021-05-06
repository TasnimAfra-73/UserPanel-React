import React from "react";
import TextField from "@material-ui/core/TextField";


export default function AddForm(){
    return(
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
                    label="Enter last name"
                    type="search"
                    variant="outlined"
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label>E-mail</label>

                  <TextField
                    id="outlined-search"
                    label="Enter email"
                    type="search"
                    variant="outlined"
                  />
                </div>
                <div style={{ display: "flex", alignItems: "end" }}>
                  <button style={{ backgroundColor: "green" }} type="submit">
                    Save
                  </button>
                  <button
                    style={{ backgroundColor: "red" }}
                  >
                    Close
                  </button>
                </div>
              </form>
        
    )
}