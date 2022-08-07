import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Post from './components/Post';
import Logout from './components/Logout';



import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from './components/Dashboard';




function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/Dashboard' element={<Dashboard />} />
        <Route exact path='/Analytics' element={<Analytics />} />
        <Route exact path='/Post' element={<Post />} />
        <Route exact path='/Settings' element={<Settings />} />
        <Route exact path='/Logout' element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
