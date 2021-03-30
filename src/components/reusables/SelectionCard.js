import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function SelectionCard({ data }) {
  return (
    <Col xs={12} sm={6} className='mx-auto mb-3 home-cards'>
      <Link to={`/ingredients/${data}`} >
        <Card
        >
          <Card.Body>
            <Card.Text>
              {data}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>

    </Col>
  );
}
