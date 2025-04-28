import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Import des pages que je créé
import Header from './componnent/header';
import Equipe from './pages/Equipe';
import Chiffres from './pages/Chiffres';
import ForumPage from './pages/ForumPage';
import AuthPage from './pages/AuthPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/equipe' element={<Equipe/>}/>
        <Route path='/chiffres' element={<Chiffres/>}/>
        <Route path='/forumPage' element={<ForumPage/>}/>
        <Route path='/authentification' element={<AuthPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
