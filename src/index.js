import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Recipes = lazy(() => import('./components/Recipes'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/recipes" element={<Recipes />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));