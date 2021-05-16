import React, { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

function CreateRestaurant({ showCreateForm, handleCloseCreateForm }) {
  const handleSubmit = () => {}
  return (
    <Modal show={showCreateForm} onHide={handleCloseCreateForm}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary" block>
            Sign Up
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseCreateForm}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseCreateForm}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateRestaurant
