import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import AboutView from './components/AboutView';
import PortfolioView from './components/PortfolioView';
import Project from './components/Project';
import Contact from './components/Contact';
import Blog from './components/Blog';
import { HomeView } from './components/HomeView';
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/projects" element={<PortfolioView />} />
        <Route path="/projects/:projectID" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<HomeView />} />
        <Route path="/contact" element={<Contact />} />

      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

