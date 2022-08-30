import axios from 'axios';

axios.defaults.baseURL = 'https://630b6b40ed18e82516530a20.mockapi.io/contacts';

export async function fetchContacts() {
  const { data } = await axios.get('/');
  return data;
}
