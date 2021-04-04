import React from "react"
import { useSelector } from "react-redux"
import { Col, Row, Form, Card, Button, Image, ListGroup } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

function CheckoutScreen() {
  const { cartItems } = useSelector((state) => state.cart)

  const handleSubmit = () => {}

  return (
    <Row>
      <Col md={8}>
        <Card className="p-3">
          <Card.Title>
            <h3>Shipping details</h3>
          </Card.Title>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="primary" block>
                Order
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="p-3">
          <Card.Title>
            <h3>Your Cart</h3>
          </Card.Title>
          <Card.Body>
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.food}>
                  <Row>
                    <Col md={6}>
                      <Image
                        src={`/images/${item.image}`}
                        alt={item.name}
                        fluid
                        rounded
                      ></Image>
                    </Col>

                    <Col md={6}>({item.quantity}) items</Col>
                  </Row>
                </ListGroup.Item>
              ))}
              <ListGroup.Item>
                <h6>
                  Subtotal (
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                  items
                </h6>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.quantity * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
            </ListGroup>
            <LinkContainer to="/cart">
              <Button type="submit" variant="primary" block>
                Back to cart
              </Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default CheckoutScreen
