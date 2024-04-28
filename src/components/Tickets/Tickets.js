import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTickets } from '../../store/ticketsSlice';
import Ticket from '../Ticket';

import classes from './Tickets.module.scss';

export default function Tickets() {
  const [addFiveTickets, setAddFiveTickets] = useState(5);

  const dispatch = useDispatch();
  const stop = useSelector((state) => state.tickets.stop);

  const tickets = useSelector((state) => state.tickets.tickets);
  const filters = useSelector((state) => state.filter.filter);
  const tabs = useSelector((state) => state.sort.sort);

  useEffect(() => {
    if (!stop) {
      dispatch(fetchTickets());
    }
  }, [tickets, stop, dispatch]);

  const filteredTicketsList = [];

  function addNotIncludedObjFromArrToTargetArr(arr, targetArr) {
    const stringifiedTargetArr = [];

    for (let i = 0; i < targetArr.length; i++) {
      stringifiedTargetArr[i] = JSON.stringify(targetArr[i]);
    }

    for (const item of arr) {
      if (!stringifiedTargetArr.includes(JSON.stringify(item))) {
        targetArr.push(item);
      }
    }

    return targetArr;
  }

  if (filters[1]) {
    const arr = tickets.filter((item) => item.segments[0].stops.length === 0 || item.segments[1].stops.length === 0);
    addNotIncludedObjFromArrToTargetArr(arr, filteredTicketsList);
  }

  if (filters[2]) {
    const arr = tickets.filter((item) => item.segments[0].stops.length === 1 || item.segments[1].stops.length === 1);
    addNotIncludedObjFromArrToTargetArr(arr, filteredTicketsList);
  }

  if (filters[3]) {
    const arr = tickets.filter((item) => item.segments[0].stops.length === 2 || item.segments[1].stops.length === 2);
    addNotIncludedObjFromArrToTargetArr(arr, filteredTicketsList);
  }

  if (filters[4]) {
    const arr = tickets.filter((item) => item.segments[0].stops.length === 3 || item.segments[1].stops.length === 3);
    addNotIncludedObjFromArrToTargetArr(arr, filteredTicketsList);
  }

  let nextId = 0;

  let sortedAndFilteredTicketsList = null;

  if (tabs[0]) {
    sortedAndFilteredTicketsList = filteredTicketsList.sort((a, b) => a.price - b.price);
  }

  if (tabs[1]) {
    sortedAndFilteredTicketsList = filteredTicketsList.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
  }

  const elems = sortedAndFilteredTicketsList
    .slice(0, addFiveTickets)
    .map((ticket) => <Ticket key={nextId++} {...ticket} />);

  const renderList = sortedAndFilteredTicketsList.length ? (
    <div className={classes.tickets}>
      {elems}
      <button className={classes.btn__next_tickets} onClick={() => setAddFiveTickets((s) => s + 5)}>
      Показать еще 5 билетов!
      </button>
    </div>
  ) : (
    <div className={classes.no_tickets}>
      <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
    </div>
  );
  return <div>{renderList}</div>;
}
