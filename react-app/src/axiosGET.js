import React, { useState } from "react";
import axios from "axios";

export default function BlogList() {
    const [user, setUser] = useState([]);
    const [token, setToken] = useState("");

    const handleGET = () => {
        axios
            .get(`/AUTH/USER`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
            .then((res) => {
                const alluser = res.data.user;
                setUser(alluser);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handlePOST = () => {
        axios(`/AUTH/LOGIN`, {
            method: "post",
            data: {
                email: "jaisraj@gmail.com",
                password: 12345678,
            },
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                const JWTtoken = res.data.JSON_Web_Token;
                setToken(JWTtoken);
            })
            .catch(console.log);
    };

    return (
        <div>
            <button onClick={handleGET}>Get user</button>
            <button onClick={handlePOST}>Post user</button>
            <ul>
                <h2>User Details</h2>
                <li>User Id: {user.id}</li>
                <li>First Name: {user.fName}</li>
                <li>Last Name: {user.lName}</li>
                <li>Email: {user.email}</li>
            </ul>
        </div>
    );
}
