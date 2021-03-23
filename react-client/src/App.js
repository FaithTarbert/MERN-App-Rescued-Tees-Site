import { Route, Switch } from "react-router-dom";
// import * as ReactBootstrap from 'react-bootstrap';
import NavBar from './components/NavBar';
import TeeList from './components/TeeList';
import CreateTee from './components/CreateTee';
import UpdateTee from './components/UpdateTee';
import Details from "./components/Details";

function App() {
  
  return (
    <div>
      <NavBar />
    <Switch>
      <Route exact path="/" component={TeeList} />
      <Route path="/create" component={CreateTee} />
      <Route exact path="/update/:id" component={UpdateTee} />
      <Route exact path="/details/:id" component={Details} />
    </Switch>
    </div>
  );
}

export default App;
