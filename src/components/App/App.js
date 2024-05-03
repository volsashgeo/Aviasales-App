import React from 'react';
import { Spin, Alert } from 'antd';
import { useSelector } from 'react-redux';

import Filters from '../Filters';
import Tabs from '../Tabs';
import Tickets from '../Tickets';
import { appSelectors } from '../../store';

import aviasalesLogo from './Logo.svg';
import classes from './App.module.scss';

export default function App() {
  const error = useSelector(appSelectors.error);
  const stop = useSelector(appSelectors.stop);

  const logo = <img src={aviasalesLogo} alt="logo" className={classes.aviasales__logo} />;

  const errorMessage = error ? (
    <Alert
      message="Возникла ошибка, попробуйте перезагрузить страницу"
      description="Error Description"
      type="error"
      closable
      showIcon="true"
    />
  ) : null;

  return (
    <div className={classes.aviasales}>
      {logo}
      {errorMessage}
      <div className={classes.aviasales__columns}>
        <Filters />
        <div className={classes.main}>
          <Tabs />
          <Spin spinning={!stop} className={classes.spin} />
          <Tickets />
        </div>
      </div>
    </div>
  );
}
