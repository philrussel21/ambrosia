import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Home() {

  const legend =
    [
      { name: "Categories", color: "success", content: "Something about categories" },
      { name: "Ingredients", color: "info", content: "Something about ingredients" },
      { name: "Non-Alcoholic", color: "dark", content: "Something about non alcoholic drinks" },
      { name: "Bartender, Surprise Me!", color: "warning", content: "Something about bringing a random drink" }
    ];

  return (
    <div className="content">
      {/* Heading */}
      <div>
        <h1 className="display-4 text-center">
          Some Catchy Heading
        </h1>
        <p className="lead">
          Some text to support the catchy title. This should elaborate a little bit how to use the app or the features that it has.
        </p>
      </div>

      {/* Selection */}
      <Container>
        <Row>
          {legend.map((el, idx) => (
            <Col xs={12} sm={6} key={idx} className='mx-auto mb-3 home-cards'>
              <Card
                bg={el.color.toLowerCase()}
                text="white"
              // style={{ width: '18rem' }}
              // className="mb-2"
              >
                <Card.Header>{el.name}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    {el.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
