let searchId = null;

async function getSearchIdObj() {
  const url = 'https://aviasales-test-api.kata.academy/search';
  const response = await fetch(url);

  const searchIdObj = await response.json();

  return searchIdObj.searchId;
}

async function getTickets() {
  let ticketsObj = null;
  try {
    if (!searchId) {
      searchId = await getSearchIdObj();
    }
    const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`;
    const response = await fetch(url);

    if (!response.ok) {

      if(Number(response.status) !== 500) {
        throw new Error(`Could not fetch ${url}, received ${response.status}`);
      }
    }

    ticketsObj = await response.json();
  } catch(e) {
    getTickets();
  }
  return ticketsObj;
}

export { getSearchIdObj, getTickets };
