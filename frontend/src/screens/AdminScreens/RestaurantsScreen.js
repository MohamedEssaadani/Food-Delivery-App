import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Image, Table } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import Message from "../../components/Message"
import Loader from "../../components/Loader"
import { listRestaurant } from "../../actions/restaurantActions"
import CreateRestaurant from "./CreateRestaurant"

function RestaurantsScreen() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const dispatch = useDispatch()

  const { loading, restaurants, error } = useSelector(
    (state) => state.restaurantList
  )

  useEffect(() => {
    dispatch(listRestaurant())
  }, [])

  const deleteHandler = () => {}

  const handleCloseCreateForm = () => {
    setShowCreateForm(false)
  }
  return (
    <>
      <h1 style={{ float: "left" }}>Restaurants</h1>
      <h1 style={{ float: "right" }}>
        <Button
          className="btn btn-success"
          onClick={() => setShowCreateForm(true)}
        >
          <i className="fas fa-plus"></i> New
        </Button>
      </h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" text={error} />
      ) : (
        <Table className="table-sm" striped hover bordered responsive>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Ville</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Picture</th>
            <th></th>
          </thead>
          <tbody>
            {restaurants.map((res) => {
              return (
                <tr key={res._id}>
                  <td>{res._id}</td>
                  <td>{res.name}</td>
                  <td>{res.ville}</td>
                  <td>{res.address}</td>
                  <td>{res.phone}</td>
                  <td>
                    <Image
                      src={res.picture}
                      alt={res.name}
                      thumbnail
                      height="120px"
                      width="140px"
                    />
                  </td>

                  <td>
                    <LinkContainer to={`/user/${res._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      n
                      onClick={() => deleteHandler(res._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      )}

      <CreateRestaurant
        showCreateForm={showCreateForm}
        handleCloseCreateForm={handleCloseCreateForm}
      />
    </>
  )
}

export default RestaurantsScreen
