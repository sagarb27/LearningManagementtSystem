import React, { Component } from "react";
import NavBar from "./NavBar";
import { Container, Button, Form, Row, Col, Modal } from "react-bootstrap";
class CreateSubject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectName: "",
      instructorName: "",
      topics: [],
      showTopicModal: false,
      subjectImage: "",
    };
  }

  closeTopicModal = () => {
    this.setState({
      showTopicModal: false,
    });
  };

  handleAddTopicButton = () => {
    this.setState({
      showTopicModal: true,
    });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  addTopic = () => {};

  onFileChange = (event) => {
    this.setState({
      subjectImage: event.target.files[0],
    });
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Container>
          <h3>Create Subject</h3>
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Subject Name</Form.Label>
                  <Form.Control
                    name={"subjectName"}
                    onChange={this.handleChange}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Instructor Name</Form.Label>
                  <Form.Control name={"instructorName"}></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group
              enctype="multipart/form-data"
              className="pt-3"
              onChange={this.onFileChange}
            >
              <Row className="col-md-6">
                <Col>
                  <Form.Control type="file" name="imageFile"></Form.Control>
                </Col>
                <Col>
                  <Button
                    type="submit"
                    value="Upload a file"
                    name="uploadImage"
                  >
                    Upload Image
                  </Button>
                </Col>
              </Row>
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Button onClick={this.handleAddTopicButton}>
                    + Add Topics
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Modal
            show={this.state.showTopicModal}
            onHide={this.closeTopicModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Topic</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Topic Name</Form.Label>
                      <Form.Control name={"topicName"}></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        name={"description"}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group enctype="multipart/form-data" className="pt-3">
                  <Row>
                    <Col>
                      <Form.Control type="file" name="imageFile"></Form.Control>
                    </Col>
                    <Col>
                      <Button
                        type="submit"
                        value="Upload a file"
                        name="uploadImage"
                      >
                        Upload Topic Image
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Contents</Form.Label>
                      <Form.Control as={"textarea"}></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeTopicModal}>
                Close
              </Button>
              <Button onClick={this.addTopic} variant="primary">
                Add Topic
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default CreateSubject;
