import React from 'react';

import classes from './Ticket.module.scss';

export default function Ticket(props) {
  const { price, carrier, segments } = props;

  const companyLogo = `//pics.avs.io/99/36/${carrier}.png`;

  function getHoursAndMinutes(str) {
    const fromHours = new Date(str).getUTCHours();
    const fromMinutes = new Date(str).getUTCMinutes();

    return `${fromHours}:${fromMinutes}`;
  }

  function getEndOfFlightDate(startOfFlightDate, duration) {
    const startDate = new Date(startOfFlightDate).getTime();
    return startDate + duration * 60 * 1000;
  }

  const fromEndOfFlightDate = getEndOfFlightDate(segments[0].date, segments[0].duration);
  const fromStartDate = getHoursAndMinutes(segments[0].date);
  const fromEndDate = getHoursAndMinutes(fromEndOfFlightDate);

  const toEndOfFlightDate = getEndOfFlightDate(segments[1].date, segments[1].duration);
  const toStartDate = getHoursAndMinutes(segments[1].date);
  const toEndDate = getHoursAndMinutes(toEndOfFlightDate);

  function flightTime(duration) {
    const hours = parseInt(duration / 60, 10);
    const min = duration % 60;

    return `${hours}ч ${min}м`;
  }

  const flightTimeFrom = flightTime(segments[0].duration);
  const flightTimeTo = flightTime(segments[1].duration);

  function getTransferCounts(arr) {
    const countsOfTransfers = arr.length;
    let transferCounts;

    if (countsOfTransfers === 1) {
      transferCounts = '1 ПЕРЕСАДКА';
    } else if (countsOfTransfers === 0) {
      transferCounts = 'БЕЗ ПЕРЕСАДОК';
    } else if (countsOfTransfers === 2 || countsOfTransfers === 3 || countsOfTransfers === 4) {
      transferCounts = `${countsOfTransfers} ПЕРЕСАДКИ`;
    } else {
      transferCounts = `${countsOfTransfers} ПЕРЕСАДОК`;
    }
    return transferCounts;
  }

  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__price}>
        <p>{price} Р</p>
        <img src={companyLogo} alt="aircompany-logo" />
      </div>
      <div className={classes.ticket__flightTo}>
        <div className={[classes.ticket__interval, classes['ticket-item']].join(' ')}>
          <p className={classes.ticket__direction}>
            {segments[0].origin} – {segments[0].destination}
          </p>
          <p className={classes.ticket__date}>
            {fromStartDate} – {fromEndDate}
          </p>
        </div>

        <div className={[classes['flight-time'], classes['ticket-item']].join(' ')}>
          <p className={classes.ticket__label}>В ПУТИ</p>
          <p className={classes.ticket__time}>{flightTimeFrom}</p>
        </div>

        <div className={[classes.ticket__transfer, classes['ticket-item']].join(' ')}>
          <p className={classes['ticket__transfer-quantity']}>{getTransferCounts(segments[0].stops)}</p>
          <p className={classes['ticket__transfer-place']}>{segments[0].stops.join(',')}</p>
        </div>
      </div>

      <div className={classes.ticket__flightFrom}>
        <div className={[classes.ticket__interval, classes['ticket-item']].join(' ')}>
          <p className={classes.ticket__direction}>
            {segments[1].origin} – {segments[1].destination}
          </p>
          <p className={classes.ticket__date}>
            {toStartDate} – {toEndDate}
          </p>
        </div>

        <div className={[classes['flight-time'], classes['ticket-item']].join(' ')}>
          <p className={classes.ticket__label}>В ПУТИ</p>
          <p className={classes.ticket__time}>{flightTimeTo}</p>
        </div>

        <div className={[classes.ticket__transfer, classes['ticket-item']].join(' ')}>
          <p className={classes['ticket__transfer-quantity']}>{getTransferCounts(segments[1].stops)}</p>
          <p className={classes['ticket__transfer-place']}>{segments[1].stops.join(',')}</p>
        </div>
      </div>
    </div>
  );
}
