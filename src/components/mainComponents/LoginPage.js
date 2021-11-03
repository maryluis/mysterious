import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '../../tools';

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loginData = useSelector(state => state.login);
  const [email, changeEmail] = useState('');
  const [password, changePassword] = useState('');

  useEffect(() => {
    if (loginData.isLogin) history.push('/profile');
    else changePassword('');
  }, [loginData]);

  const handleLogin = useCallback(() => {
    dispatch(postLogin({ email, password }));
  }, [email, password, dispatch]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="form-group login-form jumbotron">
      <h3>Вход на сайт</h3>
      {loginData.isLogin === false && <span className="alert alert-light">{loginData.message}</span>}
      <div className="input-wrapper">
        <label htmlFor="Email">Email</label>
        <input id="Email" className="form-control" onKeyPress={handleKeyPress} type="text" placeholder="your email" onChange={(el) => changeEmail(el.target.value)} />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input id="password" className="form-control" onKeyPress={handleKeyPress} type="password" value={password} placeholder="your password" onChange={(el) => changePassword(el.target.value)} />
      </div>
      <button className="btn btn-dark mb-2" onClick={handleLogin} type="button">Enter</button>
    </div>
  );
};
export default LoginPage;
