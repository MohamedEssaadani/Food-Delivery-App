import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Col, Row, Form, Card, Button, Image, ListGroup } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { saveShippingAddress } from "../actions/cartActions"
import { createOrder } from "../actions/orderActions"

function CheckoutScreen({ history }) {
  const dispatch = useDispatch()

  const { shippingAddress } = useSelector((state) => state.cart)
  const { loading, success, error, order } = useSelector(
    (state) => state.createOrder
  )

  const [address, setAddress] = useState(shippingAddress.address)
  const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber)
  const [city, setCity] = useState(shippingAddress.city)

  const { cartItems } = useSelector((state) => state.cart)

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
    }
  }, [success, order, history])

  const calculTotal = () => {
    let total = 0
    cartItems.forEach((item) => {
      total = item.price * item.qty
    })

    return total
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //save shipping address
    dispatch(saveShippingAddress({ address, city, phoneNumber }))

    const order = {
      orderItems: [...cartItems],
      shippingAddress: {
        address: address,
        city: city,
      },
      phoneNumber,
      totalPrice: calculTotal(),
    }
    //dispatch create order action to create new order
    dispatch(createOrder(order))

    //clear cart
    localStorage.removeItem("cartItems")
  }

  return (
    <Row>
      <Col md={8}>
        <Card className="p-3">
          {loading && <Loader />}
          {/* {success && (
            <Message variant="success" text="Your order created with success" />
          )} */}
          {error && <Message variant="danger" text={error} />}
          <Card.Title>
            <h3>Shipping details</h3>
          </Card.Title>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter your city"
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
        {cartItems.length !== 0 && (
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
                      <Col md={6}>({item.qty}) items</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h6>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                  </h6>
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
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
        )}
      </Col>
    </Row>
  )
}

export default CheckoutScreen
