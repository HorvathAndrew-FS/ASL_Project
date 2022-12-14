import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Navigation from './Navigation'
import Home from './Home'
import Login from './Login'
import Quiz from './Quiz'
import queryString from 'querystring';

const App = () => {
  const [gitToken, setGitToken] = useState('')
  useEffect(() => {
    async function fetchGitToken() {
      const params = queryString.parse(window.location.search.replace(/^\?/, ''))
      localStorage.token = params.token
      const response = await axios('http://localhost:3000/auth/token/', {
        headers: {
          token: localStorage.token
        }
      })
      setGitToken(response.data.token)
    }
    fetchGitToken()
  }, []);

  if (!gitToken) {
    return <Login />;
  }

  return (
    <Router>
      <div className="App">
        <Navigation isLoggedIn={gitToken ? true : false} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/quizzes/:id' element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
