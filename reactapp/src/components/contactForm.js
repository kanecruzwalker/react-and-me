import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function AskMe() {
    return (
        <Form>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Send me an inquiry below</Form.Label>
    <Form.Control type="text" placeholder="Name Here" />
    <Form.Control as="textarea" rows="3" placeholder="Message Here" />
  </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>




    )
}

export default AskMe;