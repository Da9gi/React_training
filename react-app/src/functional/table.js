import React from "react";
import "./functional.css";

function BuildRows(props) {
    return (
        <tr>
            
            <td>{props.userData[props.index].fName}</td>
            <td>{props.userData[props.index].lName}</td>
            <td>{props.userData[props.index].age}</td>
        </tr>  
    );
}

export function Table(props) {
    const [userTable, setUserTable] = React.useState([]);
    for (let index = 0; index < props.userData.length; index++) {
        [userTable].push(<BuildRows userData={props.userData}  index={index} />);
    }

    setUserTable(([userTable].sort((a, b) => {
            if (a.name < b.name) return -1;
            else if (a.name === b.name) return 0;
            return 1;
        })
    ));

    // let sortedTable = [...rows];
    // sortedTable.sort((a, b) => {
    //     if (a.fName < b.fName) {
    //         return -1;
    //     } else if (a.fName > b.fName) {
    //         return 1;
    //     }
    //     return 0;
    // })

    return (
        <table className="table">
        <tr>
           
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
       {setUserTable}
       </table>
    );
}

