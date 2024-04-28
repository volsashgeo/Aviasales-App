import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  allCheckboxesChecked,
  noTransferChecked,
  oneTransferChecked,
  twoTransferChecked,
  threeTransferChecked,
} from '../../store/filterSlice';

import classes from './Filters.module.scss';

export default function Filters() {
  const dispatch = useDispatch();

  const item = useSelector((state) => state.filter.filter);

  return (
    <div className={classes.aviasales__filters}>
      <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <label>
        <input
          type="checkbox"
          className={classes.aviasales__filter}
          checked={item[0]}
          onChange={() => dispatch(allCheckboxesChecked(item))}
        />
        <div className={classes.aviasales__checkbox}></div>
        Все
      </label>
      <label>
        <input
          type="checkbox"
          className={classes.aviasales__filter}
          onChange={() => dispatch(noTransferChecked(item))}
          checked={item[1]}
        />
        <div className={classes.aviasales__checkbox}></div>
        Без пересадок
      </label>
      <label>
        <input
          type="checkbox"
          className={classes.aviasales__filter}
          checked={item[2]}
          onChange={() => dispatch(oneTransferChecked(item))}
        />
        <div className={classes.aviasales__checkbox}></div>1 пересадка
      </label>
      <label>
        <input
          type="checkbox"
          className={classes.aviasales__filter}
          checked={item[3]}
          onChange={() => dispatch(twoTransferChecked(item))}
        />
        <div className={classes.aviasales__checkbox}></div>2 пересадки
      </label>
      <label>
        <input
          type="checkbox"
          className={classes.aviasales__filter}
          checked={item[4]}
          onChange={() => dispatch(threeTransferChecked(item))}
        />
        <div className={classes.aviasales__checkbox}></div>3 пересадки
      </label>
    </div>
  );
}
