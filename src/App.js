import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
//import 'swiper/css';
import './resources/css/common.scss';
import './resources/js/common.js';
import Header from './components/header';
import Footer from './components/footer';
import PageMain from './pages/main';
import SubPage1 from './pages/subpage1';
import SubPage2 from './pages/subpage2';
import SubPage3 from './pages/subpage3';

// function Test() {
//   return (
//     <>
//       <p>텍스트입니다.</p>
//     </>
//   );
// }

function App() {
  return (
    <div className="wrap">
          <Header />
      
          <div className="container">
            <Routes>
              <Route exact path="/" element={<PageMain />} />
              <Route exact path="/main" element={<PageMain />} />
              <Route exact path="/hehe" element={<SubPage1 />} />
              <Route exact path="/haha" element={<SubPage2 />} />
              <Route exact path="/hihi" element={<SubPage3 />} />
            </Routes>
          </div>

          <Footer />
    </div>
  );
}

export default App;
