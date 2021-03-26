import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function DrinkCard({ drink }) {
  return (
    <Col xs={12} sm={6} className='mx-auto mb-3'>
      <Card className="mx-auto">
        <Card.Img variant="top" src={drink.strDrinkThumb} />
        <Card.Body>
          <Card.Text>{drink.strDrink}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
