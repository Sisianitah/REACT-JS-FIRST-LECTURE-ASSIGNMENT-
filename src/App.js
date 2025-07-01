import Greet from './Greet/Greet'
import './App.css';
import React from 'react';
import Goal from './Goal/Goal';
import Garage from './Garege/Garege';
import { Form1 } from './Form/Form1';

function App() {
  const firstName="Anitah";
  return(
    <div className='App'>
      <h1>Learning</h1>
      <Greet name={firstName} age='20' school='DAS' email='anitasisi851@gmail.com'/>
      <Greet name={firstName} age='20' school='DAS' email='anitasisi851@gmail.com'/>
      <Greet name={firstName} age='20' school='DAS' email='anitasisi851@gmail.com'/>
      <div>
        <Goal/>
        <Goal isGoal = {true}/>
      </div>
      <div>
        <Garage/>
      </div>
       <div>
          <h1> My first form</h1>
          <Form1/>
      </div>
    </div>
  )
}

export default App;
