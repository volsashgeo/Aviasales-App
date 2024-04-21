import React from 'react';

// import {Chekbox} from 'antd'
import classes from './Filters.module.scss';

export default function Filters() {
  return (
    <div className={classes.aviasales__filters}>
      <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <label>
        <input type="checkbox" className={classes.aviasales__filter} />
        Все
      </label>
      <label>
        <input type="checkbox" className={classes.aviasales__filter} />
        Без пересадок
      </label>
      <label>
        <input type="checkbox" className={classes.aviasales__filter} />1 пересадка
      </label>
      <label>
        <input type="checkbox" className={classes.aviasales__filter} />2 пересадки
      </label>
      <label>
        <input type="checkbox" className={classes.aviasales__filter} />3 пересадки
      </label>
    </div>
  );
}
