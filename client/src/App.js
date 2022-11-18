import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandigPage.jsx';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path={'/'} component={Nav} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
