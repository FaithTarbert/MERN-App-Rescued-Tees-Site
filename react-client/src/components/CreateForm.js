import { useState } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { getTees } from '../api';


const CreateForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [artist, setArtist] = useState('');
    const [image, setImage] = useState('');

    const history = useHistory();

    // const onSubmit = handleSubmit((data) => {
    //     alert(JSON.stringify(data));
    // });

    const handleSubmit = (e) => {
        //this prevents the page from default refreshing
        e.preventDefault();
        //this is grabbing the populated tee object from the form input
        const tee = { title, description, artist, image };
        //this is to your express server port NOT REACT server port
        axios.post('http://localhost:5000', tee);
        //this fires the get all api so when index renders, the new post appears without hitting refresh
        getTees()
        history.push('/');
    };
    return ( 
        <Container fluid="sm" className="form">
            <Row>
                <Col>
                    <Form onSubmit ={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                            value={title} type="title" placeholder="Title"
                            onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                            value={description} as="textarea" rows={5}
                            onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Artist</Form.Label>
                            <Form.Control 
                            value={artist} type="artist" placeholder="Artist Name"
                            onChange={(e) => setArtist(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.File value={image} id="exampleFormControlFile1" label="Image"
                            onChange={(e) => setImage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                        <button type="submit">Submit</button>
                        <p>{ title }</p>
                        <p>{ description }</p>
                        <p>{ artist }</p>
                        <p>{ image }</p>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
     );
}
 
export default CreateForm;