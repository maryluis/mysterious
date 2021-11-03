import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../tools';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector(state => state.login.isLogin);
  useEffect(() => {
    if (isLogin) {
      dispatch(getProfile());
    } else {
      history.push('/login');
    }
  }, []);
  const { city = null, languages = [], social = [] } = useSelector(state => state.profile);
  const icons = {
    vk: 'https://www.facebook.com/favicon.ico',
    youtube: 'https://www.youtube.com/favicon.ico',
    web: 'https://ru.wikipedia.org/favicon.ico',
    twitch: 'https://www.instagram.com/favicon.ico',
    twitter: 'https://twitter.com/favicon.ico',
    telegram: 'https://web.telegram.org/favicon.ico',

  };
  return (
    <div className="jumbotron">
      <h4>Привет, юзер</h4>
      <div className="container">
        <img width="100" height="100" src="https://chto-eto-takoe.ru/uryaimg/32574385521dd1847f7d1e5b940491ef.jpg" alt="profile" />
      </div>
      <div>
        <h5>{`Город: ${city}`}</h5>
        <h5>{'Языки: '}</h5>
        <ul>
          {languages.map((item, i) => <li key={item}>{languages.length === i + 1 ? ` ${item}` : `${item}, `}</li>)}
        </ul>
        <h5>{'Социальные сети: '}</h5>
        <ul>
          {social.map(item => (
            <li key={item.label}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <img width="30" height="30" className="bi bi-youtube" alt={item.label} src={icons[item.label]} /> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ProfilePage;
