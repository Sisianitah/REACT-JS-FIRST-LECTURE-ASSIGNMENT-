import React from 'react';
import './Greet.css'

function Greet({name,age,address,school}) {
    console.log(name,'name')
    return(
        <div className='greeting-card'>
            <h1> Hello {name}</h1>
            <p>I am {age} year old </p>
            <p> Email me at {address} </p>
            <p>My school is {school} </p>
        </div>

    )
}


export default Greet;