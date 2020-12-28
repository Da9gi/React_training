import React, { useState } from "react";
import axios from "axios";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import SignIn from "./blogSignIn";
import SignUp from "./blogSignUp";

export default function BolgHome() {
    const [blogs, setBlogs] = useState([]);

    return (
        <Router>
        <head>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
        </head>
        <tr>
        <td><Link to="/blogSignIn">SignIn</Link></td>
        <td><Link to="/blogSignUp">SignUp</Link></td>
        </tr>
        <Switch>
        <Route path="/blogSignIn"><SignIn/></Route>
        <Route path="/blogSignUp"><SignUp/></Route>
        </Switch>
        </Router>
    );
}
