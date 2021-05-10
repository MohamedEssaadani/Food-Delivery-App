import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Table } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import Message from "../../components/Message"
import Loader from "../../components/Loader"
import { usersList } from "../../actions/userActions"

function UsersListScreen() {
  const dispatch = useDispatch()

  const { loading, users, error } = useSelector((state) => state.usersList)

  useEffect(() => {
    dispatch(usersList())
  }, [])

  const deleteHandler = () => {}
  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" text={error} />
      ) : (
        <Table className="table-sm" striped hover bordered responsive>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Admin</th>
            <th></th>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <i
                        className="fas fa-check"
                        style={{
                          color: "green",
                        }}
                      ></i>
                    ) : (
                      <i
                        className="fas fa-times"
                        style={{
                          color: "red",
                        }}
                      ></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/user/${user._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(user._id)}
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
    </>
  )
}

export default UsersListScreen
