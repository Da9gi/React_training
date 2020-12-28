import React from "react";
import { withState, compose, withHandlers } from "recompose";

import "./recompose.css";

const employeesList = [
    {
        name: "Emp 1",
        empSalary: 1000000,
        picture:
            "https://i1.wp.com/www.thinksys.com/wp-content/uploads/2018/02/rajiv-jain200.jpg?w=200&ssl=1",
    },
    {
        name: "Emp 2",
        empSalary: 500000,
        picture:
            "https://i2.wp.com/www.thinksys.com/wp-content/uploads/2018/08/Rajiv-Jha.jpg?w=200&ssl=1",
    },
    {
        name: "Emp 3",
        empSalary: 300000,
        picture:
            "https://i0.wp.com/www.thinksys.com/wp-content/uploads/2018/10/rk-sir.png?fit=200%2C200&ssl=1&is-pending-load=1",
    },
];

function Card({ cardState, handleOnClick, empName, empSalary, picture }) {
    return (
        <div className={cardState ? "openCard" : "closeCard"}>
                <div onClick={handleOnClick}>Name : {empName}</div>
                 <div className="body">
                <img src={picture} alt={empName} />
                 Salary : {empSalary}
                </div> <br/><br/>
        </div>
    );
}

const List = ({cardState, handleOnClick}) => {
    return (
        <div>
            {employeesList.map((employee) => (
                <Card
                    cardState={cardState}
                    handleOnClick={handleOnClick}
                    empName={employee.name}
                    picture={employee.picture}
                    empSalary={employee.empSalary}
                />
            ))}
        </div>
    );
};

const Enhance = compose(
    withState("cardState", "setCardState", false),
    withHandlers({
        handleOnClick: props => event =>{
            event.preventDefault();
            props.setCardState(!props.cardState);
        }
    })
);

export default Enhance(List)

