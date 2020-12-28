import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../functional.css";

export default function UpdateEmployee(props) {
    const [ newName , setName] = useState("");
    const [ newAge , setAge] = useState("");
    const history = useHistory();

    function editEmployee() {
      props.employees[props.index].name = newName;
      props.employees[props.index].age = newAge;
      props.handleUpdate(props.employees);
    }
    
    return (
      <div>
             {" "}
             <label for="name">
                 Edit Name
                 <input
                     type="text"
                     value={newName}
                     id="name"
                     name="name"
                     onChange={(e) => {
                         setName(e.target.value);
                     }}
                 /><br/><br/>
             </label>{" "}
             <label for="age">
                 Edit Age
                 <input
                     type="text"
                     value={newAge}
                     id="age"
                     name="age"
                     onChange={(e) => {
                         setAge(e.target.value);
                     }}
                 />
             </label><br/><br/>
             <button onClick={()=>{
                editEmployee();
                history.push("/");
               }}>Update Employee</button>
               
         </div>
   ); 
}
