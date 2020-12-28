import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
} from "react-router-dom";
import "../functional.css";
import ItemList from "./itemList";
import { Stringify, Parse } from "./utility";
import Cart from "./shoppingCart";

export default function ShoppingHome() {
    const [itemsInCart, setItemsInCart] = useState(
        Parse(localStorage.getItem("itemsInCart"))
            ? Parse(localStorage.getItem("itemsInCart"))
            : []
    );

    const items = [
        { itemName: "Item 1", price: `Rs. ${100}` },
        { itemName: "Item 2", price: `Rs. ${79}` },
        { itemName: "Item 3", price: `Rs. ${199}` },
        { itemName: "Item 4", price: `Rs. ${149}` },
    ];

    const handleAddToCart = (id) => {
        if (itemsInCart) {
            const allItemsInCart = [...itemsInCart, items[id]];
            localStorage.setItem("itemsInCart", Stringify(allItemsInCart));
            setItemsInCart(allItemsInCart);
        } else {
            const allItemsInCart = [items[id]];
            localStorage.setItem("itemsInCart", Stringify(allItemsInCart));
            setItemsInCart(allItemsInCart);
        }
    };

    const handleDelete = (allItemsInCart) => {
        localStorage.setItem("itemsInCart", Stringify(allItemsInCart));
        setItemsInCart(allItemsInCart);
    };

    return (
        <Router>
            <h2>{"SHOPPING CART"}</h2>
            <tr>
                <td>
                    <Link to="/">Home</Link>
                </td>
                <td>
                    <Link to="/shoppingCart">Cart</Link>
                </td>
            </tr>
            <hr />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Switch>
                <Route exact path="/">
                    <ItemList items={items} handleAddToCart={handleAddToCart} />
                </Route>
                <Route exact path="/shoppingCart">
                    <Cart
                        itemsInCart={itemsInCart}
                        handleDelete={handleDelete}
                    />
                </Route>
            </Switch>
        </Router>
    );
}
