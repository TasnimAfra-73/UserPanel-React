import React from "react";
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

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div style = {{display: "flex" }}>
      <Button style={{ backgroundColor: "green" }}>Search</Button>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-search" label="Enter user name or email" type="search" variant="outlined" />
      </form>
    </div>
  );
}
