import React from 'react';
import { Link } from 'react-router-dom';
import HeaderArea from './styled';

import { isLogged } from '../../../helpers/authHandler';

const Header = () => {
  const logged = isLogged();

  return (
  <HeaderArea>
    <div className="container">
      <div className="logo">
        <Link to="/">
            <span className="logoB">B</span>
            <span className="logoE">&</span>
            <span className="logoS">S</span>
        </Link>
      </div>
      <nav>
        <ul>
          {!logged
            && <>
            <li>
              <Link to="/signin">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign</Link>
            </li>
            <li>
              <Link to="/signin" className="button">Post an ad</Link>
            </li>
            </>
          }
          {logged
            && <>
            <li>
              <Link to="/my-accont">My Accont</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="" className="button">Post an ad</Link>
            </li>
            </>
          }
        </ul>
      </nav>
    </div>
  </HeaderArea>
  );
};


export default Header;