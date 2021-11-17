import axios from 'axios';

const baseUrl = 'https://619393ead3ae6d0017da868c.mockapi.io/api/v1';
export default class ContactService {
  getAll() {
    return axios.get(`${baseUrl}/contacts`);
  }

  getContact(id) {
    return axios.get(`${baseUrl}/contacts/${id}`);
  }

  deleteContact(id) {
    return axios.delete(`${baseUrl}/contacts/${id}`);
  }

  addContact(user) {
    return axios.post(`${baseUrl}/contacts`, user);
  }

  updateContact(id, user) {
    return axios.put(`${baseUrl}/contacts/${id}`, user);
  }
}
