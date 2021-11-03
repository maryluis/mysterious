export const POST_LOGIN = 'POST_LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginReducer = (store = {}, action) => {
  if (action.type === POST_LOGIN) {
    if (action.payload.status === 'err') {
      return ({ isLogin: false, ...action.payload });
    }
    localStorage.login = JSON.stringify({ isLogin: true, ...action.payload.data });
    return ({ isLogin: true, ...action.payload.data });
  }
  if (action.type === LOGOUT) {
    localStorage.removeItem('login');
    return {};
  }
  if (localStorage.login) {
    return JSON.parse(localStorage.login);
  }
  return store;
};

export const actionPostLogin = (payload) => {
  return (
    { type: POST_LOGIN, payload }
  );
};
export const actionLogout = () => {
  return ({ type: LOGOUT });
};
