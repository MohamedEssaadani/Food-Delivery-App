import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { signup } from "../actions/userActions"
import Message from "../components/Message"
import Loader from "../components/Loader"

function RegisterScreen({ history, location }) {
  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordsNotMatch, setPasswordsNotMatch] = useState(null)

  const { loading, error, userInfo } = useSelector((state) => state.useRegister)

  const redirect = location.search ? location.search.split("=")[1] : "/"

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setPasswordsNotMatch("Passwords Not Match!")
    } else {
      let role = "client"
      dispatch(signup(name, email, password, role))
    }
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Card className="p-3">
            {error && <Message variant="danger" text={error} />}
            {passwordsNotMatch && (
              <Message variant="danger" text={passwordsNotMatch} />
            )}
            {loading && <Loader />}
            <Card.Title>
              <h3>Sign Up</h3>
            </Card.Title>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
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
                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary" block>
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              You already have an account?.
              <Link to={redirect ? `/login?redirect=${redirect}` : "/sigin"}>
                {" "}
                Sign In
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterScreen
