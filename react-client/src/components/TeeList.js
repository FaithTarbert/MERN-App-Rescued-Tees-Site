import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './Box.css';

const TeeList = () => {
    const tempTeeInfo = [
        {image: "./vintage-bird.jpg", title: "Tee Title", description: "An Amazing Tee", artist: "ArtistName"},
        {image: "./vintage-bird.jpg", title: "Tee Title", description: "An Amazing Tee", artist: "ArtistName"},
        {image: "./vintage-bird.jpg", title: "Tee Title", description: "An Amazing Tee", artist: "ArtistName"},
        {image: "./vintage-bird.jpg", title: "Tee Title", description: "An Amazing Tee", artist: "ArtistName"},
        {image: "./vintage-bird.jpg", title: "Tee Title", description: "An Amazing Tee", artist: "ArtistName"},
        {image: "./vintage-bird.jpg", title: "Tee Title", description: "An Amazing Tee", artist: "ArtistName"},
    ];
    //this will render cards from temp array
    const renderCard = (card, index) => {
        return(
            <Card style={{ width: '18rem' }} key={index} className="box-home">
                    <Card.Img Image variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>
                        {card.description}
                        </Card.Text>
                        <Button variant="primary">View Details</Button>
                    </Card.Body>
                    </Card>
        )
    }

    return ( 
        <div className="grid">
            {tempTeeInfo.map(renderCard)}
        </div>
     );
};
 
export default TeeList;