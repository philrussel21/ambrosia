import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { getAllCat } from '../services/api';
import { getStringData } from '../helpers/data_helpers';
import { Link } from 'react-router-dom';

export default function Categories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getAllCat()
      .then(data => {
        const { drinks } = data;
        const categoryArr = getStringData(drinks);
        setCategories(categoryArr);
      });
  }, []);
  return (
    <div className="content">
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
      {/* Multiple accounts on same machine test */}
      {categories ?
        <Container>
          <Row>
            {categories.map((el, idx) => (
              <Col xs={12} sm={6} key={idx} className='mx-auto mb-3 home-cards'>
                <Link to={`/categories/${el}`} >
                  <Card
                  >
                    <Card.Body>
                      <Card.Text>
                        {el}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>

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
