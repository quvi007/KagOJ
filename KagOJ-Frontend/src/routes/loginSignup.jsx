import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap';
import { login, signup } from '../auth';
import '../css/LoginSignup.css'; // Import your custom CSS file for styling

const LoginSignup = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [signupData, setSignupData] = useState({
    fullName: '',
    email: '',
    username: '',
    password: '',
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here using loginData state
    console.log(loginData);
    login({email:loginData.email,password:loginData.password});
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here using signupData state
    console.log(signupData);
    signup({email:signupData.email,password:signupData.password,name:signupData.fullName});
  };

  return (
    <Container className="mt-5">
      <Container>
        <h1 className="text-center mt-5 mb-4">Welcome to kagOJ Online Judge!</h1>
        <br/>
        <br/>
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="login-signup-card">
              <Card.Img variant="top" src="../../public/coding.svg" style={{ width: '200px', height: '200px', display: 'block', margin: '0 auto'}} />
              <Card.Body>
                <Card.Title>Solve Problems</Card.Title>
                <Card.Text>
                Solve various algorithmic problems on LightOJ. All the problems are categorized. Kick start problem solving from the warm-up problems.                
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="login-signup-card">
              <Card.Img variant="top" src="../../public/buet_logo.png" style={{ width: '200px', height: '200px', display: 'block', margin: '0 auto'}} />
              <Card.Body>
                <Card.Title>Host Onlines!</Card.Title>
                <Card.Text>
                Participate in onlines arranged by BUET CSE and the community. And host onlines without any fee on kagOJ.                
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="login-signup-card">
              <Card.Img variant="top" src="../../public/trophy.svg" style={{ width: '200px', height: '200px', display: 'block', margin: '0 auto'}} />
              <Card.Body>
                <Card.Title>CGPA 4.00</Card.Title>
                <Card.Text>
                We will be introducing various new features which will help you to obtain CGPA 4.00. Stay tuned!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


      <br/>
      <Row >
        <Col md={{ span: 6, offset: 3 }}>
          
          <div className="login-signup-card">
            <Tabs
              id="login-signup-tabs"
              activeKey={activeTab}
              onSelect={handleTabChange}
              className="mb-4"
            >
              <Tab eventKey="login" title="Login">
                <Form onSubmit={handleLoginSubmit}>
                  <Form.Group controlId="loginEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) =>
                        setLoginData({ ...loginData, email: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="loginPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <br/>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Tab>
              <Tab eventKey="signup" title="Sign Up">
                <Form onSubmit={handleSignupSubmit}>
                  <Form.Group controlId="signupFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      value={signupData.fullName}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          fullName: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="signupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={signupData.email}
                      onChange={(e) =>
                        setSignupData({ ...signupData, email: e.target.value })
                      }
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="signupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Choose a password"
                      value={signupData.password}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                  </Form.Group>
                  <br/>
                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSignup;
