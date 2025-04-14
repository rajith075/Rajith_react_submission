import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { menuItems } from '../data';

function Menu({ addToCart }) {
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('default');

  const filteredItems = filter === 'All' 
    ? menuItems 
    : menuItems.filter((item) => item.category === filter);
  
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sort === 'price') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <Container>
      <h2 className="my-4">Menu</h2>
      <Form className="mb-4">
        <Form.Group as={Row}>
          <Col sm={6}>
            <Form.Label>Filter:</Form.Label>
            <Form.Select onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Ice Creams">Only Ice Creams</option>
              <option value="Beverages">Beverages</option>
            </Form.Select>
          </Col>
          <Col sm={6}>
            <Form.Label>Sort:</Form.Label>
            <Form.Select onChange={(e) => setSort(e.target.value)}>
              <option value="default">Default</option>
              <option value="price">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </Form.Select>
          </Col>
        </Form.Group>
      </Form>
      <Row>
        {sortedItems.map((item) => (
          <Col md={4} key={item.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>₹{item.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(item)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;