import axios from 'axios';
import { getEnv } from './../../helper/helpers';

class Request {
  constructor() {
    this.URL = getEnv('API_URL');

    this.Axios = axios.create({
      baseURL: `${this.URL}`
    });
  }

  async get(url, token) {
    return await this.Axios.get(url, {
      headers: this.getHeader(token)
    });
  }

  getHeader(token) {
    return { 'Authorization': `Bearer ${token}` };
  }

  async post(url, data, token) {
    return await this.Axios.post(url, data, {
      headers: this.getHeader(token)
    });
  }

  async put(url, data, token) {
    return await this.Axios.put(url, data, {
      headers: this.getHeader(token)
    });
  }

  async delete(url, token) {
    return await this.Axios.delete(url, {
      headers: this.getHeader(token)
    });
  }

  async postFormData(url, data) {
    return await this.Axios.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}

export default new Request();
