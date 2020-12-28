import React from "react";
import { useHistory } from "react-router-dom";

export default function ItemList({items, handleAddToCart}) {
    const history = useHistory();
    
    return (
        <tr>
            { items.map(({itemName, price}, index)=> {
                return (
                    <>
                        <td className="shopping"><div>
                        <tr><th>{itemName}</th></tr>
                        <tr>{price}</tr>
                        <tr/><tr><button className="button" onClick={()=>{
                            handleAddToCart(index);
                            history.push("/shoppingCart");
                        }}>Add to Cart</button></tr>
                        </div></td>
                        <td></td>
                    </>
                    );
            })

            }</tr>);
}