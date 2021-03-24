import { Route, Switch } from "react-router-dom";
// import * as ReactBootstrap from 'react-bootstrap';
import NavBar from './components/NavBar';
import TeeList from './components/TeeList';
import CreateTee from './components/CreateTee';
import UpdateTee from './components/UpdateTee';
import Details from "./components/Details";
import Signup from './components/Signup';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from "./components/UpdateProfile";

function App() {
  
  return (
    <div>
      <NavBar />
    <Switch>
      <AuthProvider>
      <Route exact path="/" component={TeeList} />
      <PrivateRoute path="/create" component={CreateTee} />
      <PrivateRoute path="/update/:id" component={UpdateTee} />
      <PrivateRoute path="/details/:id" component={Details} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/update-profile" component={UpdateProfile} />
      </AuthProvider>
    </Switch>
    </div>
  );
}

export default App;
