import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { getOrderDetail } from "../actions/orderActions"

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id

  const dispatch = useDispatch()

  const orderDetail = useSelector((state) => state.orderDetail)
  const { order, loading, error } = orderDetail

  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push("/login")
    }

    dispatch(getOrderDetail(orderId))
  }, [])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Card>
      <Card.Header>
        <h1>Order {order._id}</h1>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Shipping</h2>
                <p>
                  <strong>Name: </strong> {order.user.name}
                </p>
                <p>
                  <strong>Email: </strong>{" "}
                  <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                </p>
                <p>
                  <strong>Address:</strong>
                  {order.shippingAddress.address}, {order.shippingAddress.city}{" "}
                </p>
                <p>
                  <strong>Phone:</strong>
                  {order.phoneNumber}
                </p>
                {order.isDelivered ? (
                  <Message
                    variant="success"
                    text={`Delivered on ${order.deliveredAt}`}
                  />
                ) : (
                  <Message variant="danger" text="Not Delivered Yet" />
                )}
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>Order Items</h2>
                {order.orderItems.length === 0 ? (
                  <Message>Order is empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {order.orderItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image
                              src={`/images/${item.image}`}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col>
                            <Link to={`/foods/${item.food}`}>{item.name}</Link>
                          </Col>
                          <Col md={4}>
                            {item.qty} x {item.price} DH ={" "}
                            {item.qty * item.price} DH
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>{order.shippingPrice} DH</Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>{order.totalPrice} DH</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default OrderScreen
