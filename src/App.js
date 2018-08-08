import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Landing from './components/Landing/Landing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container tag="cont">
          <Row>
            <Col>
              <Landing />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
