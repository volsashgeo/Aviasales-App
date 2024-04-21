import React from 'react';

import S7Logo from './S7 Logo.svg';
import classes from  './Ticket.module.scss';

export default function Ticket() {
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__price}>
        <p>13400 p</p>
        <img src={S7Logo} alt="aircompany-logo" />
      </div>
      <div className={classes.ticket__flightTo}>
        <div className={[classes.ticket__interval,classes['ticket-item']].join(" ")}>
          <p className={classes.ticket__direction}>MOW – HKT</p>
          <p className={classes.ticket__date}>10:45 – 08:00</p>
        </div>

        <div className= {[classes["flight-time"],classes['ticket-item']].join(" ")} >
          <p className={classes.ticket__label}>В ПУТИ</p>
          <p className={classes.ticket__time }>21ч 15м</p>
        </div>

        <div className={[classes.ticket__transfer,classes['ticket-item']].join(" ")}>
          <p className={classes['ticket__transfer-quantity']}>2 ПЕРЕСАДКИ</p>
          <p className={classes['ticket__transfer-place']}>HKG, JNB</p>
        </div>
      </div>

      <div className={classes.ticket__flightFrom}>
        <div className={[classes.ticket__interval,classes['ticket-item']].join(" ")}>
          <p className={classes.ticket__direction}>MOW – HKT</p>
          <p className={classes.ticket__date}>10:45 – 08:00</p>
        </div>

        <div className= {[classes["flight-time"],classes['ticket-item']].join(" ")} >
          <p className={classes.ticket__label}>В ПУТИ</p>
          <p className={classes.ticket__time}>21ч 15м</p>
        </div>

        <div className={[classes.ticket__transfer,classes['ticket-item']].join(" ")}>
          <p className={classes['ticket__transfer-quantity']}>2 ПЕРЕСАДКИ</p>
          <p className={classes['ticket__transfer-place'] }>HKG, JNB</p>
        </div>
      </div>
    </div>
  );
}
