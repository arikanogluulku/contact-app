import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function index() {
  return (
    <Container fluid="md" className="p-3 my-3 border-end border-start border-secondary border-3 shadow bg-light rounded-3">
      <Row>
        <Col>
          <p className="text-uppercase fs-2 fw-bolder text-center text-secondary fst-italic font-monospace">Contact Management App</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end text-success fs-3 fw-bold">
          <Link to="/">
            <i className="fa fa-home fs-2 mx-3 " />
          </Link>
          <Link to="/ContactList">
            <i className="fa fa-list-alt mx-3 " />
          </Link>
          <Link to="/AddUser">
            <i className="fa fa-user-plus mx-3" />
          </Link>
        </Col>
      </Row>
    </Container>

  );
}

export default index;
