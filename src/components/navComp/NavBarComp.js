import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import AddPollPage from "../../pages/addPollsPage/AddPollPage";

function NavBarComp() {
  return (
    <>
      <Link to='/'>Poll List</Link>
      <Link to='/add-poll'>Add New Poll</Link>
    </>
  );
}

export default NavBarComp;
