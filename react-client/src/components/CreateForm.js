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

    const handleSubmit = (e) => {
        //this prevents the page from default refreshing
        e.preventDefault();
        //this is grabbing the populated tee object from the form input
        const tee = { title, description, artist, image };
        console.log(tee);

        //this is to your express server port NOT REACT server port
        axios.post('http://localhost:5000/create', tee);
        //this fires the get all api so when index renders, the new post appears without hitting refresh
        // getTees();
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
                            value={description} as="textarea" rows={5} placeholder="Type Your Description..."
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
                        <Form.Label>Image</Form.Label>
                            <Form.Control
                            value={image} placeholder="Image Url"
                            onChange={(e) => setImage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                        <button type="submit">Submit</button>
                        {/* <p>{ title }</p>
                        <p>{ description }</p>
                        <p>{ artist }</p>
                        <p>{ image }</p> */}
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
     );
}
 
export default CreateForm;