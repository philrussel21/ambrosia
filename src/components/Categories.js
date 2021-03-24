import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
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
    <div className="content">
      {console.log(categories)}
      {/* Heading */}
      <div>
        <h1 className="display-4 text-center">
          Categories
        </h1>
        <p className="lead">
          Some text to support the catchy title. This should elaborate a little bit how to use the app or the features that it has.
        </p>
      </div>
      {/* Selection */}
      {categories ?
        <Container>
          <Row>
            {categories.map((el, idx) => (
              <Col xs={12} sm={6} key={idx} className='mx-auto mb-3 home-cards'>
                {/* <Link to=''> */}

                <Card
                >
                  <Card.Body>
                    <Card.Text>
                      {el.strCategory}
                    </Card.Text>
                  </Card.Body>
                </Card>
                {/* </Link> */}

              </Col>
            ))}
          </Row>
        </Container>
        :
        // Skeleton here while loading
        "Loading"}
    </div>
  );
}
