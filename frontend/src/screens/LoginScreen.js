import React, { useState, useEffect } from "react"
import {useDispatch, useSelector} from "react-redux"
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { login } from "../actions/userActions.js"
import Message from "../components/Message"
import Loader from "../components/Loader"

function LoginScreen({ history, location }) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { loading, error, userInfo } = useSelector((state) => state.userLogin)

  const redirect = location.search ? location.search.split("=")[1] : "/"

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="p-3">
            {error && <Message variant="danger" text={error} />}
            {loading && <Loader />}
            <Card.Title>
              <h3>Sign in</h3>
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
                <Button type="submit" variant="primary" block>
                  Sign In
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              <Link
                to={
                  redirect
                    ? `/forgot-password?redirect=${redirect}`
                    : "/forgot-password"
                }
              >
                Forgot Password?.
              </Link>
              <Link to={redirect ? `/signup?redirect=${redirect}` : "/signup"}>
                {" "}
                Sign Up
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginScreen
