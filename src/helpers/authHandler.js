import Cookies from 'js-cookie';

const isLogged = () => {
  const token = Cookies.get('token');
  return !!(token);
};

const doLogin = (token, rememberPassword = false) => {
  if (rememberPassword) {
    Cookies.set('token', token, { expires: 100 });
  } else {
    Cookies.set('token', token);
  }
};

const doLogout = () => {
  Cookies.remove('token');
};

export { isLogged, doLogin, doLogout };