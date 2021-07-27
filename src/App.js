import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from './SideBar';
import Chat from './Chat';
import Login from './Login';
import './App.css';

function App() {

  const[user, setUser] = useState(null);

  return (
    <div className="App">
      <div className="app__body">
        {!user ? (
          <Login />
        ):(
        <Router>
          <SideBar/>
          <Switch>
            <Route path="/rooms/:roomId"><Chat /></Route>
            <Route path="/" exact><Chat /></Route>
          </Switch>
        </Router>
        )}
        
        
      </div>
    </div>
  );
}

export default App;
