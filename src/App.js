import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './test.scss';
import Header from './components/header';
import Footer from './components/footer';
import SubPage1 from './pages/subpage1';
import SubPage2 from './pages/subpage2';

function App() {
  return (
    <div className="App">
          <Header />

          <div className="container">
            <Routes>
              <Route exact  path="/" element={<SubPage1 />} />
              <Route path="/hehe" element={<SubPage1 />} />
              <Route path="/haha" element={<SubPage2 />} />
            </Routes>
          </div>

          <Footer />
    </div>
  );
}

export default App;
