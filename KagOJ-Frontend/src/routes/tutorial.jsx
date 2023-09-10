import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import '../css/LoginSignup.css';

const Tutorial = () => {
  const [solution, setSolution] = useState('');

  // Function to handle solution submission
  const handleSubmit = () => {
    
    //handle here
    console.log(solution);
    
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1 className="text-center">Problem Tutorial</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="login-signup-card">
            <Card.Body>
              <h2>Problem Statement</h2>
              <p>
                Write a program that takes an input string and reverses it.
                The input string consists of lowercase and uppercase letters and may contain spaces and special characters.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="login-signup-card">
            <Card.Body>
              <h2>Solution</h2>
              <Form>
                <Form.Group controlId="solutionInput">
                  <Form.Control
                    as="textarea"
                    rows={10}
                    placeholder="Enter your solution code here"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                  />
                </Form.Group>
              </Form>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="primary" onClick={handleSubmit}>Submit Tutorial</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Tutorial;
