import React from 'react';

import Filters from '../Filters';
import Tabs from '../Tabs';
import Tickets from '../Tickets';

import classes from './App.module.scss';
import aviasalesLogo from './Logo.svg';

function App() {
  const logo = <img src={aviasalesLogo} alt="logo" className={classes.aviasales__logo} />;
  return (
    <div className={classes.aviasales}>
      {logo}
      <div className={classes.aviasales__columns}>
        <Filters />
        <div className={classes.main}>
          <Tabs />
          <Tickets/>
        </div>
      </div>
    </div>
  );
}

export default App;
