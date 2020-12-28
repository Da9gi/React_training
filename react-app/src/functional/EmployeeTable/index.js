import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import "../functional.css";
// import DeleteEmployee from "./DeleteEmployee";
// import CreateEmployee from "./CreateEmployee";
// import ViewEmployee from "./EmployeeDetails";
// import UpdateEmployee from "./UpdateEmployee";
import EmployeeHome from "./employeeHome";

export default function EmployeeTable() {

    return (
        <Router>
        <ul>
          <li>
            <Link to="/employeeHome">Home</Link>
          </li>
        </ul>
        <hr />
        <Switch>
        <Route exact path="/employeeHome">
          <EmployeeHome />
        </Route>
        </Switch>
        </Router>
    );
}





