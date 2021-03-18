import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap"
import { login } from "../actions/userActions.js"
import Message from "../components/Message"
import Loader from "../components/Loader"

function LoginScreen({ history }) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { loading, error, userInfo } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (userInfo) {
      history.push("/")
    }
  }, [history, userInfo])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <Container>
      {error && (
        <Message variant="danger" text="Login or Password is incorrect!" />
      )}

      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="p-3">
            <Card.Title>
              <h3>Sign In</h3>
            </Card.Title>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                  Sign In
                </Button>
                {loading && <Loader />}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginScreen
