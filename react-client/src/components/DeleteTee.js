import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { getTees } from '../api';
import { Button } from 'react-bootstrap';

const DeleteTee = () => {
    const { id } = useParams();
    console.log("this is the id from use params delete page: ", id);
    const history = useHistory();

    const handleDelete = (e) => {
        //this prevents the page from default refreshing
        e.preventDefault();
        axios.get(`/delete/${id}`);
        //this fires the get all api so when index renders, the new post appears without hitting refresh
        getTees();
        history.push('/');
    };

    return ( 
        <div className="container">
            <Button variant="primary" onClick={handleDelete}>Click To Delete Tee</Button>
        </div>
     );
};
 
export default DeleteTee;