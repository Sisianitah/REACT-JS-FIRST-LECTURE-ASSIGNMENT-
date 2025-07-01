import React from 'react';

// Car Component
function Car(props) {
  return <li> {props.brand}</li>;
}

// Garage Component
function Garage() {
  const cars = [
    { id: 1, brand: 'HILLUX' },
    { id: 2, brand: 'RANGER' },
    { id: 3, brand: 'JEEP' }
  ];

  return (
    <>
      <h1>These are my tresury brands.</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

export default Garage;