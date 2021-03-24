import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from "react-router-dom";
// import { AuthProvider } from '../contexts/AuthContext';

const UpdateProfile = () => {

    //this is like useState
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    //currentUser is to test if user is logged in (look in form above error - uncomment currentUser.email
    const { currentUser, updatePassword, updateEmail } = useAuth();
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match!");
        }
        
        const promises = [];
        setLoading(true);
        setError("");
        if(emailRef.current.value !== currentUser.email){
            promises.push(updateEmail(emailRef.current.value));
        }
        if(passwordRef.current.value){
                    promises.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promises).then(() => {
            history.push('/');
        }).catch(() => {
            setError('Failed to Update Account');
        }).finally(() => {
            setLoading(false);
        });

    }

    return(
        <>
        <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh"}}
        >
            <div className="w-100" style={{ maxWidth: "400px"}}>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Update Profile</h2>
                {/* {currentUser.email} <--use this to test if user logged in state is set */}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required
                        defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} 
                        placeholder="Leave Blank To Keep The Same Password"/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} 
                        placeholder="Leave Blank To Keep The Same Password"/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Update</Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Link to="/">Cancel</Link>
        </div>
        </div>
        </Container>
        </>
    )
};

export default UpdateProfile;