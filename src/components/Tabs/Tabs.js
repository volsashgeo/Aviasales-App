import React  from 'react';
import { useSelector,useDispatch} from 'react-redux';

import {cheapest,fastest,optimal} from "../../store/sortSlice"

import classes from './Tabs.module.scss';

export default function Tabs() {

  const dispatch = useDispatch()

  const active = useSelector(state => state.sort.sort)

  // console.log('active',active);

  const tabClasses = [[classes.tab],[classes.tab],[classes.tab]];

  for(let i = 0; i < active.length;i++) {
    if(active[i]) {
      tabClasses[i].push(classes.active)
    }
  }

  return (
    <div className={classes.tabs}>
      <button className={tabClasses[0].join(' ')} onClick={() => dispatch(cheapest(active))}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className={tabClasses[1].join(' ')} onClick={() => dispatch(fastest(active))}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button className={tabClasses[2].join(' ')} onClick={() => dispatch(optimal(active))}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
}
