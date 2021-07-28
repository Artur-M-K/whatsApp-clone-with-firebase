import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './SideBar';
import Chat from './Chat';
import Login from './Login';
import './App.css';
import { useStateValue} from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="App">
      {!user ? (
          <Login />
      ):(
      <div className="app__body">
        <Router>
          <SideBar/>
          <Switch>
            <Route path="/rooms/:roomId"><Chat /></Route>
            <Route path="/" exact><Chat /></Route>
          </Switch>
        </Router>
        </div>
        )}
    </div>
  );
}

export default App;
