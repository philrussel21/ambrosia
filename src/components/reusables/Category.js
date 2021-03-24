import React from 'react';
import { useParams } from 'react-router';

export default function Category() {
  const { category } = useParams();
  return (
    <div>
      Category Selected: {category}

    </div>
  );
}
