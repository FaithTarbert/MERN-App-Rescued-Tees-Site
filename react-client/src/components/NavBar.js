import React, { useState } from 'react';
import { Link } from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';
import { Card, Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";

const NavBar = () => {
    const [error, setError] = useState("");
    
    function handleLogout(){
      //
    }

    return ( 
        <ReactBootstrap.Navbar bg="primary" expand="sm">
  <ReactBootstrap.Navbar.Brand href="#home">Rescued Tees</ReactBootstrap.Navbar.Brand>
  <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
    <ReactBootstrap.Nav className="mr-auto">
      <Link to="/">
      <ReactBootstrap.Nav.Link href="#home">View All Tees</ReactBootstrap.Nav.Link>
      </Link>
      <Link to="/create">
      <ReactBootstrap.Nav.Link href="#create">Create Tee</ReactBootstrap.Nav.Link>
      </Link>
      <Link to="/update">
      <ReactBootstrap.Nav.Link href="#update">Update Tee</ReactBootstrap.Nav.Link>
      </Link>
      <Link to="/signup">
      <ReactBootstrap.Nav.Link href="#signup">Signup</ReactBootstrap.Nav.Link>
      </Link>
      <Link to="/login">
      <ReactBootstrap.Nav.Link href="#login">Login</ReactBootstrap.Nav.Link>
      </Link>
      <ReactBootstrap.Nav.Link onClick={handleLogout}>Logout</ReactBootstrap.Nav.Link>
      <Link to="/profile">
      <ReactBootstrap.Nav.Link href="#profile">Profile</ReactBootstrap.Nav.Link>
      </Link>
      
      <Card><Card.Body>{error && <Alert variant="danger">{error}</Alert>}</Card.Body></Card>

    </ReactBootstrap.Nav>
    <ReactBootstrap.Form inline>
      <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootstrap.Button variant="outline-light">Search</ReactBootstrap.Button>
    </ReactBootstrap.Form>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
);
}
 
export default NavBar;