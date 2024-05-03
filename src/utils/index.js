export function getEndOfFlightDate(startOfFlightDate, duration) {
  const startDate = new Date(startOfFlightDate).getTime();
  return startDate + duration * 60 * 1000;
}

export function getHoursAndMinutes(str) {
  const fromHours = new Date(str).getUTCHours();
  const fromMinutes = new Date(str).getUTCMinutes();

  return `${fromHours}:${fromMinutes}`;
}

export function flightTime(duration) {
  const hours = parseInt(duration / 60, 10);
  const min = duration % 60;

  return `${hours}ч ${min}м`;
}

export function getTransferCounts(arr) {
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

export function addNotIncludedObjFromArrToTargetArr(arr, targetArr) {
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
