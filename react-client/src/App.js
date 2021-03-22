import { BrowserRouter as Router, Route, Link, Switch, useParams } from "react-router-dom";
// import * as ReactBootstrap from 'react-bootstrap';
import NavBar from './components/NavBar';
import TeeList from './components/TeeList';
import CreateTee from './components/CreateTee';
import DeleteTee from './components/DeleteTee';
import UpdateTee from './components/UpdateTee';

function App() {
  
  return (
    <div>
      <NavBar />
    <Switch>
      <Route exact path="/" component={TeeList} />
      <Route path="/create" component={CreateTee} />
      <Route exact path="/update/:id" component={UpdateTee} />
      <Route path="/delete" component={DeleteTee} />
    </Switch>
    </div>
  );
}

export default App;
