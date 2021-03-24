import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from "react-router-dom";

//same as signup page, just take out password confirmation stuff
const ForgotPassword = () => {
    //this is like useState
    const emailRef = useRef();
    // const passwordRef = useRef();
    // const passwordConfirmRef = useRef();
    //currentUser is to test if user is logged in (look in form above error - uncomment currentUser.email
    const { resetPassword } = useAuth();
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const [ message, setMessage ] = useState();

    async function handleSubmit(e){

        e.preventDefault();

        try{
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions');
        } catch(error) {
            setError('Failed to reset password', error);
        }
        setLoading(false);
    }
    return(
        <>
        <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh"}}
        >
            <div className="w-100" style={{ maxWidth: "400px"}}>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Reset Password</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        {/* <Form.Group id="email">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group> */}
                        {/* <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group> */}
                        <Button disabled={loading} className="w-100" type="submit">Reset Password</Button>
                </Form>
                <div className="w-100 text-center mt-3">
                <Link to="/login">Login</Link>
                </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Need An Account? <Link to="/signup">Sign Up</Link>
        </div>
        </div>
        </Container>
        </>
    )
}
 
export default ForgotPassword;