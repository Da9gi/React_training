import React, { useState } from "react";
import {Stringify, Parse} from "./utility";
import "../functional.css";

export default function Cart({itemsInCart, handleDelete}) {
    const deleteItem = (id) => {
        const allItemsInCart = itemsInCart.filter((_,index)=>index!==id);
        handleDelete(allItemsInCart);
    }
    let getPrice = 0;
    const showPrice = (price) => {
        getPrice += +(price.split(" "))[1];
        return price;
    }
    return (
        <div>
        <table className="shopping">
            <tr>
            <th>Items In Cart</th>
            <th>Prices</th>
            <th></th>
            </tr>
            {itemsInCart&&itemsInCart.map(({itemName, price},index)=>{
                return (
                    <tr>
                    <td>{itemName}</td>
                    <td>{showPrice(price)}</td>
                    <td>{<button onClick={()=>{
                        deleteItem(index);
                    }}>Remove</button>}</td>
                    </tr>
                );
            })
            }
            </table>
            <tr>
            Total Amount ------ Rs. {getPrice}
            </tr>
        
        </div>
    );
}