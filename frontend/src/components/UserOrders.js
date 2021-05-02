import React, { useEffect } from "react"
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getUserOrders } from "../actions/orderActions"
import Loader from "./Loader"
import Message from "./Message"

function UserOrders() {
  const dispatch = useDispatch()

  const { loading, error, orders } = useSelector((state) => state.userOrders)

  useEffect(() => {
    dispatch(getUserOrders())
    console.log(orders)
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger" text={error} />
  ) : (
    <>
      <h3>My Orders </h3>
      {orders.map((order) => {
        return (
          <Card>
            <Card.Header>
              <h3>Order {order._id}</h3>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={12}>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h4>Order Items</h4>
                      {order.orderItems.length === 0 ? (
                        <Message>Order is empty</Message>
                      ) : (
                        <ListGroup variant="flush">
                          {order.orderItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                              <Row>
                                <Col md={4}>
                                  <Image
                                    src={`/images/${item.image}`}
                                    alt={item.name}
                                    fluid
                                    rounded
                                  />
                                </Col>
                                <Col md={4}>
                                  <Link to={`/foods/${item.food}`}>
                                    {item.name}
                                  </Link>
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
              </Row>
            </Card.Body>
          </Card>
        )
      })}
    </>
  )
}

export default UserOrders
