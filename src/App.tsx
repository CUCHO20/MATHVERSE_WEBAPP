import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Content from './pages/Content';
import Error404 from './pages/Error404';
import Error500 from './pages/Error500';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/content" element={<Content />} />
          <Route path="/error-500" element={<Error500 />} />
          <Route path="/error-404" element={<Error404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;