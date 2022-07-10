import { useState } from "react";



function OrderForm(props) {
    const [order, setOrder] = useState({ //keeping the initial values as blank
    });
    /*
    const [order, setOrder] = useState({
        item: 'Laptop',
        price: 30,
        tax: 10
    });
    //Passing the initial values
    */
    function updateValue(event) {
        console.log(event.target.value);
        setOrder( {...order, [event.target.name]: event.target.value });
    }
    function calculateTotal(){
        if(order.tax < 0){
            return "error ";
        }
        return parseInt(order.price) * (1+ (order.tax / 100));
    }
    return (
        <div>
            <h1>order form</h1>
            <input placeholder='item' value={order.item} name='item' onChange={updateValue}></input><br></br><br></br>
            <input placeholder='price' min='0' type='number'value={order.price} name='price' onChange={updateValue}></input><br></br><br></br>
            <input placeholder='tax' min='0' type='number' value={order.tax} name='tax' onChange={updateValue}></input><br></br><br></br>
            Total: {calculateTotal()}
            <div class="container">
                <div class="row">
            <div class="col-25">
                <label for="fname">First Name</label>
            </div>
            <div class="col-75">
                <input type="text" id="fname" name="firstname" placeholder="Your name..">
                </input>    
            </div>
        </div>

        <div class="row">
            <div class="col-25">
                <label for="lname">Last Name</label>
            </div>
            <div class="col-75">
                <input type="text" id="lname" name="lastname" placeholder="Your last name..">
                </input>    
            </div>
        </div>

        <div class="row">
            <div class="col-25">
                <label for="country">Country</label>
            </div>
            <div class="col-75">
                <select id="country" name="country" placeholder="Select the country" style="width:200px">
                    <option value=""></option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
            </div>
        </div>

        <div class="row">
            <div class="col-25">
                <label for="subject">Subject</label>
            </div>
            <div class="col-75">
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px" style="width:100%"></textarea>
            </div>
        </div>

        <div class="row">
            <input type="submit" value="Submit">
            </input>   
        </div>
  
    </div>
            <div>
                <h1>{order.item}</h1>
                
            </div>
        </div>
        
    )
}

export default OrderForm;