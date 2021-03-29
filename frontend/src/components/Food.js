import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import Rating from "./Rating.js"

function Food({ food }) {
  const addToCart = () => {
    console.log("Add => ")
  }
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to="/">
          <Card.Img
            src={`/images/${food.image}`}
            alt={food.name}
            height="140px"
            width="140px"
            variant="top"
          ></Card.Img>
        </Link>
        <Card.Body>
          <Link to="/">
            <Card.Title as="div">
              <strong>{food.name}</strong>
            </Card.Title>
          </Link>
          <Rating value={food.rating} />
          <Card.Text>
            <span> Prix: ${food.price}</span>
            <i
              className="fas fa-shopping-cart"
              style={{ float: "right", cursor: "pointer" }}
              onClick={addToCart}
            ></i>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Food
