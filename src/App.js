import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Header, Main } from './components';
import { store } from './redux';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory}>
        <Header />
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
