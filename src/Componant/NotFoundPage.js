import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col className="text-center">
          <h1 className="display-1 text-danger">404</h1>
          <h2>Page not found</h2>
          <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <Link to="/">
            <Button variant="primary" className="mb-5">Go back to homepage</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;