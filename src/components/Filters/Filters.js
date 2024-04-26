import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { allCheckboxesChecked,noTransferChecked,oneTransferChecked,twoTransferChecked,threeTransferChecked } from '../../store/filterSlice';

import classes from './Filters.module.scss';

export default function Filters() {
  // const [filterArr, setFilterArr] = React.useState([false, false, false, false, false]);

  const dispatch = useDispatch();

  const item = useSelector((state) => state.filter.filter);

  // console.log('item', item);
  // console.log('state', state);

  // const allCheckboxesChecked = () => {

  //   setFilterArr((prevFilterArr) => {
  //     const newArr = [...prevFilterArr];

  //     if(prevFilterArr[0]) {
  //       newArr[1] = false;
  //       newArr[2] = false;
  //       newArr[3] = false;
  //       newArr[4] = false;

  //     }else {
  //       newArr[1] = true;
  //       newArr[2] = true;
  //       newArr[3] = true;
  //       newArr[4] = true;
  //     }
  //     newArr[0] = !prevFilterArr[0];
  //     return newArr;
  //   });
  // };

  // const noTransferChecked = () => {
  //   setFilterArr((prevFilterArr) => {
  //     const newArr = [...prevFilterArr];

  //     if (!prevFilterArr[1] && prevFilterArr[2] && prevFilterArr[3] && prevFilterArr[4]) {
  //       prevFilterArr[0] = true;
  //     }

  //     if (prevFilterArr[0] && prevFilterArr[1]) {
  //       newArr[0] = !prevFilterArr[0];
  //       newArr[1] = !prevFilterArr[1];
  //     } else {
  //       newArr[1] = !prevFilterArr[1];
  //     }
  //     return newArr;
  //   });
  // };

  // const oneTransferChecked = () => {
  //   setFilterArr((prevFilterArr) => {
  //     const newArr = [...prevFilterArr];

  //     if (prevFilterArr[1] && !prevFilterArr[2] && prevFilterArr[3] && prevFilterArr[4]) {
  //       prevFilterArr[0] = true;
  //     }

  //     if (prevFilterArr[0] && prevFilterArr[2]) {
  //       newArr[0] = !prevFilterArr[0];
  //       newArr[2] = !prevFilterArr[2];
  //     } else {
  //       newArr[2] = !prevFilterArr[2];
  //     }
  //     return newArr;
  //   });
  // };

  // const twoTransferChecked = () => {
  //   setFilterArr((prevFilterArr) => {
  //     const newArr = [...prevFilterArr];

  //     if (prevFilterArr[1] && prevFilterArr[2] && !prevFilterArr[3] && prevFilterArr[4]) {
  //       prevFilterArr[0] = true;
  //     }

  //     if (prevFilterArr[0] && prevFilterArr[3]) {
  //       newArr[0] = !prevFilterArr[0];
  //       newArr[3] = !prevFilterArr[3];
  //     } else {
  //       newArr[3] = !prevFilterArr[3];
  //     }
  //     return newArr;
  //   });
  // };

  // const threeTransferChecked = () => {
  //   setFilterArr((prevFilterArr) => {
  //     const newArr = [...prevFilterArr];

  //     if (prevFilterArr[1] && prevFilterArr[2] && prevFilterArr[3] && !prevFilterArr[4]) {
  //       prevFilterArr[0] = true;
  //     }

  //     if (prevFilterArr[0] && prevFilterArr[4]) {
  //       newArr[0] = !prevFilterArr[0];
  //       newArr[4] = !prevFilterArr[4];
  //     } else {
  //       newArr[4] = !prevFilterArr[4];
  //     }
  //     return newArr;
  //   });
  // };

  return (
    <div className={classes.aviasales__filters}>
      <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
      <label>
        <input
          type="checkbox"
          className={classes.aviasales__filter}
          checked={item[0]}
          // onChange={allCheckboxesChecked}
          onChange={() => dispatch(allCheckboxesChecked(item))}
        />
        Все
      </label>
      <label>
        <input
          type="checkbox"
          className={classes.aviasales__filter}
          // onChange={noTransferChecked}
          onChange={() => dispatch(noTransferChecked(item))}
          checked={item[1]}
        />
        Без пересадок
      </label>
      <label>
        <input
          type="checkbox"
          className={classes.aviasales__filter}
          checked={item[2]}
          // onChange={oneTransferChecked}
          onChange={() => dispatch(oneTransferChecked(item))}

        />
        1 пересадка
      </label>
      <label>
        <input
          type="checkbox"
          className={classes.aviasales__filter}
          checked={item[3]}
          // onChange={twoTransferChecked}
          onChange={() => dispatch(twoTransferChecked(item))}

        />
        2 пересадки
      </label>
      <label>
        <input
          type="checkbox"
          className={classes.aviasales__filter}
          checked={item[4]}
          // onChange={threeTransferChecked}
          onChange={() => dispatch(threeTransferChecked(item))}

        />
        3 пересадки
      </label>
    </div>
  );
}
