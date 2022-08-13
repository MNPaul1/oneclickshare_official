import './App.css';
import React from 'react';
import Analytics from './components/Analytics';
import Post from './components/Post';
import Logout from './components/Logout';



import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import SignIn from './components/singin';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element={<SignIn />} />
        <Route exact path='/Dashboard' element={<Dashboard />} />
        <Route exact path='/Analytics' element={<Analytics />} />
        <Route exact path='/Post' element={<Post />} />
        <Route exact path='/Logout' element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
