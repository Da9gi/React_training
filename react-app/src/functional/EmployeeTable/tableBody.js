import React from "react";
import { useHistory } from "react-router-dom";
import "../functional.css";

export default function TableBody({ employees, handleIndex, handleIsDelete }) {
    let history = useHistory();

    return (
        employees &&
        employees.map(({ empId, name, age }, index) => {
            return (
                <tr key={empId}>
                    <td>{name}</td>
                    <td>{empId}</td>
                    <td>{age}</td>
                    <td className="action">
                        {
                            <button
                                onClick={() => {
                                    handleIndex(index);
                                    history.push("/EmployeeDetails");
                                }}
                            >
                                View
                            </button>
                        }
                        {
                            <button
                                onClick={() => {
                                    handleIndex(index);
                                    history.push("/UpdateEmployee");
                                }}
                            >
                                Edit
                            </button>
                        }
                        {
                            <button
                                onClick={() => {
                                    handleIsDelete(index);
                                }}
                            >
                                Delete
                            </button>
                        }
                    </td>
                </tr>
            );
        })
    );
}
