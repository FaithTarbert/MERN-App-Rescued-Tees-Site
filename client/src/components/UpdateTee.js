import React, { useState } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { useParams, useHistory } from "react-router-dom";
import './Box.css';
import { getTees } from '../api';
import useFetch from './useFetch';
import axios from 'axios';

const UpdateTee = () => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newArtist, setNewArtist] = useState('');
    const [newImage, setNewImage] = useState('');
    const history = useHistory();

    const { id } = useParams();
    console.log(id);
    const { data: tee, error } = useFetch(`/api/routes/update/${id}`);

    const handleSubmit = (e) => {
        //this prevents the page from default refreshing
        e.preventDefault();
        //this is grabbing the populated tee object from the form input
        const newTee = { newTitle, newDescription, newArtist, newImage };
        console.log(newTee);
        //this is to your express server port NOT REACT server port
        axios.post(`/api/routes/update/${id}`, newTee);
        //this fires the get all api so when index renders, the new post appears without hitting refresh
        getTees();
        history.push('/');
    };
        
    return (
        <div className="container">
            { tee && (
                <div>                     
                <Container fluid="sm" className="form">
                <Row>
                    <Col>
                        <Form onSubmit ={handleSubmit}>
                        <Form.Group>
                            <Form.Label><h2>{ tee.title }</h2></Form.Label>
                            <Form.Control 
                            type="title" placeholder={`${tee.title}`}
                            onChange={(e) => setNewTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                            as="textarea" rows={5} placeholder={`${tee.description}`}
                            onChange={(e) => setNewDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Artist</Form.Label>
                            <Form.Control 
                            type="artist" placeholder={`${tee.artist}`}
                            onChange={(e) => setNewArtist(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image</Form.Label>
                            <Form.Control 
                            type="title" placeholder={`${tee.image}`}
                            onChange={(e) => setNewImage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                        <button type="submit">Submit</button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
        </div>
            )}
        </div>
    )
};

export default UpdateTee;