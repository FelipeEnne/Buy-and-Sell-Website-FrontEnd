import React from 'react';
import { Link } from 'react-router-dom';
import HeaderArea from './styled';

const Header = () => (
  <HeaderArea>
    <div className="container">
      <div className="logo">
        <Link to="/">
            <span className="logoB">B</span>
            <span className="logoE">&</span>
            <span className="logoS">S</span>
        </Link>
      </div>
    </div>
  </HeaderArea>
);


export default Header;