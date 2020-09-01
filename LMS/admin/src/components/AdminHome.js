import React, { Component } from "react";
import NavBar from "./NavBar";
import { Container, Button } from "react-bootstrap";
class AdminHome extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Container>
          <Button>Add Subjects</Button>
        </Container>
      </div>
    );
  }
}

export default AdminHome;
