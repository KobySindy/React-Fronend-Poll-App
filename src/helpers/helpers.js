export async function getData(page) {
  if (isNaN(page)) return;
  const url = `http://localhost:3000/api/polls?page=${page}`;
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

export async function vote(pollID, optionIndex) {
  const requestOptions = { method: "PUT" };
  const url = `http://localhost:3000/api/poll/${pollID}/vote/${optionIndex}`;
  const data = await fetch(url, requestOptions);
  const json = await data.json();
  if (json.success) {
    return true;
  } else {
    return false;
  }
}

export async function newPoll(poll) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "poll-api-key": "koby-api-key",
    },
    body: JSON.stringify(poll),
  };

  const url = `http://localhost:3000/api/poll/add-poll`;
  const data = await fetch(url, requestOptions);
  const json = await data.json();
  if (json.success) {
    return true;
  } else {
    return false;
  }
}
