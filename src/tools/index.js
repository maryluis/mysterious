import { actionPostLogin, actionGetNews, actionGetProfile } from '../redux';

export const CORRECT_EMAIL = 'max@test.com';
export const CORRECT_PASSWORD = '12345';

export const URL_LOGIN = 'https://mysterious-reef-29460.herokuapp.com/api/v1/validate';

export const URL_NEWS = 'https://mysterious-reef-29460.herokuapp.com/api/v1/news';

export const URL_PROFILE = 'https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/1';

export const postLogin = (credentials) => {
  return (dispatch) => {
    fetch(URL_LOGIN, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(credentials),
    }).then((res) => res.json()).then((data) => dispatch(actionPostLogin(data)));
  };
};

export const getNews = () => {
  return (dispatch) => {
    fetch(URL_NEWS).then(res => res.json().then(data => dispatch(actionGetNews(data))));
  };
};

export const getProfile = () => {
  return (dispatch) => {
    fetch(URL_PROFILE).then(res => res.json().then(data => dispatch(actionGetProfile(data))));
  };
};
