import React from "react"
import {
  Jumbotron,
  Container,
  FormControl,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap"

function Search({ handleSearch }) {
  return (
    <Jumbotron fluid>
      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          {/* <Col sm={12} md={6} lg={4} xl={3}>
              <h3 style={{ color: "rgb(94, 52, 116)" }}>Rechercher :</h3>
            </Col> */}
          <Col sm={12} md={6} lg={4} xl={3}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <i className="fas fa-search"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type="text"
                placeholder="Tapez un nom, ville.."
                onChange={handleSearch}
                className="mr-sm-2"
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Search
