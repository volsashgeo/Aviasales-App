let searchId = null;

async function getSearchId() {
  const url = 'https://aviasales-test-api.kata.academy/search';
  const response = await fetch(url);

  const searchIdObj = await response.json();

  return searchIdObj.searchId;
}

let ticketsObj = null;

async function getTickets() {
  try {
    if (!searchId) {
      searchId = await getSearchId();
    }
    const url = `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    ticketsObj = await response.json();
  } catch (err) {
    getTickets();
  }
  return ticketsObj;
}

export { getSearchId, getTickets };
