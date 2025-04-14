import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import HeroBanner from '../components/HeroBanner';
import { menuItems } from '../data';

function Home({ addToCart }) {
  return (
    <Container>
      <HeroBanner />
      <h2 className="my-4">Popular Dishes</h2>
      <Row>
        {menuItems.slice(0, 2).map((item) => (
          <Col md={4} key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>₹{item.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;