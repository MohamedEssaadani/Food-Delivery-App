import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "../components/Rating"

function Restaurant({ restaurant }) {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/restaurant/${restaurant._id}`}>
          <Card.Img
            src={restaurant.picture}
            height="140px"
            variant="top"
          ></Card.Img>
        </Link>
        <Card.Body>
          <Link to={`/restaurant/${restaurant._id}`}>
            <Card.Title as="div">
              <strong>{restaurant.name}</strong>
            </Card.Title>
          </Link>
          <Rating value={restaurant.rating}></Rating>
          <Card.Text as="div">{restaurant.address}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Restaurant
