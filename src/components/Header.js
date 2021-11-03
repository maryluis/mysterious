import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { actionLogout } from '../redux';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  // const state = useSelector(store => store);
  const isLogin = useSelector(store => store.login.isLogin);
  function handleClick() {
    if (isLogin) {
      dispatch(actionLogout());
      if (location.pathname === '/profile') {
        history.push('/login');
      }
    } else {
      history.push('/login');
    }
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">{isLogin ? 'Hey, bro' : 'Hey, Guest'}</span>
        <Link className="nav-link" to="/profile">
          {isLogin && <span>Profile</span>}
        </Link>
        <Link className="nav-link" to="/news">
          <span>News</span>
        </Link>
        <button onClick={handleClick} type="button" className="btn btn-dark">{isLogin ? 'Logout' : 'Login'}</button>
      </nav>
    </header>
  );
};

export default Header;
