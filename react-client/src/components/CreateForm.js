import React from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';

const CreateForm = () => {
    return ( 
        <Container fluid="sm" className="form">
            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="title" placeholder="Title" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Artist</Form.Label>
                            <Form.Control type="artist" placeholder="Artist Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Image" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
     );
}
 
export default CreateForm;