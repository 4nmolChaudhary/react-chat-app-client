import React from 'react';
import './App.css';
import './styles/Components.css'
import './styles/ChatRoom.css'
import Content from './components/Content';
import Chat from './components/Chat'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/chat" exact component={Chat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
