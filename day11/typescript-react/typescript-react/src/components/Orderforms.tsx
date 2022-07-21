import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState } from "react";
import { Order } from "./order";
//import * as Bootstrap from 'bootstrap';
//import "./design.css";
// const s = require('./Button.css');


function Orderforms() {
    const [order, setOrder] = React.useState(new Order());
    function save() {
        console.log("Done");
    }
    function update(event: any) {
        console.log(event.target.value);
        const order = new Order();
        order.price = event.target.value;
        setOrder(order);

    }
    return (
        <div> This is a {order.item}
            <input type='number' placeholder="price" onChange={update} value={order.price} id="updatefld"></input>
            <button type="button"onClick={save} className = "btn btn-secondary btn-lg" >Save</button></div>
    )
}

{/* <style>
    #savebtn {
        backgroundColor:Lime;
    }
backgroundColor: 'lime';

</style> */}

// function Orderforms() {
//     const order ="Mobile" ;
//     function save () {
//         console.log("Done");
//     }
//     return (
//         <div> This is a {order}
//         <button onClick={save}>Save</button></div>
//     )
// }
export default Orderforms;