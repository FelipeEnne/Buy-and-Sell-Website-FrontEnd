import Cookies from 'js-cookie';

const isLogged = () => {
  const token = Cookies.get('token');
  return !!(token);
};


export default isLogged;