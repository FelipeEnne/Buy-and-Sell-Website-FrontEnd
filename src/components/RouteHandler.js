import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../helpers/authHandler';

export default ({ children, ...rest }) => {
  const logged = isLogged();
  // eslint-disable-next-line no-unneeded-ternary
  const autorized = (rest.private && !logged) ? false : true;

  return (
  <Route
    {...rest}
    render={() => (autorized ? children : <Redirect to='/signin' />)}
  />
  );
};
