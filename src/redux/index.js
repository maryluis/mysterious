import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loginReducer, actionPostLogin, actionLogout } from './loginReducer';
import { newsReducer, actionGetNews } from './newsReducer';
import { profileReducer, actionGetProfile } from './profileReducer';

const store = createStore(combineReducers({
  login: loginReducer,
  news: newsReducer,
  profile: profileReducer,
}), applyMiddleware(thunk));

export { store, loginReducer, actionLogout,
  actionPostLogin, newsReducer, actionGetNews, actionGetProfile };
