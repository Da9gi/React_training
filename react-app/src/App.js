import React from "react";
import { BrowserRouter as Router,Switch, Link, Route } from "react-router-dom";
import "./App.css";
//  import Table from "./functional/table.js";
import NewCounter from "./class/counter.jsx";
import Form from "./class/form.jsx";
import Todolist from "./functional/ToDo/to-do-list.js";
import StopWatch from "./functional/stopwatch.js";
import EmployeeHome from "./functional/EmployeeTable/employeeHome"
import ShoppingHome from "./functional/Assessment/shoppingHome";
import UseMemo from "./functional/useMemo";
import ReactFinalForm from "./functional/react-final-form/reactFinalForm";
import List from "./functional/Recompose/recompose";
import RecomposeCounter from "./functional/Recompose/counter";
// import BlogList from "./axiosGET";
// import BolgHome from "./functional/Blogging App/blogHome";

function App() {
    return (
        <Router>
        <tr>
        <td><Link to="/class/counter">Counter</Link></td>
        <td><Link to="/functional/ToDo/to-do-list">To Do List</Link></td>
        <td><Link to="/class/form">Form</Link></td>
        <td><Link to="/functional/stopwatch">StopWatch</Link></td>
        <td><Link to="/functional/EmployeeTable/employeeHome">Employee Table</Link></td>
        <td> <Link to="/functional/Assessment/shoppingHome">Shopping Cart</Link></td>
        <td><Link to="/functional/useMemo">Use Memo</Link></td>
        <td><Link to="/functional/react-final-form/reactFinalForm">React Final Form</Link></td>
        <td><Link to="/functional/Recompose/recompose">Recompose</Link></td>
        <td><Link to="/functional/Recompose/counter">Recompose Counter</Link></td>
        </tr>
        <div className="App">
            <header className="App-header">
            <Switch>
                <Route path="/functional/EmployeeTable/employeeHome"><EmployeeHome/></Route>
                <Route path="/functional/Assessment/shoppingHome"><ShoppingHome/></Route>
                <Route path="/functional/stopwatch"><StopWatch/></Route>
                <Route path="/functional/ToDo/to-do-list"><Todolist/></Route>
                <Route path="/class/form"><Form/></Route>
                <Route path="/class/counter"><NewCounter/></Route>
                <Route path="/functional/useMemo"><UseMemo/></Route>
                <Route path="/functional/react-final-form/reactFinalForm"><ReactFinalForm/></Route>
                <Route path="/functional/Recompose/recompose"><List/></Route>
                <Route path="/functional/Recompose/counter"><RecomposeCounter/></Route>
            </Switch>
            </header>
        </div>
        </Router>
    );
}

export default App;
