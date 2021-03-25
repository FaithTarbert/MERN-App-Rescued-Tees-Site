import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import { getTees } from '../api';

const Details = () => {
    const { id } = useParams();
    console.log(id);
    const history = useHistory();

    //set the variable tees and watch it for updates
    const [tee, setTee] = useState([]);
    //useEffect fires a fetch/getall request on first page load
    useEffect(() => {
        fetch(`/details/${id}`)
        .then(res => {
            if(res.ok) {
                console.log("response ok");
                return res.json();
            }
        })
        .then(data => setTee(data))
        .catch(err => console.log(err));
    },[]);

    const handleDelete = (e) => {
        //this prevents the page from default refreshing
        e.preventDefault();
        axios.get(`/delete/${id}`);
        history.push('/');
    };

    return ( 
        <div className="container">
        { tee && (
            <Card style={{ width: '18rem' }} key={tee._id} className="box-home">
            <Card.Img Image variant="top" src={tee.image} />
            <Card.Body>
                <Card.Title>{tee.title}</Card.Title>
                <Card.Text>
                {tee.description}
                </Card.Text>
                <Link to={`/update/${tee._id}`}>
                <Button variant="primary" >Update Tee</Button>{' '}
                </Link>
                <Link to={`/delete/${tee._id}`}>
                <Button variant="primary" onClick={handleDelete}>Delete Tee</Button>
                </Link>
            </Card.Body>
            </Card>
            )}
        </div>
     );
}
 
export default Details;