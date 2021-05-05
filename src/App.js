import React from "react";
import Button from "@material-ui/core/Button";
import Searchbar from "./components/SearchBar";
import UserTable from "./components/userTable";
// import SearchBar from "material-ui-search-bar";

// import searchBar from '../src'
function App() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Searchbar />
        <Button style= {{backgroundColor: "green"}}>
          Add New
        </Button>
      </div>
      <UserTable/>
    </div>
  );
}

export default App;
