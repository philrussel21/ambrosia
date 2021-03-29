import React from 'react';

export default function IngRow({ ing }) {
  const { ingredient, measurement } = ing;
  return (
    <div>
      {ingredient} x {measurement}
    </div>
  );
}
