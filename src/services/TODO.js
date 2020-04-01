const fetch = require('node-fetch');
const ServerUrl = 'http://localhost:3001';

function getTODO () {
  return fetch(`${ServerUrl}/TODO`)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      return data;
    });
}

function AddTODO (TODO) {
  return fetch(`${ServerUrl}/TODO`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(TODO)
  });
}

function deleteTODO (TODOid) {
  return fetch(`${ServerUrl}/TODO/${TODOid}`, {
    method: 'DELETE'
  });
}

export { getTODO, AddTODO, deleteTODO };
