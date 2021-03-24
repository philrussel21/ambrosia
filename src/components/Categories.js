import React, { useEffect, useState } from 'react';
import { getAllCat } from '../services/api';

export default function Categories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getAllCat()
      .then(data => {
        const { drinks } = data;
        setCategories(drinks);
      });
  }, []);
  return (
    <div>
      {console.log(categories)}
      Categories
    </div>
  );
}
