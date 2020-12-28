import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function CreateEmployee(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const history = useHistory();

    const addEmployee = (newEmployee) => {
        props.handleAddEmployee(newEmployee);
        history.push("/");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !age || !props.empId) return;
        addEmployee({ name: name, empId: props.empId, age: age });
    };

    return (
        <div>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                    history.push("/");
                }}
            >
                <div>
                    {" "}
                    <label htmlFor="name">
                        FUll Name
                        <input
                            type="text"
                            value={name}
                            id="name"
                            name="name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </label>
                </div>
                <br />
                <br />
                <div>
                    {" "}
                    <label htmlFor="empId">
                        Employee ID
                        <input
                            type="number"
                            value={props.empId}
                            id="empId"
                            name="empId"
                            disabled={true}
                        />
                    </label>
                </div>
                <br />
                <br />
                <div>
                    <label for="age">
                        Age
                        <input
                            type="number"
                            value={age}
                            id="age"
                            name="age"
                            min="18"
                            max="60"
                            onChange={(e) => {
                                setAge(e.target.value);
                            }}
                        />
                    </label>
                </div>
                <input type="submit" value="Add Employee" />
            </form>
        </div>
    );
}
