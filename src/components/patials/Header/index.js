import React from 'react';
import { Link } from 'react-router-dom';
import HeaderArea from './styled';

import { isLogged, doLogout } from '../../../helpers/authHandler';

const Header = () => {
  const logged = isLogged();

  const handleLogout = () => {
    doLogout();
    window.location.href = '/';
  };

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
              <button onClick={handleLogout}>Logout</button>
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