
import React from 'react';
import { Route, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <ul>
        <li><Link to="/hehe">메뉴1입니다.</Link></li>
        <li><Link to="/haha">메뉴2</Link></li>
      </ul>
    </header>
  );
}

export default Header;
