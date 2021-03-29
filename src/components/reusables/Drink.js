import React from 'react';
import { useParams } from 'react-router-dom';

export default function Drink() {
  // Extracting drinkId object since it was how it was named 
  // in App.js component.
  const { drinkId } = useParams();
  return (
    <div>
      Drink {drinkId}
    </div>
  );
}
