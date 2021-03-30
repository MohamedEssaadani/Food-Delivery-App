import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Card, Form, Button } from "react-bootstrap"
import { getUserDetails } from "../actions/userActions"
import Message from "../components/Message"
import Loader from "../components/Loader"

function RegisterScreen({ history, location }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordsNotMatch, setPasswordsNotMatch] = useState(null)

  const dispatch = useDispatch()

  const { loading, error, user } = useSelector((state) => state.userDetails)

  //to check if the user is logged in or not
  const { userInfo } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (!userInfo) {
      history.push("/login")
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setPasswordsNotMatch("Passwords Not Match!")
    } else {
      // let role = "client"
      // dispatch(signup(name, email, password, role))
      //dispatch update profile
    }
  }

  return (
    <Row>
      <Col md={4}>
        <Card className="p-3">
          {error && <Message variant="danger" text={error} />}
          {passwordsNotMatch && (
            <Message variant="danger" text={passwordsNotMatch} />
          )}
          {loading && <Loader />}
          <Card.Title>
            <h3>My Profile</h3>
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
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col md={8}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  )
}

export default RegisterScreen
