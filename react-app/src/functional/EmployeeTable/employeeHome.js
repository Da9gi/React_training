import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";
import "../functional.css";
import CreateEmployee from "./CreateEmployee";
import ViewEmployee from "./EmployeeDetails";
import UpdateEmployee from "./UpdateEmployee";
import { Stringify, Parse } from "./utility";
import EmployeeList from "./employeeTable";

export default function EmployeeHome(props) {
    const [employees, setEmployees] = useState(
        Parse(localStorage.getItem("Employees"))
            ? Parse(localStorage.getItem("Employees"))
            : []
    );
    const [empId, setEmpId] = useState(handleEmpId(employees));
    const [id, setId] = useState(0);

    function handleEmpId(allEmployees) {
        return(
            allEmployees.length
                ? allEmployees.reduce((acc, cur) => {
                      return { empId: Math.max(acc.empId, cur.empId) };
                  }).empId + 1
                : 101
        );
    };

    function handleAddEmployee(newEmployee) {
        const Employees = employees.length
            ? [...employees, newEmployee]
            : [newEmployee];
        localStorage.setItem("Employees", Stringify(Employees));
        const allEmployees = Parse(localStorage.getItem("Employees"));
        setEmployees(allEmployees);
        setEmpId(handleEmpId(allEmployees));
    }

    function handleUpdate(updatedEmployees) {
        localStorage.setItem("Employees", Stringify(updatedEmployees));
        const allEmployees = Parse(localStorage.getItem("Employees"));
        setEmployees(allEmployees);
    }

    function handleDelete(updatedEmployees) {
        localStorage.setItem("Employees", Stringify(updatedEmployees));
        const allEmployees = Parse(localStorage.getItem("Employees"));
        setEmployees(allEmployees);
        setEmpId(handleEmpId(allEmployees));
    }

    function handleIndex(index) {
        setId(index);
    }

    function handleIsDelete(delId) {
        const choice = window.confirm(
            `Are you sure to delete the employee with \nEMP. ID :  ${employees[delId].empId},\nName : ${employees[delId].name}`
        );

        if (choice) {
            const updatedEmployees = employees.filter(
                (_, index) => index !== delId
            );
            handleDelete(updatedEmployees);
        }
    }

    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Employee Home</Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <ErrorBoundary>
                <Route exact path="/">
                    <EmployeeList
                        handleIndex={handleIndex}
                        employees={employees}
                        handleIsDelete={handleIsDelete}
                    />
                </Route>
                <Route exact path="/EmployeeDetails">
                    <ViewEmployee index={id} employees={employees} />
                </Route>
                <Route path="/UpdateEmployee">
                    <UpdateEmployee
                        index={id}
                        handleUpdate={handleUpdate}
                        employees={employees}
                    />
                </Route>
                <Route path="/CreateEmployee">
                    <CreateEmployee
                        empId={empId}
                        handleAddEmployee={handleAddEmployee}
                    />
                </Route>
                </ErrorBoundary>
            </Switch>
        </Router>
    );
}
