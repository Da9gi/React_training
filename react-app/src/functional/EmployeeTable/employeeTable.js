import React from "react";
import { Link } from "react-router-dom";
import TableBody from "./tableBody";
import "../functional.css";

export default function EmployeeList({
    employees,
    handleIndex,
    handleIsDelete,
}) {
    return (
        <div>
            <h1 id="title">Employees Table</h1>
            <Link to="/CreateEmployee">
                <button>Add New Employee</button>{" "}
            </Link>
            <table id="employee">
                <thead>
                    <tr>{<TableHeader />}</tr>
                </thead>
                <tbody>
                    {
                        <TableBody
                            employees={employees}
                            handleIndex={handleIndex}
                            handleIsDelete={handleIsDelete}
                        />
                    }
                </tbody>
            </table>
        </div>
    );
}

export function TableHeader() {
    const header = ["name", "empId", "age", "action"];
    return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
    });
}
