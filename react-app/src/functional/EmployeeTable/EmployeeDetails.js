import React from "react";
import "../functional.css";

export default function ViewEmployee(props) {
   const viewEmployee = props.employees.filter((_,index) => index === props.index);

   return (
      <div>
      {/*viewEmployee.map(({name,empId,age}) => {
         return (
            <div><h2>Employee Details</h2><br/>
            Employee Id : {empId}<br/>
            Employee Name : {name}<br/>
            Age : {age}
            </div>
         );
      })*/}
      <View {...viewEmployee[0]}/>
      </div>
   );

}

export const View = ({empId, name, age}) => {
   return (
      <div>
      <h2>Employee Details</h2><br/>
      Employee Id : {empId}<br/>
      Employee Name : {name}<br/>
      Age : {age}
      </div>
   );
}