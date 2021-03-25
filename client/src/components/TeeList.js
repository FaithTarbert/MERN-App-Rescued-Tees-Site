import React, { useState, useEffect } from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import './Box.css';

    const TeeList = () => {
    //set the variable tees and watch it for updates
    const [tees, setTees] = useState([]);
    const { id } = useParams();
    console.log(id);
    
    //useEffect fires a fetch/get all request on first page load
    useEffect(() => {
        fetch('/api/routes')
        .then(res => {
            if(res.ok) {
                console.log("response ok");
                return res.json();
            }
        })
        .then(data => setTees(data))
        .catch(err => console.log(err));
    },[tees]);

    //this populates the single bootstrap card template, styled with Box.css/box-home, renders all data (tiled cards)
    const renderCard = (tee) => {
        return(
            <Card style={{ width: '18rem' }} key={tee._id} className="box-home">
                    <Card.Img Image variant="top" src={tee.image} />
                    <Card.Body>
                        <Card.Title>{tee.title}</Card.Title>
                        <Card.Text>
                        {tee.description}
                        </Card.Text>
                        <Link to={`/details/${tee._id}`}>
                        <Button variant="primary" >Details</Button>{' '}
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