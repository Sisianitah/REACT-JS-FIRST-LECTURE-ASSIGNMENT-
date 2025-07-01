import React from "react";
import './Form1.css'

function Form1(){
    return(
        <div className="form-container">
        <form>
            <label>Enter your name:
                <input type="text"></input></label> <br/>
            <label>Enter your email:
                <input type="text"></input></label><br/>
            <label>Enter your contact:
                <input type="text"></input></label><br/>
            <label>Enter your address:
                <input type="text"></input></label><br/>
            <label>Enter your password:
                <input type="text"></input></label>
        </form>
        </div>
    )

}
export { Form1 }