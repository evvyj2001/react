
import React from 'react';
// import { Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Clock from '../components/Clock';
import '../resources/css/test.scss';

function Header() {
  return (
    <header id="headerArea">
      <div className="header-inner">
        <h1>
          <Link to="/main">로고</Link>
        </h1>
      <div className="nav-wrap">
        <nav id="nav">
          <ul>
            <li>
              <Link to="/hehe" className="on">GSAP</Link>
            </li>
            <li>
              <Link to="/haha">AOS</Link>
            </li>
            <li>
              <Link to="/hihi">메뉴3</Link>
            </li>
            <li>
              <Link to="/cc">참고페이지</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Clock />
    </div>    
  </header>
  );
}

export default Header;
