import React from 'react';

import Ticket from '../Ticket';

import classes from'./Tickets.module.scss';


export default function Tickets() {
  return (
    <div className={classes.tickets}>
      <Ticket />
      <Ticket />
      <Ticket />

    </div>
  );
}
