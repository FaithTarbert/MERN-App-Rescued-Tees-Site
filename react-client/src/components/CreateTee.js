import React from 'react';
import {Form} from 'react-bootstrap';

const CreateTee = () => {
    return ( 
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="title" placeholder="Title" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" rows={5} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Artist</Form.Label>
    <Form.Control type="artist" placeholder="Artist Name" />
  </Form.Group>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Image" />
  </Form.Group>
</Form>
     );
};
 
export default CreateTee;