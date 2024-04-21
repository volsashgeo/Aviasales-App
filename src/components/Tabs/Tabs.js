import React from 'react';

import classes from './Tabs.module.scss';

export default function Tabs() {
  return (
    <div className={classes.tabs}>
      <div className={[classes.tab,classes.active].join(" ")}>САМЫЙ ДЕШЕВЫЙ</div>
      <div className={classes.tab}>САМЫЙ БЫСТРЫЙ</div>
      <div className={classes.tab}>ОПТИМАЛЬНЫЙ</div>
    </div>
  );
}
