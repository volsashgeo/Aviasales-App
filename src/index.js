import React from 'react';
import ReactDOM from 'react-dom/client';
import { Offline } from 'react-detect-offline';
import { Alert } from 'antd';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Offline>
        <Alert
          message="Возникла ошибка, попробуйте перезагрузить страницу"
          description="Восстановите подключение к сети"
          type="error"
          closable
          showIcon="true"
          className="alert-fontsize"
        />
      </Offline>
      <App />
    </Provider>
  </React.StrictMode>
);
