// import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';
import TeeList from './components/TeeList';
import CreateTee from './components/CreateTee';
import DeleteTee from './components/DeleteTee';
import UpdateTee from './components/UpdateTee';

function App() {
  return (
    <div>
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
      <Link to="/delete">
      <ReactBootstrap.Nav.Link href="#delete">Delete Tee</ReactBootstrap.Nav.Link>
      </Link>
    </ReactBootstrap.Nav>
    <ReactBootstrap.Form inline>
      <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
    </ReactBootstrap.Form>
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>
    <Switch>
      <Route exact path="/" component={TeeList} />
      <Route path="/create" component={CreateTee} />
      <Route path="/update" component={UpdateTee} />
      <Route path="/delete" component={DeleteTee} />
    </Switch>
    </div>
  );
}

export default App;
