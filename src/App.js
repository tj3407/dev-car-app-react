import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SignIn from './components/pages/SignIn';
import Enroll from './components/pages/Enroll';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact={true} component={SignIn} />
        <Route path="/register" exact={true} component={Enroll} />
      </div>
    </Router>
  );
}

export default App;
