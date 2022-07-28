import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Routes } from 'react-router';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import ProjectsPage from './ProjectsPage';
import { store } from './state';

function App() {
  // return (
  //   <div className="App">
  //     <blockquote cite="Benjamin Franklin">
  //       Tell me and I forget, teach me and I may remember, involve me and I learn.
  //     </blockquote>
  //   </div>
  // );
  return (
    // <div className="container">
    //   <ProjectsPage />
    // </div>
    <Provider store={store}>
    <BrowserRouter>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
  
}

export default App;
