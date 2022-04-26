import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export {BASE_URL, getRessources, getRessource, updateRessource, createRessource, deleteRessource};

function getRessources(name) {
  const url = `${BASE_URL}/${name}`;
  return axios.get(url).then((response) => response.data);
}

function getRessource(name, id) {
  const url = `${BASE_URL}/${name}/${id}`;
  return axios.get(url).then((response) => response.data);
}

function updateRessource(name, id, data) {
    const url = `${BASE_URL}/${name}/${id}`;
    let token= "";
    return axios.put(url, data, { headers: { Authorization: `${token}` }}).then((response) => response.data);
}
function createRessource(name, data) {
    const url = `${BASE_URL}/${name}`;
    let token= "";
    return axios.post(url, data, { headers: { Authorization: `${token}` }}).then((response) => response.data);
}
function deleteRessource(name, id) {
    const url = `${BASE_URL}/${name}/${id}`;
    let token= "";
    return axios.delete(url, { headers: { Authorization: `${token}` }}).then((response) => response.data);
}



