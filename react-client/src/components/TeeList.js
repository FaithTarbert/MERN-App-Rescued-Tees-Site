import React, { useState, useEffect } from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Box.css';

    const TeeList = () => {
    
    //set the variable tees and watch it for updates
    const [tees, setTees] = useState([]);
    //useEffect fires on first page load passing in []
    useEffect(() => {
        fetch('http://localhost:5000/')
        .then(res => {
            if(res.ok) {
                console.log("response ok");
                return res.json();
            }
        })
        .then(data => setTees(data))
        .catch(err => console.log(err));
    },[]);
    //this is the single bootstrap card template styled with Box.css, used for rendering all data (tiled)
    const renderCard = (tee) => {
        return(
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
                        <Button variant="primary" >Delete Tee</Button>
                        </Link>
                    </Card.Body>
                    </Card>
        )
    }
    //this maps over the returned data and inserts it into the card template
    return (
        <div className="grid">
            {tees && tees.map(renderCard)}
        </div>
     );
};

export default TeeList;